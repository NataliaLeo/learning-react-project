import cls from "./ProfilePageHeader.module.scss";
import { useTranslation } from "react-i18next";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import {
	getProfileReadonly,
	profileActions,
	updateProfileData,
} from "entities/Profile";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

// interface ProfilePageHeaderProps {}

export const ProfilePageHeader = () => {
	const { t } = useTranslation();

	const readonly = useSelector(getProfileReadonly);

	const dispatch = useAppDispatch();

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]);

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	const onSave = useCallback(() => {
		dispatch(updateProfileData());
	}, [dispatch]);

	return (
		<div className={cls.header}>
			<Text title={t("Профиль")} theme={TextTheme.INVERTED} />
			{readonly ? (
				<Button
					onClick={onEdit}
					className={cls.editBtn}
					theme={ButtonTheme.OUTLINE_INVERTED}
				>
					{t("Редактировать")}
				</Button>
			) : (
				<>
					<Button
						onClick={onCancelEdit}
						className={cls.editBtn}
						theme={ButtonTheme.OUTLINE}
					>
						{t("Отменить")}
					</Button>
					<Button
						onClick={onSave}
						className={cls.saveBtn}
						theme={ButtonTheme.OUTLINE_INVERTED}
					>
						{t("Сохранить")}
					</Button>
				</>
			)}
		</div>
	);
};
