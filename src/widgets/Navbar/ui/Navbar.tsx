import { FC, useCallback, useState } from "react";
import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import { Portal } from "shared/ui/Portal/Portal";

interface Props {
    className?: string;
}

export const Navbar: FC<Props> = ({ className }: Props) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEAR_INVERTED} onClick={onToggleModal}>
                {t("Войти")}
            </Button>
            <Portal>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    Эафывафыв
                </Modal>
            </Portal>
        </div>
    );
};
