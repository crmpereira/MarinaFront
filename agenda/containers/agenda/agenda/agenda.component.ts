import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Agenda } from 'src/app/agenda/model/agenda';
import { AgendaService } from 'src/app/agenda/service/agenda.service';



@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent  implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  agenda : Observable<Agenda[]>;


  constructor(private agendaService: AgendaService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar)
             {
                  this.agenda = this.agendaService.list().pipe(
                  catchError(error => {
                  console.log()
                  return of([])
              })
            );
    }


    onEdit(agenda: Agenda ){
      this.router.navigate(['edit', agenda.id_agenda], {relativeTo:this.route});
    }

    onRemove(agenda: Agenda){
      this.agendaService.remove(agenda.id_agenda.toString()).subscribe(
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
      this.router.navigate(['new'],{relativeTo:this.route});
    }


    refresh(){
      window.location.reload();
    }


}


function next(value: Object): void {
  throw new Error('Function not implemented.');
}
