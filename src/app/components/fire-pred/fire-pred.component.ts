import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-fire-pred',
  templateUrl: './fire-pred.component.html',
  styleUrls: ['./fire-pred.component.css']
})
export class FirePredComponent implements OnInit, OnDestroy {
  detectionStatus = 'Not running';
  private statusSubscription: Subscription | undefined;
  // videoFeedUrl = 'http://localhost:5000/video_feed';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Fetch detection status every 5 seconds
    this.statusSubscription = interval(5000).subscribe(() => {
      this.fetchDetectionStatus();
    });
  }

  ngOnDestroy() {
    // Unsubscribe from the status updates when the component is destroyed
    if (this.statusSubscription) {
      this.statusSubscription.unsubscribe();
    }
  }

  fetchDetectionStatus() {
    this.http.get<any>('http://localhost:5000/detection_status').subscribe(
      response => {
        this.detectionStatus = response.status;
      },
      error => {
        console.error('Error fetching detection status:', error);
      }
    );
  }

  startFireDetection() {
    this.http.get('http://localhost:5000/start_fire_detection').subscribe(
      response => {
        console.log(response);

        // this.videoFeedUrl = 'http://127.0.0.1:5000/video_feed';

        // Handle the response from the server as needed
      },
      error => {
        console.error('Error starting fire detection:', error);
      }
    );
  }

  stopFireDetection() {
    this.http.get('http://localhost:5000/stop_fire_detection').subscribe(
      response => {
        console.log(response);
        // Handle the response from the server as needed
        // this.videoFeedUrl = '';

      },
      error => {
        console.error('Error stopping fire detection:', error);
      }
    );
  }
}
