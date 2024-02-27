import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { addCommentForArticle } from "./addCommentForArticle";
import { Comment } from "../../../../../entities/Comment";

const commentValue: DeepPartial<Comment> = {
    id: "1",
    user: {
        id: "1",
    },
    text: "textTest",
};
describe("addCommentForArticle", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: { authData: { id: "1" } },
            articleDetails: { data: { id: "1" } },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ data: commentValue }));
        const result = await thunk.callThunk("textTest");

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled;
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(commentValue);
    });
    test("rejected", async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: { authData: { id: "1" } },
            articleDetails: { data: { id: "1" } },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk("textTest");

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled;
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual("error");
    });
});
