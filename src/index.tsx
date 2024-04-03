import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "app/styles/index.scss";
import "shared/config/i18n/i18n";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { StoreProvider } from "app/providers/StoreProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<StoreProvider>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</StoreProvider>
	</BrowserRouter>
);
{
	/* <React.StrictMode></React.StrictMode> */
}
