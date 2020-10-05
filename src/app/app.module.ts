import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NavbarModule } from './components/navbar/navbar.module';
import { FormModule } from './components/form/form.module';
import { TableModule } from './components/table/table.module'

import { TableComponent } from './components/table/table.component'
import { FormComponent } from './components/form/form.component'

import { TableService } from './components/table/table.service'
import { FormService } from './components/form/form.service'



const routes: Routes = [
  { path: 'formularios', component: TableComponent },
  { path: 'formularios/novo', component: FormComponent},
  { path: 'formularios/:id', component: FormComponent}
]


@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    FormModule,
    TableModule,
    RouterModule.forRoot(routes),
    HttpClientModule    
  ],
  providers: [ TableService, FormService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
