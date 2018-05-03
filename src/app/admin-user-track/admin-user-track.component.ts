import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-user-track',
  templateUrl: './admin-user-track.component.html',
  styleUrls: ['./admin-user-track.component.css']
})
export class AdminUserTrackComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router, private route: ActivatedRoute) { }

    
  eventsShow : boolean = true;
  clicksShow : boolean = false;
  leftClicksShow : boolean = false;
  rightClicksShow : boolean = false;
  middleClicksShow : boolean = false;
  hoversShow : boolean = false;
  clickResultsShow : boolean = false;
  leftShow : boolean = false;
  rightShow : boolean = false;
   middleShow : boolean =  false;
   doubleShow : boolean = false;
   allShow : boolean = false;
   clickPillsShow : boolean = false;
   clicksTableShow : boolean = false;

  setAllFalse(){
    this.eventsShow = this.clicksShow = this.leftClicksShow = this.rightClicksShow = this.middleClicksShow =
    this.hoversShow = this.clickResultsShow = this.leftShow = this.rightShow = this.middleShow = 
    this.doubleShow = this.allShow = this.clickPillsShow = this.clicksTableShow =  false;
  }

   

 change(event){
     if(event == "events"){
       this.setAllFalse();
       this.eventsShow = true;
     }
     else if(event == "clicks"){
      this.setAllFalse();
      this.clicksShow = this.clickPillsShow = this.clicksTableShow = this.allShow = true;
     }
     else if(event == "hovers"){
      this.setAllFalse();
      this.hoversShow = true;
     }
    else if(event === 'left'){
      this.setAllFalse();
      this.clickResultsShow = this.clickPillsShow = true;
      this.leftShow = true;
      this.clicksShow = true;
      this.clickResults = this.leftClicks;
      
    }
    else if(event === 1){
      this.setAllFalse();
      this.clickResultsShow = this.middleShow = this.clickPillsShow = true;
      this.clicksShow = true;
      this.clickResults =this.middleClicks;
    }
    else if(event === 2){
      this.setAllFalse();
      this.clickResultsShow = this.rightShow = this.clickPillsShow = true;
      this.clicksShow = true;
   
      this.clickResults =this.rightClicks;
    
    }
    else if(event === 3){
      this.setAllFalse();
      this.clickResultsShow = this.doubleShow = this.clickPillsShow = true;
      this.clicksShow = true;
      this.clickResults = this.doubleClicks;
      
    }
    else if(event === 4){
      this.setAllFalse();
      this.clicksShow = this.allShow = this.clicksTableShow = this.clickPillsShow = true;
    }
   
  }

   
  ngOnInit() {
    this.uid = this.route.snapshot.params['id'];
    this.getUser(this.uid);

  }
  user :any;
  events = [] ; countEvents : Number = 0;
  clicks = [];  countClicks : Number = 0;
  leftClicks = []; countleftClicks : Number = 0;
  rightClicks = []; countrightClicks : Number = 0;
  middleClicks =[]; countmiddleClicks : Number = 0;
  hovers = [];  countHovers : Number = 0;
  uid : any; 
  clickResults =[]; countclickResults : Number = 0;
  doubleClicks = []; countdoubleClicks : Number = 0;


  //Delete User

  deleteUser(id) {
    this.http.delete('/user/'+id)
      .subscribe(res => {
          this.router.navigate(['/admin/users']);
        }, (err) => {
          console.log(err);
        }
      );
  }

   
   
  getUser(id) {
     this.http.get('/user/'+id).subscribe(data => {
     this.user = data;
     this.events = this.user.imageEvents;
     this.clicks = this.user.imageClicks;
     this.hovers = this.user.imageHovers;
     this.leftClicks = this.user.imageLeftClicks;
     this.rightClicks = this.user.imageRightClicks;
     this.middleClicks = this.user.imageMiddleClicks;
     this.doubleClicks = this.user.imageDoubleClicks;
     
     this.countEvents = this.events.length;
     this.countClicks = this.clicks.length;
     this.countHovers = this.hovers.length;
     this.countleftClicks = this.leftClicks.length;
     this.countrightClicks = this.rightClicks.length;
     this.countmiddleClicks = this.middleClicks.length;
     this.countdoubleClicks = this.doubleClicks.length;

    });
  }
}
