import { FC } from "react";
import cls from "./ProfileCard.module.scss";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Align, Text, ThemeText } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "../../model/types/Profile";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country, CountrySelect } from "entities/Country";

interface Props {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCountry?: (value?: Country) => void;
    onChangeCity?: (value?: string) => void;
    onChangeCurrency?: (value?: Currency) => void;
    onChangeAvatar?: (value?: string) => void;
}

export const ProfileCard: FC<Props> = (props) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCountry,
        onChangeCity,
        onChangeCurrency,
        onChangeAvatar,
    } = props;
    const { t } = useTranslation("profile");

    const mods: Mods = {
        [cls.editing]: !readonly,
    };
    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={ThemeText.ERROR}
                    title={t("Произошла ошибка при загрузке профиля")}
                    text={t("Попробуйте обновить страницу")}
                    align={Align.CENTER}
                />
            </div>
        );
    }
    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data.avatar} alt="avatar" size={200} />
                    </div>
                )}
                <Input
                    value={data?.firstName}
                    placeholder={t("Ваше имя")}
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t("Ваша фамилия")}
                    className={cls.input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t("Ваш возраст")}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} />
                <Input
                    value={data?.city}
                    placeholder={t("Ваша город")}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
                <Input
                    value={data?.avatar}
                    placeholder={t("Ваш аватар")}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
