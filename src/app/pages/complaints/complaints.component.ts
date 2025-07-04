import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-complaints',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen py-8">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">
            {{ currentLanguage === 'ar' ? 'الشكاوى والاقتراحات' : 'Complaints & Wishlist' }}
          </h1>
          <p class="text-gray-600 max-w-2xl mx-auto">
            {{ currentLanguage === 'ar' ? 'نحن نستمع إليكم' : 'We listen to you' }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">
              {{ currentLanguage === 'ar' ? 'تقديم شكوى' : 'Submit Complaint' }}
            </h2>
            <form class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {{ currentLanguage === 'ar' ? 'العنوان' : 'Title' }}
                </label>
                <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {{ currentLanguage === 'ar' ? 'الوصف' : 'Description' }}
                </label>
                <textarea rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
              </div>
              <button type="submit" class="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
                {{ currentLanguage === 'ar' ? 'إرسال الشكوى' : 'Submit Complaint' }}
              </button>
            </form>
          </div>

          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">
              {{ currentLanguage === 'ar' ? 'اقتراح مشروع' : 'Suggest Project' }}
            </h2>
            <form class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {{ currentLanguage === 'ar' ? 'عنوان المشروع' : 'Project Title' }}
                </label>
                <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {{ currentLanguage === 'ar' ? 'وصف المشروع' : 'Project Description' }}
                </label>
                <textarea rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
              </div>
              <button type="submit" class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                {{ currentLanguage === 'ar' ? 'إرسال الاقتراح' : 'Submit Suggestion' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `
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