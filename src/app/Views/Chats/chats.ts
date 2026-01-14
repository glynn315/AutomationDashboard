import { Component, OnInit } from '@angular/core';
import { Logs } from '../../Models/LogsList/logs.model';
import { ConversationServices } from '../../Services/ConversationServices/conversation-services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-chats',
  imports: [CommonModule, FormsModule , HttpClientModule],
  templateUrl: './chats.html',
  styleUrl: './chats.scss',
  providers: [ConversationServices]
})
export class Chats implements OnInit {
  
  LogsList: Logs[] = [];
  searchTerm: string = '';
  constructor(private LogsServices : ConversationServices) {}

  ngOnInit(): void {
    this.displayChats();
  }

  filteredLogs() {
    if (!this.searchTerm) {
        return this.LogsList;
    }

    const term = this.searchTerm.toLowerCase();

    return this.LogsList.filter((log: any) =>
        log.customer_psid?.toLowerCase().includes(term) ||
        log.status?.toLowerCase().includes(term) || 
        log.last_message?.toLowerCase().includes(term)
    );
  }
  displayChats(){
    this.LogsServices.displayListLogs().subscribe((data) => {
      this.LogsList = data;
    })
  }
}
