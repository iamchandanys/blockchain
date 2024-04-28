import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './projects/chandanys/home.component'
import { BlockChainComponent } from './projects/block-chain/block-chain.component';
import { AddTransactionComponent } from './projects/block-chain/pages/add-transaction/add-transaction.component';

const routes: Routes = [
  {
    path: "blockchain",
    component: BlockChainComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "sendmoney",
    component: AddTransactionComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
