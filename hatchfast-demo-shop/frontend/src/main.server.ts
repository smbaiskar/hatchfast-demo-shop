import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import {MatSidenavModule} from '@angular/material/sidenav';



const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
