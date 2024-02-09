import { FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface Props {
    className?: string;
    short?: boolean
}

const LangSwitcher: FC<Props> = ({ className, short }: Props) => {
    const { t, i18n } = useTranslation();
    const onToggle = () => {
        i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
    };
    return (
        <Button theme={ThemeButton.CLEAR} onClick={onToggle} className={classNames("", {}, [className])}>
            {t(short ? "Короткий Язык" :"Язык")}
        </Button>
    );
};
export default memo(LangSwitcher);