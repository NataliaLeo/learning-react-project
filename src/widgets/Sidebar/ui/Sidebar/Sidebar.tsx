import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitch } from "widgets/ThemeSwitch";
import { LangSwitch } from "widgets/LangSwitch";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import AboutIcon from "shared/assets/icons/about-20-20.svg";

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
				theme={ButtonTheme.BACKGROUND_INVERTED}
				size={ButtonSize.L}
				square
			>
				{collapsed ? ">" : "<"}
			</Button>
			<div className={cls.items}>
				<div>
					<AppLink
						to={RoutePath.main}
						theme={AppLinkTheme.PRIMARY}
						className={cls.item}
					>
						<MainIcon className={cls.icon} />
						<span className={cls.link}>Главная</span>
					</AppLink>
				</div>
				<div>
					<AppLink
						to={RoutePath.about}
						theme={AppLinkTheme.PRIMARY}
						className={cls.item}
					>
						<AboutIcon className={cls.icon} />
						<span className={cls.link}>О сайте</span>
					</AppLink>
				</div>
			</div>
			<div className={cls.switchers}>
				<ThemeSwitch />
				<LangSwitch short={collapsed} className={cls.lang} />
			</div>
		</div>
	);
};
