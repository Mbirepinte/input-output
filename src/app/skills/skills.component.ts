import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
@Input() skill: Skill = new Skill("", "", "");
}
