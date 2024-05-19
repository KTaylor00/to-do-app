import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn: boolean = Boolean(localStorage.getItem('loggedIn'));
  const router = inject(Router);

  if (isLoggedIn) {
    return true;
  } else {
    router.navigateByUrl('');
    return false;
  }
};
