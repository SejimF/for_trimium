export interface IUser {
    id: number;
    avatar: String;
    blocked: Boolean;
    firstName: String;
    lastName: String;
    patronymic: String;
    postIds: Array<number>;
}