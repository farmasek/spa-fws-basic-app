import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

const tokenPostfix = `?${process.env.tokenPostfix || ""}`;

@Injectable()
export class GithubService {
  constructor(private http: HttpClient) {}

  getUser(user: string) {
    return this.http.get(`https://api.github.com/users/${user}${tokenPostfix}`);
  }

  getUsersRepos(user: string) {
    return this.http.get(
      `https://api.github.com/users/${user}/repos${tokenPostfix}`
    );
  }

  getUserFollowings(user: string) {
    return this.http.get(
      `https://api.github.com/users/${user}/following${tokenPostfix}`
    );
  }
}

