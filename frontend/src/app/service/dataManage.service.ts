import {Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class DataManageService {
  constructor(
    private http: Http
  ) {}
  addDataList(postData: any): Observable<any> {
    return this.http.post('/api/datalist', postData)
      .map((res: Response) => {
        const body = res.json();
        return body.data || [];
      });
  }
  getDataList(): Observable <any> {
    return this.http.get('/api/datalist')
      .map((res: Response) => {
        const body = res.json();
        return body || [];
      });
  }
  deleteData(deleteId: string): Observable <any> {
    return this.http.delete('/api/datalist/' + deleteId)
      .map((res: Response) => {
        const body = res.json();
        console.log(body);
        return body.data || [];
      });
  }
  updateData(id: string, updateObj: any): Observable <any> {
    return this.http.put('/api/datalist/' + id, updateObj)
      .map((res: Response) => {
        const body = res.json();
        return body.data;
      });
  }
  getDataId(id: string): Observable<any> {
    return this.http.get('/api/datalist/' + id)
      .map((res: Response) => {
      const body = res.json();
      return body;
    });
  }
}
