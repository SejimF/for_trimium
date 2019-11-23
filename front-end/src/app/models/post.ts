export interface IPost {
    id: number;
    authorId: number;
    type: TYPES;
    content: string;
}

export enum TYPES{
    DOCUMENT,
    VIDEO,
    PICTURE,
    LINK,
    GEOLOCATION
}