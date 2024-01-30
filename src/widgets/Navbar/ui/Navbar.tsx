import { FC, useCallback, useState } from "react";
import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Portal } from "shared/ui/Portal/Portal";
import { LoginModal } from "features/AuthByLogin";

interface Props {
    className?: string;
}

export const Navbar: FC<Props> = ({ className }: Props) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEAR_INVERTED} onClick={onShowModal}>
                {t("Войти")}
            </Button>
            <Portal>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            </Portal>
        </div>
    );
};
