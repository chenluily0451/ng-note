import { Component, OnInit, Inject , forwardRef } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, AbstractControl} from '@angular/forms';
import { ElMessageService } from 'element-angular'

// service
import {DataManageService} from '../../service/dataManage.service';

@Component({
  selector: 'app-my-datalist',
  templateUrl: './my-dataList.component.html'
})


export class MyDataListComponent implements OnInit {
  validateForm: FormGroup;
  constructor(
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder,
    private dataManageService: DataManageService,
    private message: ElMessageService
  ) {
  }
  dialogVisible: Boolean = false;
  deletedDialogVisible: Boolean = false;
  deletedId: String = '';

  tableData: any[] = [];
  ngOnInit() {
    this.initForm();
    this.getDataList();
  }

  initForm() {
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
    const obj = {
      name: this.validateForm.get('name').value,
      date: this.validateForm.get('date').value,
      address: this.validateForm.get('address').value,
    }
    this.dataManageService.addDataList(obj).subscribe(
      (result) => {
        console.log(result);
        this.dialogVisible = false;
        this.getDataList();
        this.message['success']('提交成功');
      }
    );

  }

  getDataList() {
    this.dataManageService.getDataList().subscribe(
      (result) => {
        this.tableData = result;
      }
    );
  }

  delYep() {
    this.dataManageService.deleteData(this.deletedId).subscribe(
      (result) => {
        console.log(result);
        this.deletedDialogVisible = false;
        this.getDataList();
        this.message['success']('删除成功');
      }
    );
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

  deleteModal(ref: any) {
    this.deletedDialogVisible = true;
    this.deletedId = ref.rowData._id;
  }




  handle(time: number): void {
    // [time] is string
    // date style follow format props
    console.log(time)
  }
}
