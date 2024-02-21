import { FC, memo, useCallback, useEffect } from "react";
import cls from "./ProfilePage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import {
    ProfileCard,
    fetchProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileValidateErrors,
    profileActions,
    profileReducer,
} from "entities/Profile";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ProfilePageHeader } from "../ProfilePageHeader/ProfilePageHeader";
import { getProfileReadonly } from "entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly";
import { getProfileForm } from "entities/Profile/model/selectors/getProfileForm/getProfileForm";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ThemeText } from "shared/ui/Text/Text";
import { Text } from "shared/ui/Text/Text";
import { ValidateProfileError } from "entities/Profile/model/types/Profile";
import { useTranslation } from "react-i18next";
const reducers = {
    profile: profileReducer,
};
interface Props {
    className?: string;
}

const ProfilePage: FC<Props> = ({ className }: Props) => {
    const { t } = useTranslation("profile");
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t("При сохранении возникла ошибка сервера"),
        [ValidateProfileError.NO_DATA]: t("Нет данных"),
        [ValidateProfileError.INCORRECT_USER_DATA]: t("Имя и фамилия обязательны"),
        [ValidateProfileError.INCORRECT_COUNTRY]: t("Не корректный регион"),
        [ValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),
    };
    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const onChangeFirstName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ firstName: value || "" }));
        },
        [dispatch]
    );
    const onChangeLastName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastName: value || "" }));
        },
        [dispatch]
    );
    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
        },
        [dispatch]
    );
    const onChangeCountry = useCallback(
        (country?: Country) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch]
    );
    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || "" }));
        },
        [dispatch]
    );
    const onChangeCurrency = useCallback(
        (currency?: Currency) => {
            dispatch(profileActions.updateProfile({ currency }));
        },
        [dispatch]
    );
    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || "" }));
        },
        [dispatch]
    );
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length &&
                    validateErrors.map((err) => <Text theme={ThemeText.ERROR} text={validateErrorTranslates[err]} key={err} />)}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCountry={onChangeCountry}
                    onChangeCity={onChangeCity}
                    onChangeCurrency={onChangeCurrency}
                    onChangeAvatar={onChangeAvatar}
                />
            </div>
        </DynamicModuleLoader>
    );
};
export default memo(ProfilePage);
