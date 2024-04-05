import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import {
	MutableRefObject,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import { Portal } from "../Portal/Portal";

interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
	lazy?: boolean;
}

const ANIMATION_DELAY = 200;

export const Modal = ({
	className,
	children,
	isOpen,
	onClose,
	lazy,
}: ModalProps) => {
	const [isClosing, setIsClosing] = useState(false);
	const [isMonted, setIsMonted] = useState(false);

	const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

	useEffect(() => {
		if (isOpen) {
			setIsMonted(true);
		}
	}, [isOpen]);

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true);
			timeRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);
	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape") {
				closeHandler();
			}
		},
		[closeHandler]
	);
	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};
	useEffect(() => {
		if (isOpen) {
			window.addEventListener("keydown", onKeyDown);
		}
		return () => {
			clearTimeout(timeRef.current);
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [isOpen, onKeyDown]);
	const mods: Mods = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing,
	};
	if (lazy && !isMonted) {
		return null;
	}
	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [className])}>
				<div className={cls.overlay} onClick={closeHandler}>
					<div className={cls.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
