import { Component } from '@angular/core';
import { Service } from '../app/service/Service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cittamobi-frontend';
  services: Service[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadServices();

    setInterval(() => {
      this.loadServices();
    }, 30000); // atualiza os dados a cada 30 segundos
  }

  loadServices(): void {
    this.http.get<Service[]>('http://localhost:8080/services').subscribe(services => {
      this.services = services;
    });
  }
}
