import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
 
  @Input()
  get provider(): any { return this._provider; }
  set provider(provider: any) {
    this._provider = provider;
  }
  public _provider = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
