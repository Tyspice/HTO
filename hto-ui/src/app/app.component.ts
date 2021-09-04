import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public response: string = '';

  constructor(private http: HttpClient) { }

  public getMessage() {
    this.http.get('http://localhost:3000').subscribe(res => {
      this.response = <any>res
    })
  }

}
