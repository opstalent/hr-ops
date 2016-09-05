import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Lead} from './lead.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class LeadService {

    private username: string;
    private _leads$: Subject<Lead[]>; 
     private dataStore: {
    leads: Lead[]
  };
    private leads;
    private tempAddress: string = 'http://localhost:3000';

    constructor(public http: Http) {
        this.username = '';
        this.dataStore = { leads: [] };
        this._leads$ = <Subject<Lead[]>>new Subject();
    }

//     get leads$() {
//     return this._leads$.asObservable();
//   }
    
    getLeads() {
        return this.http.get(`${this.tempAddress}/api/v1/leads`).map(res => res.json());
    }

    getSingleLead(id) {
        return this.http.get(`${this.tempAddress}/api/v1/leads/${id}`).map(res => res.json());
    }
// TODO; prepare to Observalbes
//     load(id: any) {
//     this.http.get(`${this.tempAddress}/api/v1/leads/${id}`).map(response => response.json()).subscribe(data => {
//       let notFound = true;

//       this.dataStore.leads.forEach((item, index) => {
//         if (item._id === data.id) {
//           this.dataStore.leads[index] = data;
//           notFound = false;
//         }
//       });

//       if (notFound) {
//         this.dataStore.leads.push(data);
//       }

//       this._leads$.next(this.dataStore.leads);
//     }, error => console.log('Could not load todo.'));
//   }
    
    //Observable<Lead>
    createLead(lead) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(`${this.tempAddress}/api/v1/leads`, JSON.stringify(lead), {headers: headers})
        .subscribe(res => this.leads = res.json());
    }
    
    updateLead(id, lead) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.put(`${this.tempAddress}/api/v1/leads/${id}`, JSON.stringify(lead), {headers: headers})
         .subscribe(res => this.leads = res.json());
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
