import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  constructor(private http: HttpClient) {}

  url = 'https://api.themoviedb.org/3';
  apikey = '704283d6d0ada734820f98896e7f513f';

  bannerApiData(): Observable<any> {
    return this.http.get(
      `${this.url}/trending/all/week?api_key=${this.apikey}`
    );
  }
  trendingMovieApiData(): Observable<any> {
    return this.http.get(
      `${this.url}/trending/movie/day?api_key=${this.apikey}`
    );
  }
  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this.http.get(
      `${this.url}/search/movie?api_key=${this.apikey}&query=${data.movieName}`
    );
  }
  getSearchMovieKey(data: any): Observable<any> {
    return this.http.get(
      `${this.url}/search/movie?api_key=${this.apikey}&query=${data}`
    );
  }

  getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.url}/movie/${data}?api_key=${this.apikey}`);
  }

  getMovieVideo(data: any): Observable<any> {
    return this.http.get(
      `${this.url}/movie/${data}/videos?api_key=${this.apikey}`
    );
  }

  getMovieCast(data: any): Observable<any> {
    return this.http.get(
      `${this.url}/movie/${data}/credits?api_key=${this.apikey}`
    );
  }

  fetchActionMovies(): Observable<any> {
    return this.http.get(
      `${this.url}/discover/movie?api_key=${this.apikey}&with_genres=28`
    );
  }

  fetchAdventureMovies(): Observable<any> {
    return this.http.get(
      `${this.url}/discover/movie?api_key=${this.apikey}&with_genres=12`
    );
  }

  fetchAnimationMovies(): Observable<any> {
    return this.http.get(
      `${this.url}/discover/movie?api_key=${this.apikey}&with_genres=16`
    );
  }

  fetchComedyMovies(): Observable<any> {
    return this.http.get(
      `${this.url}/discover/movie?api_key=${this.apikey}&with_genres=35`
    );
  }

  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(
      `${this.url}/discover/movie?api_key=${this.apikey}&with_genres=99`
    );
  }

  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(
      `${this.url}/discover/movie?api_key=${this.apikey}&with_genres=878`
    );
  }

  fetchThrillerMovies(): Observable<any> {
    return this.http.get(
      `${this.url}/discover/movie?api_key=${this.apikey}&with_genres=53`
    );
  }
}
