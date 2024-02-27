import { FC, memo } from "react";
import cls from "./ArticleList.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

interface Props {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const Component: FC<Props> = (props) => {
    const { className, articles, isLoading, view = ArticleView.LIST } = props;
    const renderArticles = (article: Article) => <ArticleListItem article={article} view={view} key={article.id} />;
    const getSkeletons = (view: ArticleView) => {
        return new Array(view === ArticleView.PLATE ? 9 : 3)
            .fill(0)
            .map((_, index) => <ArticleListItemSkeleton view={view} key={index} />);
    };
    if (isLoading) {
        return <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>{getSkeletons(view)}</div>;
    }
    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length ? articles.map(renderArticles) : null}
        </div>
    );
};
export const ArticleList = memo(Component);
