import { Component, OnInit, Inject , forwardRef } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, AbstractControl} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ElMessageService } from 'element-angular';
import {nameValidator, timeValidator, addressValidator} from '../validators/validators';

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
    private message: ElMessageService,
    private router: Router
  ) {
  }
  dialogVisible: boolean = false;
  deletedDialogVisible: boolean = false;
  deletedId: string = '';
  dialogTitle: string = '添加数据';
  updateStatus: boolean = false;
  updateId: string = '';

  tableData: any[] = [];
  ngOnInit() {
    this.initForm();
    this.getDataList();
  }

  initForm() {
    this.validateForm = this.formBuilder.group({
      name: ['', [nameValidator]],
      date: ['', [timeValidator]],
      address: ['', [addressValidator]]
    });
  }

  submit(): void {
    console.log(this.validateForm);
    const obj = {
      name: this.validateForm.get('name').value,
      date: this.validateForm.get('date').value,
      address: this.validateForm.get('address').value
    };

    if (!this.updateStatus) {
      this.dataManageService.addDataList(obj).subscribe(
        (result) => {
          console.log(result);
          this.dialogVisible = false;
          this.getDataList();
          this.message['success']('提交成功');
        }
      );
    } else {
      this.dataManageService.updateData(this.updateId, obj).subscribe(
        (result) => {
          console.log(result);
          this.dialogVisible = false;
          this.getDataList();
          this.message['success']('更新成功');
        }
      );
    }
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

  addDataModal() {
    this.dialogVisible = true;
    this.dialogTitle = '添加数据';
    this.updateStatus = false;
    const addObj = {
      name: '',
      date: '',
      address: ''
    };
    this.patchValueFun(addObj);
  }

  deleteModal(ref: any) {
    this.deletedDialogVisible = true;
    this.deletedId = ref.rowData._id;
  }

  changeModal(ref: any) {
    this.dialogVisible = true;
    this.dialogTitle = '更改数据';
    this.updateStatus = true;
    this.updateId = ref.rowData._id;
    const changeObj = {
      name: this.tableData[ref.index].name,
      date: this.tableData[ref.index].date,
      address: this.tableData[ref.index].address
    };
    this.patchValueFun(changeObj);
  }

  patchValueFun(obj: any) {
    this.validateForm.patchValue(obj);
  }

  jumpTo(ref) {
    this.router.navigate(['/datalist/' + ref.rowData._id]);
  }

}
