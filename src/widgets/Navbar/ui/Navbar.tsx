import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitch } from "widgets/ThemeSwitch";

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink to={"/"} theme={AppLinkTheme.PRIMARY} className={cls.mainLink}>
					Главная
				</AppLink>
				<AppLink to={"/about"} theme={AppLinkTheme.PRIMARY}>
					О сайте
				</AppLink>
			</div>
		</div>
	);
};
