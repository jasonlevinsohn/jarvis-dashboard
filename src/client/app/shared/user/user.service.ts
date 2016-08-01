import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    constructor() {
        console.log('User Class is loaded');
    }


    checkYoSelf() {

        return 'Check yo self before you wreck yourself, fo';
    }

}
