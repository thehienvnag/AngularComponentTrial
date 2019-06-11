import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-baitap-vn-carousel-item",
  templateUrl: "./baitap-vn-carousel-item.component.html",
  styleUrls: ["./baitap-vn-carousel-item.component.scss"]
})
export class BaitapVnCarouselItemComponent implements OnInit {
  @Input() imgUrl: string = "";

  constructor() {}

  ngOnInit() {}
}
