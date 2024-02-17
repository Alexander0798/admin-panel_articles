import { StateSchema } from "app/providers/StoreProvider";
import { getProfileReadonly } from "./getProfileReadonly";

describe("getProfileError.test", () => {
    test("should return error", () => {
        const state: Partial<StateSchema> = {
            profile: { readonly: true },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });
    test("should work with empty state", () => {
        const state: Partial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
