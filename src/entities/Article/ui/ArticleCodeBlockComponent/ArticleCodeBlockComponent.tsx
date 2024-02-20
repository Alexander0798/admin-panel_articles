import { FC, memo } from "react";
import cls from "./ArticleCodeBlockComponent.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleCodeBlok } from "../../model/types/article";
import { Code } from "shared/ui/Code/Code";

interface Props {
    className?: string;
    block: ArticleCodeBlok;
}

const Component: FC<Props> = (props) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
};

export const ArticleCodeBlockComponent = memo(Component);
