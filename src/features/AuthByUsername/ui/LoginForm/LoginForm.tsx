import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Dispatch } from "@reduxjs/toolkit";

interface LoginFormProps {
	className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();

	//<Dispatch<any>> для временного фикса ошибки Argument of type 'AsyncThunkAction' is not assignable to parameter of type 'UnknownAction'.ts(2345)
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const dispatch = useDispatch<Dispatch<any>>();

	const { username, password, error, isLoading } = useSelector(getLoginState);

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value));
		},
		[dispatch]
	);

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value));
		},
		[dispatch]
	);

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, password, username]);

	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Text title={t("Форма авторизации")} />
			{error && (
				<Text
					text={t("Вы ввели неверный логин или пароль")}
					theme={TextTheme.ERROR}
				/>
			)}
			<Input
				autofocus
				type="text"
				className={cls.input}
				placeholder={t("ВВедите username")}
				onChange={onChangeUsername}
				value={username}
			/>
			<Input
				type="text"
				className={cls.input}
				placeholder={t("Введите password")}
				onChange={onChangePassword}
				value={password}
			/>
			<Button
				theme={ButtonTheme.OUTLINE}
				className={cls.loginBtn}
				onClick={onLoginClick}
				disabled={isLoading}
			>
				{t("Войти")}
			</Button>
		</div>
	);
});

LoginForm.displayName = "LoginForm";
