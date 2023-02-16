export interface Recensione {
     _id: string;
    title: string;
    publicationDate: string;
    content: string;
    score: number;
    reviewerName: string;
    imageUrls: [];
    reviewedGame: ReviewedGame;
}

export interface ReviewedGame{
    id: string;
    name: string;
}