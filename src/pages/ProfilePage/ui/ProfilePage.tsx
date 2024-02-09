/* eslint-disable i18next/no-literal-string */
import { FC } from "react";
import cls from "./ProfilePage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { profileReducer } from "../../../entities/Profile";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const reducers = {
    profile: profileReducer,
};
interface Props {
    className?: string;
}

const ProfilePage: FC<Props> = ({ className }: Props) => {
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>ProfilePage</div>
        </DynamicModuleLoader>
    );
};
export default ProfilePage;
