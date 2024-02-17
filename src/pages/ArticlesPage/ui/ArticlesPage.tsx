import { FC, memo } from "react";
import cls from "./ArticlesPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

interface Props {
    className?: string;
}

const ArticlesPage: FC<Props> = (props) => {
    const { className } = props;
    const { t } = useTranslation("article");
    return <div className={classNames(cls.ArticlePage, {}, [className])}></div>;
};
export default memo(ArticlesPage);
