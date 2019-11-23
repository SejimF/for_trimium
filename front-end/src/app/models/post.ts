export interface IPost {
    id: number;
    authorId: number;
    type: TYPES;
    content: String;
}

export const enum TYPES{
    DOCUMENT,
    VIDEO,
    PICTURE,
    LINK,
    GEOLOCATION
}