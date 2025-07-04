import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  currentLanguage = 'en';
  villageInfo: any = {};
  latestNews: any[] = [];
  donationProjects: any[] = [];

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
    });

    this.villageInfo = this.dataService.getVillageInfo();
    this.latestNews = this.dataService.getNews().slice(0, 3);
    this.donationProjects = this.dataService.getDonationProjects();
  }
} 