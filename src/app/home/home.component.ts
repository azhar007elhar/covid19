import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { homeService } from './homeService';
import { DatePipe } from '@angular/common';
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private home: homeService , public httpClient: HttpClient , private datePipe: DatePipe ) { }

  ngOnInit() {
    this.All();
    this.All2();
    this.All3();
  }


  all: any;
  all2: any ;
  all3: any ;
pages: Array<number>;
death: any ;


confirmed = '';
recovered = '';
deaths    = '';
negative  = '';
last_updated = '';
dateTime ='';

All3(){
  this.home.getAll()
      .subscribe(
        (Response) => {
          this.all3 = Response[1] ;  
          this.pages = new Array(this.all3); 
        }
        );

      }


  All(){
    this.home.getAll()
        .subscribe(
          (Response) => {
            this.all = Response ;          
          //  this.pages = new Array(this.all); 
        //    console.log(this.pages[0]);
         //   console.log(this.all[0].confirmed);
            this.death = this.all[1] ;
          //  console.log(this.death);

            this.confirmed = this.all[0].confirmed ;
            this.recovered = this.all[0].recovered ;
            this.deaths = this.all[0].deaths ;
            this.negative = this.all[0].negative ;

            this.last_updated = this.all[0].last_updated ;
          //  console.log(this.last_updated);
            var splitted = this.last_updated.split(" "); 
          //  console.log('jjjj : '+splitted[1] +'-'+splitted[2] +'-' +splitted[3] );
            var news = splitted[1] +'-'+splitted[2] +'-' +splitted[3] ;

            var datee = this.datePipe.transform(news,"MM-dd-yyyy");
            var timee = splitted[4] ; 
            this.dateTime = datee +' '+timee ;
         //   console.log(this.dateTime);


          }
        );
        
  }


  All2(){
    this.home.getAll2()
        .subscribe(
          (Response) => {
            this.all2 = Response;          
            this.pages = new Array(this.all2.geometryType); 
          }
          );
        }
}
