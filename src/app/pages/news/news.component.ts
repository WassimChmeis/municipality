import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {
  currentLanguage = 'en';
  newsItems: any[] = [];
  events: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
    });

    this.newsItems = this.dataService.getNews();
    this.events = this.dataService.getEvents();
  }

  getCategoryLabel(category: string): string {
    const labels: any = {
      'news': this.currentLanguage === 'ar' ? 'خبر' : 'News',
      'announcement': this.currentLanguage === 'ar' ? 'إعلان' : 'Announcement',
      'event': this.currentLanguage === 'ar' ? 'حدث' : 'Event'
    };
    return labels[category] || category;
  }
} 