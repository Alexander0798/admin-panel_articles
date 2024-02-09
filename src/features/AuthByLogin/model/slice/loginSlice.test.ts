import { LoginSchema } from "../types/LoginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice.test", () => {
    test("test set username", () => {
        const state: Partial<LoginSchema> = { username: "" };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername("vas^a"))).toEqual({ username: "vas^a" });
    });
    test("test set password", () => {
        const state: Partial<LoginSchema> = { password: "" };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword("vas^a123"))).toEqual({ password: "vas^a123" });
    });
});
