import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Videogioco } from 'src/app/model/videogioco';
import { VideogiochiService } from 'src/app/service/videogiochi.service';

@Component({
  selector: 'app-form-videogames',
  templateUrl: './form-videogames.component.html',
  styleUrls: ['./form-videogames.component.css']
})
export class FormVideogamesComponent implements OnInit {
  
  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    releaseDate: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
    softwareHouse: new FormControl('', Validators.required),
    publisher: new FormControl('', Validators.required),
    numberOfPlayers: new FormControl(null, Validators.required),
    languages: new FormGroup({
      voice: new FormArray([new FormControl('', Validators.required)]),
      text: new FormArray([new FormControl('', Validators.required)])
    }),
    coverImage: new FormControl('')
  });

  videogames$!: Observable<Videogioco[]>;
  videogiocodamodificare$?: Observable<Videogioco> 

  constructor(private videogiochiService: VideogiochiService,
    private router: Router,
    private route: ActivatedRoute) { }

  onClickAggiungi() {
    this.videogiochiService.createVideogioco(this.form.value).subscribe(() => {
      this.videogames$ = this.videogiochiService.getVideogiochi();
    });
    this.pulisciForm();
    alert('Videogioco aggiunto con successo!');
  }

  pulisciForm(){
    this.form=new FormGroup({
      title: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      releaseDate: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      softwareHouse: new FormControl('', Validators.required),
      publisher: new FormControl('', Validators.required),
      numberOfPlayers: new FormControl(null, Validators.required),
      languages: new FormGroup({
        voice: new FormArray([new FormControl('', Validators.required)]),
        text: new FormArray([new FormControl('', Validators.required)])
      }),
      coverImage: new FormControl('')
    });
  }

  onClickElimina(id: string) {
    this.videogiochiService.deleteVideogioco(id).subscribe(() => {
      this.videogames$ = this.videogiochiService.getVideogiochi();
    });
  }

  get voiceFormArray() {
    return this.languageFormGroup.get('voice') as FormArray;
  }

  get textFormArray() {
    return this.languageFormGroup.get('text') as FormArray;
  }

  get languageFormGroup() {
    return this.form.get('languages') as FormGroup;
  }

  onClickAddVoice() {
    this.voiceFormArray.push(new FormControl());
  }

  onClickAddText() {
    this.textFormArray.push(new FormControl());
  }

  onRemoveVoice(index: number) {
    this.voiceFormArray.removeAt(index);
  }

  onRemoveText(index: number) {
    this.textFormArray.removeAt(index);
  }

  isEditMode = false;

  ngOnInit(): void {
    
    this.videogiocodamodificare$ = this.videogiochiService.getVideogioco(this.route.snapshot.paramMap.get('id')!)

      if (this.videogiocodamodificare$) {
        this.isEditMode = true
        console.log(this.isEditMode)

        this.videogiocodamodificare$.subscribe(x => {
          this.form = new FormGroup({
            title: new FormControl(x.title),
            category: new FormControl(x.category),
            releaseDate: new FormControl(x.releaseDate),
            genre: new FormControl(x.genre),
            softwareHouse: new FormControl(x.softwareHouse),
            publisher: new FormControl(x.publisher),
            numberOfPlayers: new FormControl(x.numberOfPlayers),
            coverImage: new FormControl(x.coverImage),
            languages: new FormGroup({
              voice: new FormArray(
                x.languages.voice.map(
                  (g) => new FormControl(g)
                )
              ),
              text: new FormArray(
                x.languages.text.map(
                  (g) => new FormControl(g)
                )
              )
            })
          })
        })
      }
  }
  onClickSalvaModifiche() {
    this.videogiochiService.updateVideogioco(this.route.snapshot.paramMap.get('id')!, this.form.value).subscribe();
    alert('Modifica effettuata con successo!');
  }
}
