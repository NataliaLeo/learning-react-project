// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const jsonServer = require("json-server");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, "db.json"), {
	noCors: false,
});

server.use(jsonServer.defaults());

// Нужно для задержки, имитации реального апи
server.use(async (req, res, next) => {
	await new Promise((res) => {
		setTimeout(res, 800);
	});
	next();
});

// проверяем авторизован ли пользователь
server.use((req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(403).json({ message: "AUTH ERROR1" });
	}
	next();
});

server.use(jsonServer.bodyParser);

server.post("/login", (req, res) => {
	console.log("ура запрос прошел", req.body);
	const { username, password } = req.body;
	const db = JSON.parse(
		fs.readFileSync(path.resolve(__dirname, "db.json"), "UTF-8")
	);
	const { users } = db;

	const userFromBd = users.find(
		(user) => user.username === username && user.password === password
	);

	if (userFromBd) {
		return res.json(userFromBd);
	}

	return res.status(403).json({ message: "AUTH ERRORRR" });
});

server.use(router);

//запуск сервера
server.listen(8000, () => {
	console.log("server is running on 8000 port");
});
