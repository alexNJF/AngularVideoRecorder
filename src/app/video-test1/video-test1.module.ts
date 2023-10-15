import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoRecorderComponent } from './components/video-recorder/video-recorder.component';
import { AudioRecorderComponent } from './components/audio-recorder/audio-recorder.component';
import { VideoTest1RoutingModule } from './video-test1-routing.module';



@NgModule({
  declarations: [
    VideoRecorderComponent,
    AudioRecorderComponent
  ],
  imports: [
    CommonModule,
    VideoTest1RoutingModule
  ],
})
export class VideoTest1Module { }
