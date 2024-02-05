import { FC, memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Text, ThemeText } from "shared/ui/Text/Text";
import Input from "shared/ui/Input/Input";

import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { Login } from "../../model/services/login/login";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
    className?: string;
}
const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeLogin = useCallback(
        (value: string) => {
            dispatch(loginActions.setUserName(value));
        },
        [dispatch]
    );
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );
    const onLoginClick = useCallback(() => {
        // @ts-ignore
        dispatch(Login({ username, password }));
    }, [dispatch, username, password]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t("Форма Авторизации")} />
                <Input autofocus type="text" placeholder={t("Введите логин")} className={cls.input} onChange={onChangeLogin} value={username} />
                <Input type="text" placeholder={t("Введите пароль")} className={cls.input} onChange={onChangePassword} value={password} />
                <div className={cls.wrapperBtn}>
                    {error && <Text className={cls.error} text={t("Неправильный логин или пароль")} theme={ThemeText.ERROR} />}
                    <Button className={cls.loginBtn} theme={ThemeButton.OUTLINE} onClick={onLoginClick} disabled={isLoading}>
                        {t("Войти")}
                    </Button>
                </div>
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(LoginForm);
