import {Injectable, EventEmitter} from '@angular/core';
import { AppConfig } from '../configuration/app.config';
import {HttpClient} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable()
export class treasuryService {

    constructor(private http: HttpClient , public appconfig:AppConfig) {
        
    }

    getService(url: string): Promise<any> {
        return this.http
            .get(url)
            .toPromise()
            .catch(this.handleError);
    }
    postService(url: string, bodyParam: any): Promise<any> {
        return this.http
            .post(url,bodyParam)
            .toPromise()
            .catch(this.handleError);
    }
    private extractData(res: any) {
        const body = res.json();
        return body;
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
    
    TresuryList() {
;        return this.appconfig.geturl()+this.appconfig.getTreasuryByUserId;
    }

}
