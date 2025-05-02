import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { ProjectsComponent } from '../projects/projects.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SharedModule, CommonModule, NzCarouselModule, ProjectsComponent, NzCardModule,NzButtonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']  
})
export class AboutComponent {
  name: string = 'Liam Morkel';
  title: string = 'Full Stack Developer';
  resumeUrl: string = '/assets/resume.pdf'; 

  // Bio section data
  bio: string = 'I’m a passionate Full Stack Developer with a love for building scalable web applications. With a background in Angular, TypeScript, and Node.js, I thrive on solving complex problems and building user-centric applications.';

  // Skills data
  skills: string[] = ['Angular', 'TypeScript', 'Node.js', 'JavaScript', 'HTML/CSS'];

  // Timeline section data (optional)
  experiences: { year: string, role: string, company: string , about : string}[] = [
    { year: '2025', role: 'Full Stack Developer', company: 'Morkel and son Solutions', about: 'Being a developer with a JavaScript background and strong analytical skills involves more than just writing code — it requires problem-solving, adaptability, and effective communication. You need to understand how to build dynamic, responsive front ends using frameworks like Angular or React, while also being comfortable working with APIs and consuming data efficiently.On the backend, familiarity with .NET Core enables you to create robust, scalable services that power modern applications. Knowing how to structure API calls, handle responses, and debug issues between the front and backend is essential. Strong analytical thinking helps you break down complex problems, optimize performance, and deliver user-centric solutions with clarity and precision' },
    { year: '2024', role: 'Junior Developer', company: 'Morkel and son Solutions',about: 'Being a Junior Cloud Developer means stepping into a dynamic and fast-evolving space where youre responsible for building, deploying, and maintaining applications on cloud platforms like AWS, Azure, or Google Cloud.'},
    { year: '2023', role: 'Network Manager', company: 'Morkel and son Solutions' ,about: ''},
    { year: '2022', role: 'Database Administrator', company: 'Morkel and son Solutions',about: 'Learning databases and cloud computing requires a blend of technical curiosity, structured thinking, and a willingness to adapt to evolving technologies. At its core, working with databases means understanding how data is stored, retrieved, and managed — from writing efficient SQL queries to designing normalized schemas and optimizing performance for scalability.Cloud computing introduces a shift in mindset — moving from traditional infrastructure to on-demand, scalable services. It involves learning how to deploy and manage applications using platforms like Azure or AWS, setting up databases, storage, networking, and monitoring — all within a virtual environment. Security, cost optimization, and high availability become key considerations.Together, databases and cloud computing form the backbone of modern software systems, and mastering them means thinking beyond code — it’s about architecting reliable, efficient, and secure systems that grow with your application’s needs.' }
  ];

  // Fun Facts
  funFacts: string[] = ['Hobbies: Fly Fishing', 'Favorite Quote: "Code is like humor. When you have to explain it, it’s bad."'];

  array = [
    'assets/images/Braai.jpg',
    'assets/images/dulstroomdam.jpg',
    'assets/images/LionsHead.jpg',
    'assets/images/SunsetCPT.jpg'
  ];
  effect = 'scrollx';
  trackByFn(index: number, item: string): any {
    return item;
  }
  downloadCV(): void {
    const link = document.createElement('a');
    link.href = this.resumeUrl;
    link.download = 'Liam_Morkel_CV.pdf'; 
    link.click();
  }
}

