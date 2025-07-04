import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-committee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './committee.component.html'
})
export class CommitteeComponent implements OnInit {
  currentLanguage = 'en';
  members: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
    });

    this.members = this.dataService.getCommitteeMembers();
  }
} 