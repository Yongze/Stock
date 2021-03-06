import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {ContentComponent} from './content/content.component';
import {StockManageComponent} from './stock/stock-manage/stock-manage.component';
import {StartComponent} from './start/start.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import {StockService} from "./stock/stock.service";

const routeConfig: Routes = [
    {path: '', redirectTo:'/dashboard',pathMatch: 'full'},
    {path: 'stock', component: StockManageComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'stock/:id', component: StockFormComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent,
        SidebarComponent,
        FooterComponent,
        ContentComponent,
        StockManageComponent,
        StartComponent,
        DashboardComponent,
        StockFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routeConfig)
    ],
    providers: [StockService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
