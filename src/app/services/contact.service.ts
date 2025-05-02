import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient for making HTTP requests
import { delay, Observable, of } from 'rxjs'; // Import Observable for handling asynchronous operations
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  // Method to send the contact message to the Azure Function
  sendContactMessage(contactData: any): Observable<any> {
    // Simulate a successful response after a delay (mimicking a real API call)
    return of({ success: true, message: 'Message sent successfully!' }).pipe(delay(1000));
  }
}
