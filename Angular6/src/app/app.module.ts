// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
//routes
import { appRoutes } from './routes';
import { ProfileComponent } from './user/profile/profile.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './shared/services/user.service';
import { AuthGuardService } from './shared/auth-guard.service';
import {MatSidenavModule,MatToolbarModule, MatSelectModule, MatFormFieldModule,MatButtonModule, MatIconModule, MatDialogModule, MatRadioButton, MatRadioModule} from '@angular/material';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GiftDialogComponent } from './gifts/gift-dialog/gift-dialog.component';
import { AddGiftComponent } from './gifts/add-gift/add-gift.component';
import { GiftService } from './shared/services/gift.service';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    ProfileComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    GiftDialogComponent,
    AddGiftComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
    BrowserAnimationsModule
  ],
  entryComponents:[GiftDialogComponent,AddGiftComponent],
  providers: [UserService,AuthGuardService,GiftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
