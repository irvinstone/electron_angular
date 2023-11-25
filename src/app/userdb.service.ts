import { Injectable } from '@angular/core';
import { User } from './user/User';

@Injectable({
  providedIn: 'root'
})
export class UserdbService {

  constructor() { }

  public getUsers(): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
      const db = window.require('../../database/models/index');
      db.User.findAll({}).then(function (result: any) {
        const users: User[] = result.map((e: any) => {
          return { id: e.id, name: e.name }
        })
        resolve(result)
      }).catch(function (err: any) {
        reject(err)
      })
    });
  }
}

