import { Currency } from "../../../Currency";
import { ProfileSchema, ValidateProfileError } from "../types/Profile";
import { profileActions, profileReducer } from "./profileSlice";
import { Country } from "../../../Country";
import { updateProfileData } from "../services/updateProfileDate/updateProfileDate";
const data = {
    firstName: "Alex",
    lastName: "Profi",
    age: 29,
    currency: Currency.RUB,
    country: Country.Armenia,
    city: "Taganrog",
    username: "admin",
};
describe("profileSlice.test", () => {
    test("test set readonly", () => {
        const state: Partial<ProfileSchema> = { readonly: true };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false))).toEqual({ readonly: false });
    });
    test("test cancel edit", () => {
        const state: Partial<ProfileSchema> = { data, form: { username: "" } };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });
    test("test update profile", () => {
        const state: Partial<ProfileSchema> = { form: { username: "321" } };
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: "123" }))).toEqual({
            form: { username: "123" },
        });
    });
    test("test update profile service pending", () => {
        const state: Partial<ProfileSchema> = { isLoading: false, validateErrors: [ValidateProfileError.SERVER_ERROR] };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
    test("test update profile service fulfilled", () => {
        const state: Partial<ProfileSchema> = { isLoading: true };
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ""))).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
