import { Component } from '@angular/core';
import { Skill } from '../models/skill.model';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent {
 Matt = new Developer(
  'Matt',
  'du ROUCHET',
  30,
  "male",
  "Im a developer",
  [new Skill("Angular", "https://angular.io/assets/images/logos/angular/angular.svg", "https://angular.io/"),
   new Skill("React", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png", "https://fr.reactjs.org/")]
 )
}
