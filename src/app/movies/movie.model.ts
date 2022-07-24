export class Movie {
    public title: string;
    public releaseYear: string;
    public description: string;
    public imagePath: string;

    constructor(title: string, releaseDate: string, description: string, image: string) {
        this.title = title;
        this.releaseYear = releaseDate;
        this.description = description;
        this.imagePath = image;
    }
}