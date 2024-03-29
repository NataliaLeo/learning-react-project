import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SidebarItem.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "../../model/items";
import { memo } from "react";

interface SidebarItemProps {
	item: SidebarItemType;
	collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
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
