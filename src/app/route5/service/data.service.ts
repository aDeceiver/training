import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService {

    readonly DATA_URL = "https://my-json-server.typicode.com/aDeceiver/json-data/students"

    constructor(private http: HttpClient) { }

    getRecords() {
        return this.http.get(this.DATA_URL);
    }
}
