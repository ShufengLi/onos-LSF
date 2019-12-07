import { Component, OnInit , Input} from '@angular/core';

import {RESOURCES} from '../mock-resources';
import {Link, Node} from '../d3/models';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  resources = RESOURCES;
  // 接受父组件传值
  // @Input() nodes: any;
  // @Input() links: any;
  constructor() {}

  ngOnInit() {
  }
}
