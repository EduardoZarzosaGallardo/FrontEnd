import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthService} from '../../services/auth.service';
import { UserI } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.checktoken()
  }

  onRegister (form): void {
    this.authService.register(form.value).subscribe(res => {
      this.router.navigateByUrl('/auth/login');
    });
  }

}
