import { createAsyncThunk } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "app/providers/StoreProvider";
import { Profile } from "../../type/profile";
import { getProfileForm } from "../../selectors/getProfileForm";

export const updateProfileData = createAsyncThunk<
	Profile,
	void,
	{ rejectValue: string; extra: ThunkExtraArg; state: StateSchema }
>(
	"profile/updateProfileData",
	async (_, { extra, rejectWithValue, getState }) => {
		const formData = getProfileForm(getState());
		try {
			const response = await extra.api.put<Profile>("/profile", formData);

			return response.data;
		} catch (e) {
			console.log(e);
			return rejectWithValue("error");
		}
	}
);
