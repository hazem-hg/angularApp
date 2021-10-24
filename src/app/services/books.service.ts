import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public host:string = "https://bookservice-ayoub9819.cloud.okteto.net";
  httpHeader = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getAllProducts():Observable<Book[]>{
    return this.http.get<Book[]>(this.host+"/books/allBooks");
  }

  addBook(data: Book):Observable<any>{
    return this.http.post<any>(this.host+"/books/newBook",data);
  }

  editBook(book : Book):Observable<any>{
    return this.http.patch<any>(this.host+"/books/updateBook/"+book._id,book);
  }

  deleteBook(id : number):Observable<any>{
    return this.http.delete<any>(this.host+"/books/deleteBook/"+id);
  }

  getBook(id:any):Observable<any>{
    return this.http.get(this.host+"/books/bookById/"+id);
  }
}
