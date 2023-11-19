import { classNames } from "shared/lib/classNames/classNames";
// import cls from "./LangSwitch.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface LangSwitchProps {
	className?: string;
}

export const LangSwitch = ({ className }: LangSwitchProps) => {
	const { t, i18n } = useTranslation();

	const toggle = () => {
		i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	};

	return (
		<Button
			theme={ThemeButton.CLEAR}
			onClick={toggle}
			className={classNames("", {}, [className])}
		>
			{t("Язык")}
		</Button>
	);
};
