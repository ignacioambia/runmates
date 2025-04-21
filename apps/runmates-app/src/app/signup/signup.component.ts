import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RegisterUserResponse } from '@runmates/types/users';
import { ChatUserInfo, RmChatContainer } from '@runmates/ui/chat';
import { ChatService } from '@runmates/ui/chat';
import { RmDialogService } from '@runmates/ui';

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
    private dialogService: RmDialogService
  ) {
    // Initialize any necessary services or variables here
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.dialogService.open({ title: 'All done!', content: 'Hello world!' });
    // }, 5000);
    this.http
      .post<RegisterUserResponse>('/users', null)
      .subscribe((response) => {
        // Storage.get('token').then((token) => {
        this.chatService.registerUser();
      });
  }
}
