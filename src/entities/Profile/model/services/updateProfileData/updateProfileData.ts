import { createAsyncThunk } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "app/providers/StoreProvider";
import { Profile, ValidateProfileError } from "../../type/profile";
import { getProfileForm } from "../../selectors/getProfileForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<
	Profile,
	void,
	{
		rejectValue: ValidateProfileError[];
		extra: ThunkExtraArg;
		state: StateSchema;
	}
>(
	"profile/updateProfileData",
	async (_, { extra, rejectWithValue, getState }) => {
		const formData = getProfileForm(getState());

		const errors = validateProfileData(formData);

		if (errors.length) {
			return rejectWithValue(errors);
		}

		try {
			const response = await extra.api.put<Profile>("/profile", formData);

			return response.data;
		} catch (e) {
			console.log(e);
			return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
		}
	}
);
