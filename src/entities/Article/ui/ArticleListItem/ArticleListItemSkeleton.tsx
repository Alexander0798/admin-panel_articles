import { FC, memo } from "react";
import cls from "./ArticleListItem.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Card } from "shared/ui/Card/Card";
import { ArticleView } from "../../model/types/article";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface Props {
    className?: string;
    view: ArticleView;
}

const Component: FC<Props> = (props) => {
    const { className, view } = props;

    const views: JSX.Element = (
        <>
            <Skeleton width={30} height={16} className={cls.views} />
            <Skeleton width={16} height={16} border="60%" className={cls.icon} />
        </>
    );
    const viewPlate = (
        <Card className={cls.card}>
            <div className={cls.imageWrapper}>
                <Skeleton width={200} height={200} className={cls.img} />
            </div>
            <div className={cls.infoWrapper}>
                <Skeleton width={50} height={16} className={cls.type} />
                {views}
            </div>
            <Skeleton width={150} height={16} className={cls.type} />
        </Card>
    );

    const viewList = (
        <Card className={cls.card}>
            <div className={cls.header}>
                <Skeleton width={30} height={30} border="60%" className={cls.avatar} />
                <Skeleton width={30} height={16} className={cls.username} />
                <Skeleton width={40} height={16} className={cls.date} />
            </div>
            <Skeleton width="50%" height={16} className={cls.title} />
            <Skeleton width={50} height={16} className={cls.type} />
            <Skeleton width="100%" height={250} className={cls.img} />
            <Skeleton width="90%" height={16} className={cls.img} />
            <Skeleton width="80%" height={16} className={cls.img} />
            <Skeleton width="60%" height={16} className={cls.img} />
            <Skeleton width="40%" height={16} className={cls.img} />
            <Skeleton width="20%" height={16} className={cls.img} />
            <div className={cls.footer}>
                <Skeleton width={100} height={30} className={cls.type} />
                {views}
            </div>
        </Card>
    );
    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            {view === ArticleView.LIST ? viewList : viewPlate}
        </div>
    );
};
export const ArticleListItemSkeleton = memo(Component);
