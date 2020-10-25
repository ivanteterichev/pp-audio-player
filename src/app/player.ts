export class Player {
  playing: boolean;
  currentTrack: number;
  trackLengthLast: number;
  soundVolume: number;
  
  play(): void {
    this.playing = true;
  }
  
  pause(): void {
    this.playing = false;
  }
  
  stop(): void {
    this.pause();
  }
  
  prevTrack(): void {
    this.currentTrack--;
  }
  
  nextTrack(): void {
    this.currentTrack++;
  }
  
  changeTrackLenghtLast(): void { }
  
  changeSoundVolume(): void { }
  
  calculateTrackTime(): number {
    return; 
  }
  
  isFirstTrack(): boolean {
    return;
  }
  
  isLastTrack(): boolean {
    return; 
  }
}