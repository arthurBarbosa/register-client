import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client = {


  }
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  createClient() {
    this.clientService.create(this.client).subscribe(() => {
      console.log(this.client)
      this.clientService.showMessage("cliente salvo");
    })

  }

}
