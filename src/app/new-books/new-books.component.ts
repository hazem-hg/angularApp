import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'app/services/books.service';
@Component({
  selector: 'new-books',
  templateUrl: './new-books.component.html',
  styleUrls: ['./new-books.component.css']
})
export class NewBooksComponent implements OnInit {

  bookForm:FormGroup;

  constructor(public formBuilder: FormBuilder,private router: Router,private ngZone: NgZone,private bookService:BooksService) {
    this.bookForm = this.formBuilder.group({
      title : [''],
      author : [''],
      price : [''],
      quantity : ['']
    })
   }

  ngOnInit(): void {
  }
  onSubmit(): any {
    this.bookService.addBook(this.bookForm.value).subscribe(()=>{
      this.ngZone.run(() => this.router.navigateByUrl('/books'))
      }, (err) => {
        console.log(err);
    });

  }

}
