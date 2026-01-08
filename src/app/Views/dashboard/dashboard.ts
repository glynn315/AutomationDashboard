import { Component, OnInit } from '@angular/core';
import { ConversationServices } from '../../Services/ConversationServices/conversation-services';
import { Logs } from '../../Models/LogsList/logs.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  providers: [ ConversationServices ]
})
export class Dashboard implements OnInit {

  LogsList: Logs[] = [];

  constructor(private LogsServices : ConversationServices, private router : Router) {}

  ngOnInit(): void {
    this.displayDashboard();
  }

  displayDashboard(){
    this.LogsServices.displayListLogsPending().subscribe((data) => {
      this.LogsList = data;
    });
  }

}
