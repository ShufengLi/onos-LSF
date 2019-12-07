import { Component, OnInit } from '@angular/core';
import {Link, Node} from '../d3/models';

@Component({
  selector: 'app-topology',
  templateUrl: './topology.component.html',
  styleUrls: ['./topology.component.css']
})
export class TopologyComponent implements OnInit {
  topology_type: any = ['拓扑1', '拓扑2', '拓扑3', '拓扑4', '拓扑5', '拓扑6', '拓扑7', '拓扑8', '拓扑9'];

constructor() {
  }

  ngOnInit() {
  }


}
