import { validateProfileData } from "./validateProfileData";
import { Currency } from "../../../../Currency";
import { Country } from "../../../../Country";
import { ValidateProfileError } from "../../types/Profile";

const data = {
    firstName: "Alex",
    lastName: "Profi",
    age: 29,
    currency: Currency.RUB,
    country: Country.Armenia,
    city: "Taganrog",
    username: "admin",
};
describe("validateProfileData.test", () => {
    test("success", () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });
    test("without first and last name", () => {
        const result = validateProfileData({ ...data, firstName: "", lastName: "" });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test("without age", () => {
        const result = validateProfileData({ ...data, age: NaN });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test("without country", () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });
    test("without all", () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
