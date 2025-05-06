import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';
import { NzNotificationModule, NzNotificationService } from 'ng-zorro-antd/notification';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,NzButtonModule,NzNotificationModule ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService,private notification: NzNotificationService) {
    this.contactForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    console.log('ContactComponent initialized');
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const contactData = this.contactForm.value;
      this.contactService.sendContactMessage(contactData).subscribe(
        response => {
          console.log('Message sent successfully:', response);
          alert('Your message has been sent!');
        },
        error => {
          console.error('Error sending message:', error);
          alert('There was an error sending your message. Please try again later.');
        }
      );
    }
  }
  createNotification(): void {
    this.notification
      .blank(
        'Notification Title',
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      )
      .onClick.subscribe(() => {
        console.log('notification clicked!');
      });
  }
}
