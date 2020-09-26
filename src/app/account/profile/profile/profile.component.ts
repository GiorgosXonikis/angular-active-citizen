import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {IUser} from '../../../core/models/interfaces';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user: IUser;

  constructor(private authService: AuthService) {
  }


  ngOnInit() {
      this.user = this.authService.user;
    }

}
