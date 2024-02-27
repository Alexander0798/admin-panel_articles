import { FC, memo } from "react";
import cls from "./ArticlesPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Article, ArticleList, ArticleView } from "entities/Article";
import { articleStorybook } from "shared/config/storybook/const/const";

interface Props {
    className?: string;
}
const article = {
    ...articleStorybook,
    user: {
        avatar: "https://lh3.googleusercontent.com/dzrjo0AOG9u4IWm3DafEnO63TVug12tXrzA46vrnLKBP3h5mL-ht4DAFsmBlXzmOeZz2sgb1srJNZDGC7RR_rhGt9M4W2xfE1kJvFQ=w1400-k",
    },
} as Article;
const ArticlesPage: FC<Props> = (props) => {
    const { className } = props;
    const { t } = useTranslation("article");
    return (
        <div className={classNames(cls.ArticlePage, {}, [className])}>
            {
                <ArticleList
                    articles={new Array(16).fill(0).map((_, index) => ({ ...article, id: String(index) }))}
                    view={ArticleView.LIST}
                />
            }
        </div>
    );
};
export default memo(ArticlesPage);
