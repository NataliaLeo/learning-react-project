import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { ReactNode, useRef, useState } from "react";

interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
	const [isClosing, setIsClosing] = useState(false);
	const timeRef = useRef<ReturnType<typeof setTimeout>>();
	const ANIMATION_DELAY = 300;
	const closeHandler = () => {
		if (onClose) {
			setIsClosing(true);
			timeRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	};
	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};
	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing,
	};
	return (
		<div className={classNames(cls.Modal, mods, [className])}>
			<div className={cls.overlay} onClick={closeHandler}>
				<div className={cls.content} onClick={onContentClick}>
					{children}
				</div>
			</div>
		</div>
	);
};
