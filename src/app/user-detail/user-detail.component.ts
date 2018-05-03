import { Component, OnInit ,HostListener } from '@angular/core';
import { ActivatedRoute, Router,NavigationStart, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})



export class UserDetailComponent implements OnInit {

  user = {};
  data = {};
  uid: any;
  eventsObj  : any;

  //Get User Details
  getUser(id) {
    this.http.get('/user/'+id).subscribe(data => {
      this.user = data;
    });
  }


  //Delete User

  deleteUser(id) {
    this.http.delete('/user/'+id)
      .subscribe(res => {
          this.router.navigate(['/users']);
        }, (err) => {
          console.log(err);
        }
      );
  }


// Update the activity when user closes the window
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
      this.updateUser();    
  }
  

 

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
  // update the activity when route changes 
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
          this.updateUser();
      }
     });
  }
  

 
//Update User activity to the database
  updateUser() {

     var data = {  imageEvents : this.eventsObj.eventsArray ,
                   imageHovers : this.eventsObj.hoversArray,
                   imageClicks : this.eventsObj.clicksArray,
                   imageLeftClicks : this.eventsObj.leftClickArray,
                   imageRightClicks : this.eventsObj.rightClickArray,
                   imageMiddleClicks : this.eventsObj.middleClickArray,
                   imageDoubleClicks : this.eventsObj.doubleClickArray

     }
      
    this.http.put('/user/'+this.uid,{ "$push": data})
      .subscribe(res => {
         // let id = res['_id'];
          //clearing the activity array after updating the database
          this.eventsObj.eventsArray = []; 
          this.eventsObj.clicksArray = [];
          this.eventsObj.hoversArray = [];
          this.eventsObj.leftClickArray = [];
          this.eventsObj.rightClickArray = [];
          this.eventsObj.middleClickArray = [];
          this.eventsObj.doubleClickArray = [];
        }, (err) => {
          console.log(err);
        }
      );
  }
  
  ngOnInit() {

    var timeStamp = new Date();
    
    this.uid = this.route.snapshot.params['id'];
    var uid = this.uid;

    this.getUser(uid);

    var clickEventObj = new ClickEvents(this.http); 

    var image1 = <HTMLElement>document.getElementById("image1");  
    var image2 = <HTMLElement>document.getElementById("image2"); 
    var image3 = <HTMLElement>document.getElementById("image3");  
    var image4 = <HTMLElement>document.getElementById("image4"); 
    var image5 = <HTMLElement>document.getElementById("image5");  
    
    var eventsObj = new Events(); 
    this.eventsObj =  eventsObj;
   // Clicks
   // e.button == 0 -> left click
   //             1 -> Middle click
   //             2 -> Right Click
    image1.onmousedown= function(e){ 
      clickEventObj.Onclick(uid,1,eventsObj,e.button);       
    }
    image2.onmousedown= function(e){ 
      clickEventObj.Onclick(uid,2,eventsObj,e.button);       
    }
    image3.onmousedown= function(e){ 
      clickEventObj.Onclick(uid,3,eventsObj,e.button);        
    } 
    image4.onmousedown= function(e){ 
     clickEventObj.Onclick(uid,4,eventsObj,e.button);       
    }
    image5.onmousedown= function(e){ 
     clickEventObj.Onclick(uid,5,eventsObj,e.button);       
    }
    
   //Hovers
    image1.onmouseout  = function(){
      clickEventObj.OnHover(uid,1,eventsObj);
    }
    image2.onmouseout = function(){
      clickEventObj.OnHover(uid,2,eventsObj);
    }
    image3.onmouseout = function(){
      clickEventObj.OnHover(uid,3,eventsObj);
    }
    image4.onmouseout = function(){
      clickEventObj.OnHover(uid,4,eventsObj);
    }
    image5.onmouseout = function(){
      clickEventObj.OnHover(uid,5,eventsObj);
    }

    //Double Clicks 
    // assume 3-> Double Click
     image1.ondblclick = function(){
       clickEventObj.Ondblclick(uid,1,eventsObj,3); }
     image2.ondblclick = function(){
      clickEventObj.Ondblclick(uid,2,eventsObj,3); }  
     image3.ondblclick = function(){
       clickEventObj.Ondblclick(uid,3,eventsObj,3); } 
     image4.ondblclick = function(){
       clickEventObj.Ondblclick(uid,4,eventsObj,3); }   
     image5.ondblclick = function(){
       clickEventObj.Ondblclick(uid,5,eventsObj,3); }                      
  }
    
}

