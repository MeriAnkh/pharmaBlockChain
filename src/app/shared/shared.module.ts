import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './components/comments/comments.component';



@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule, 
    ReactiveFormsModule,
    FormsModule,
  ],

  exports: [
    CommentsComponent,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule 
  ]
})
export class SharedModule { }
