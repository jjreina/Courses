export class CourseEntity {
    id: string;
    title: string;
    watchHref: string;
    authorId: string;
    length: string;
    category: string;

    public constructor() {
        this.id = "",
        this.title = "",
        this.watchHref = "",
        this.authorId = "",
        this.length = "",
        this.category = ""
    }
}