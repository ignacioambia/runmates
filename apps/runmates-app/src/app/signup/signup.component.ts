import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RegisterUserResponse } from '@runmates/types/users';
import { ChatUserInfo, RmChatContainer } from '@runmates/ui/chat';
import { ChatService } from '@runmates/ui/chat';
import { RmDialogService } from '@runmates/ui';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RmChatContainer],
  providers: [RmDialogService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class AppSignup {
  public mateoUserInfo: ChatUserInfo = {
    name: 'Mateo',
    title: 'Personal trainer',
    avatar: 'mateo-profile-pic.png',
  };

  private chatService = inject(ChatService);

  constructor(
    private http: HttpClient,
    private storage: Storage
  ) {
    // Initialize any necessary services or variables here
  }

  ngOnInit() {
    this.http
      .post<RegisterUserResponse>('/users', null)
      .subscribe((response) => {
        this.chatService.startSignupConversation(response.userId);
        
        this.chatService.onPlanCreated().subscribe(() => {
          this.storage.set('token', response.token);
        });
      });
  }
}
