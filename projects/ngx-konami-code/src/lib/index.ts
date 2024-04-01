import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxKonamiCodeDirective } from './ngx-konami-code.directive'


export * from './ngx-konami-code.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NgxKonamiCodeDirective
  ],
  exports:[
    NgxKonamiCodeDirective
  ]
})
export class KonamiCodeModule {
  static forRoot(): ModuleWithProviders<KonamiCodeModule> {
    return {
      ngModule: KonamiCodeModule
    };
  }
}