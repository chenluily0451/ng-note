import {FormControl} from '@angular/forms';
export const nameValidator = (control: FormControl) => {
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
};

export const timeValidator = (control: FormControl) => {
  if (!control.value) {
    return { status: 'error', message: '请选择时间'};
  }
  return ;
};

export const addressValidator = (control: FormControl) => {
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
};

