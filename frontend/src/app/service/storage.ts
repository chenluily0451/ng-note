const localData = function (item: any) {
  this.set = function(obj: string) {
    return localStorage.setItem(item, JSON.stringify(obj));
  };
  this.get = function () {
    return JSON.parse(localStorage.getItem(item));
  };
};

const ls_completed = new localData('completed');
const ls_uncompleted = new localData('uncompleted');
const ls_deleted = new localData('deleted');

export {ls_completed, ls_uncompleted, ls_deleted };
