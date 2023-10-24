import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Link } from "react-router-dom";

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Link to={"/"}>Главная</Link>
			<Link to={"/about"}>О сайте</Link>
		</div>
	);
};
