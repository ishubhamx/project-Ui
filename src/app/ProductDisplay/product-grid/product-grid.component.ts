import { Component, OnInit } from "@angular/core";
import { FetchService } from "src/app/Service/fetch.service";

@Component({
  selector: "UI-product-grid",
  templateUrl: "./product-grid.component.html",
  styleUrls: ["./product-grid.component.scss"]
})
export class ProductGridComponent implements OnInit {
  items = [];
  constructor(private fatchService: FetchService) {}

  ngOnInit() {
    this.items = this.fatchService.getTempData();
  }
}
