import { Component, OnInit } from '@angular/core';
import {Project} from '../project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
projects:Project [] = [
  new Project ('First project','Quote app development','UI design','20/05/2021'),
  new Project ('Second project','To-d0-list app development','documentation','21/05/2021'),
  new Project ('Third project','Portfolio website development','backend dev','20/04/2020')
]
  constructor() { }

  ngOnInit(): void {
  }

}
