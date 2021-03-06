import { Product } from '../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  //propLegal = "qualquer"

  product: Product = {
    //name: 'Produto de Teste',
    //price: 125.98
    name: '',
    price: null
  }

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    //this.productService.showOnConsole('teste...')
  }

  /*fazerAlgo(): void {
    console.log('Fazendo algo!')
  }*/

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
