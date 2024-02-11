import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginUsername.test", () => {
    test("should return value", () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                username: "username123",
                password: "",
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual("username123");
    });
    test("should work with empty state", () => {
        const state: Partial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual("");
    });
});
