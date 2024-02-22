import { FC, memo, useCallback } from "react";
import cls from "./AddCommentForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getAddCommentFormError, getAddCommentFormText } from "../../model/selectors/addCommentFormSelectors";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { addCommentFormActions, addCommentFormReducer } from "../../model/slice/addCommentFormSlice";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

interface Props {
    className?: string;
    onSendComment: (text: string) => void;
}
const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};
const AddCommentForm: FC<Props> = (props) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch]
    );
    const onSendHandler = useCallback(() => {
        onSendComment(text || "");
        onCommentTextChange("");
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t("Введите текст комментария")}
                    onChange={onCommentTextChange}
                    value={text}
                />
                <Button onClick={onSendHandler} theme={ThemeButton.OUTLINE}>
                    {t("Отправить")}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};
export default memo(AddCommentForm);
