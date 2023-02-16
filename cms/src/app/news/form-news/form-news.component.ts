import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { News } from 'src/app/model/news';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-form-news',
  templateUrl: './form-news.component.html',
  styleUrls: ['./form-news.component.css']
})
export class FormNewsComponent implements OnInit {
form:FormGroup=new FormGroup({
  title: new FormControl('', Validators.required),
  category: new FormControl('', Validators.required),
  imageUrl: new FormControl('', Validators.required),
  content: new FormControl('', Validators.required),
  publicationDate: new FormControl('', Validators.required),
  authorName: new FormControl('', Validators.required),
  tags: new FormArray([new FormControl('', Validators.required)])
});

news$!: Observable<News[]>;
newsDaModificare$?: Observable<News>;

constructor(private newsService:NewsService,
            private route:ActivatedRoute){}

onClickAggiungi(){
  this.newsService.createNews(this.form.value).subscribe(()=>{
    this.news$=this.newsService.getAllNews();
  });
  this.pulisciForm();
  alert('Notizia aggiunta con successo!');
}

pulisciForm(){
  this.form=new FormGroup({
    title: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    publicationDate: new FormControl('', Validators.required),
    authorName: new FormControl('', Validators.required),
    tags: new FormArray([new FormControl('', Validators.required)])
  });
}

get tagsFormArray(){
  return this.form.get('tags') as FormArray;
}

onAddTag(){
  this.tagsFormArray.push(new FormControl());
}

onRemoveTag(index: number){
  this.tagsFormArray.removeAt(index);
}

isEditMode=false;

ngOnInit(): void {
  this.newsDaModificare$ = this.newsService.getNews(this.route.snapshot.paramMap.get('id')!)
  
  if(this.newsDaModificare$){
    this.isEditMode=true
    console.log(this.isEditMode)

    this.newsDaModificare$.subscribe(x=>{
      this.form = new FormGroup({
        title: new FormControl(x.title),
        category: new FormControl(x.category),
        imageUrl: new FormControl(x.imageUrl),
        content: new FormControl(x.content),
        publicationDate: new FormControl(x.publicationDate),
        authorName: new FormControl(x.authorName),
        tags: new FormArray(x.tags.map(
          (g)=>new FormControl(g)))
      })
    })
  }
}

onClickSalvaModifiche(){
  this.newsService.updateNews(this.route.snapshot.paramMap.get('id')!, this.form.value).subscribe();
  alert('Modifica effettuata con successo!');
}


}
