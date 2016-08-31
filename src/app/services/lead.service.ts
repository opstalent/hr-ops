import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LeadService {

    private username: string;
    private tempAddress: string = 'http://localhost:3000';

    constructor(public http: Http) {
         this.username = '';
    }
    
    getLeads() {
        return this.http.get(`${this.tempAddress}/api/v1/leads`);
    }

    getSingleLead(id) {
        return this.http.get(`${this.tempAddress}/api/v1/leads/${id}`).map(res => res.json());
    }
    
    //Observable<Lead>
    createLead(lead) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.tempAddress}/api/v1/leads`, JSON.stringify(lead), {headers: headers})
        .map((res: Response) => res.json());
    }
    
    updateLead(lead) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(`${this.tempAddress}/api/v1/leads/${lead._id}`, JSON.stringify(lead), {headers: headers});
    }
    
    deleteLead(id) {
        return this.http.delete(`${this.tempAddress}/api/v1/leads/${id}`);
    }

     updateUser(username: string) {
        this.username = username;
    }

    searchUser() {
        return this.http.get(`${this.tempAddress}/api/v1/search?query=${this.username}`).map(res => res.json());
    }
}
