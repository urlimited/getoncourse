export class User{
    constructor(data) {
        this.id = data.id ?? 0;
        this.name = data.name ?? "";
        this.address = data.address ?? "";
        this.email = data.email ?? "";
        this.phone = data.phone ?? EMPTY_TEXT_PHONE;
        this.avatar = data.avatar ?? 1;
        this.role = data.role ?? USER_TYPE_NOT_LOADED;
    }

    isClient = () => this instanceof Client;
    isStaff = () => this instanceof Staff;
    isAdmin = () => this instanceof Admin;
    isNotLoadedUser = () => this instanceof NotLoadedUser;

    getName = () => this.name;
    getEmail = () => this.email;
    getPhone = () => this.phone;
    getRole = () => ({
        [USER_TYPE_ADMIN]: "администратор",
        [USER_TYPE_STAFF]: "преподаватель",
        [USER_TYPE_CLIENT]: "обучающийся",
        [USER_TYPE_NOT_LOADED]: "загружается"
    }[this.role]);

}

export class UserFactory {
    static createUser = (data) => {
        const processedUserType = {
            "1": "admin",
            "2": "staff",
            "3": "client",
            "4": "not_loaded",
        }[data?.role ?? 4]

        if(processedUserType === "client")
            return new Client(data);

        if(processedUserType === "staff")
            return new Staff(data);

        if(processedUserType === "admin")
            return new Admin(data);

        return new NotLoadedUser(data);
    }
}

export class Client extends User{
    _permissions = [""];

    constructor(data) {
        super(data);
    }
}

export class Staff extends User{
    _permissions = [""];

    constructor(data) {
        super(data);

    }
}

export class Admin extends User{
    _permissions = [""];

    constructor(data) {
        super(data);
    }
}

export class NotLoadedUser extends User {
    constructor(data) {
        super(data);
    }
}

export const USER_TYPE_ADMIN = 1;
export const USER_TYPE_STAFF = 2;
export const USER_TYPE_CLIENT = 3;
export const USER_TYPE_NOT_LOADED = 4;

export const EMPTY_TEXT_PHONE = "не указан";
