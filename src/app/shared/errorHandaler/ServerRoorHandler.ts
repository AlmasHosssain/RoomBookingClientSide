import { AbstractControl } from "@angular/forms"
import { HttpErrorResponse } from "@angular/common/http"
import { throwError } from "rxjs"

export class ErrorHandlerClass {
  static handelError = (errorResponse: HttpErrorResponse) => {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client side error occurred : ', errorResponse.error.message)
    } else {
      console.error('Server side error occurred : ', errorResponse)
    }

    return throwError(`There is a problem occurred. Retry again please`)
  }

   static passwordMatch = (domainName : string)=>{
    return (control : AbstractControl):{[key : string] : any} | null =>{
      let password = control.value;
      if (password == '' || password ==domainName) {
        return null
      } else {
        return {'passwordMismatch' : true}
      }
    }
  }
}
