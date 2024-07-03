import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { error } from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit{
  @ViewChild('video') videoElement!: ElementRef<HTMLVideoElement>;

  constructor(private el: ElementRef){}

  ngAfterViewInit(){
    const video = this.videoElement.nativeElement;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const callBack = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          video.play().catch(error => {
            console.error('Video Playback failed:', error);
            this.showPlayButton();
          });
        } else {
          video.pause();
        }
      });
    };
    const observer = new IntersectionObserver(callBack, options);
    observer.observe(video);
  }
  showPlayButton() {
    const playButton = this.el.nativeElement.querySelector('.play-button');
    playButton.classList.remove('hidden');
    
  }
}
