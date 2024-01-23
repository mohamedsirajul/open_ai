import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { ToastrModule } from 'ngx-toastr';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './components/sessions/login/login.component';
import { RegisterComponent } from './components/sessions/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirePredComponent } from './components/fire-pred/fire-pred.component';
import { TreeCountComponent } from './components/tree-count/tree-count.component';

// import { AgmCoreModule } from '@agm/core';
// import { environment } from 'src/environments/environment';
// import { environment } from 'src/environments/environment';
import { GoogleMapsModule } from '@angular/google-maps';
import { VoteComponent } from './components/vote/vote.component';
import { FaceRegComponent } from './components/face-reg/face-reg.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatboxComponent,
    DashboardComponent,
    AuthLayoutComponent,
    LoginComponent,
    RegisterComponent,
    FirePredComponent,
    TreeCountComponent,
    VoteComponent,
    FaceRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatPaginatorModule,
    DragDropModule,
    MatMenuModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatChipsModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    

  ],
  exports: [
    ToastrModule,
],
  providers: [
    {provide: LocationStrategy,useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
