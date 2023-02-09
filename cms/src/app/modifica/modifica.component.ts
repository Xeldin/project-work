import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent {

  form: FormGroup = new FormGroup({
    nomecategoria : new FormControl(null)
  })

  idCategoriaDaModificare = -1
  editmode = false

  constructor(private categorieservice: CategorieService, private route: ActivatedRoute) { }

  ngOnit(): void {
    const CategoriaDaModificare = this.categorieservice.getCategoria(this.route.snapshot.paramMap.get('id')!)
    if (CategoriaDaModificare) {
      this.editmode = true
      this.form = new FormGroup({
        nomecategoria = new FormControl(CategoriaDaModificare.nome)
      })
    }
  }

  salvaModifiche() {
    this.categorieservice.updateCategoria(this.route.snapshot.paramMap.get('id')!),
      this.form.value)
    alert("Categoria Modificata!")
  }

  aggiungi() {
    this.categorieservice.createCategoria(this.form.value)
    alert("Categoria Aggiunta!")
  }
}




