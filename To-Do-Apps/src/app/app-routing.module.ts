import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';  // Import the standalone component

const routes: Routes = [
  {
    path: '',
    component: HomePage,  // Use the standalone component directly here
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
