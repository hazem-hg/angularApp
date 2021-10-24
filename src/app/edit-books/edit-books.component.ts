import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'app/services/books.service';
@Component({
  selector: 'edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent implements OnInit {

  bookId : any;
  updateBookForm?: FormGroup;
  bookValues: any;
  constructor(private formBuilder: FormBuilder,private router : Router,private ngZone:NgZone,private activatedRoute : ActivatedRoute,
    private bookService : BooksService) {
      this.bookId=activatedRoute.snapshot.params.id;
    }

  ngOnInit(): void {
    this.bookService.getBook(this.bookId).subscribe(book=>{
      console.log(book);
      this.bookValues=book;
      if(book){
        this.updateBookForm=this.formBuilder.group({
          title:[this.bookValues.title,Validators.required],
          author:[this.bookValues.author,Validators.required],
          quantity:[this.bookValues.quantity,Validators.required],
           price:[this.bookValues.price,Validators.required],
           _id:[this.bookValues._id,Validators.required],
           publisingDate:[this.bookValues.publisingDate,Validators.required],
           available:[this.bookValues.available,Validators.required],
        })
      }
    })
  }

  onUpdate():any{
    this.bookService.editBook(this.updateBookForm?.value).subscribe(()=>{
      this.ngZone.run(() => this.router.navigateByUrl('/books'))
    })
  }



}
