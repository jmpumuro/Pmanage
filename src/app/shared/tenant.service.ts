import { Injectable } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor(private firebase: AngularFireDatabase,private datePipe: DatePipe) { }
  tenantList: AngularFireList<any>;

  form:FormGroup = new FormGroup({
    $key:new FormControl(null),
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    email:new FormControl('',Validators.email),
    mobile:new FormControl('',[Validators.required,Validators.minLength(10)]),
    address:new FormControl('',Validators.required),
    gender:new FormControl('1'),
    leaseDate:new FormControl(''),
    rentCost:new FormControl('')

  });
  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      address:'',
      gender: '1',
      leaseDate: '',
      rentCost: ''
    });
  }
  getTenants() {
    this.tenantList = this.firebase.list('tenants');
    return this.tenantList.snapshotChanges(); //returns an obvervable
  }
  addTenants(tenant) {
    this.tenantList.push({
      firstName: tenant.firstName,
      lastName:tenant.lastName,
      email: tenant.email,
      mobile: tenant.mobile,
      address: tenant.address,
      gender: tenant.gender,
      leaseDate: tenant.hireDate == "" ? "" : this.datePipe.transform(tenant.leaseDate, 'yyyy-MM-dd'),
      rentCost: tenant.rentCost
    });
  }

  updateEmployee(tenant) {
    this.tenantList.update(tenant.$key,
      {
        firstName: tenant.firstname,
        lastName:tenant.lasetName,
        email: tenant.email,
        mobile: tenant.mobile,
        address: tenant.address,
        gender: tenant.gender,
        leaseDate: tenant.hireDate == "" ? "" : this.datePipe.transform(tenant.leaseDate, 'yyyy-MM-dd'),
        rentCost: tenant.rentCost
      });
  }

  deleteEmployee($key: string) {
    this.tenantList.remove($key);
  }
}
