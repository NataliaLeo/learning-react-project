import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { getLoginUsername } from "features/AuthByUsername/model/selectors/getLoginUsername";
import { getLoginPassword } from "features/AuthByUsername/model/selectors/getLoginPassword";
import { getLoginIsLoading } from "features/AuthByUsername/model/selectors/getLoginIsLoading";
import { getLoginError } from "features/AuthByUsername/model/selectors/getLoginError";
import {
	DynamicModuleLoader,
	ReducersList,
} from "shared/lib/components/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

export interface LoginFormProps {
	className?: string;
	onSuccess: () => void;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
	const { t } = useTranslation();

	//<Dispatch<any>> для временного фикса ошибки Argument of type 'AsyncThunkAction' is not assignable to parameter of type 'UnknownAction'.ts(2345)
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	// const dispatch = useDispatch<Dispatch<any>>();
	const dispatch = useAppDispatch();

	const username = useSelector(getLoginUsername);
	const password = useSelector(getLoginPassword);
	const isLoading = useSelector(getLoginIsLoading);
	const error = useSelector(getLoginError);

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

	const onLoginClick = useCallback(async () => {
		const result = await dispatch(loginByUsername({ username, password }));
		if (result.meta.requestStatus === "fulfilled") {
			onSuccess();
		}
	}, [onSuccess, dispatch, password, username]);

	return (
		<DynamicModuleLoader reducers={initialReducers}>
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
		</DynamicModuleLoader>
	);
});

LoginForm.displayName = "LoginForm";

export default LoginForm;
