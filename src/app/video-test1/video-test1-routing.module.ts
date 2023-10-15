import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoRecorderComponent } from './components/video-recorder/video-recorder.component';

const routes: Routes = [
  {
    path:'',
   component:VideoRecorderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class   VideoTest1RoutingModule { }
