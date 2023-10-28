import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitch.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-normal.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitchProps {
	className?: string;
}

export const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<Button
			theme={ThemeButton.CLEAR}
			onClick={toggleTheme}
			className={classNames(cls.ThemeSwitch, {}, [className])}
		>
			{theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
		</Button>
	);
};
