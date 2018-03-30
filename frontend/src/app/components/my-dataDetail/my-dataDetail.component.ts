import { Component, OnInit, Inject , forwardRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

// service
import {DataManageService} from '../../service/dataManage.service';

@Component({
  selector: 'app-my-data-detail',
  templateUrl: './my-dataDetail.component.html',
  styleUrls: ['./my-dataDetail.component.scss']
})


export class MyDataDetailComponent implements OnInit {
  constructor(
    private dataManageService: DataManageService,
    private route: ActivatedRoute,
    private routes: Router
  ) {
  }
  tableData: any[] = [];


  ngOnInit() {

    this.route.params.subscribe((params: Params): any => {
      if (params.id) {
        this.dataManageService.getDataId(params.id).subscribe(
          (result) => {
            this.tableData.push(result);
          }
        );
      }
    });

  }

  returnFun() {
    this.routes.navigate(['/datalist']);
  }


}
