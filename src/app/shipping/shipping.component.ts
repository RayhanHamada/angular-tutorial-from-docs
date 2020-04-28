import { Component, OnInit } from '@angular/core';
import { ShippingDesc } from '../types';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  shippingCosts: ShippingDesc[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getShippingPrices().subscribe((sc) => {
      this.shippingCosts = sc;
    });
  }
}
