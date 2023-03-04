import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-search';
  font = "HP"
  fontSize = "25px"
  data = [
    {title: "Harry Potter", title2: "and the Sorcerer's Stone", font: "HP", fontSize: "25px", fontSize2: "20px", actor: "Daniel Radcliffe",  pic: "https://images.moviesanywhere.com/3d899a3e03eb1e3684a903168b601f47/1707fb29-a315-4f96-8dce-3b9fb5fbc219.jpg?w=2560&r=16x9"},
    {title: "Harry Potter", title2: "and the Chamber of Secrets", font: "HP", fontSize: "25px",fontSize2: "20px", actor: "Daniel Radcliffe", backgroundPos: "70% 60%",  pic: "https://www.peacocktv.com/dam/growth/assets/seo/HarryPotter/CoS/hp-cos-og.png"},
    {title: "Harry Potter", title2: "and the Prisoner of Azkaban", font: "HP", fontSize: "25px",fontSize2: "20px", actor: "Daniel Radcliffe", backgroundPos: "70% 60%",  pic: "https://www.peacocktv.com/dam/growth/assets/seo/HarryPotter/PoA/hp-poa-og-min.png"},
    {title: "Harry Potter", title2: "and the Goblet of Fire", font: "HP", fontSize: "25px",fontSize2: "20px", actor: "Daniel Radcliffe", backgroundPos: "70% 60%",  pic: "https://www.peacocktv.com/dam/growth/assets/seo/HarryPotter/GoF/hp-gof-og-min.png"},
    {title: "Harry Potter", title2: "and the Order of the Phoenix", font: "HP", fontSize: "25px",fontSize2: "20px", actor: "Daniel Radcliffe",  pic: "https://hbomax-images.warnermediacdn.com/images/GXssPaAiBJ1VGwwEAAABW/tile?size=640x360&partner=hbomaxcom&v=f8dbd8dc7f2ba00c5fa298123bf0dae2&host=art-gallery.api.hbo.com&language=en-us"},
    {title: "Harry Potter", title2: "and the Half Blood Prince", font: "HP", fontSize: "25px",fontSize2: "20px", actor: "Daniel Radcliffe", backgroundPos: "40% 60%",  pic: "https://www.peacocktv.com/dam/growth/assets/seo/HarryPotter/HBP/hp-hbp-og-min.png"},
    {title: "Harry Potter", title2: "and the Deathly Hallows: Part I", font: "HP", fontSize: "25px",fontSize2: "20px", actor: "Daniel Radcliffe", backgroundPos: "90% 10%",  pic: "https://www.peacocktv.com/dam/growth/assets/seo/HarryPotter/DH1/hp-dh1-desktop-min.jpg?downsize=1200:*&output-quality=70"},
    {title: "Harry Potter", title2: "and the Deathly Hallows: Part I", font: "HP", fontSize: "25px",fontSize2: "20px", actor: "Daniel Radcliffe", backgroundPos: "10% 60%",  pic: "https://www.peacocktv.com/dam/growth/assets/seo/HarryPotter/DH2/hp-dh2-og-min.png"},
 
  ]

  searchText = ''
}
