import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-baitap-vn-promotion",
  templateUrl: "./baitap-vn-promotion.component.html",
  styleUrls: ["./baitap-vn-promotion.component.scss"]
})
export class BaitapVnPromotionComponent implements OnInit {
  @Input() imgUrl1: string = "";
  @Input() imgUrl2: string = "";
  @Input() imgUrl3: string = "";
  constructor() {}

  ngOnInit() {}
}
