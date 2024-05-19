import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

//#region Interfaces
export interface Options {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  context?: HttpContext;
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
}

export interface Register {
  username: string | null | undefined;
  name: string | null | undefined;
  surname: string | null | undefined;
  password: string | null | undefined;
}

export interface Login {
  username: string | null | undefined;
  password: string | null | undefined;
}

export interface Task {
  id: number;
  task: string | null;
  is_Completed: boolean;
  modified: Date | string;
}

export interface Params {
  [param: string]:
    | string
    | number
    | boolean
    | ReadonlyArray<string | number | boolean>;
}
//#endregion

//#region Types
export type AddTask = {
  task: string | null;
};

export type LoggedInUser = {
  user: User;
};

export type User = {
  username: string;
  name: string;
  surname: string;
};
//#endregion
