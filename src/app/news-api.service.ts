import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIKEY } from '../private';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  
  constructor(private http: HttpClient) { }

  // prepare left-side menu with some news resources
  initSources() {
    return this.http.get(`https://newsapi.org/v2/sources?language=en&apiKey=${APIKEY}`);
  }

  initArticles() {
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${APIKEY}`);
  }

  getArticlesById(source: string) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${APIKEY}`);
  }
}
