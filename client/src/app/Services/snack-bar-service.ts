import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {


  constructor(private matSnackBar: MatSnackBar) {

  }

  handleSnackBar(msg: any, type: any, duration: number) {  // type='success' | 'error' | 'warning' = 'success'
    console.log("the snake bar id called here")
    this.matSnackBar.open(`${msg}`, 'Close', {
      duration: duration,
      panelClass: [`${type}-snackbar`]
     
    })
  }


}
