import axios from "axios";
import { loginByUsername } from "./loginByUsername";
import { Dispatch } from "@reduxjs/toolkit";
import { userActions } from "../../../../../entities/User/model/slice/userSlise";
import { StateSchema } from "app/providers/StoreProvider";
import { TestAsyncThunk } from "shared/lib/TestAsyncThunk";

jest.mock("axios");

const mockedAxios = jest.mocked(axios);

describe("loginByUsername.test", () => {
	// let dispatch: Dispatch;
	// let getState: () => StateSchema;

	// beforeEach(() => {
	// 	dispatch = jest.fn();
	// 	getState = jest.fn();
	// });
	// test("", async () => {
	// 	const userValue = { username: "123", id: "1" };
	// 	mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
	// 	const action = loginByUsername({ username: "123", password: "123" });
	// 	const result = await action(dispatch, getState, undefined);
	// 	console.log(result);

	// 	expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
	// 	expect(mockedAxios.post).toHaveBeenCalled();
	// 	expect(result.meta.requestStatus).toBe("fulfilled");
	// });

	test("success login", async () => {
		const userValue = { username: "123", id: "1" };
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk({ username: "123", password: "123" });

		expect(thunk.dispatch).toHaveBeenCalledWith(
			userActions.setAuthData(userValue)
		);
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("fulfilled");
		expect(result.payload).toEqual(userValue);
	});

	test("error login", async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk({ username: "123", password: "123" });

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("rejected");
		expect(result.payload).toBe("error");
	});
});
