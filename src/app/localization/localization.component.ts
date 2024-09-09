import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({ template: '' })
export class LocalizationComponent implements OnInit, OnDestroy {

  routeSegments: String[] = [];
  parentSegments: String[] = [];

  constructor(public route: ActivatedRoute,) {
    this.parentSegments = this.route.snapshot.parent?.url.map(url => url.path) || []
    this.routeSegments = this.route.snapshot.url.map(url => url.path)

  }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {

  }

}
