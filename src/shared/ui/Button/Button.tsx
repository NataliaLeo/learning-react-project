import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, ReactNode, memo } from "react";
import React from "react"; //нужно для работы storybook

export enum ButtonTheme {
	CLEAR = "clear",
	CLEAR_INVERTED = "clearInverted",
	OUTLINE = "outline",
	OUTLINE_INVERTED = "outlineInverted",
	BACKGROUND = "background",
	BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
	M = "size_m",
	L = "size_l",
	XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
	disabled?: boolean;
	children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		theme = ButtonTheme.OUTLINE,
		square,
		disabled,
		size = ButtonSize.M,
		...otherProps
	} = props;

	const mods: Mods = {
		[cls[theme]]: true,
		[cls.square]: square,
		[cls[size]]: true,
		[cls.disabled]: disabled,
	};

	return (
		<button
			className={classNames(cls.Button, mods, [className])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
});
