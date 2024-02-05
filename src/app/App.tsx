import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";

const App = () => {
	const { theme } = useTheme();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={classNames("app", {}, [theme])}>
			<Suspense fallback="">
				<Navbar />
				<button onClick={() => setIsOpen(true)}>!!!</button>
				<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
					lorem loremloremloremloremlorem
					loremloremloremloremloremloremloremloremlorem loremlorem loremlorem
					loremlorem
				</Modal>
				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
