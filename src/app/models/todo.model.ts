class ToDo {
    _id:string;
    title: string;
    description: string;
    date: Date;
    status: boolean;
    priority: string;

    constructor(
    ){
        this.title = ""
        this.description = ""
        this.date = new Date()
        this.status = false
        this.priority = ""
    }
}

export default ToDo;