import { FC, memo } from "react";
import cls from "./CommentCard.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Comment } from "../../model/types/comment";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface Props {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const Component: FC<Props> = (props) => {
    const { className, comment, isLoading } = props;
    const { t } = useTranslation("article-details");
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.user}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={100} height={16}  />
                </div>
                <Skeleton width="100%" height={50}  />
            </div>
        );
    }
    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.user}>
                {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
                <Text title={comment.user.username} />
            </div>
            <Text text={comment.text} />
        </div>
    );
};
export const CommentCard = memo(Component);
