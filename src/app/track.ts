import { AlbumInterface } from './albumInterface';

export class Track {
  trackTitle: string;
  trackArtist: string;
  trackAlbum: AlbumInterface;
  trackGenre: string;
  trackDate: Date;
  trackLength: number;
  inFavorites: boolean;
}