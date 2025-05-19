import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const guarda1Guard: CanActivateFn = (route, state) => {
  /* console.log(route)
  console.log(state)
  let fecha:Date=new Date()
  let hora=fecha.getHours()

  if(hora>=18)
    return true
  else{
    inject(Router).navigate(["/"])
    return false
  } */
  return true;
};
