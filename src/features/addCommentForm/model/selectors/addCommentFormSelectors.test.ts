import { StateSchema } from "app/providers/StoreProvider";
import { getAddCommentFormError, getAddCommentFormText } from "./addCommentFormSelectors";

describe("addCommentFormSelectors.test.ts", () => {
    test("getAddCommentFormText should return text", () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: "testText",
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual("testText");
    });
    test("getAddCommentFormText should word with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual(undefined);
    });
    test("getAddCommentFormError should return text", () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: "testError",
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual("testError");
    });
    test("getAddCommentFormError should word with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual(undefined);
    });
});
