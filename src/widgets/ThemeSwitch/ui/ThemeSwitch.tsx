import { classNames } from "shared/lib/classNames/classNames";
// import cls from "./ThemeSwitch.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-normal.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { memo } from "react";

interface ThemeSwitchProps {
	className?: string;
}

export const ThemeSwitch = memo(({ className }: ThemeSwitchProps) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<Button
			theme={ButtonTheme.CLEAR}
			onClick={toggleTheme}
			className={classNames("", {}, [className])}
		>
			{theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
		</Button>
	);
});
