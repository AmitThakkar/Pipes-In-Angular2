/**
 * Created by amitthakkar on 23/06/16.
 */
import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {RangePipe} from './range.pipe'

@Component({
    selector: 'my-app',
    pipes: [RangePipe],
    template: `
        <h3>Uppercase/Lowercase Pipe:</h3>
        <hr />
        My Name in toString Form : <strong> {{ name }} </strong><br/>
        My Name in Uppercase : <strong> {{ name | uppercase }} </strong>
        My Name in Lowercase : <strong> {{ name | lowercase }} </strong>
        <h3>Date Pipe:</h3>
        <hr />
        My DOB in toString Form : <strong> {{ birthday }} </strong><br/>
        My DOM in Readable Form : <strong> {{ birthday | date }} </strong><br/>
        <h3>Parameterized a Pipe:</h3>
        <hr />
        My DOM in Custom Form : <strong> {{ birthday | date : 'dd/MM/yyyy' }} </strong><br />
        <h3>JSON Pipe:</h3>
        <hr />
        Object without JSON Pipe : <strong> {{ userObject }} </strong><br/>
        Object with JSON Pipe : <strong> {{ userObject | json }} </strong><br/>
        <h3>Async Pipe:</h3>
        <hr />
        Async Value without Pipe : <strong> {{ age }} </strong><br/>
        Async Object without async Pipe : <strong> {{ asyncValue$ }} </strong><br/>
        Async Object with async Pipe : <strong> {{ asyncValue$ | async }} </strong><br/>
        <h3>Chaining Pipe:</h3>
        <hr />
        Chaining Pipe result : <strong> {{ birthday | date : 'MMM dd, yyyy' | uppercase }} </strong>
        <h3>Custom Pipe</h3>
        <hr />
        | <span *ngFor="let value of (1 | range : 10)">{{value}} | </span>
    `
})
export class AppComponent {
    name = 'Amit Thakkar';
    birthday = new Date(1988, 9, 1); // October 1, 1988
    asyncValue$:Observable<string>;
    age = 0;
    number = 34;
    userObject = {
        name: 'Amit Thakkar',
        age: 27
    };

    private messages = [
        'You are my hero!',
        'You are the best hero!',
        'Will you be my hero?'
    ];

    constructor() {
        this.initializeController(27);
    }

    initializeController(age) {
        this.asyncValue$ = Observable.interval(1000)
            .map(i => this.messages[i])
            .take(this.messages.length);

        setTimeout(() => {
            this.age = age;
        }, 2000);
    }
}