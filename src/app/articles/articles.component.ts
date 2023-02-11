import { Component } from '@angular/core';
import { article } from '../Model/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
titre="Les article du jour"
listeArticle:article[]=[{titre:"Le championnat du monde",contenu:"Le champion du monde de cette année est",auteur:"Med Taher",date:'12/12/2005',categorie:"sport"},
{titre:"Les nouveaux parents",contenu:"Les nouveaus parents",auteur:"Ahmed Said",date:'11/11/2018',categorie:"Education"},
{titre:"Comment écrire votre cv",contenu:"Pour réussir a décraucher un emploi ",auteur:"Marie Elsa",date:'02/04/2017',categorie:"Travail"},
  
]
nombreArticlesAffiches=this.listeArticle.length;

}
