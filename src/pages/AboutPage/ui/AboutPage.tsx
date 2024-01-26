import { useTranslation } from "react-i18next";
import { FC } from "react";
import { BugButton } from "app/providers/ErrorBoudary";


const AboutPage: FC = () => {
    const { t } = useTranslation("aboutPage");
    return (
        <>
            <p>{t("О сайте")}</p>
            <BugButton />
        </>
    );
};

export default AboutPage;
