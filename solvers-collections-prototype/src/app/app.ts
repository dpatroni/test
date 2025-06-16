import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/components/header/header';
import { Sidebar } from './core/components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true, // Explicitly mark as standalone
  imports: [RouterOutlet, Header, Sidebar], // Add Header and Sidebar here
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'solvers-collections-prototype';
}
