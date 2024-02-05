import { FC, Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import { Loader } from "shared/ui/Loader/Loader";

interface Props {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<Props> = (props: Props) => {
    const { className, isOpen, onClose } = props;
    return (
        <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames("", {}, [className])}>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
