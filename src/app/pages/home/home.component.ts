import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NzCardModule } from 'ng-zorro-antd/card'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NzCardModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  // Static array of projects
  projects = [
    {
      title: 'Web Development',
      imageUrl: 'assets/images/background.jpg',
      description: `Whether you're looking to build a brand-new web or mobile application, modernize an existing platform, or need expert support for ongoing projects, we provide customized web development solutions designed to meet your unique goals.
     Our team specializes in a range of technology stacks, including Microsoft .NET, Python, and leading open-source frameworks. We focus on delivering scalable, secure, and high-performing applications tailored to your business needs. With a commitment to quality, 
     innovation, and long-term partnership, we ensure your digital solutions are built for today — and ready for tomorrow.`,
    },
    {
      title: 'Mobile Development',
      imageUrl: 'assets/images/Mobile.jpg',
      description: `Bridge the gap between your business and your audience with powerful mobile applications.
      We deliver expert development across Android, iOS, Flutter, and React Native — helping you launch intuitive, high-quality apps that drive engagement, streamline operations, and expand your mobile footprint.`,
    },
    {
      title: 'Database management and design',
      imageUrl: 'assets/images/code.jpg',
      description: `A well-structured, reliable database is the backbone of any successful application or business system. Our database management and design services ensure your data is organized, secure, and optimized for performance, empowering you to make faster, smarter decisions.
     We specialize in the architecture, development, and administration of databases across platforms like Microsoft SQL Server, MySQL, PostgreSQL, and cloud-native solutions such as Azure SQL and AWS RDS.
     From initial schema design to performance tuning, migration, and ongoing maintenance, we deliver scalable, high-availability solutions tailored to your operational needs. Whether you are building a new system or enhancing an existing one, we help you maximize the value and reliability of your data.`,
    },
    {
      title: 'UX and UI design',
      imageUrl: 'assets/images/UX.jpg',
      description: `Great design transforms user experiences into meaningful interactions. Our UX and UI design services focus on creating intuitive, visually appealing interfaces that are both user-centric and aligned with your business goals.
      We specialize in user research, wireframing, prototyping, and high-fidelity design across web and mobile platforms. By blending aesthetic beauty with seamless functionality, we craft designs that enhance engagement, improve user satisfaction, and drive conversions.
      From ideation to implementation, our team ensures your digital products are easy to navigate, visually stunning, and optimized for performance — creating exceptional experiences that keep users coming back.`,
    }
    
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('HomeComponent initialized');
  }
  
  expandedIndex: number | null = null; 
  toggleDescription(index: number): void {
    // If the clicked card is already expanded, collapse it; otherwise, expand it
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
