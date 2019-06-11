import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-baitap-vn-product",
  templateUrl: "./baitap-vn-product.component.html",
  styleUrls: ["./baitap-vn-product.component.scss"]
})
export class BaitapVnProductComponent implements OnInit {
  @Input() imgUrl: string = "";
  @Input() name: string = "";
  @Input() details: string = "";
  constructor() {}

  ngOnInit() {}
}
