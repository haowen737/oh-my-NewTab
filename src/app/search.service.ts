import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {
    private suggestsUrl: String = 'http://google.com/complete/search?client=chrome';
    private headers = new Headers({
        'Accept': 'application/json, text/javascript, */*; q=0.01'
    });

    constructor(
        private http: Http,
        private jsonp: Jsonp
    ) { }

    getSuggestion(data): Promise<void> {
        const apiURL = `${this.suggestsUrl}&q=${data}&infinityTime=1504579999185`;
        return this.http.get(apiURL)
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }

    getSuggestionJsonp (data) {
        const apiURL = `${this.suggestsUrl}&q=${data}&infinityTime=1504579999185`;
        return this.jsonp.request(apiURL)
            .map(res => {
                console.log(res);
            });
    }

    private handleError (error: any): Promise<any> {
        console.error('suggestion', error);
        return Promise.reject(error.message || error);
    }
}
