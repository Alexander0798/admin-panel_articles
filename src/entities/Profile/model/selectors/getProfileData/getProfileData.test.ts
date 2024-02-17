import { StateSchema } from "app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";
import { Country } from "../../../../Country";
import { Currency } from "../../../../Currency";

describe("getProfileData.test", () => {
    test("should return data", () => {
        const data = {
            firstName: "Alex",
            lastName: "Profi",
            age: 29,
            currency: Currency.RUB,
            country: Country.Armenia,
            city: "Taganrog",
            username: "admin",
        };
        const state: Partial<StateSchema> = {
            profile: { data },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test("should work with empty state", () => {
        const state: Partial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
