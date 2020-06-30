import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule,RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { TenantsComponent } from './tenants/tenants.component';
import { TenantComponent } from './tenant/tenant.component';
import {TenantService} from './shared/tenant.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import{MatNativeDateModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTreeModule} from '@angular/material/tree';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { NavtreeComponent } from './navtree/navtree.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import{environment} from './../environments/environment';
import { NgApexchartsModule } from "ng-apexcharts";
import { DatePipe } from '@angular/common';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import {MatTableModule} from '@angular/material/table'




library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    TenantsComponent,
    TenantComponent,
    NavtreeComponent,
    RoutingComponent,
    TenantListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    FontAwesomeModule,
    ShareButtonsModule,
    MatCardModule,
    MatDividerModule,
    NgApexchartsModule ,
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatTableModule,
  ],
  providers: [TenantService,DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
