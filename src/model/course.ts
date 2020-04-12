export class CourseEntity {
    public id: string;
    public title: string;
    public watchHref: string;
    public authorId: string;
    public length: string;
    public category: string;

    public constructor() {
        this.id = '',
        this.title = '',
        this.watchHref = '',
        this.authorId = '',
        this.length = '',
        this.category = '';
    }
}
