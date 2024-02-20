import { FC, memo } from "react";
import cls from "./ArticleImageBlockComponent.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleImageBlok } from "../../model/types/article";
import { Align, Text } from "shared/ui/Text/Text";

interface Props {
    className?: string;
    block: ArticleImageBlok;
}

const Component: FC<Props> = (props) => {
    const { className, block } = props;
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.img} />
            {block.title && <Text text={block.title} align={Align.CENTER} className={cls.title} />}
        </div>
    );
};
export const ArticleImageBlockComponent = memo(Component);
