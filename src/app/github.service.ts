import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface GithubResponse {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

const URL = 'https://api.github.com/users';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(public readonly http: HttpClient) {}

  getGitUsers(): Observable<GithubResponse[]> {
    return this.http.get<GithubResponse[]>('https://api.github.com/users');
  }
  getGitRepos(repoUrl: string): Observable<any> {
    return this.http.get<any>(repoUrl);
  }
}
