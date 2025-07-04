import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-complaints',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './complaints.component.html'
})
export class ComplaintsComponent implements OnInit {
  currentLanguage = 'en';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
    });
  }
} 