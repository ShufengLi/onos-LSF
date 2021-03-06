import { Component, OnInit } from '@angular/core';
import {Link, Node} from '../d3/models';

@Component({
  selector: 'app-public-component',
  templateUrl: './public-component.component.html',
  styleUrls: ['./public-component.component.css']
})
export class PublicComponentComponent implements OnInit {
  public today: any = new Date();
   nodes: Node[] = [];
   links: Link[] = [];
  constructor() {
     const N = 10,
      getIndex = number => number - 1;
    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i));
    }

    for (let i = 1; i <= N; i++) {
      for (let m = i; i + m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i + m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new Link(i, i + m));
      }
    }
  }

  ngOnInit() {
  }

}
