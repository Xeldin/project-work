export interface Videogioco {
    _id: string;
    title: string;
    releaseDate: string;
    genre: string;
    softwareHouse: string;
    publisher: string;
    numberOfPlayers: number;
    languages: Language;
    __v: number;
    coverImage: string;
}

export interface Language{
    voice: string[];
    text: string[];
}