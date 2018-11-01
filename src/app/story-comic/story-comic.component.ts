import { Component, OnInit , Input} from '@angular/core';
import { element } from '../../../node_modules/protractor';

@Component({
  selector: 'app-story-comic',
  templateUrl: './story-comic.component.html',
  styleUrls: ['./story-comic.component.css']
})
export class StoryComicComponent implements OnInit {

  constructor() { }
  @Input() public next: boolean;
  @Input() public previous: boolean;
  @Input() public img: string;
  photoURL:string;
  
  ngOnInit() {
    
    this.photoURL = "../../assets/img/"+this.img+".png";
  }
  

}
