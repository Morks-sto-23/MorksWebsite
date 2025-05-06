import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';
import { NzNotificationModule, NzNotificationService } from 'ng-zorro-antd/notification';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,NzButtonModule,NzNotificationModule,NzMessageModule ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService,private message: NzMessageService) {
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
          // 1) show a success toast
          this.message.success('Your message has been sent! ');
          console.log('Message sent successfully:', response);
          // 2) optionally reset the form
          this.contactForm.reset();
        },
        error => {
          this.message.error('Error sending your message. Please try again.');
          console.error('Error sending message:', error);
        }
      );
    } else {
      // show an immediate warning if they hit submit on an invalid form
      this.message.warning('Please fill in all required fields.');
      this.contactForm.markAllAsTouched();
    }
  }
  // createNotification(): void {
  //   this.notification
  //     .blank(
  //       'Notification Title',
  //       'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
  //     )
  //     .onClick.subscribe(() => {
  //       console.log('notification clicked!');
  //     });
  // }
  createBasicMessage(): void {
    this.message.info('Thank you for reaching out we will be in contact shortly ');
  }
}
