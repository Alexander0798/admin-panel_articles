import { PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article, ArticleView } from "entities/Article";
import { ArticlePageSchema } from "../types/ArticlePageSchema";
import { fetchArticleList } from "../services/fetchArticlesList/fetchArticlesList";
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from "shared/const/localsorage";

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage || articlesAdapter.getInitialState()
);

const articlePageSlice = createSlice({
    name: "articlePageSlice",
    initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.TILED,
    }),
    reducers: {
        setView: (state, actions: PayloadAction<ArticleView>) => {
            state.view = actions.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, actions.payload);
        },
        initState: (state) => {
            state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleList.rejected, (state, actions) => {
                state.isLoading = false;
                state.error = actions.payload;
            })
            .addCase(fetchArticleList.fulfilled, (state, actions: PayloadAction<Article[]>) => {
                state.isLoading = false;
                articlesAdapter.setAll(state, actions.payload);
            });
    },
});

export const { reducer: articlePageReducer, actions: articlePageActions } = articlePageSlice;
