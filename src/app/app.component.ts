import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-search';
  font = "HP"
  fontSize = "25vw"
  data = [
    {title: "Harry Potter", title2: "and the Sorcerer's Stone", font: "HP", fontSize: "1.7vw", fontSize2: "1.2vw", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "54% 60%",  pic: "https://images.moviesanywhere.com/3d899a3e03eb1e3684a903168b601f47/1707fb29-a315-4f96-8dce-3b9fb5fbc219.jpg?w=2560&r=16x9"},
    {title: "Harry Potter", title2: "and the Chamber of Secrets", font: "HP", fontSize: "1.7vw", fontSize2: "1.2vw", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "65% 60%",  pic: "https://www.peacocktv.com/dam/growth/assets/seo/HarryPotter/CoS/hp-cos-og.png"},
    {title: "Harry Potter", title2: "and the Prisoner of Azkaban", font: "HP", fontSize: "1.7vw", fontSize2: "1.2vw",  actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "40% 60%",  pic: "https://www.peacocktv.com/dam/growth/assets/seo/HarryPotter/PoA/hp-poa-og-min.png"},
    {title: "Harry Potter", title2: "and the Goblet of Fire", font: "HP", fontSize: "1.7vw", fontSize2: "1.2vw",  actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "75% 60%",  pic: "https://www.peacocktv.com/dam/growth/assets/seo/HarryPotter/GoF/hp-gof-og-min.png"},
    {title: "Harry Potter", title2: "and the Order of the Phoenix", font: "HP", fontSize: "1.7vw",fontSize2: "1.2vw", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling",backgroundPos: "38% 60%",   pic: "https://hbomax-images.warnermediacdn.com/images/GXssPaAiBJ1VGwwEAAABW/tile?size=640x360&partner=hbomaxcom&v=f8dbd8dc7f2ba00c5fa298123bf0dae2&host=art-gallery.api.hbo.com&language=en-us"},
    {title: "Harry Potter", title2: "and the Half Blood Prince", font: "HP", fontSize: "1.7vw",fontSize2: "1.2vw", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "23% 60%",  pic: "https://www.peacocktv.com/dam/growth/assets/seo/HarryPotter/HBP/hp-hbp-og-min.png"},
    {title: "Harry Potter", title2: "and the Deathly Hallows: Part I", font: "HP", fontSize: "1.7vw",fontSize2: "1.2vw", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "10% 90%",  pic: "../../assets/HP7.png"},
    {title: "Harry Potter", title2: "and the Deathly Hallows: Part II", font: "HP", fontSize: "1.7vw",fontSize2: "1.2vw", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "10% 60%",  pic: "https://www.peacocktv.com/dam/growth/assets/seo/HarryPotter/DH2/hp-dh2-og-min.png"},

    {title: "Lord of the Rings", title2: "the Fellowship of the Ring", font: "LOTR", fontSize: "1vw", fontSize2: ".7vw", actor: "Elijah Wood, Viggo Mortensen, Sean Astin, Orlando Bloom, Ian McKellen, Sean Bean, Dominic Monaghan, Billy Boyd", backgroundPos: "center center",  pic: "https://screenrant.com/wp-content/uploads/2016/12/Lord-of-the-Rings-Fellowship-of-the-Ring-Poster.jpg"},
    {title: "Lord of the Rings", title2: "the Two Towers", font: "LOTR", fontSize: "1vw",fontSize2: ".7vw", actor: "Elijah Wood, Viggo Mortensen, Sean Astin, Orlando Bloom, Ian McKellen, Sean Bean, Dominic Monaghan, Billy Boyd", backgroundPos: "0% 60%",  pic: "https://images.indianexpress.com/2019/08/the-two-towers-759.jpg"},
    {title: "Lord of the Rings", title2: "the Return of the King", font: "LOTR", fontSize: "1vw",fontSize2: ".7vw", actor: "Elijah Wood, Viggo Mortensen, Sean Astin, Orlando Bloom, Ian McKellen, Sean Bean, Dominic Monaghan, Billy Boyd", backgroundPos: "40% 60%",  pic: "https://a.ltrbxd.com/resized/sm/upload/a7/4r/al/mc/lotr-return-of-the-king-1200-1200-675-675-crop-000000.jpg?v=2a233b4d9f"},
    {title: "The Hobbit", title2: "an Unexpected Journey", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch",backgroundPos: "50% 60%",   pic: "http://www.greenroofs.com/wp-content/uploads/2018/09/hobbiton8.jpg"},
    {title: "The Hobbit", title2: "the Desolation of Smaug", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch",backgroundPos: "50% 60%",   pic: "https://www.gannett-cdn.com/-mm-/283b14115498cc81eab29c4385f4851e1f48c4c9/c=675-11-2630-1112/local/-/media/USATODAY/test/2013/12/16//1387183002000-HTDOS-SMAUG-0071.jpg"},
    {title: "The Hobbit", title2: "the Battle of the Five Armies", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", minFont: "3vw", actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch", backgroundPos: "20% 60%",  pic: "https://pyxis.nymag.com/v1/imgs/209/120/58310bd0c4920145a68972ef460705393c-17-the-hobbit.2x.h473.w710.jpg"},


    {title: "Fantastic Beasts", title2: "and Where to Find Them", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "Eddie Redmayne, Katherine Waterston, Dan Fogler, Ezra Miller, Colin Farrell, Johnny Depp", backgroundPos: "center center",  pic: "https://assets2.ignimgs.com/2016/11/11/fantasticbeasts1280jpg-fe24ae_160w.jpg?width=1280"},
    {title: "Fantastic Beasts", title2: "the Crimes of Grindewald", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "Eddie Redmayne, Katherine Waterston, Dan Fogler, Ezra Miller, Colin Farrell, Johnny Depp", backgroundPos: "0% 60%",  pic: "https://imageio.forbes.com/blogs-images/scottmendelson/files/2018/11/MV5BMTgzODM3NDgwOF5BMl5BanBnXkFtZTgwMzQyOTcxNjM@._V1_SX1777_CR001777743_AL_-1200x675.jpg?format=jpg&width=960"},
    {title: "Fantastic Beasts", title2: "the Secrets of Dumbledore", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "Eddie Redmayne, Katherine Waterston, Dan Fogler, Ezra Miller, Colin Farrell, Mads Mikkelsen", backgroundPos: "40% 60%",  pic: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jessica-williams-callum-turner-jude-law-fiona-glascott-eddie-redmayne-fantastic-beasts-the-secrets-of-dumbledore-1639477622.jpg"},
    {title: "Lord of the Rings", title2: "the Fellowship of the Ring", font: "LOTR", fontSize: "1vw", fontSize2: ".7vw", actor: "", backgroundPos: "center center",  pic: "https://screenrant.com/wp-content/uploads/2016/12/Lord-of-the-Rings-Fellowship-of-the-Ring-Poster.jpg"},
    {title: "Lord of the Rings", title2: "the Two Towers", font: "LOTR", fontSize: "1vw",fontSize2: ".7vw", actor: "", backgroundPos: "0% 60%",  pic: "https://images.indianexpress.com/2019/08/the-two-towers-759.jpg"},
    {title: "Lord of the Rings", title2: "the Return of the King", font: "LOTR", fontSize: "1vw",fontSize2: ".7vw", actor: "", backgroundPos: "40% 60%",  pic: "https://a.ltrbxd.com/resized/sm/upload/a7/4r/al/mc/lotr-return-of-the-king-1200-1200-675-675-crop-000000.jpg?v=2a233b4d9f"},
    {title: "The Hobbit", title2: "an Unexpected Journey", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "",backgroundPos: "50% 60%",   pic: "http://www.greenroofs.com/wp-content/uploads/2018/09/hobbiton8.jpg"},
    {title: "The Hobbit", title2: "the Desolation of Smaug", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", actor: "",backgroundPos: "50% 60%",   pic: "https://www.gannett-cdn.com/-mm-/283b14115498cc81eab29c4385f4851e1f48c4c9/c=675-11-2630-1112/local/-/media/USATODAY/test/2013/12/16//1387183002000-HTDOS-SMAUG-0071.jpg"},
    {title: "The Hobbit", title2: "the Battle of the Five Armies", font: "LOTR2", fontSize: "1vw",fontSize2: ".55vw", minFont: "3vw", actor: "", backgroundPos: "20% 60%",  pic: "https://pyxis.nymag.com/v1/imgs/209/120/58310bd0c4920145a68972ef460705393c-17-the-hobbit.2x.h473.w710.jpg"},


    {title: "Fantastic Beasts", title2: "and Where to Find Them", font: "FB", fontSize: "2vw", fontSize2: "1.5vw", actor: "", backgroundPos: "center center",  pic: "https://assets2.ignimgs.com/2016/11/11/fantasticbeasts1280jpg-fe24ae_160w.jpg?width=1280"},
    {title: "Fantastic Beasts", title2: "the Crimes of Grindewald", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "0% 60%",  pic: "https://imageio.forbes.com/blogs-images/scottmendelson/files/2018/11/MV5BMTgzODM3NDgwOF5BMl5BanBnXkFtZTgwMzQyOTcxNjM@._V1_SX1777_CR001777743_AL_-1200x675.jpg?format=jpg&width=960"},
    {title: "Fantastic Beasts", title2: "the Secrets of Dumbledore", font: "FB", fontSize: "2vw",fontSize2: "1.5vw", actor: "", backgroundPos: "40% 60%",  pic: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jessica-williams-callum-turner-jude-law-fiona-glascott-eddie-redmayne-fantastic-beasts-the-secrets-of-dumbledore-1639477622.jpg"},

  ]
 

  searchText = ''
}
