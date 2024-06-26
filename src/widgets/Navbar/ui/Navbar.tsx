import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
// import { Modal } from "shared/ui/Modal/Modal";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { memo, useCallback, useState } from "react";
import { t } from "i18next";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "../../../entities/User"; //??не работает относительный импорт

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
	const [isAuthModal, setIsAuthModal] = useState(false);

	const authData = useSelector(getUserAuthData);
	const dispatch = useDispatch();

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	if (authData) {
		return (
			<div className={classNames(cls.navbar, {}, [className])}>
				<Button
					theme={ButtonTheme.CLEAR}
					className={cls.links}
					onClick={onLogout}
				>
					{/* {t("Выйти")} */}
					Выйти
				</Button>
			</div>
		);
	}

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR}
				className={cls.links}
				onClick={onShowModal}
			>
				{/* {t("Войти")} */}
				Войти
			</Button>
			{isAuthModal && (
				<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
			)}
		</div>
	);
});
