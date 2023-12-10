import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { Usuario } from 'src/app/usuario/model/usuario';
import { UsuarioService } from 'src/app/usuario/services/usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent  implements OnInit{

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  usuario : Observable<Usuario[]>;


  constructor( private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar )
    {
      this.usuario = this.usuarioService.list().pipe(
        catchError(error => {
          console.log()
          return of([])
        })
      );
  }


  onEdit(usuario: Usuario ){
    this.router.navigate(['edit', usuario.id_user], {relativeTo:this.route});
  }

  onRemove(usuario: Usuario){
    this.usuarioService.remove(usuario.id_user.toString()).subscribe(
     next,() => {
       this.snackBar.open('Removido Com Sucesso!', 'X',{
         duration: 5000,
         verticalPosition: 'top',
         horizontalPosition: 'center'
       })}
    );
    this.refresh();
   }


  onAdd( ){
    this.router.navigate(['new'],{relativeTo: this.route});
  }


  refresh(){
    window.location.reload();
  }



}


function next(value: Object): void {
  throw new Error('Function not implemented.');
}
