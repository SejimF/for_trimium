import {IPost, TYPES} from '../models/post';

export const mockPosts: Array<IPost> = [
        {
            id: 1,
            authorId: 1,
            type: TYPES.DOCUMENT,
            content: "https://angular.io/"
        },
        {
            id: 2,
            authorId: 1,
            type: TYPES.GEOLOCATION,
            content: "44.1271001,43.116495,14"
        },
        {
            id: 3,
            authorId: 100,
            type: TYPES.PICTURE,
            content: 'data:image/jpeg;base64,mockdata'
        },
        {
            id: 4,
            authorId: 100,
            type: TYPES.LINK,
            content: 'www.google.com'
        }
]