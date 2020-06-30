import { Component, OnInit,Input } from '@angular/core';
import {MatTreeNestedDataSource, MatTreeFlattener} from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import {of} from 'rxjs';
import { Router } from '@angular/router'

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
  iconname?:string;
  url?:string;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Dashboard',
    iconname:'dashboard',
    url:'/tenants'
  }, 
  {
    name: 'Tenant',
    iconname:'person',
    children: [
      {name: 'Add Tenant',iconname:'person_add',url:'/tenant'},
      {name: 'View Tenants',iconname:'people',url:'/tenant-list'},
    ]
  },
  {
        name: 'Property',
        iconname:'house',
        children: [
          {name: 'add Property',iconname:'add_box'},
          {name: 'View Properties',iconname:'apartment'},
        ]
      },
    ]


@Component({
  selector: 'navtree',
  templateUrl: './navtree.component.html',
  styleUrls: ['./navtree.component.css']
})

export class NavtreeComponent  {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  private router: Router;
  constructor() {
    this.dataSource.data = TREE_DATA;
    
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}

