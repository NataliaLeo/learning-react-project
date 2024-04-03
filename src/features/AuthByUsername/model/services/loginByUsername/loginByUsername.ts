import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { type User, userActions } from "../../../../../entities/User"; //??не работает относительный импорт
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { ThunkExtraArg } from "app/providers/StoreProvider";

interface LoginByUsernameProps {
	username: string;
	password: string;
}

// const axiosConfig = {
// 	headers: {
// 		"Content-Type": "application/json;charset=UTF-8",
// 	},
// };

export const loginByUsername = createAsyncThunk<
	User,
	LoginByUsernameProps,
	{ rejectValue: string; extra: ThunkExtraArg }
>(
	"login/loginByUsername",
	async (authData, { extra, dispatch, rejectWithValue }) => {
		try {
			const response = await extra.api.post<User>(
				"/login",
				authData
				// axiosConfig
			);
			if (!response.data) {
				throw new Error();
			}

			localStorage.setItem(
				USER_LOCALSTORAGE_KEY,
				JSON.stringify(response.data)
			);
			dispatch(userActions.setAuthData(response.data));

			extra.navigate("/about");

			return response.data;
		} catch (e) {
			console.log(e);
			return rejectWithValue("error");
		}
	}
);
