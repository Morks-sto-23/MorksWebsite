import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzProgressModule } from 'ng-zorro-antd/progress';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NzCarouselModule,CommonModule,NzProgressModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.less'
})
export class ProjectsComponent {

  // Technologies used with images
  techStack: { name: string, image: string }[] = [
    { name: 'Angular', image: '/assets/images/angular.jpg' },
    { name: 'Microsoft Azure', image: '/assets/images/azure.png' },
    { name: 'Git', image: '/assets/images/git.jpg' }, 
    { name: 'TypeScript', image: '/assets/images/ts.png' },
    { name: 'Node.js', image: '/assets/images/nodejs.png' },
    { name: 'JavaScript', image: '/assets/images/js.jpg' },
    { name: 'HTML/CSS', image: '/assets/images/html.png' },
    { name: 'R', image: '/assets/images/r.png' },
    { name: '.Net core', image: '/assets/images/dotNet.png' },       
    { name: 'React', image: '/assets/images/React.png' }, 
    { name: 'Python', image: '/assets/images/python.png' }, 
    { name: 'Nz Zarro', image: '/assets/images/nzarro.png' }, 
    
  ];


}
