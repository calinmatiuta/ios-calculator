import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlaygroundComponent } from "./playground/playground.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { DisplayFlexComponent } from "./display-flex/display-flex.component";

const routes: Routes = [
  {
    path: "playground",
    component: PlaygroundComponent
  },
  {
    path: "calculator",
    component: CalculatorComponent
  },
  {
path:"display-flex",
component:DisplayFlexComponent
  },

  {
    path: "**",
    redirectTo: "calculator"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
