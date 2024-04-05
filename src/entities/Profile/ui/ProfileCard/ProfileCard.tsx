import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface ProfileCardProps {
	className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
	const { t } = useTranslation("profile");

	const data = useSelector(getProfileData);
	const error = useSelector(getProfileError);
	const isLoading = useSelector(getProfileIsLoading);

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<div className={cls.header}>
				<Text title={t("Профиль")} />
				<Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
					{t("Редактировать")}
				</Button>
			</div>
			<div className={cls.data}>
				<Input
					value={data?.firstname}
					placeholder={t("Ваше имя")}
					className={cls.input}
				/>
			</div>
			<div className={cls.data}>
				<Input
					value={data?.lastname}
					placeholder={t("Ваша фамилия")}
					className={cls.input}
				/>
			</div>
		</div>
	);
};
