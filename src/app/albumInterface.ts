export interface AlbumInterface {
    albumTitle: string;
    albumArtist: string;
    albumDate: Date;
    albumPicture: File;
    albumDuration: number;
    numberOfSongs: number;
    inFavorites: boolean;
}