import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements OnInit {

  client: Client;
  clients: Client[] = [];
  displayedColumns = ['id', 'name', 'cpf', 'income', 'birthDate', 'children', 'action']

  totalElements = 0;
  page = 0;
  size = 6;
  pageSizeOptions: number[] = [6]
  
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    // this.clientService.read().subscribe(data => {
    //   this.clients = data.content
    //   console.log(this.clients);
    // })
    this.getAllClients(this.page, this.size)
  }

  getAllClients(page = 0, size = 0){
    this.clientService.read(page, size).subscribe(response => {
      this.clients = response.content;
      this.totalElements = response.totalElements;
      this.page = response.number;
    })
  }

  paginator(event: PageEvent){
    this.page = event.pageIndex;
    this.getAllClients(this.page, this.size);
  }

}
