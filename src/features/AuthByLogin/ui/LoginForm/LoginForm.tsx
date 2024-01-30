import { FC } from "react";
import cls from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";

interface Props {
    className?: string;
}

export const LoginForm: FC<Props> = ({ className }: Props) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autofocus type="text" placeholder={t("Введите логин")} />
            <Input type="text" placeholder={t("Введите пароль")} />
            <Button className={cls.loginBtn}>{t("Войти")}</Button>
        </div>
    );
};
