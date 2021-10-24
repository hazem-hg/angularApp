import { Location } from '@angular/common';
import { Component, OnInit, NgZone } from '@angular/core';
import { BooksService } from '../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  Books:any = [];

  constructor(private booksService: BooksService,private location : Location,private ngZone:NgZone) { }

  ngOnInit(): void {
    this.booksService.getAllProducts().subscribe(res=>{this.Books = res;})
  }
  delete(id):any{
    this.booksService.deleteBook(id).subscribe(()=>{
      this.ngZone.run(() => location.reload())
    });
  }

}
