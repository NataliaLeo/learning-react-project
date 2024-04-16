import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";
import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { read } from "fs";

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"value" | "onChange" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string | number;
	onChange?: (value: string) => void;
	autofocus?: boolean;
	readonly?: boolean;
}

export const Input = (props: InputProps) => {
	const {
		className,
		value,
		onChange,
		type = "text",
		placeholder,
		autofocus,
		readonly,
		...other
	} = props;

	const ref = useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState(false);
	const [caretPosition, setCaretPosition] = useState(0);

	const isCaretVisible = isFocused && !readonly;

	useEffect(() => {
		if (autofocus) {
			setIsFocused(true);
			ref.current?.focus();
		}
	}, [autofocus]);

	const onBlur = () => {
		setIsFocused(false);
	};

	const onFocus = () => {
		setIsFocused(true);
	};

	const onSelect = (e: any) => {
		setCaretPosition(e?.target?.selectionStart);
	};

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
		setCaretPosition(e.target.value.length);
	};

	const mods: Mods = {
		[cls.readonly]: readonly,
	};

	return (
		<div className={classNames(cls.InputWrapper, {}, [className])}>
			{placeholder && (
				<div className={cls.placeholder}>{`${placeholder}>`}</div>
			)}
			<div className={cls.caretBlock}>
				<input
					type={type}
					value={value}
					onChange={onChangeHandler}
					className={cls.input}
					onFocus={onFocus}
					onBlur={onBlur}
					onSelect={onSelect}
					readOnly={readonly}
					{...other}
				/>
				{isCaretVisible && (
					<span
						className={cls.caret}
						style={{ left: `${caretPosition * 9}px` }}
					></span>
				)}
			</div>
		</div>
	);
};
