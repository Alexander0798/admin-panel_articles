import { FC } from "react";
import cls from "./ArticleImageBlockComponent.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

interface Props {
    className?: string;
}

export const ArticleImageBlockComponent: FC<Props> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}></div>;
};
