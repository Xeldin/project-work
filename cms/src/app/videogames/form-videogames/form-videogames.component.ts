import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Videogioco} from 'src/app/model/videogioco';
import { VideogiochiService } from 'src/app/service/videogiochi.service';

@Component({
  selector: 'app-form-videogames',
  templateUrl: './form-videogames.component.html',
  styleUrls: ['./form-videogames.component.css']
})
export class FormVideogamesComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl(Validators.required),
    releaseDate: new FormControl(),
    genre: new FormControl(),
    softwareHouse: new FormControl(),
    publisher: new FormControl(),
    numberOfPlayers: new FormControl(),
    languages: new FormArray([
      new FormGroup({
        voice: new FormArray([new FormControl()]),
        text: new FormArray([new FormControl()])
      })
    ]),
    coverImage: new FormControl()
  });

  videogames$!: Observable<Videogioco[]>;

  constructor(private videogiochiService: VideogiochiService,
              private route: ActivatedRoute) {}

 

  onClickAggiungi(){
      this.videogiochiService.createVideogioco(this.form.value);
    }

    onClickElimina(id:string){
      this.videogiochiService.deleteVideogioco(id).subscribe(()=>{
        this.videogames$=this.videogiochiService.getVideogiochi();
      });
    }

    get voiceFormArray(){
      return this.form.get('voice') as FormArray;
    }

    get textFormArray(){
      return this.form.get('text') as FormArray;
    }

    get languageFormGroup(){
      return this.form.get('languages') as FormArray;
    }

    onClickAddVoice(){
      this.voiceFormArray.push(new FormControl());
    }

    onClickAddText(){
      this.textFormArray.push(new FormControl());
    }

    onRemoveVoice(index: number){
      this.voiceFormArray.removeAt(index);
    }

    onRemoveText(index: number){
      this.textFormArray.removeAt(index);
    } 
    
    isEditMode=false;
    idModifica=-1;
    
    ngOnInit(): void {
    const videogiocoDaModificare = this. videogiochiService.getVideogioco(this.route.snapshot.paramMap.get('id')!);
    if(videogiocoDaModificare){
      this.isEditMode=true;
      this.form=new FormGroup({
        title: new FormControl(videogiocoDaModificare.title),
        releaseDate: new FormControl(videogiocoDaModificare.releaseDate),
        genre: new FormControl(videogiocoDaModificare.genre),
        softwareHouse: new FormControl(videogiocoDaModificare.softwareHouse),
        publisher: new FormControl(videogiocoDaModificare.publisher),
        numberOfPlayers: new FormControl(videogiocoDaModificare.numberOfPlayers),
        languages: new FormArray([
          new FormGroup({
            voice: new FormArray([new FormControl(videogiocoDaModificare.languages.voice)]),
            text: new FormArray([new FormControl(videogiocoDaModificare.languages.text)])
          })
        ]),
        coverImage: new FormControl(videogiocoDaModificare.coverImage)
      })
    };
  }

  onClickSalvaModifiche(){
    this.videogiochiService.createVideogioco(this.form.value);
  }

}
