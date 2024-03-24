import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { type User, userActions } from "../../../../../entities/User"; //??не работает относительный импорт
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
	username: string;
	password: string;
}

const axiosConfig = {
	headers: {
		"Content-Type": "application/json;charset=UTF-8",
		"Access-Control-Allow-Origin": "*",
	},
};

export const loginByUsername = createAsyncThunk<
	User,
	LoginByUsernameProps,
	{ rejectValue: string }
>("login/loginByUsername", async (authData, thunkAPI) => {
	try {
		const response = await axios.post<User>(
			"http://localhost:8000/login",
			authData,
			axiosConfig
		);
		if (!response.data) {
			throw new Error();
		}

		localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
		thunkAPI.dispatch(userActions.setAuthData(response.data));

		return response.data;
	} catch (e) {
		console.log(e);
		return thunkAPI.rejectWithValue("error");
	}
});
