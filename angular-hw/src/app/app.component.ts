import { Component, OnInit } from '@angular/core';
import { GithubService } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubService],
})
export class AppComponent implements OnInit {
  user: any;

  constructor(private githubService: GithubService, private router: Router) {
    this.user = {};
  }

  ngOnInit() {
    if (!this.user.login) {
      this.router.navigate(['']);
    }
  }
  getUser(event): void {
    this.githubService.getUser(event.target.value).subscribe(
      user => {
        this.user = user;
        this.router.navigate([`/following/${this.user.login}`]);
      },
      err => {
        this.user = {};
        this.router.navigate(['']);
      },
    );
  }
}

