import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {
  @ViewChild('chatContainer') private chatContainerRef: ElementRef | any;
  messages: any[] = [];
  message: string = '';

  constructor(private http: HttpClient) {}

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  sendMessage() {
    if (this.message.trim() === '') {
      return;
    }

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { message: this.message };
    this.http.post<any>('http://127.0.0.1:5000/chat', body, { headers }).subscribe(
      (data) => {
        this.messages.push({ sender: 'user', content: this.message });
        this.messages.push({ sender: 'bot', content: data.response });
        this.message = '';
      },
      (error) => {
        console.error(error);
        this.messages.push({ sender: 'user', content: this.message });
        this.messages.push({ sender: 'bot', content: 'Error occurred. Please try again later.' });
        this.message = '';
      }
    );
  }

  scrollToBottom(): void {
    try {
      this.chatContainerRef.nativeElement.scrollTop = this.chatContainerRef.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
