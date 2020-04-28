import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../products';
import { ShippingDesc } from '../types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: Product): void {
    this.products.push(product);
  }

  getProducts(): Product[] {
    return this.products;
  }

  clearCart(): Product[] {
    this.products = [];
    return this.products;
  }

  getShippingPrices(): Observable<ShippingDesc[]> {
    return this.http.get<ShippingDesc[]>('../../assets/shipping.json');
  }
}
