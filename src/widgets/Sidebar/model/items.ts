import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about.svg";
import MainIcon from "shared/assets/icons/main.svg";
import ProfileIcon from "shared/assets/icons/profile-link.svg";
import ArticleIcon from "shared/assets/icons/articles.svg";

export interface SidebarItemsType {
    path: string;
    text: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemsType[] = [
    {
        path: RoutePath.main,
        text: "Главная",
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: "О сайте",
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: "Профиль",
        Icon: ProfileIcon,
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        text: "Статьи",
        Icon: ArticleIcon,
        authOnly: true,
    },
];
