import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RecensioniService } from '../../service/recensioni.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { Recensione } from 'src/app/model/recensione';
@Component({
  selector: 'app-form-recensioni',
  templateUrl: './form-recensioni.component.html',
  styleUrls: ['./form-recensioni.component.css']
})
export class FormRecensioniComponent implements OnInit {

  form: FormGroup = new FormGroup({
    title: new FormControl('',Validators.required),
    publicationDate: new FormControl('',Validators.required),
    content: new FormControl('',Validators.required),
    score: new FormControl(0,Validators.required),
    reviewerName: new FormControl('',Validators.required),
    imageUrls: new FormArray([],Validators.required),
    reviewedGame: new FormGroup({
        id: new FormControl('',Validators.required),
        name: new FormControl('',Validators.required)
      })
      });

  recensioni$!: Observable<Recensione[]>;
  recensionedamodificare$?: Observable<Recensione> 

  constructor(private recensioneService: RecensioniService, private router: Router, private route: ActivatedRoute) { }

  
  imageUrls() {
    return this.form.get('imageUrls') as FormArray;
  }

   addImageUrl() {
    this.imageUrls().push(new FormControl(''));
  }
  onSubmit() {
    if (this.form.valid) {
      this.recensioneService.createRecensione(this.form.value).subscribe(
        response => console.log(response),
        error => console.log(error)
      )
      }
      alert('Recensione salvata con successo!');

    }

    isEditMode = false;

    ngOnInit(): void {
      
      this.recensionedamodificare$ = this.recensioneService.getRecensione(this.route.snapshot.paramMap.get('_id')!)
  
        if (this.recensionedamodificare$) {
          this.isEditMode = true
          console.log(this.isEditMode)
  
          this.recensionedamodificare$.subscribe(x => {
            this.form = new FormGroup({
              title: new FormControl(x.title),
              publicationDate: new FormControl(x.publicationDate),
              content: new FormControl(x.content),
              score: new FormControl(x.score),
              reviewerName: new FormControl(x.reviewerName),
              imageUrls: new FormArray(x.imageUrls.map(
                (g)=>new FormControl(g))),
              reviewedGame: new FormGroup({
                id: new FormControl(x.reviewedGame.id),
                name: new FormControl(x.reviewedGame.name)
              })
            })
          })
        }
    }
    onClickSalvaModifiche() {
      this.recensioneService.updateRecensione(this.route.snapshot.paramMap.get('_id')!, this.form.value).subscribe();
      alert('Modifica effettuata con successo!');

    }
  
  

}