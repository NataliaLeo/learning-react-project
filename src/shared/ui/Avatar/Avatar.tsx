import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";
import { CSSProperties, useMemo } from "react";

interface AvatarProps {
	className?: string;
	src?: string;
	size?: number;
}

export const Avatar = ({ className, src, size }: AvatarProps) => {
	const styles = useMemo<CSSProperties>(() => {
		return {
			width: size || 100,
			height: size || 100,
		};
	}, [size]);

	return (
		<img
			src={src}
			style={styles}
			className={classNames(cls.Avatar, {}, [className])}
			alt="Avatar"
		/>
	);
};
