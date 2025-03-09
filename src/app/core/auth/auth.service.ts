import { Injectable } from "@angular/core";

interface User {
  username: string;
  password: string;
}
@Injectable({
  providedIn: "root",
})
export class AuthService {
  private users: User[] = [];

  constructor() {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  register(username: string, password: string): boolean {
    if (this.users.find((user) => user.username === username)) {
      return false; 
    }
    this.users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(this.users));
    return true;
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem("currentUser");
  }

  getCurrentUser(): User | null {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
  }
}
