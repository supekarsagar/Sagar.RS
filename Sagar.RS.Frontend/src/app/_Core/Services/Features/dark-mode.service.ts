import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  private isDarkModeEnabled=false;
  constructor() { }

  toggleDarkMode(){
    this.isDarkModeEnabled=!this.isDarkModeEnabled;
    this.updateStyle();
  }
  isDarkMode(){
    return this.isDarkModeEnabled;
  }
  updateStyle(){
    const body=document.body;
    if(this.isDarkModeEnabled){
      body.classList.add('dark-mode');
    }else{
      body.classList.remove('dark-mode');
    }
  }
}

