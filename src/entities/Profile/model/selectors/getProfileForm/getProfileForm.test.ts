import { StateSchema } from "app/providers/StoreProvider";
import { getProfileForm } from "./getProfileForm";
import { Country } from "../../../../Country";
import { Currency } from "../../../../Currency";

describe("getProfileForm.test", () => {
    test("should return form", () => {
        const form = {
            firstName: "Alex",
            lastName: "Profi",
            age: 29,
            currency: Currency.RUB,
            country: Country.Armenia,
            city: "Taganrog",
            username: "admin",
        };
        const state: Partial<StateSchema> = {
            profile: { form },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test("should work with empty state", () => {
        const state: Partial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
