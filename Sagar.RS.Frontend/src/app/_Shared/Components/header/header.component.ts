import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/_Core/Services/Features/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private darkModeService: DarkModeService) {
    
  }

  
  toggleDarkMode(){
    this.darkModeService.toggleDarkMode();
  }

}
