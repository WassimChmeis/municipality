import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { 
  NewsItem, 
  Event, 
  CommitteeMember, 
  Complaint, 
  WishlistItem, 
  DonationProject, 
  VillageInfo,
  Language 
} from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private currentLanguage = new BehaviorSubject<string>('en');

  // Village Information
  private villageInfo = {
    name: 'Kefraya Village',
    nameAr: 'قرية كفريا',
    description: 'A beautiful village nestled in the mountains of Lebanon, known for its rich history and warm community.',
    descriptionAr: 'قرية جميلة تقع في جبال لبنان، تشتهر بتاريخها العريق ومجتمعها الدافئ.',
    population: 3500,
    area: 12.5,
    altitude: 850
  };

  // News Items
  private newsItems = [
    {
      id: 1,
      title: 'New Community Center Opens',
      titleAr: 'افتتاح مركز المجتمع الجديد',
      content: 'The new community center has officially opened its doors to serve the residents of Kefraya.',
      contentAr: 'افتتح مركز المجتمع الجديد أبوابه رسمياً لخدمة سكان كفريا.',
      date: '2024-12-15',
      category: 'news'
    },
    {
      id: 2,
      title: 'Road Maintenance Project Completed',
      titleAr: 'انتهاء مشروع صيانة الطرق',
      content: 'The municipality has successfully completed the road maintenance project.',
      contentAr: 'أنجزت البلدية بنجاح مشروع صيانة الطرق.',
      date: '2024-12-10',
      category: 'announcement'
    }
  ];

  // Events
  private events = [
    {
      id: 1,
      title: 'Village Festival 2025',
      titleAr: 'مهرجان القرية 2025',
      description: 'Annual celebration featuring traditional music, dance, and local cuisine',
      descriptionAr: 'احتفال سنوي يتضمن موسيقى تقليدية ورقص وطعام محلي',
      date: '2025-07-15',
      time: '18:00',
      location: 'Village Square',
      status: 'upcoming'
    }
  ];

  // Committee Members
  private committeeMembers = [
    {
      id: 1,
      name: 'Ahmad Mahmoud',
      nameAr: 'أحمد محمود',
      role: 'Mayor',
      roleAr: 'رئيس البلدية',
      email: 'mayor@kefraya.gov.lb',
      phone: '+961 1 234567'
    },
    {
      id: 2,
      name: 'Layla Khoury',
      nameAr: 'ليلى خوري',
      role: 'Deputy Mayor',
      roleAr: 'نائبة رئيس البلدية',
      email: 'deputy@kefraya.gov.lb',
      phone: '+961 1 234568'
    }
  ];

  // Donation Projects
  private donationProjects = [
    {
      id: 1,
      title: 'Community Healthcare Center',
      titleAr: 'مركز الرعاية الصحية المجتمعية',
      description: 'Building a modern healthcare facility to serve the community',
      descriptionAr: 'بناء مرفق رعاية صحية حديث لخدمة المجتمع',
      targetAmount: 50000,
      currentAmount: 35000,
      currency: 'USD',
      category: 'healthcare',
      status: 'active',
      donors: 89
    }
  ];

  constructor() {}

  // Language methods
  getCurrentLanguage(): Observable<string> {
    return this.currentLanguage.asObservable();
  }

  setLanguage(language: string): void {
    this.currentLanguage.next(language);
  }

  // Data getter methods
  getVillageInfo() {
    return this.villageInfo;
  }

  getNews() {
    return this.newsItems;
  }

  getEvents() {
    return this.events;
  }

  getCommitteeMembers() {
    return this.committeeMembers;
  }

  getDonationProjects() {
    return this.donationProjects;
  }

  formatCurrency(amount: number, currency: string): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  }
} 