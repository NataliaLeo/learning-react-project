import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { memo, useState } from "react";
import { ThemeSwitch } from "widgets/ThemeSwitch";
import { LangSwitch } from "widgets/LangSwitch";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { SidebarItemType, SidebarItemsList } from "widgets/Sidebar/model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
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
				theme={ButtonTheme.BACKGROUND_INVERTED}
				size={ButtonSize.L}
				square
			>
				{collapsed ? ">" : "<"}
			</Button>
			<div className={cls.items}>
				{SidebarItemsList.map((item: SidebarItemType) => (
					<div key={item.path}>
						<SidebarItem item={item} collapsed={collapsed} />
					</div>
				))}
			</div>
			<div className={cls.switchers}>
				<ThemeSwitch />
				<LangSwitch short={collapsed} className={cls.lang} />
			</div>
		</div>
	);
});
