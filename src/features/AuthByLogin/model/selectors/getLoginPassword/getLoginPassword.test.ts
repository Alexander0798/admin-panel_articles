import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword.test", () => {
    test("should return value", () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                password: "password123",
                username: "",
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual("password123");
    });
    test("should work with empty state", () => {
        const state: Partial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual("");
    });
});
