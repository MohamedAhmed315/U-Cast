import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  styles: [`
  .star {
    font-size: 1.5rem;
    color: black;
  }
  .filled {
    color: gold;
  }
  .bad {
    color: #deb0b0;
  }
  .filled.bad {
    color: #ff1e1e;
  }
`]

})
export class FeedbackComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}


  rate1 = 3;
  rate2 = 3;
  rate3 = 3;
  

}
