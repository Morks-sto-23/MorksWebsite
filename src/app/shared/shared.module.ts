// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  imports: [
    NzAvatarModule,
    NzButtonModule,
    NzCardModule,
    NzGridModule,
    NzTagModule,
    NzLayoutModule,
    NzTypographyModule,
  ],
  exports: [
    NzAvatarModule,
    NzButtonModule,
    NzCardModule,
    NzGridModule,
    NzTagModule,
    NzLayoutModule,
    NzTypographyModule,
  ]
})
export class SharedModule {}
