import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';
import { Usuario } from 'src/app/Usuario';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  usuarioForm!: FormGroup;
  usuario: Usuario = {
    id: '', nome: '', cpf: '',
    status: '',
  };
  isUsuario = false;

  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.usuarioForm = this.formBuilder.group({
   'cpf' : [null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
 });
 }

  getUsuario() {
    const cpf = this.usuarioForm.controls['cpf'].value;
    this.usuarioService.getUsuario(cpf)
      .subscribe(data => {
        this.usuario = data;
        console.log(this.usuario);
        if(this.usuario?.cpf){
          this.isUsuario = true;
        } else {
          this.snackBar.open('404', 'Usuário não encontrado.', {
            duration: 3000
          });
        }
      });
  }
}

