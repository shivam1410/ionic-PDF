import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, PopoverController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PopoverComponent } from './popover/popover.component';
import { CopyComponent } from './copy/copy.component';
import { CreateShelfComponent } from './create-shelf/create-shelf.component';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FilterItemsPipe } from './pipe/filter-items.pipe';
import { SplitTopPipe } from './pipe/split-top.pipe';
import { FileService } from './service/file.service';
import { BookService } from './service/book.service';
import { MusicControls } from '@ionic-native/music-controls/ngx'
import { MusicService } from './service/music.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: HomePage},
      {path: 'copy', component: CopyComponent},
      {path: 'copy/:folder', component: CopyComponent}
    ]),
  ],
  providers: [
    File,
    FileOpener,
    FileTransfer,
    FileTransferObject,
    MenuController,
    StatusBar,
    PopoverController,
    Diagnostic, 
    SocialSharing, 
    MusicControls,
    FileService,
    BookService,
    MusicService,
  ],
  declarations: [HomePage,
    PopoverComponent,
    CopyComponent,
    CreateShelfComponent,
    FilterItemsPipe,
    SplitTopPipe
  ],
  entryComponents: [
    PopoverComponent,
    CopyComponent,
    CreateShelfComponent
  ]
})
export class HomePageModule {}
