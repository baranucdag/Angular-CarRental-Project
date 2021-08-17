import { ColourService } from './../../services/colour.service';
import { Component, OnInit } from '@angular/core';
import { Colour } from 'src/app/models/colour';

@Component({
  selector: 'app-colour',
  templateUrl: './colour.component.html',
  styleUrls: ['./colour.component.css']
})
export class ColourComponent implements OnInit {

  constructor(private colourService:ColourService) { }
  colours:Colour[]=[];

  ngOnInit(): void {
    this.getColours();
  }

  getColours(){
    this.colourService.getColours().subscribe(response=>{
      this.colours=response.data;
    })
  }
}
