import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { memo } from "react";

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink = memo((props: AppLinkProps) => {
	const {
		to,
		className,
		children,
		theme = AppLinkTheme.SECONDARY,
		...otherProps
	} = props;
	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, { theme }, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	);
});
