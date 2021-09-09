import { DisplayData } from './display-data/display-data.component';

import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './in-memory-web-api.service';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { UpdateDetailsComponent } from './update-details/update-details.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DisplayData,
    CreateEmployeeComponent,
    DeleteEmployeeComponent,
    UpdateDetailsComponent,

    SearchPipe
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: DisplayData },
      { path: 'employees', component: DisplayData },
      { path: 'addemployee', component: CreateEmployeeComponent },
      { path: 'editEmployee/:id', component: UpdateDetailsComponent },
      { path: 'deleteEmployee/:id', component: DeleteEmployeeComponent }
    ]),
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
