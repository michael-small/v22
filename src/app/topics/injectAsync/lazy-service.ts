import { Service } from '@angular/core';

@Service()
export class LazyService {
  constructor() {
    console.log('LazyService loaded');
  }

  export() {
    console.log('expensive export logic');
  }
}
