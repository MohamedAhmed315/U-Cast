import { Component, OnInit } from '@angular/core';
// import { read } from 'node:fs';

@Component({
  selector: 'app-audition',
  templateUrl: './audition.component.html',
  styleUrls: ['./audition.component.css']
})
export class AuditionComponent implements OnInit {

  public url = "";
  imagesrc: any;
  constructor() { }

  ngOnInit(): void {}


  onSelectFile(e: any) {
    if (e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e: any) => {
        this.url = e.target.result;
      }
    }
  }

}
