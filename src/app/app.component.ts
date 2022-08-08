import { Component, OnInit } from '@angular/core';
import { map, mergeMap, Observable, of, switchMap, tap, from } from 'rxjs';

import { GithubResponse, GithubService } from './github.service';
import { GithubRepoDetails } from './github/github.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public readonly service: GithubService) {}

  gits: any[] = [];

  ngOnInit() {
    this.service
      .getGitUsers()
      .pipe(
        switchMap((users) =>
          from(users).pipe(
            switchMap((user) =>
              this.service.getGitRepos(user.id).pipe(
                map((repo) => ({
                  firstName: user.firstName,
                  repos: repo[0].repos.length,
                }))
              )
            )
          )
        )
      )
      .subscribe((data) => {
        this.gits.push(data);
      });
  }
}
