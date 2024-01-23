import { Component, OnInit } from '@angular/core';

declare const QrScanner: any; 

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {
  constructor() {}

  ngOnInit(): void {
    this.setupScanner();
  }

  private async startScanning() {
    const videoElement = document.getElementById('video') as HTMLVideoElement;
    const outputElement = document.getElementById('output') as HTMLDivElement;

    if (!videoElement || !outputElement) {
      console.error('Video or output element not found.');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoElement.srcObject = stream;
      videoElement.style.display = 'block'; // Show the video
    } catch (error) {
      console.error('Error accessing the webcam:', error);
    }

    const qrScanner = new QrScanner(videoElement, (result: any) => {
      outputElement.textContent = `Scanned Data: ${result}`;
    });

    qrScanner.start();
  }

  private setupScanner() {
    document.addEventListener('DOMContentLoaded', (event) => {
      const startButton = document.getElementById('startButton');
      if (startButton) {
        startButton.addEventListener('click', () => {
          this.startScanning();
        });
      } else {
        console.error('Start button not found.');
      }
    });
  }
}