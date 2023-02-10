export interface Recensione {
    _id: string;
    title: string;
    publicationDate: string;
    content: string;
    score: number;
    reviewerName: string;
    imageUrls: string[];
    reviewedGame: ReviewedGame;
    __v: number;
}

export interface ReviewedGame{
    id: string;
    name: string;
}