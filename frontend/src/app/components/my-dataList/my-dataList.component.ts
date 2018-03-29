import { Component, OnInit, Inject , forwardRef } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-my-datalist',
  templateUrl: './my-dataList.component.html'
})


export class MyDataListComponent implements OnInit {
  validateForm: FormGroup;
  constructor(
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
  ) {
  }
  dialogVisible: Boolean = false;

  tableData: any[] = [{
    name: '水爷',
    date: '2017-08-19',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-20',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-21',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-22',
    address: '上海市普陀区金沙江路 1510 弄',
  }];
  ngOnInit() {
    this.validateForm = this.formBuilder.group({
      name: ['', [this.nameValidator]],
      date: ['', [this.timeValidator]],
      address: ['', [this.addressValidator]]
    });
  }
  private nameValidator = (control: FormControl) => {
    if (!control.value) {
      return { status: 'error', message: '姓名是必填的'};
    }
    if (control.value.length < 1) {
      return {status: 'error', message: '姓名不能少于1个字'};
    }
    if (control.value.length > 6) {
      return {status: 'error', message: '姓名不能多于6个字'};
    }
     return ;
  }

  private timeValidator = (control: FormControl) => {
    if (!control.value) {
      return { status: 'error', message: '请选择时间'};
    }
    return ;
  }

  private addressValidator = (control: FormControl) => {
    if (!control.value) {
      return { status: 'error', message: '请输入地址'};
    }
    if (control.value.length < 1) {
      return {status: 'error', message: '地址不能少于1个字'};
    }
    if (control.value.length > 16) {
      return {status: 'error', message: '地址不能多于16个字'};
    }
    return ;
  }


  submit(): void {
    console.log(this.validateForm);

  }

  statusCtrl(item: string): string {
    if (!this.validateForm.controls[item]) { return; }
    const control: AbstractControl = this.validateForm.controls[item];

    return control.dirty && control.hasError('status') ? control.errors.status : '';

  }

  messageCtrl(item: string): string {
    if (!this.validateForm.controls[item]) { return; }
    const control: AbstractControl = this.validateForm.controls[item];
    return control.dirty && control.hasError('message') ? control.errors.message : '';
  }




  handle(time: number): void {
    // [time] is string
    // date style follow format props
    console.log(time)
  }
}
