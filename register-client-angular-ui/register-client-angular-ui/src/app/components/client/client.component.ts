import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../template/header/header.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de Clientes',
      icon: 'storefront',
      routeUrl: '/clients'
    }
  }

  ngOnInit(): void {
  }

  navigateToClientCreate(): void {
    this.router.navigate(['clients/create']);
  }
}
