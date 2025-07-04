import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  currentLanguage = 'en';
  isMobileMenuOpen = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  setLanguage(language: string) {
    this.dataService.setLanguage(language);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
} 