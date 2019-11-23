export interface IUser {
    id: number;
    blocked: Boolean;
    firstName: String;
    lastName: String;
    patronymic: String;
    postIds: Array<number>;
}