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
    {
      year: '2025',
      role: 'Cloud Developer',
      company: 'LCM Solutions',
      about: `As a Cloud Developer with a JavaScript background and strong analytical thinking, my focus extends beyond just coding. I design and build dynamic, responsive frontends using Angular and React, and develop robust backend services with .NET Core. My daily work involves integrating APIs, optimizing data flow, and solving complex challenges with precision. I ensure reliability and scalability in cloud environments like Azure, and my communication and problem-solving skills are key to delivering effective, user-centric applications.`,
    },
    {
      year: '2024',
      role: 'Full Stack Developer',
      company: 'LCM Solutions',
      about: `This year marked my transition into the cloud space. As a Junior Cloud Developer, I was responsible for deploying and maintaining applications on cloud platforms such as AWS and Azure. I gained hands-on experience with cloud-based architecture, containerization (Docker), and continuous integration/deployment (CI/CD) pipelines. My understanding of full-stack technologies matured through real-world projects requiring both frontend and backend coordination.`,
    },
    {
      year: '2023',
      role: 'Full Stack Developer',
      company: 'LCM Solutions',
      about: `In 2023, I advanced my skills as a full stack developer by working on enterprise-level applications. I collaborated with cross-functional teams to deliver solutions using Angular for frontends and .NET Core for APIs and backend services. This year emphasized writing clean, maintainable code, following agile methodologies, and implementing unit/integration testing. I also contributed to database schema design and performance tuning.`,
    },
    {
      year: '2022',
      role: 'Junior Developer',
      company: 'LCM Solutions',
      about: `During this year, I solidified my understanding of MVC architecture using ASP.NET MVC and .NET Core. I worked on projects that used Razor pages for web development and began building RESTful services. It was a crucial period where I learned how to structure web apps, write maintainable C# code, and interact with relational databases using Entity Framework.`,
    },
    {
      year: '2021',
      role: 'Data Analyst',
      company: 'LCM Solutions',
      about: `This year focused on advanced data analysis. I explored complex SQL queries, data joins, and data wrangling techniques. I worked extensively on cleaning and preparing data for reports and dashboards. I also started experimenting with data visualization tools and basic machine learning techniques to generate actionable insights from raw datasets.`,
    },
    {
      year: '2020',
      role: 'Junior Analyst',
      company: 'LCM Solutions',
      about: `I expanded my SQL knowledge and began using R for statistical computing and data visualization. I worked on real-world data projects involving hypothesis testing, regression models, and exploratory data analysis. I also developed web UIs using HTML, CSS, and Bootstrap — a key milestone in bridging my interest between data and web development.`,
    },
    {
      year: '2019',
      role: 'Database Administrator',
      company: 'Scotch College',
      about: `My time at Scotch College was instrumental in shaping my approach to systems and automation. I served as a boarding master, overseeing daily operations in the boarding house. I used and helped maintain a system for role calls, student tracking, and communication. This real-world application of database management and data entry sparked a deeper interest in system development.`,
    },
    {
      year: '2018',
      role: 'Database Administrator',
      company: 'LCM Solutions',
      about: `I graduated from Pretoria Boys High School with a distinction in IT. My final year project involved building a system to automate routine tasks in the school’s boarding house. It captured various inputs using SQL and Delphi to streamline operations — this project laid the groundwork for my passion for building real-world solutions through software.`,
    },
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
    const fileUrl = 'assets/documents/LiamCV202.pdf';  
    const link = document.createElement('a');
    link.href = fileUrl;  
    link.download = 'LiamCV202.pdf';  
    link.click(); 
  }
}

