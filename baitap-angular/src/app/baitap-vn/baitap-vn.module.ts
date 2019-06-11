import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BaitapVnComponent } from "./baitap-vn.component";
import { BaitapVnHeaderComponent } from "./baitap-vn-header/baitap-vn-header.component";
import { BaitapVnCarouselComponent } from "./baitap-vn-carousel/baitap-vn-carousel.component";
import { BaitapVnCarouselItemComponent } from "./baitap-vn-carousel-item/baitap-vn-carousel-item.component";
import { BaitapVnProductsComponent } from "./baitap-vn-products/baitap-vn-products.component";
import { BaitapVnPromotionComponent } from "./baitap-vn-promotion/baitap-vn-promotion.component";
import { BaitapVnProductComponent } from "./baitap-vn-product/baitap-vn-product.component";
import { BaitapVnLaptopComponent } from './baitap-vn-laptop/baitap-vn-laptop.component';

@NgModule({
  declarations: [
    BaitapVnComponent,
    BaitapVnHeaderComponent,
    BaitapVnCarouselComponent,
    BaitapVnCarouselItemComponent,
    BaitapVnProductsComponent,
    BaitapVnPromotionComponent,
    BaitapVnProductComponent,
    BaitapVnLaptopComponent
  ],
  exports: [
    BaitapVnComponent,
    BaitapVnHeaderComponent,
    BaitapVnCarouselComponent,
    BaitapVnCarouselItemComponent,
    BaitapVnProductsComponent,
    BaitapVnPromotionComponent,
    BaitapVnProductComponent
  ],
  imports: [CommonModule]
})
export class BaitapVnModule {}
