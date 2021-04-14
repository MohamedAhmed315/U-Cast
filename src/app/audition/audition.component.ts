import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audition',
  templateUrl: './audition.component.html',
  styleUrls: ['./audition.component.css']
})
export class AuditionComponent implements OnInit {

  url = "https://cdn.pixabay.com/photo/2021/01/21/17/58/herbstastern-5938056_1280.jpg";
  constructor() { }

  ngOnInit(): void {}

  selectImage(event: any){
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result; 
      }
    }
  }

  
}
