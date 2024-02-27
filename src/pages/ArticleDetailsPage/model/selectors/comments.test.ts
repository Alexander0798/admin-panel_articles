import { StateSchema } from "app/providers/StoreProvider";
import { getArticleDetailsCommentsError, getArticleDetailsCommentsIsLoading } from "./comments";

describe("comments.test.ts", () => {
    test("should return isLoading", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(true);
    });
    test("should word with empty state isLoading", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(false);
    });
    test("should return isLoading", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                error: "testError",
            },
        };
        expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual("testError");
    });
    test("should word with empty state error", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual(undefined);
    });
});
