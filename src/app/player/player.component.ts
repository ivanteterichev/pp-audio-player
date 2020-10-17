import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  public playing: boolean;
  public currentTrack: number;

  // Inputs():
  public trackTitle: string;
  public trackArtist: string;
  public trackAlbom: string;
  public trackGenre: string;
  public trackDate: Date;
  public trackLength: number;

  public trackLengthLast: number;
  public inFavorites: boolean;

  // В другой класс?
  public soundVolume: number;

  constructor() { }

  ngOnInit(): void {
  }

  public openFile() {
    //
  }

  public play(): void {
    this.playing = true;
  }

  public pause(): void {
    this.playing = false;
  }

  public stop(): void {
    this.pause();
    //
  }

  public prevTrack(): void {
    this.currentTrack--;
  }

  public nextTrack(): void {
    this.currentTrack++;
  }

  public calculateTrackTime(): number {
    return this.trackLength - this.trackLengthLast; 
  }

  // onSlider
  public changeTrackLenghtLast(): void {
    //
  }

  public isFirstTrack(): boolean {
    //
    return;
  }

  public isLastTrack(): boolean {
    //
    return; 
  }

  // ?
  public get getTrackTitle(): string {
    return this.trackTitle;
  }

  // ?
  public get getTrackArtist(): string {
    return this.trackArtist;
  }

  // ?
  public get getTrackAlbom(): string {
    return this.trackAlbom;
  }

  // ?
  public get getTrackGenre(): string {
    return this.trackGenre;
  }

  // ?
  public get getTrackDate(): Date {
    return this.trackDate;
  }

  // ?
  public get getSoundVolume(): number {
    return this.soundVolume;
  }

  // ?
  public get getInFavorites(): boolean {
    return this.inFavorites;
  }
}
