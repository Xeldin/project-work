import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { News } from 'src/app/model/news';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-form-news',
  templateUrl: './form-news.component.html',
  styleUrls: ['./form-news.component.css'],
})
export class FormNewsComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl(Validators.required),
    category: new FormControl(),
    imageUrl: new FormControl(),
    content: new FormControl(),
    publicationDate: new FormControl(),
    authorName: new FormControl(),
    tags: new FormArray([new FormControl()]),
  });

  news$!: Observable<News[]>;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) {}

  onClickAggiungi() {
    this.newsService.createNews(this.form.value);
  }

  onClickElimina(id: string) {
    this.newsService.deleteNews(_id).subscribe(() => {
      this.news$ = this.newsService.getNews();
    });
  }

  get tagsFormArray() {
    return this.form.get('tags') as FormArray;
  }

  onClickAddTag() {
    this.tagsFormArray.push(new FormControl());
  }

  onRemoveTag(index: number) {
    this.tagsFormArray.removeAt(index);
  }

  isEditMode = false;
  idModifica = -1;

  ngOnInit(): void {
    const newsDaModificare = this.newsService.getAllNews(
      this.route.snapshot.paramMap.get('id')!
    );
    if (newsDaModificare) {
      this.isEditMode = true;
      this.form = new FormGroup({
        title: new FormControl(
          newsDaModificare.subscribe(this.form.value.title)
        ),
        category: new FormControl(
          newsDaModificare.subscribe(this.form.value.category)
        ),
        imageUrl: new FormControl(
          newsDaModificare.subscribe(this.form.value.imageUrl)
        ),
        content: new FormControl(
          newsDaModificare.subscribe(this.form.value.content)
        ),
        publicationDate: new FormControl(
          newsDaModificare.subscribe(this.form.value.publicationDate)
        ),
        authorName: new FormControl(
          newsDaModificare.subscribe(this.form.value.genre.authorName)
        ),
        tags: new FormArray([
          new FormControl(newsDaModificare.subscribe(this.form.value.tags)),
        ]),
      });
    }
  }

  onClickSalvaModifiche() {
    this.newsService.createNews(this.form.value);
  }
}
