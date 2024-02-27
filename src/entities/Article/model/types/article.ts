import { User } from "entities/User";

export enum ArticleBlockType {
    TEXT = "TEXT",
    IMAGE = "IMAGE",
    CODE = "CODE",
}
export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}
export interface ArticleTextBlok extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}
export interface ArticleCodeBlok extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}
export interface ArticleImageBlok extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    title: string;
    src: string;
}

export type ArticleBlock = ArticleTextBlok | ArticleCodeBlok | ArticleImageBlok;

export enum ArticleType {
    IT = "IT",
    SCIENCE = "SCIENCE",
    ECONOMICS = "ECONOMICS",
}
export enum ArticleView {
    LIST = "list",
    TILED = "tiled",
}
export interface Article {
    id: string;
    title: string;
    user: User;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
