import { AlbumInterface } from './albumInterface';

export class Album implements AlbumInterface {
    albumTitle: string;
    albumArtist: string;
    albumDate: Date;
    albumPicture: File;
    albumDuration: number;
    numberOfSongs: number;
    inFavorites: boolean;
}