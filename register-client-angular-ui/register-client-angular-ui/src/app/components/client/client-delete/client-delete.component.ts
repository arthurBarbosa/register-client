import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {

  client: Client;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.clientService.readById(id).subscribe(client => {
      this.client = client;
    })
  }

  deleteClient() {
    this.clientService.delete(this.client.id.toString()).subscribe(() => {
      this.clientService.showMessage('Cliente excluído com sucesso.')
      this.router.navigate(['/clients']);
    })
  }

  cancel() {
    this.router.navigate(['/clients']);
  }

}
