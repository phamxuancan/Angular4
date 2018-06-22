import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { Routes,RouterModule } from '@angular/router'
const routersConfig: Routes =[
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},

] 
import { AppComponent } from './app.component';
import { WordComponent } from './word.component';
import { BookComponent } from './book/book.component';
import { UserComponent } from './user/user.component';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListpersonComponent } from './listperson/listperson.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CardComponent } from './card/card.component';
import { PipesComponent } from './pipes/pipes.component';
import { IpComponent } from './ip/ip.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserComponent,
    StructComponent,
    WordsComponent,
    PersonComponent,
    ListpersonComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    PipesComponent,
    IpComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routersConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
