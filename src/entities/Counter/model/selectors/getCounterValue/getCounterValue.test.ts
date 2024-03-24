import { StateSchema } from "app/providers/StoreProvider";
import { getCounterValue } from "./getCounterValue";
import { DeepPartial } from "app/types/types";

describe("getCounterValue", () => {
	test("", () => {
		const state: DeepPartial<StateSchema> = {
			counter: { value: 10 },
		};
		expect(getCounterValue(state as StateSchema)).toEqual(10);
	});
});
