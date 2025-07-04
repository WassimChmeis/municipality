import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-donations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donations.component.html'
})
export class DonationsComponent implements OnInit {
  currentLanguage = 'en';
  donationProjects: any[] = [];

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
    });

    this.donationProjects = this.dataService.getDonationProjects();
  }

  getProjectIcon(category: string): string {
    const icons: any = {
      'healthcare': '🏥',
      'education': '🎓',
      'infrastructure': '🏗️',
      'social': '👥',
      'cultural': '🎭'
    };
    return icons[category] || '📋';
  }

  getProgressPercentage(project: any): number {
    return Math.round((project.currentAmount / project.targetAmount) * 100);
  }
} 