import { FC } from "react";
import cls from "./ArticleTextBlockComponent.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

interface Props {
    className?: string;
}

export const ArticleTextBlockComponent: FC<Props> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}></div>;
};
