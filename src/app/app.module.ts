import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReadablePipe } from './helper/readable.pipe';

@NgModule({
  declarations: [AppComponent, ReadablePipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ReadablePipe],
})
export class AppModule {}
