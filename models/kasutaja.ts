export class Kasutaja{
    public id: number;
    public name: string;
    public password: string;
    public firstname: string;
    public surname: string;

    constructor(
        id: number,
        name: string,
        password: string,
        firstname: string,
        surname: string
    ) {
        this.id = id;
        this.name = name
        this.password = password
        this.firstname = firstname
        this.surname = surname
    }
}