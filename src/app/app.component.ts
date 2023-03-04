import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-search';

  data = [
    {title: "Harry Potter", actor: "Daniel Radcliffe",  pic: "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg"},
    {title: "Percy Jackson", pic: "https://upload.wikimedia.org/wikipedia/en/d/db/Percy_Jackson_Portrait.jpg"},
    {title: "Frodo Baggins",  pic: "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg"},
    {title: "Bilbo Baggins", pic: "https://i.pinimg.com/474x/7e/bb/3f/7ebb3f6e8b8b20e8f29c657dbc67870f.jpg"},
    {title: "Mario", pic: "https://media.istockphoto.com/id/458294725/photo/super-mario.jpg?s=612x612&w=0&k=20&c=4qlhFK7ACSlbuISSfbWjAe2VP1qqJDhZyCVJONPPx70="},

  ]

  searchText = ''
}
