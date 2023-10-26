import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitch.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-normal.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";

interface ThemeSwitchProps {
	className?: string;
}

export const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<button
			onClick={toggleTheme}
			className={classNames(cls.ThemeSwitch, {}, [className])}
		>
			{theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
		</button>
	);
};
