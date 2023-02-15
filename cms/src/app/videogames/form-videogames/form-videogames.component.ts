import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    title: new FormControl('',Validators.required),
    category: new FormControl('',Validators.required),
    releaseDate: new FormControl('',Validators.required),
    genre: new FormControl('',Validators.required),
    softwareHouse: new FormControl('',Validators.required),
    publisher: new FormControl('',Validators.required),
    numberOfPlayers: new FormControl(null,Validators.required),
    languages: new FormGroup({
        voice: new FormArray([new FormControl('',Validators.required)]),
        text: new FormArray([new FormControl('',Validators.required)])
      }),
    coverImage: new FormControl('',Validators.required)
  });

  videogames$!: Observable<Videogioco[]>;

  constructor(private videogiochiService: VideogiochiService,
    private route: ActivatedRoute) { }

  onClickAggiungi() {
    this.videogiochiService.createVideogioco(this.form.value).subscribe(()=>{
      this.videogames$=this.videogiochiService.getVideogiochi();
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
  idModifica = -1;

  ngOnInit(): void {
    // this._id=this.route.snapshot.params['_id'];

  //   const videogiocoDaModificare = this.videogiochiService.getVideogioco(this.route.snapshot.paramMap.get(this._id)!)
  //   if (videogiocoDaModificare) {
  //     this.isEditMode = true;
  //     this.form = new FormGroup({
  //       title: new FormControl(videogiocoDaModificare.subscribe(this.form.value.title)),
  //       releaseDate: new FormControl(videogiocoDaModificare.subscribe(this.form.value.releaseDate)),
  //       genre: new FormControl(videogiocoDaModificare.subscribe(this.form.value.genre)),
  //       softwareHouse: new FormControl(videogiocoDaModificare.subscribe(this.form.value.softwareHouse)),
  //       publisher: new FormControl(videogiocoDaModificare.subscribe(this.form.value.publisher)),
  //       numberOfPlayers: new FormControl(videogiocoDaModificare.subscribe(this.form.value.genre.numberOfPlayers)),
  //       languages: new FormGroup({
  //           voice: new FormArray([new FormControl(videogiocoDaModificare.subscribe(this.form.value.languages.voice))]),
  //           text: new FormArray([new FormControl(videogiocoDaModificare.subscribe(this.form.value.languages.text))])
  //         }),
  //       coverImage: new FormControl(videogiocoDaModificare.subscribe(this.form.value.coverImage))
  //     })
  //   };
  }

  onClickSalvaModifiche() {
    this.videogiochiService.createVideogioco(this.form.value);
  }

}
