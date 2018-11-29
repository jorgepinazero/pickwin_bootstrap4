import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RegisterModalComponent} from '../register-modal/register-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pickwinlogo = '../../assets/img/pickwinColores-50.png';

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openRegister() {
    const modalRef = this.modalService.open(RegisterModalComponent, {});
    modalRef.componentInstance.name = 'Register';
  }

}
