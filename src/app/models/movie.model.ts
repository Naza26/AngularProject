export class Movie {
    public title: string;
    public releaseYear: string;
    public description: string;
    public seenMovie: boolean;
    public imagePath?: string;

    constructor(title: string, releaseDate: string, description: string, seenMovie: boolean, image: string) {
        this.title = title;
        this.releaseYear = releaseDate;
        this.description = description;
        this.seenMovie = seenMovie;
        this.imagePath = image;
    }
}