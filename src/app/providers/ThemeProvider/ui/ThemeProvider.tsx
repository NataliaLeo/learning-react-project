import { FC, ReactElement, useMemo, useState } from "react";

import {
	LOCAL_STORAGE_THEME_KEY,
	ThemeContext,
	Theme,
} from "../lib/ThemeContext";

const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
	children: ReactElement;
	initialTheme?: Theme;
}
const ThemeProvider: FC<ThemeProviderProps> = (props) => {
	const { initialTheme, children } = props;
	const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

	const defaultProps = useMemo(
		() => ({
			theme: theme,
			setTheme: setTheme,
		}),
		[theme]
	);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
