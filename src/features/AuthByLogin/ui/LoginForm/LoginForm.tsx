import { FC, memo, useCallback } from "react";
import cls from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "features/AuthByLogin/model/slice/loginSlice";
import { getLoginState } from "features/AuthByLogin/model/selectors/getLoginState/getLoginState";
import { Login } from "features/AuthByLogin/model/services/login/login";
import { Text, ThemeText } from "shared/ui/Text/Text";

interface Props {
    className?: string;
}

const LoginForm: FC<Props> = ({ className }: Props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const { userName, password, error, isLoading } = useSelector(getLoginState);

    const onChangeLogin = useCallback(
        (value: string) => {
            dispatch(loginActions.setUserName(value));
        },
        [dispatch],
    );
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );
    const onLoginClick = useCallback(() => {
        // @ts-ignore
        dispatch(Login({ userName, password }));
    }, [dispatch, userName, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t("Форма Авторизации")} />
            <Input autofocus type="text" placeholder={t("Введите логин")} className={cls.input} onChange={onChangeLogin} value={userName} />
            <Input type="text" placeholder={t("Введите пароль")} className={cls.input} onChange={onChangePassword} value={password} />
            <div className={cls.wrapperBtn}>
                {error && <Text className={cls.error} text={t("Неправильный логин или пароль")} theme={ThemeText.ERROR} />}
                <Button className={cls.loginBtn} theme={ThemeButton.OUTLINE} onClick={onLoginClick} disabled={isLoading}>
                    {t("Войти")}
                </Button>
            </div>
        </div>
    );
};

export default memo(LoginForm);
