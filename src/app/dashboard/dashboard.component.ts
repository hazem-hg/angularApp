import { Location } from '@angular/common';
import { Component, OnInit, NgZone } from '@angular/core';
import { BooksService } from '../services/books.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Books:any = [];
  constructor(private booksService: BooksService,private location : Location,private ngZone:NgZone) { }
  ngOnInit() {
    this.booksService.getAllProducts().subscribe(res=>{this.Books = res;})

  }

}
