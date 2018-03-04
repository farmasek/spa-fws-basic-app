import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GithubService } from "./app.service";

@Component({
  selector: "app-repositories",
  template: `
    <div>
      <h1>User repositories</h1>
      <div class="cardsHolder" *ngFor="let repository of userRepositories">
      <div class="card">
       <div class="firstLine"> <h4>{{repository.name}}</h4> <i>{{repository.language}}</i></div>
        <p>{{repository.description}}</p></div>
      
      </div>
    </div>
  `,
  styles: [
    `
    .firstLine{
      display:inline-flex;
    }
    .firstLine  i{
      padding:1.3em;
    }
  `
  ]
})
export class Repositories implements OnInit {
  userRepositories: Object;
  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) {}

  ngOnInit() {
    this.getUserRepositories();
  }

  getUserRepositories(): void {
    this.githubService
      .getUsersRepos(this.route.snapshot.paramMap.get("login"))
      .subscribe(userRepositores => (this.userRepositories = userRepositores));
  }
}
