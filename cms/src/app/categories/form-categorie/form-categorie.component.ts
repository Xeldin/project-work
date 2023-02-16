import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/model/categoria';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-form-categorie',
  templateUrl: './form-categorie.component.html',
  styleUrls: ['./form-categorie.component.css']
})
export class FormCategorieComponent implements OnInit{
  form: FormGroup=new FormGroup({
    name: new FormControl('',Validators.required)
  });

  categories$!: Observable<Categoria[]>;
  categoriaDaModificare$?: Observable<Categoria>;

  constructor(private categorieService: CategorieService,
              private route:ActivatedRoute){}

  onClickAggiungi(){
    this.categorieService.createCategoria(this.form.value).subscribe(()=>{
      this.categories$=this.categorieService.getCategorie();
    });
    this.pulisciForm();
  }

  pulisciForm(){
    this.form=new FormGroup({
      name: new FormControl('',Validators.required)
    });
  }

  isEditMode=false;

  ngOnInit(): void {
    this.categoriaDaModificare$=this.categorieService.getCategoria(this.route.snapshot.paramMap.get('id')!)

    if(this.categoriaDaModificare$){
      this.isEditMode=true
      console.log(this.isEditMode)

      this.categoriaDaModificare$.subscribe(x=>{
        this.form = new FormGroup({
          name: new FormControl(x.name)
        })
      })
    }
  }

  onClickSalvaModifiche(){
    this.categorieService.updateCategoria(this.route.snapshot.paramMap.get('id')!, this.form.value).subscribe();
  }

}
