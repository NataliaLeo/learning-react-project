import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";
import { Country } from "../model/types/country";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";

interface CountrySelectProps {
	className?: string;
	value?: Country;
	onChange?: (value: Country) => void;
	readonly?: boolean;
}

const options = [
	{ value: Country.Belarus, content: Country.Belarus },
	{ value: Country.Russia, content: Country.Russia },
	{ value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(
	({ className, value, onChange, readonly }: CountrySelectProps) => {
		const { t } = useTranslation();

		const onChangeHandler = useCallback(
			(value: string) => {
				onChange?.(value as Country);
			},
			[onChange]
		);

		return (
			<Select
				className={classNames("", {}, [className])}
				label={t("Укажите валюту")}
				options={options}
				value={value}
				onChange={onChangeHandler}
				readonly={readonly}
			/>
		);
	}
);
