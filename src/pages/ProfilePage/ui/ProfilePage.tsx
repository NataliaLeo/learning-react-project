import { useCallback, useEffect } from "react";
import {
	ProfileCard,
	ValidateProfileError,
	fetchProfileData,
	getProfileError,
	getProfileForm,
	getProfileIsLoading,
	getProfileReadonly,
	getProfileValidateErrors,
	profileActions,
	profileReducer,
} from "../../../entities/Profile"; //???
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import {
	DynamicModuleLoader,
	ReducersList,
} from "shared/lib/components/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { Country } from "entities/Country/model/types/country";
import { Currency } from "entities/Currency";
import { Text, TextTheme } from "shared/ui/Text/Text";

const reducers: ReducersList = {
	profile: profileReducer,
};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
	const { t } = useTranslation("profile");

	const dispatch = useAppDispatch();

	const form = useSelector(getProfileForm);
	const error = useSelector(getProfileError);
	const isLoading = useSelector(getProfileIsLoading);

	const readonly = useSelector(getProfileReadonly);
	const validateErrors = useSelector(getProfileValidateErrors);

	const validateErrorsTranslates = {
		[ValidateProfileError.SERVER_ERROR]: t("Серверная ошибка при сохранении"),
		[ValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),
		[ValidateProfileError.INCORRECT_COUNTRY]: t("Некорректный регион"),
		[ValidateProfileError.INCORRECT_USER_DATA]: t("Имя и фамилия обязательны"),
		[ValidateProfileError.NO_DATA]: t("Данные не указаны"),
	};

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	const onChangeFirstname = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ firstname: value }));
		},
		[dispatch]
	);

	const onChangeLastname = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ lastname: value }));
		},
		[dispatch]
	);

	const onChangeAge = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ age: Number(value) }));
		},
		[dispatch]
	);

	const onChangeCity = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ city: value }));
		},
		[dispatch]
	);

	const onChangeAvatar = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ avatar: value }));
		},
		[dispatch]
	);

	const onChangeUsername = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ username: value }));
		},
		[dispatch]
	);

	const onChangeCurrency = useCallback(
		(currency?: Currency) => {
			dispatch(profileActions.updateProfile({ currency: currency }));
		},
		[dispatch]
	);

	const onChangeCountry = useCallback(
		(country?: Country) => {
			dispatch(profileActions.updateProfile({ country: country }));
		},
		[dispatch]
	);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<ProfilePageHeader />
			{validateErrors?.length &&
				validateErrors.map((err) => (
					<Text
						theme={TextTheme.ERROR}
						text={validateErrorsTranslates[err]}
						key={err}
					/>
				))}
			<div className={classNames("", {}, [className])}>
				<ProfileCard
					data={form}
					isLoading={isLoading}
					error={error}
					readonly={readonly}
					onChangeFirstname={onChangeFirstname}
					onChangeLastname={onChangeLastname}
					onChangeAge={onChangeAge}
					onChangeCity={onChangeCity}
					onChangeCountry={onChangeCountry}
					onChangeAvatar={onChangeAvatar}
					onChangeUsername={onChangeUsername}
					onChangeCurrency={onChangeCurrency}
				/>
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
