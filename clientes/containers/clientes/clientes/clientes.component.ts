import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Cliente } from 'src/app/clientes/model/clientes';
import { ClientesService } from 'src/app/clientes/services/clientes.service';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent  implements OnInit {
   ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  cliente : Observable<Cliente[]>;


  constructor(private clienteService: ClientesService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar)
              {
                  this.cliente = this.clienteService.list().pipe(
                    catchError(error => {
                      console.log()
                      return of([])
                    })
                  );
              }



  onEdit(cliente: Cliente ){
    this.router.navigate(['edit', cliente.id_cliente], {relativeTo:this.route});
  }

  onRemove(cliente: Cliente){
    this.clienteService.remove(cliente.id_cliente.toString()).subscribe(
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

