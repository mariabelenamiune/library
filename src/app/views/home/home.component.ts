import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string = '';


  constructor(private quotesService: QuotesService) { }

  ngOnInit(): void {}

  obtainQuote() {
    this.quotesService.getQuoteOfTheDay().subscribe((response) => {
      this.quote = response.contents.quotes[0].quote;
    });
  }

}
