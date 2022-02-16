import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato-page',
  templateUrl: './contato-page.component.html',
  styleUrls: ['./contato-page.component.css'],
})
export class ContatoPageComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      telefone: [null, Validators.required],
      mensagem: [null],
    });
    console.log(this.formulario);
  }
  onSubmit() {
    console.log(this.formulario);
  }
  resetar() {
     //reset de formulário:
    this.formulario.reset();
  }
}
