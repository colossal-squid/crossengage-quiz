import { Injectable } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
import { Pipe, PipeTransform } from '@angular/core';

/**
 * a snippet i got here https://gist.github.com/penguinboy/762197
 * Flatten a deep object into a one level object with it’s path as key
 *
 * @param  {object} object - The object to be flattened
 *
 * @return {object}        - The resulting flat object
 */
const flatten = object => {
  return Object.assign( {}, ...function _flatten( objectBit, path = '' ) {  //spread the result into our return object
    return [].concat(                                                       //concat everything into one level
      ...Object.keys( objectBit ).map(                                      //iterate over object
        key => typeof objectBit[ key ] === 'object' ?                       //check if there is a nested object
          _flatten( objectBit[ key ], `${ path }.${ key }` ) :              //call itself if there is
          ( { [ `${ path }.${ key }` ]: objectBit[ key ] } )                //append object with it’s path as key
      )
    )
  }( object ) );
};

@Injectable({
  providedIn: 'root'
})
export class L10nService {

  // this can be externalized into a json for real l10n
  private static readonly TEXT_BUNDLE:any = {
    "difficulty" : {
      "choose_difficulty": "Choose difficulty",
      "levels": {
        "easy": "Easy",
        "medium": "Medium",
        "hard": "Hard",
      }
    },
    "initial": {
      "choose_name": "Pick yourself a name"
    },
    "user": {
      "name": "Your Name"
    },
    "start": "Click here to start!",
    "start_over": "Please click here to start over again",
    "finish_game": "Take me to results page",
    "offline": "It looks like our services are offline at the moment! We will be back soon!",
    "confirm": "Confirm!",
    "please_login": "Your name will be here"
  };

  private static readonly TEXT_BUNDLE_FLAT = flatten( L10nService.TEXT_BUNDLE );;

  constructor(private logging:LoggingService) {}

  public getString(key:string) {
    if (!L10nService.TEXT_BUNDLE_FLAT[`.${key}`]) {
      this.logging.warn(`No i18n for ${key}`);
    }
    return L10nService.TEXT_BUNDLE_FLAT[`.${key}`] || '-';
  }

}

@Pipe({name: 'translate'})
export class TranslatePipe implements PipeTransform {
  constructor(private l10n:L10nService){}

  transform(key :string): string {
    return this.l10n.getString(key);
  }
}
