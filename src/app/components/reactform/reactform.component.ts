import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {

 
ngOnInit(){

}
 bioSection = this.fb.group({
    firstName: [''],
    lastName: [''],
    age: [''],
    stackDetails: this.fb.group({
      stack: [''],
      experience: ['']
    }),
    address: this.fb.group({
        country: [''],
        city: ['']
    })
  });
constructor(private fb: FormBuilder) { }

  callingFunction() {
    console.log(this.bioSection.value);
   }
  
  
}
