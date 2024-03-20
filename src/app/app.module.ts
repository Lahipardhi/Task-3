
import{NgModule} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AccordionModule } from 'primeng/accordion';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';







@NgModule({
    declarations :[
        AppComponent,
      
     
        
       
    ],

    imports :[
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        AccordionModule,
        ButtonModule,
        InputTextModule,
        BrowserAnimationsModule 
        
        
    
     
    ],
    providers:[],
    bootstrap :[AppComponent],
})
export class AppModule{}