interface eventsDataInterface {
  eventType: String;
  image: String;
  timeStamp : Number;
}

interface imageHoversInterface{
  image : String,
  timeStamp : Number
}

interface imageClicksInterface {
  image : Number,
  clickType : Number,
  timeStamp : Number
}
interface imageLeftClicksInterface{
   image : Number,
   timeStamp : Number
 }
 interface imageRightClicksInterface {
  image : Number,
  timeStamp : Number
}
interface imageDoubleClicksInterface {
  image : Number,
  timeStamp : Number
}
interface imageMiddleClicksInterface{
  image:Number,
  timeStamp: Number;
}

class Events  {
 
  eventsArray :Array<eventsDataInterface> = [];
  clicksArray : Array<imageClicksInterface> = [];
  hoversArray : Array<imageHoversInterface> = [];
  leftClickArray : Array<imageLeftClicksInterface> = [];
  rightClickArray : Array<imageRightClicksInterface> = [];
  middleClickArray : Array<imageMiddleClicksInterface> = [];
  doubleClickArray : Array<imageDoubleClicksInterface> = [];

  constructor() {  }

  addEvent(node: eventsDataInterface): void {
      this.eventsArray.push(node);
  }

  addClick(node:imageClicksInterface):void {
    this.clicksArray.push(node);
  }
  
  addHover(node:imageHoversInterface):void {
    this.hoversArray.push(node);
  }
   
  addLeftClick(node:imageLeftClicksInterface):void {
    this.leftClickArray.push(node);
  } 
   
  addRightClick(node:imageRightClicksInterface):void {
    this.rightClickArray.push(node);
  } 
  
  addMiddleClick(node:imageMiddleClicksInterface):void {
    this.middleClickArray.push(node);
  } 

  addDoubleClick(node:imageDoubleClicksInterface):void {
    this.doubleClickArray.push(node);
  } 
}



class ClickEvents  
{  
  constructor(private http: HttpClient){}

 

    Onclick(uid,image,eventsObj,clickId)  
    {  
       

      var timeStamp = Math.floor(Date.now() / 1000)
    
      let eventsData = <eventsDataInterface>{eventType : 'click' ,image : image, timeStamp:timeStamp};
      
      let clicksData = <imageClicksInterface>{image:image,clickType:clickId,timeStamp:timeStamp};

    
     if(clickId === 0){
     let leftClickData = <imageLeftClicksInterface>{image:image,timeStamp:timeStamp}; 
      eventsObj.addLeftClick(leftClickData); }
     else if(clickId === 2){
     let rightClickData = <imageRightClicksInterface>{image:image,timeStamp:timeStamp};
       eventsObj.addRightClick(rightClickData); }
    else if(clickId === 1){
     let middleClickData = <imageMiddleClicksInterface>{image:image,timeStamp:timeStamp};
       eventsObj.addMiddleClick(middleClickData); }

      
      eventsObj.addEvent(eventsData);
      eventsObj.addClick(clicksData);
      
      
    }  

    Ondblclick(uid,image,eventsObj,clickId)  
    {  
      var timeStamp = Math.floor(Date.now() / 1000);
    
      let eventsData = <eventsDataInterface>{eventType : 'click' ,image : image, timeStamp:timeStamp};
      
      let clicksData = <imageClicksInterface>{image:image,clickType:clickId,timeStamp:timeStamp};
  
      let doubleClickData = <imageLeftClicksInterface>{image:image,timeStamp:timeStamp}; 
      
     
      eventsObj.addEvent(eventsData);
      eventsObj.addClick(clicksData);
      eventsObj.addDoubleClick(doubleClickData);

    }

    OnHover(uid,image,eventsObj){

      var timeStamp = Math.floor(Date.now() / 1000);
 
      let eventsData = <eventsDataInterface>{eventType : 'Hover' ,image : image, timeStamp:timeStamp};

      let hoverData = <imageHoversInterface>{image:image,timeStamp:timeStamp};

      eventsObj.addEvent(eventsData);
      eventsObj.addHover(hoverData);
      
    }

}
