import { classNames } from "shared/lib/classNames/classNames";
// import cls from "./LangSwitch.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { memo } from "react";

interface LangSwitchProps {
	className?: string;
	short?: boolean;
}

export const LangSwitch = memo(({ className, short }: LangSwitchProps) => {
	const { t, i18n } = useTranslation();

	const toggle = () => {
		i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	};

	return (
		<Button
			theme={ButtonTheme.CLEAR}
			onClick={toggle}
			className={classNames("", {}, [className])}
		>
			{t(short ? "Короткий язык" : "Язык")}
		</Button>
	);
});
