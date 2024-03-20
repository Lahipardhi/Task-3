import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';

interface Section{
  header:string;
  details:string;
}

@Component({
  selector: 'app-root',
  //standalone: true,
  //imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title ='basic-service';
  sections:Section[] =[];
  newSectionHeader:string='';
  newSectionDetaild:string='';


  addSection(){
    if(this.newSectionHeader && this.newSectionDetaild){
      this.sections.push({header : this.newSectionHeader, details:this.newSectionDetaild})
      this.newSectionHeader='';
      this.newSectionDetaild='';
    }
  }

  
}
