import { Component, Input } from '@angular/core';

export interface GithubRepoDetails {
  imgUrl: string;
  reposLength: number;
}

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
})
export class GithubComponent {
  @Input() githubRepoDetails?: GithubRepoDetails;
}
