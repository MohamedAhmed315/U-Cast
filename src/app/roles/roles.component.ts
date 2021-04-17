import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  x = 1;
  updateArray: Array < string > = [];

  public createrole(): void {
    let roleName = ( < HTMLInputElement > document.getElementById("role-name")).value;
    let roledesc = ( < HTMLInputElement > document.getElementById("role-desc")).value;
    let select = ( < HTMLSelectElement > document.getElementById('select'));
    let selectedOption = select.options[select.selectedIndex].text;
    let attachment = ( < HTMLInputElement > document.getElementById("attachment")).files; //get file name
    let status = ( < HTMLInputElement > document.querySelector('input[name="optradio2"]:checked')).value;

    let table = document.getElementById("role-table");
    let row = document.createElement("tr");
    row.innerHTML = `<td>${roleName}</td>
          <td> ${status} </td>
          <td> ${selectedOption} </td>
          <td> ${roledesc} </td>
          <td> </td>

          <td>
            <i id="trash${this.x}" class="fas fa-times"
              style="color: black; background-color: gold; padding: 6px; font-wight: bold; font-size: 20px; border-radius: 10px"
              onclick="let row1 = document.getElementById(this.id);
              if (confirm('Are you sure you want to delete this role?')) {
                row1.parentElement.parentElement.remove();
              }"></i>

            <i class="fas fa-pen"
              style="color: black; background-color: gold; padding: 5px; font-wight: bold; font-size: 20px; border-radius: 10px; transform: scaleX(-1);"

              onclick='if (confirm("Do you want to update this role?")) {


                // update role here



              }'></i>
              
          </td>`;

    this.x++;
    table?.appendChild(row);

  }

  // update() {
  //   this.updateArray[0] = ( < HTMLInputElement > document.getElementById("role-name")).value;
  //   let select = ( < HTMLSelectElement > document.getElementById('select'));
  //   this.updateArray[1] = ( < HTMLInputElement > document.querySelector('input[name="optradio2"]:checked')).value;
  //   this.updateArray[2] = select.options[select.selectedIndex].text;
  //   this.updateArray[3] = ( < HTMLInputElement > document.getElementById("role-desc")).value;
  //   this.updateArray[4] = "gg";



  //   for (let i = 0; i < 5; i++) {
  //     console.log(this.updateArray[i]);
  //     let row1 = document.getElementById(this.id);
  //     row1.parentElement.parentElement.remove();
  //   }
  // }

}
