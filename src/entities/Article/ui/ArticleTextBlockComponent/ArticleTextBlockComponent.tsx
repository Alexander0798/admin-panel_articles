import { FC, memo } from "react";
import cls from "./ArticleTextBlockComponent.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleTextBlok } from "../../model/types/article";
import { Text } from "shared/ui/Text/Text";

interface Props {
    className?: string;
    block: ArticleTextBlok;
}

const Component: FC<Props> = (props) => {
    const { className, block } = props;
    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && <Text title={block.title} className={cls.title} />}
            {block.paragraphs.map((paragraph) => (
                <Text text={paragraph} key={paragraph} className={cls.paragraph}/>
            ))}
        </div>
    );
};
export const ArticleTextBlockComponent = memo(Component);
