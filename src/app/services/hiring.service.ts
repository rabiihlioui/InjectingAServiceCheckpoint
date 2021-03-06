import { Injectable, OnInit } from '@angular/core';
import { Person } from '../person';

@Injectable({
  providedIn: 'root'
})
export class HiringService implements OnInit{

  hiredCvs = []

  hireFlag = false

  constructor() { }

  ngOnInit(){
    this.hireFlag = true
  }

  hireCv(pers: Person) {
    this.hiredCvs.push(pers)
  }

  unhireCv(id: number) {
    this.hiredCvs.forEach(cv => {
      if ( cv.id == id ) {
        this.hiredCvs.splice(this.hiredCvs.indexOf(cv),1)
      }
    });
  }

  unhireAllCvs() {
    this.hiredCvs.length = 0
  }

  getHiredCvs(){
    return this.hiredCvs
  }

}
