import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitch } from "widgets/ThemeSwitch";
import { LangSwitch } from "widgets/LangSwitch";
import { Button } from "shared/ui/Button/Button";

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
			<Button
				data-testid="sidebar-toggle"
				onClick={onToggle}
				className={cls.collapseBtn}
			>
				{collapsed ? ">" : "<"}
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitch />
				<LangSwitch className={cls.lang} />
			</div>
		</div>
	);
};
