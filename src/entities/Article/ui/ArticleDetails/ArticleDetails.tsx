import { FC, memo, useCallback, useEffect } from "react";
import cls from "./ArticleDetails.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "../../model/slice/ArticleDetailsSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleById } from "../../model/services/fetchArticleById";
import { useSelector } from "react-redux";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "../../model/selectors/articleDetails";
import { Align, Text, TextSize } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import EyeIcon from "shared/assets/icons/eye-icon.svg";
import CalendarIcon from "shared/assets/icons/calendar-icon.svg";
import { Icon } from "shared/ui/Icon/Icon";
import { ArticleBlock, ArticleBlockType } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";

interface Props {
    id: string;
    className?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};
const Component: FC<Props> = (props) => {
    const { id, className } = props;
    const { t } = useTranslation("article-details");

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />;
            case ArticleBlockType.TEXT:
                return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
            case ArticleBlockType.IMAGE:
                return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />;
            default:
                return null;
        }
    }, []);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton width={600} height={24} />
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = <Text align={Align.CENTER} title={t("При загрузке статьи произошла ошибка")} />;
    } else {
        content = (
            <>
                <Avatar size={200} src={article?.img} className={cls.avatar} />
                <Text size={TextSize.L} title={article?.title} text={article?.subtitle} className={cls.title} />
                <div className={cls.wrapperArticleInfo}>
                    <div className={cls.articleInfo}>
                        <Icon Src={EyeIcon} />
                        <Text text={String(article?.views)} />
                    </div>
                    <div className={cls.articleInfo}>
                        <Icon Src={CalendarIcon} />
                        <Text text={article?.createdAt} />
                    </div>
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>{content}</div>
        </DynamicModuleLoader>
    );
};
export const ArticleDetails = memo(Component);
