import { Component, OnInit } from '@angular/core';
import{TenantService} from '../shared/tenant.service'

@Component({
  selector: 'tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.css'],
  providers:  [ TenantService ]
})
export class TenantComponent implements OnInit {

  constructor(public service: TenantService) { }
  ngOnInit() {
    this.service.getTenants();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.service.addTenants(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
    }
  }

}
