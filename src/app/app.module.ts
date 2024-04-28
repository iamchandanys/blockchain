import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BlockChainComponent } from './projects/block-chain/block-chain.component';
import { AddTransactionComponent } from './projects/block-chain/pages/add-transaction/add-transaction.component';
import { FormsModule } from '@angular/forms';
import { MineTransactionComponent } from './projects/block-chain/pages/mine-transaction/mine-transaction/mine-transaction.component';
import { BlocksComponent } from './projects/block-chain/pages/blocks/blocks.component';
import { ViewBlockDetailsComponent } from './projects/block-chain/pages/view-block-details/view-block-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './projects/block-chain/pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockChainComponent,
    AddTransactionComponent,
    MineTransactionComponent,
    BlocksComponent,
    ViewBlockDetailsComponent,
    FooterComponent,
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
export class AppModule { }
