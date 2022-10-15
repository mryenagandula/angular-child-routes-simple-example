import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/apis/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public usersDetails:any;

  constructor(private api: UsersService,private activatedRoute:ActivatedRoute) { }

  public ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params)=>{
      if(params && params.get('id').toString() !== 'users'){
        this.loadUsersById(params.get('id').toString())
      }
    })
  }

  public async loadUsersById(value){
    const res = await this.api.loadUsersById(value).toPromise().then((res:any) => res.user);
    this.usersDetails = res;
  }

}
