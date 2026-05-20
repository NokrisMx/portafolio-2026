import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Portfolio } from '../interfaces/portfolio-interface';
import { Observable } from 'rxjs';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private http = inject(HttpClient);

  getPortfolio(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(`${baseUrl}/portfolio`);
  }

  constructor() {}
}
