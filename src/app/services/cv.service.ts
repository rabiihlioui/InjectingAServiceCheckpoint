import { Injectable } from '@angular/core';

import { Person } from '../person';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  pers = new Person(0,'','',0,0,'','../../assets/images/developer.png','../../assets/images/coverDev.png')

  pers1 = new Person(1,'Rabii','Hlioui',60,15786937,'Software Engineer','../../assets/images/rabiiHlioui.png','../../assets/images/coverRabii.png')
  pers2 = new Person(2,'Lionel','Messi',120,94557937,'Footballer','../../assets/images/lionelMessi.png','../../assets/images/coverLionel.png')
  pers3 = new Person(3,'Emna','Mejri',30,63339411,'Secretary','../../assets/images/imenMejri.png','../../assets/images/coverImen.png')
  pers4 = new Person(4,'Slimen','Labyedh',40,76945137,'Psychotherapist','../../assets/images/slimenLabyedh.png','../../assets/images/coverSlimen.png')

  constructor() { }

  retrievePersById(id: number) {
    switch (id) {
      case 0:
        return this.pers;
      case 1:
        return this.pers1;
      case 2:
        return this.pers2;
      case 3:
        return this.pers3;
      case 4:
        return this.pers4;
    }
  }

}
