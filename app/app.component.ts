/**
 * Created by amitthakkar on 23/06/16.
 */
import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
        <h3>Upper Case Pipe</h3>
        <hr />
        My Name in toString Form : <strong> {{ name }} </strong><br/>
        My Name in Uppercase : <strong> {{ name | uppercase }} </strong>
        <h3>Lower Case Pipe</h3>
        <hr />
        My Name in toString Form : <strong> {{ name }} </strong><br/>
        My Name in Lowercase : <strong> {{ name | lowercase }} </strong>
        <h3>date Pipe</h3>
        <hr />
        My DOB in toString Form : <strong> {{ birthday }} </strong><br/>
        My DOM in Readable Form : <strong> {{ birthday | date }} </strong><br/>
        My DOM in Custom Form : <strong> {{ birthday | date : 'dd/MM/yyyy' }} </strong>
    `
})
export class AppComponent {
    name = 'Amit Thakkar';
    birthday = new Date(1988, 9, 1); // October 1, 1988
}