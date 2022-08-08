import { Component, OnInit } from '@angular/core';
import { map, mergeMap, Observable, of, switchMap, tap } from 'rxjs';

import { GithubResponse, GithubService } from './github.service';
import { GithubRepoDetails } from './github/github.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  gits: any[] = [];

  constructor(public readonly githubService: GithubService) {}

  ngOnInit() {
    const usersGitUrls: any[] = [];

    this.githubService
      .getGitUsers()
      .pipe(
        tap((users) => {
          console.log('users', users);
          users.forEach((user) => {
            usersGitUrls.push();
          });
        })
      )

      .subscribe((data) => {
        console.log(data);
      });
  }
}
