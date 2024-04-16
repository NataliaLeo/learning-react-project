import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "../../model/type/profile";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Currency } from "entities/Currency/model/types/currency";
import { Select } from "shared/ui/Select/Select";
import { CurrencySelect } from "entities/Currency";
import { Country } from "entities/Country/model/types/country";
import { CountrySelect } from "entities/Country";

interface ProfileCardProps {
	className?: string;
	data?: Profile;
	isLoading?: boolean;
	error?: string;
	readonly?: boolean;
	onChangeFirstname?: (value?: string) => void;
	onChangeLastname?: (value?: string) => void;
	onChangeCity?: (value?: string) => void;
	onChangeAge?: (value?: string) => void;
	onChangeUsername?: (value?: string) => void;
	onChangeAvatar?: (value?: string) => void;
	onChangeCurrency?: (currency?: Currency) => void;
	onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
	const {
		className,
		data,
		isLoading,
		error,
		readonly,
		onChangeFirstname,
		onChangeLastname,
		onChangeCity,
		onChangeCountry,
		onChangeAge,
		onChangeUsername,
		onChangeAvatar,
		onChangeCurrency,
	} = props;
	const { t } = useTranslation("profile");

	if (isLoading) {
		return (
			<div
				className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
					className,
				])}
			>
				<Loader />
			</div>
		);
	}

	if (error) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
				<Text
					theme={TextTheme.ERROR}
					title={t("Произошла ошибка")}
					text={t("Возможно вы слоупок и опять забыли включить сервер")}
				/>
			</div>
		);
	}

	const mods: Mods = {
		[cls.editing]: !readonly,
	};

	return (
		<div className={classNames(cls.ProfileCard, mods, [className])}>
			<div className={cls.data}>
				{data?.avatar && (
					<div className={cls.avatarWrapper}>
						<Avatar src={data.avatar} size={100} />
					</div>
				)}
				<Input
					value={data?.firstname}
					placeholder={t("Ваше имя")}
					className={cls.input}
					onChange={onChangeFirstname}
					readonly={readonly}
				/>
				<Input
					value={data?.lastname}
					placeholder={t("Ваша фамилия")}
					className={cls.input}
					onChange={onChangeLastname}
					readonly={readonly}
				/>
				<Input
					value={data?.age}
					placeholder={t("Ваш возраст")}
					className={cls.input}
					onChange={onChangeAge}
					readonly={readonly}
				/>
				<Input
					value={data?.city}
					placeholder={t("Город")}
					className={cls.input}
					onChange={onChangeCity}
					readonly={readonly}
				/>
				<Input
					value={data?.username}
					placeholder={t("Имя пользователя")}
					className={cls.input}
					onChange={onChangeUsername}
					readonly={readonly}
				/>
				<Input
					value={data?.avatar}
					placeholder={t("Ссылка на аватар")}
					className={cls.input}
					onChange={onChangeAvatar}
					readonly={readonly}
				/>
				<CurrencySelect
					className={cls.input}
					value={data?.currency}
					onChange={onChangeCurrency}
					readonly={readonly}
				/>
				<CountrySelect
					className={cls.input}
					value={data?.country}
					onChange={onChangeCountry}
					readonly={readonly}
				/>
			</div>
		</div>
	);
};
