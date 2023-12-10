import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitch } from "widgets/ThemeSwitch";
import { LangSwitch } from "widgets/LangSwitch";

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};
	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<button data-testid="sidebar-toggle" onClick={onToggle}>
				toggle
			</button>
			<div className={cls.switchers}>
				<ThemeSwitch />
				<LangSwitch className={cls.lang} />
			</div>
		</div>
	);
};
