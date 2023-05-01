import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private service: MovieApiServiceService) {}

  ngOnInit(): void {}

  searchResult: any;
  searchResultOnKeyPress: any;
  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });
  checkOnKeyPress(event: any) {
    this.service.getSearchMovieKey(event.target.value).subscribe((val) => {
      this.searchResultOnKeyPress = val.results;
    });
  }

  submitForm() {
    console.log(this.searchForm.value);
    this.service.getSearchMovie(this.searchForm.value).subscribe((result) => {
      console.log(result);
      this.searchResult = result.results;
    });
  }
}
