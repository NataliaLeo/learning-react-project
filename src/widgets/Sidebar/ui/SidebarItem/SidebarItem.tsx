import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SidebarItem.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "../../model/items";
import { memo } from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";

interface SidebarItemProps {
	item: SidebarItemType;
	collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
	const isAuth = useSelector(getUserAuthData);

	if (item.authOnly && !isAuth) {
		return null;
	}

	return (
		<AppLink
			to={item.path}
			theme={AppLinkTheme.PRIMARY}
			className={classNames(cls.item, { [cls.collapsed]: collapsed })}
		>
			<item.Icon className={cls.icon} />
			<span className={cls.link}>{item.text}</span>
		</AppLink>
	);
});
