import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { CheckList } from 'src/app/checklist/model/checklist';
import { CheckListService } from 'src/app/checklist/service/checklist.service';


@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent  implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  checklist : Observable<CheckList[]>;

  constructor( private checklistService: CheckListService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar
    ){
      this.checklist = this.checklistService.list().pipe(
        catchError(error => {
          console.log()
          return of([])
        })
      );
  }


  onEdit(checklist: CheckList ){
    this.router.navigate(['edit', checklist.id_check], {relativeTo:this.route});
  }


  refresh(){
    window.location.reload();
  }

}


function next(value: Object): void {
  throw new Error('Function not implemented.');
}
