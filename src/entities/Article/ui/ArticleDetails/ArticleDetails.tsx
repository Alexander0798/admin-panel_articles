import { FC, memo, useEffect } from "react";
import cls from "./ArticleDetails.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "../../model/slice/ArticleDetailsSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleById } from "entities/Article/model/services/fetchArticleById";

interface Props {
    className?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};
const Component: FC<Props> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchArticleById("1"));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}></div>
        </DynamicModuleLoader>
    );
};
export const ArticleDetails = memo(Component);
