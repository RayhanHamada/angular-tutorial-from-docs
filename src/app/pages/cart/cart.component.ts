import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: Product[];
  checkoutForm: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
  }

  onSubmit() {
    this.products = this.cartService.clearCart();
    
    const name: string = JSON.stringify(this.checkoutForm.value.name);
    const address: string = JSON.stringify(this.checkoutForm.value.address);
    
    this.checkoutForm.reset();

    window.alert(
      'Your Order has been submitted, name: ' + name + ', address: ' + address
    );
  }

}
