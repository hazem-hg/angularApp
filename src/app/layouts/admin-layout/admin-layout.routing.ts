import { Routes } from '@angular/router';
import { EditBooksComponent } from 'app/edit-books/edit-books.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { NewBooksComponent } from '../../new-books/new-books.component';
import { LoginComponent } from 'app/login/login.component';
import { RegisterComponent } from 'app/register/register.component';
import { LogouttComponent } from 'app/logoutt/logoutt.component';
export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'books',     component: TableListComponent },
    { path: 'addBook',     component: NewBooksComponent },
    { path: 'edit-book/:id',     component: EditBooksComponent },
    { path: 'login',     component: LoginComponent },
    { path: 'register',     component: RegisterComponent },
    { path: 'logoutt',     component: LogouttComponent },

];
