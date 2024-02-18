// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const jsonServer = require("json-server");
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const jwt = require("jsonwebtoken");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, "db.json"));

//Нужно для задержки, имитации реального апи
// server.use(async (req, res, next) => {
// 	await new Promise((res) => {
// 		setTimeout(res, 800);
// 	});
// 	next();
// });

//проверяем авторизован ли пользователь
server.use((req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(403).json({ message: "AUTH ERROR1" });
	}

	next();
});

server.use(jsonServer.defaults());
server.use(router);

server.post("/login", (req, res) => {
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

//запуск сервера
server.listen(8000, () => {
	console.log("server is running on 8000 port");
});
