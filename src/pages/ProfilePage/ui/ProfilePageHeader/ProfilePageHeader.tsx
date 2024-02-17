import { FC, memo, useCallback } from "react";
import cls from "./ProfilePageHeader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getProfileReadonly } from "../../../../entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { profileActions, updateProfileData } from "../../../../entities/Profile";

interface Props {
    className?: string;
}

const ProfilePageHeaderComponent: FC<Props> = ({ className }) => {
    const { t } = useTranslation("profile");
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);
    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t("Профиль")} />
            {readonly ? (
                <Button theme={ThemeButton.OUTLINE} className={cls.editBtn} onClick={onEdit}>
                    {t("Редактировать")}
                </Button>
            ) : (
                <div className={cls.wrapperBtn}>
                    <Button theme={ThemeButton.OUTLINE_RED} className={cls.cancelBtn} onClick={onCancelEdit}>
                        {t("Отменить")}
                    </Button>
                    <Button theme={ThemeButton.OUTLINE} className={cls.saveBtn} onClick={onSave}>
                        {t("Сохранить")}
                    </Button>
                </div>
            )}
        </div>
    );
};
export const ProfilePageHeader = memo(ProfilePageHeaderComponent);
