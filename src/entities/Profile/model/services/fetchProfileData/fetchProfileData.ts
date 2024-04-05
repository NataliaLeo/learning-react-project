import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { type User, userActions } from "../../../../../entities/User"; //??не работает относительный импорт
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { ThunkExtraArg } from "app/providers/StoreProvider";
import { Profile } from "../../type/profile";

// interface LoginByUsernameProps {
// 	username: string;
// 	password: string;
// }

export const fetchProfileData = createAsyncThunk<
	Profile,
	void,
	{ rejectValue: string; extra: ThunkExtraArg }
>(
	"profile/fetchProfileData",
	async (_, { extra, dispatch, rejectWithValue }) => {
		try {
			const response = await extra.api.get<Profile>("/profile");

			return response.data;
		} catch (e) {
			console.log(e);
			return rejectWithValue("error");
		}
	}
);
