import {IUser} from '../models/user';

export const mockUsers: Array<IUser> = [
    {
        id: 1,
        avatar: "data:image/jpeg;base64, mockAvatar",
        blocked: false,
        firstName: 'Maxim',
        lastName: 'Kolodko',
        patronymic: 'Vladimirovich',
        postIds: [1, 2]
    },
    {
        id: 2,
        avatar: "data:image/jpeg;base64, mockAvatar",
        blocked: false,
        firstName: 'Maxim2',
        lastName: 'Kolodko2',
        patronymic: 'Vladimirovich2',
        postIds: []
    },
    {
        id: 3,
        avatar: "data:image/jpeg;base64, mockAvatar",
        blocked: false,
        firstName: 'Phillip',
        lastName: 'Kolodko',
        patronymic: 'Vanmeter',
        postIds: []
    },
    {
        id: 100,
        avatar: "data:image/jpeg;base64, mockAvatar",
        blocked: false,
        firstName: 'Prokhor',
        lastName: 'Blokhin',
        patronymic: 'Vanmeter',
        postIds: []
    }
]