import { Pipe, PipeTransform ,Inject, Injectable} from '@angular/core';

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'clickNumToString'})

@Injectable()

export class clickNumToStringPipe implements PipeTransform {
   
    constructor() {

    }
    transform(value) {
        
         if(value === 0)
          return "Left CLick";
         else if(value === 1)
          return "Middle Click";
         else if(value === 2)  
          return "Right Click";
         else if(value === 3)
          return "Double Click";
          
          return value;
         
      }
 
}