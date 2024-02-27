import { FC, memo } from "react";
import cls from "./ArticleViewSelector.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

import { ArticleView } from "entities/Article/model/types/article";
import TiledIcon from "shared/assets/icons/viewTiled.svg";
import ListIcon from "shared/assets/icons/viewList.svg";
import { Icon } from "shared/ui/Icon/Icon";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface Props {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.TILED,
        icon: TiledIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
];

const Component: FC<Props> = (props) => {
    const { className, view, onViewClick } = props;
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };
    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button theme={ThemeButton.CLEAR} key={viewType.view} onClick={onClick(viewType.view)}>
                    <Icon Src={viewType.icon} className={classNames("", { [cls.selected]: viewType.view === view })} />
                </Button>
            ))}
        </div>
    );
};
export const ArticleViewSelector = memo(Component);
