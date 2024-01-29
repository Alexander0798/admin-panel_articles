import { useTranslation } from "react-i18next";
import { FC } from "react";
import { Counter } from "entities/Counter";

const MainPage: FC = () => {
    const { t } = useTranslation("mainPage");
    return <div>{t("Главная страница")}</div>;
};

export default MainPage;
