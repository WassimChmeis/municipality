import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { CommitteeComponent } from './pages/committee/committee.component';
import { ComplaintsComponent } from './pages/complaints/complaints.component';
import { DonationsComponent } from './pages/donations/donations.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'committee', component: CommitteeComponent },
  { path: 'complaints', component: ComplaintsComponent },
  { path: 'donations', component: DonationsComponent },
  { path: '**', redirectTo: '' }
];
