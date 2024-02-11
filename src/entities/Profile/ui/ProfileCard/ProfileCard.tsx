import { FC } from "react";
import cls from "./ProfileCard.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { Text } from "shared/ui/Text/Text";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface Props {
    className?: string;
}

export const ProfileCard: FC<Props> = ({ className }: Props) => {
    const { t } = useTranslation("profile");
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t("Профиль")} />
                <Button theme={ThemeButton.OUTLINE} className={cls.editBtn}>
                    {t("Редактировать")}
                </Button>
            </div>
            <div className={cls.data}>
                <Input value={data?.firstName} placeholder={t("Ваше имя")} className={cls.input} />
                <Input value={data?.lastName} placeholder={t("Ваша фамилия")} className={cls.input} />
            </div>
        </div>
    );
};
