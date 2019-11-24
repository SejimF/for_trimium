import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  navigationStyles = {};

  defaultNavigationBarColor = '#F0A4E6';


  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/config/client-config.json')
    .toPromise()
    .then((config: any) => {
      if (config && config.navigationBarColor) {
        this.navigationStyles['background-color'] = config.navigationBarColor;
      } else {
        this.navigationStyles['background-color'] = this.defaultNavigationBarColor;
      }
    })
    .catch(err => {
      console.log('app component - failed to fetch client config')
      console.log(err)
    })
  }

}
