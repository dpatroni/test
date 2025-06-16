import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-sidebar',
  standalone: true, // Explicitly mark as standalone
  imports: [RouterModule], // Add RouterModule here
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {

}
