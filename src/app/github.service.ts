import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Repo {
  id: number;
  repos: number[];
}

const repos: Repo[] = [
  { id: 1, repos: [1, 1, 1, 1, 1] },
  { id: 2, repos: [1, 1, 1] },
  { id: 3, repos: [1, 1, 1] },
  { id: 4, repos: [] },
  { id: 5, repos: [1] },
  { id: 6, repos: [1, 1, 1, 1, 1, 1, 1] },
];

const repos$ = (id: number) => of(repos.filter((repo) => repo.id === id));

export interface GithubResponse {
  age: number;
  firstName: string;
  lastName: string;
  id: number;
  prof: string;
  // login: string;
  // id: number;
  // node_id: string;
  // avatar_url: string;
  // gravatar_id: string;
  // url: string;
  // html_url: string;
  // followers_url: string;
  // following_url: string;
  // gists_url: string;
  // starred_url: string;
  // subscriptions_url: string;
  // organizations_url: string;
  // repos_url: string;
  // events_url: string;
  // received_events_url: string;
  // type: string;
  // site_admin: boolean;
}

const URL = 'https://api.github.com/users';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(public readonly http: HttpClient) {}

  getGitUsers(): Observable<GithubResponse[]> {
    // return this.http.get<GithubResponse[]>('https://api.github.com/users');
    const users = [
      {
        age: 20,
        firstName: 'Alyse',
        lastName: 'Keriann',
        id: 1,
        prof: 'dadd',
      },
      {
        age: 32,
        firstName: 'Annadiane',
        lastName: 'Katie',
        id: 2,
        prof: 'dadd',
      },
      {
        age: 67,
        firstName: 'Agnella',
        lastName: 'Kandace',
        id: 3,
        prof: 'dadd',
      },
      {
        age: 45,
        firstName: 'Anselma',
        lastName: 'Julita',
        id: 4,
        prof: 'dadd',
      },
      {
        age: 45,
        firstName: 'Aigneis',
        lastName: 'Kasey',
        id: 5,
        prof: 'dadd',
      },
      {
        age: 67,
        firstName: 'Adel',
        lastName: 'Kameko',
        id: 6,
        prof: 'dadd',
      },
    ];
    return of(users);
  }
  getGitRepos(id: number): Observable<any> {
    // return this.http.get<any>(repoUrl);
    // const students = ;
    return repos$(id);
  }
}
