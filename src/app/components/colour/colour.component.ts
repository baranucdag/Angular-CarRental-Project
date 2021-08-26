import { Colour } from './../../models/colour';
import { ColourService } from './../../services/colour.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-colour',
  templateUrl: './colour.component.html',
  styleUrls: ['./colour.component.css']
})
export class ColourComponent implements OnInit {

  constructor(private colourService:ColourService) { }
  colours:Colour[]=[];
  currentColour:Colour;

  ngOnInit(): void {
    this.getColours();
  }

  getColours(){
    this.colourService.getColours().subscribe(response=>{
      this.colours=response.data;
    })
  }

  setCurrentColour(colour:Colour){
    this.currentColour=colour;
  }

  getCurrentColour(colour:Colour){
    if(this.currentColour == colour){
      return "list-group-item active"
    } else{
      return "list-group-item"
    }
  }
}
