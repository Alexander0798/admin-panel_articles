import { FC, memo, useCallback } from "react";
import cls from "./ArticleListItem.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Article, ArticleBlockType, ArticleTextBlok, ArticleView } from "../../model/types/article";
import { Text } from "shared/ui/Text/Text";
import { Icon } from "shared/ui/Icon/Icon";
import EyeIcon from "shared/assets/icons/eye-icon.svg";
import { Card } from "shared/ui/Card/Card";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface Props {
    className?: string;
    article: Article;
    view: ArticleView;
}

const Component: FC<Props> = (props) => {
    const { className, article, view } = props;
    const { t } = useTranslation("articles");
    const navigate = useNavigate();
    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [navigate, article.id]);

    const articleTypes = article.type.join(" ");
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlok;

    const views: JSX.Element = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Src={EyeIcon} className={cls.icon} />
        </>
    );
    const viewPlate = (
        <Card className={cls.card} onClick={onOpenArticle}>
            <div className={cls.imageWrapper}>
                <img src={article.img} alt={article.title} className={cls.img} />
                <Text text={article.createdAt} className={cls.date} />
            </div>
            <div className={cls.infoWrapper}>
                <Text text={articleTypes} className={cls.type} />
                {views}
            </div>
            <Text text={article.title} className={cls.title} />
        </Card>
    );

    const viewList = (
        <Card className={cls.card}>
            <div className={cls.header}>
                <Avatar size={30} src={article.user.avatar} className={cls.avatar} />
                <Text text={article.user.username} className={cls.username} />
                <Text text={article.createdAt} className={cls.date} />
            </div>
            <Text title={article.title} className={cls.title} />
            <Text text={articleTypes} className={cls.type} />
            <img src={article.img} alt={article.title} className={cls.img} />
            {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
            <div className={cls.footer}>
                <Button theme={ThemeButton.OUTLINE} onClick={onOpenArticle}>
                    {t("Читать далее...")}
                </Button>
                {views}
            </div>
        </Card>
    );

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            {view === ArticleView.LIST ? viewList : viewPlate}
        </div>
    );
};
export const ArticleListItem = memo(Component);
