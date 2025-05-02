import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
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
}
