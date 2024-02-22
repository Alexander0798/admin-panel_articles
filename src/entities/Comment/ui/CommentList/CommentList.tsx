import { FC, memo } from "react";
import cls from "./CommentList.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Comment } from "../../model/types/comment";
import { CommentCard } from "../CommentCard/CommentCard";
import { Text } from "shared/ui/Text/Text";

interface Props {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const Component: FC<Props> = (props) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation("article-details");

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading={true} />
                <CommentCard isLoading={true} />
                <CommentCard isLoading={true} />
            </div>
        );
    }
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments ? (
                comments.map((comment: Comment) => <CommentCard comment={comment} key={comment.id} isLoading={isLoading} />)
            ) : (
                <Text text={t("Комментарии отсутсвуют")} />
            )}
        </div>
    );
};
export const CommentList = memo(Component);
