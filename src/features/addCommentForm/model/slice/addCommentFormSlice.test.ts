import { addCommentForm } from "../types/addCommentForm";
import { addCommentFormActions, addCommentFormReducer } from "./addCommentFormSlice";

describe("addCommentFormSlice.test", () => {
    const state: DeepPartial<addCommentForm> = { text: "" };
    test("test set text", () => {
        expect(addCommentFormReducer(state as addCommentForm, addCommentFormActions.setText("testText"))).toEqual({
            text: "testText",
        });
    });
});
