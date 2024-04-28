import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyGitRepoComponent } from './projects/chandanys/pages/my-git-repo/my-git-repo.component';
import { HttpClientModule } from '@angular/common/http';
import { LangKnownComponent } from './projects/chandanys/pages/lang-known/lang-known.component';
import { HomeComponent } from './projects/chandanys/home.component';
import { AboutMeComponent } from './projects/chandanys/pages/about-me/about-me.component';
import { SocialMediaIconsComponent } from './projects/chandanys/pages/helper/social-media-icons/social-media-icons.component';
import { MailLinkComponent } from './projects/chandanys/pages/helper/mail-link/mail-link.component';
import { ExperienceComponent } from './projects/chandanys/pages/experience/experience.component';
import { GetInTouchComponent } from './projects/chandanys/pages/get-in-touch/get-in-touch.component';
import { FooterComponent } from './projects/chandanys/pages/footer/footer.component';
import { GetInTouchModalComponent } from './projects/chandanys/pages/helper/get-in-touch-modal/get-in-touch-modal.component';
import { SplashScreenComponent } from './projects/chandanys/pages/helper/splash-screen/splash-screen.component';
import { TestComponent } from './projects/chandanys/pages/helper/test/test.component';
import { BlockChainComponent } from './projects/block-chain/block-chain.component';
import { AddTransactionComponent } from './projects/block-chain/pages/add-transaction/add-transaction.component';
import { FormsModule } from '@angular/forms';
import { MineTransactionComponent } from './projects/block-chain/pages/mine-transaction/mine-transaction/mine-transaction.component';
import { BlocksComponent } from './projects/block-chain/pages/blocks/blocks.component';
import { ViewBlockDetailsComponent } from './projects/block-chain/pages/view-block-details/view-block-details.component';
import { MyGitRepoBlockChainComponent } from './projects/chandanys/pages/my-git-repo/pages/my-git-repo-block-chain/my-git-repo-block-chain.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MyGitRepoComponent,
    LangKnownComponent,
    AboutMeComponent,
    SocialMediaIconsComponent,
    MailLinkComponent,
    ExperienceComponent,
    GetInTouchComponent,
    FooterComponent,
    GetInTouchModalComponent,
    SplashScreenComponent,
    TestComponent,
    BlockChainComponent,
    HomeComponent,
    AddTransactionComponent,
    MineTransactionComponent,
    BlocksComponent,
    ViewBlockDetailsComponent,
    MyGitRepoBlockChainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
