import { FC, memo, useCallback } from "react";
import cls from "./ArticlesPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Article, ArticleList, ArticleView, ArticleViewSelector } from "entities/Article";
import { articleStorybook } from "shared/config/storybook/const/const";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articlePageActions, articlePageReducer, getArticles } from "../model/slice/articlePageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchArticleList } from "../model/services/fetchArticlesList/fetchArticlesList";
import { getArticlePageError, getArticlePageIsLoading, getArticlePageView } from "../model/selectors/articlePageSelectors";

interface Props {
    className?: string;
}
const article = {
    ...articleStorybook,
    user: {
        avatar: "https://lh3.googleusercontent.com/dzrjo0AOG9u4IWm3DafEnO63TVug12tXrzA46vrnLKBP3h5mL-ht4DAFsmBlXzmOeZz2sgb1srJNZDGC7RR_rhGt9M4W2xfE1kJvFQ=w1400-k",
    },
} as Article;

const reducers: ReducersList = {
    articlePage: articlePageReducer,
};
const ArticlesPage: FC<Props> = (props) => {
    const { className } = props;
    const { t } = useTranslation("article");
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlePageIsLoading);
    const error = useSelector(getArticlePageError);
    const view = useSelector(getArticlePageView);

    const onToggleView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageActions.setView(view));
        },
        [dispatch]
    );
    useInitialEffect(() => {
        dispatch(fetchArticleList());
        dispatch(articlePageActions.initState());
    });
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onToggleView} className={cls.view} />
                <ArticleList isLoading={isLoading} articles={articles} view={view} />
            </div>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesPage);
