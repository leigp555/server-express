export interface userType {
    username: string,
    "email": string,
    "password": string,
    "bio": string,
    "img": string,
    "createAt": Date,
    "updatedAt": Date,
}

export interface articleFilter{
    tagList?:string[],
    author?:string
}