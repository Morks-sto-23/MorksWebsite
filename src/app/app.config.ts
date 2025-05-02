// src/app/app.config.ts
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter }    from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideNzI18n, en_US }   from 'ng-zorro-antd/i18n';

import { routes }           from './app.routes';

// Ng Zorro modules you need app-wide:
import { NzLayoutModule }   from 'ng-zorro-antd/layout';
import { NzMenuModule }     from 'ng-zorro-antd/menu';
import { NzIconModule }     from 'ng-zorro-antd/icon';
import { NzButtonModule }   from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule }     from 'ng-zorro-antd/grid';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideNzI18n(en_US),
    provideHttpClient(),

    // <-- Pull in all these NgModule providers so standalone components can use them:
    importProvidersFrom(
      NzLayoutModule,
      NzMenuModule,
      NzIconModule,
      NzButtonModule,
      NzTypographyModule,
      NzGridModule,
      NzAvatarModule,
      NzCarouselModule,
    )
  ]
};
