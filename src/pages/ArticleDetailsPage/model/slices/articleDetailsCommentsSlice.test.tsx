import { Comment } from "entities/Comment";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentSchema";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";

const state: DeepPartial<ArticleDetailsCommentsSchema> = {
    isLoading: false,
};
const comment: DeepPartial<Comment> = { id: "1", text: "qwe" };
describe("articleDetailsCommentsSlice.test.tsx", () => {
    test("fetch comment by article id pending", () => {
        expect(articleDetailsCommentsReducer(state as ArticleDetailsCommentsSchema, fetchCommentsByArticleId.pending)).toEqual({
            isLoading: true,
            error: undefined,
        });
    });
    test("fetch comment by article id fulfilled", () => {
        expect(
            articleDetailsCommentsReducer(
                state as ArticleDetailsCommentsSchema,
                fetchCommentsByArticleId.fulfilled([comment as Comment], "", "")
            )
        ).toEqual({
            entities: {
                "1": {
                    id: "1",
                    text: "qwe",
                },
            },
            ids: ["1"],
            isLoading: false,
        });
    });
});
