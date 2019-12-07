import { Component } from '@angular/core';
import APP_CONFIG from './app.config';
import { Node, Link } from './d3';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  element: any = ['拓扑及初始化信息', '资源使用状态信息', '路由选择状态信息'];
  table: any = ['topology', 'resource', 'routing'];

  constructor() {
  }
}
