import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgFor]
})
export class AppComponent implements OnInit {
  productList: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('https://fakestoreapi.com/products').subscribe({
      next: (products) => {
        this.productList = products;
        console.log("productList =>", this.productList);
      }
    })
  }
}
