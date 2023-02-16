export interface News {
    _id: string;
    title: string;
    category: string;
    imageUrl: string;
    content: string;
    publicationDate: string;
    authorName: string;
    tags: string[];
    __v: number;
}