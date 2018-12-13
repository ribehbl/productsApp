import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/domain/iproduct';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: number;
  product: IProduct;
  constructor(private _route: ActivatedRoute, private _service: ProductsService) { }

  ngOnInit() {
    this.productId =+this._route.snapshot.paramMap.get('id');
    this._service.getProductByID(this.productId).subscribe(
      res => { this.product = res; },
      error => {
        console.log(`il y eu une exception ${error}`);
      }
    );
  }

}
