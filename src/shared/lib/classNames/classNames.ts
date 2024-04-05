export type Mods = Record<string, boolean | string | undefined>;

// const obj: Mods = {
//     'hovered':false
// }

export function classNames(
	cls: string,
	mods: Mods = {},
	additional: Array<string | undefined> = []
): string {
	return [
		cls,
		...additional.filter(Boolean),
		...Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className),
	].join(" ");
}

// classNames("remove-btn", { hovered: false, selectable: true, red: true }, [
// 	"pdg",
// ]);
