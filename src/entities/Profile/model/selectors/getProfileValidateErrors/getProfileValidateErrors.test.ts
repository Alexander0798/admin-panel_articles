import { StateSchema } from "app/providers/StoreProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { ValidateProfileError } from "../../types/Profile";

describe("getProfileError.test", () => {
    test("should return error", () => {
        const state: Partial<StateSchema> = {
            profile: { validateErrors: [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_USER_DATA] },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
    test("should work with empty state", () => {
        const state: Partial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
