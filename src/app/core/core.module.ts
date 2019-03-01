import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [],
  providers: [
    AuthGuardService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('根模块使用forRoot引用,其他模块不需要再引用了!');
    }
  }//constructor

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }//forRoot
}
