import { StateSchema } from "app/providers/StoreProvider";
import { getProfileIsLoading } from "./getProfileIsLoading";

describe("getProfileError.test", () => {
    test("should return error", () => {
        const state: Partial<StateSchema> = {
            profile: { isLoading: true },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });
    test("should work with empty state", () => {
        const state: Partial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
