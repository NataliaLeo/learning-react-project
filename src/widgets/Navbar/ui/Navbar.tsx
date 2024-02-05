import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { t } from "i18next";

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const [isAuthModal, setIsAuthModal] = useState(false);
	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onToggleModal}
			>
				{t("Войти")}
			</Button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				lorem loremloremloremloremlorem
				loremloremloremloremloremloremloremloremlorem loremlorem loremlorem
				loremlorem
			</Modal>
		</div>
	);
};
