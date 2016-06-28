# Pipes in Angular2

This blog explain Pipes in Angular2

In Angular2, we call **Pipes** to **[Filters](http://namitamalik.github.io/Filters-in-AngularJS/)**. 
Who are not aware with **AngularJS**, **Pipe** transform the value in view, e.g.

1. **Uppercase/Lowercase** **Pipe**:
    ```HTML
    My Name in toString Form : <strong> {{ name }} </strong><br/>
    My Name in Uppercase : <strong> {{ name | uppercase }} </strong>
    My Name in Lowercase : <strong> {{ name | lowercase }} </strong>
    ```
    
    First line will print the name value as it is, but second line will print the name in the Upper Case
    while third line will print the name in the Lower Case.
    > Property `name` will not change, It would be as it is.

2. **Date** **Pipe**:
    ```HTML
    My DOB in toString Form : <strong> {{ birthday }} </strong><br/>
    My DOM in Readable Form : <strong> {{ birthday | date }} </strong><br/>
    ```
    
    First line will print full date of birth in local time zone(will call toString() on Date), i.e. 
    `Sat Oct 01 1988 00:00:00 GMT+0530 (IST)`, but second line will print the birthday in more simple
    format i.e. `Oct 1, 1988`.
    
    We can pass parameters to a pipe, e.g.
    ```HTML
    My DOM in Custom Form : <strong> {{ birthday | date : 'dd/MM/yyyy' }} </strong><br />
    ```
    In the above line we are providing the date format, in which date should be displayed.
    
3. **JSON** **Pipe**:
    ```HTML
    Object without JSON Pipe : <strong> {{ userObject }} </strong><br/>
    Object with JSON Pipe : <strong> {{ userObject | json }} </strong><br/><h3>Async Pipe:</h3>
    ```
    
    First line will print `[object Object]`(userObject.toString() returns `[object Object]`), but second line will print
    `{ "name": "Amit Thakkar", "age": 27 }`(JSON.stringify(userObject) return `{ "name": "Amit Thakkar", "age": 27 }`). 
    So **json** **pipe** will display object in **json**/readable form.
    
4. **Async** **Pipe**
    ```HTML
    Async Value without Pipe : <strong> {{ age }} </strong><br/>
    Async Object without async Pipe : <strong> {{ asyncValue$ }} </strong><br/>
    Async Object with async Pipe : <strong> {{ asyncValue$ | async }} </strong><br/>
    ```
    
    First line having a value, which gets initialized asynchronously, and print the value on view whenever gets initialized.
    while on second line we have promise/observable which print `[object Object]` instead of value while on third line
    we are using **async** **pipe** so it will print value whenever promise/observable gets resolved.

We can chain multiple **Pipe** one after one. So output of one **pipe** will be input for second **pipe** and so on. Output of 
last **pipe** will be displayed on view e.g.

```HTML
Chaining Pipe result : <strong> {{ birthday | date : 'MMM dd, yyyy' | uppercase }} </strong>
```

#### Custom Pipes

We can create **Custom** **Pipes** in **Angular2**, although **Angular2** has provided all basic **Pipes** e.g. **Uppercase**, 
**Lowercase**, **Date**, **JSON**, **Async** etc. But sometime we have to create **custom** **pipe** e.g. **range** **pipe**:

```HTML
| <span *ngFor="let value of (1 | range : 10)">{{value}} | </span>
```
Here we are repeating the span 10 times, **range** **pipe** will create the array of values from 1(min value) to 10(max value), 
and **\*ngFor** will repeat the span 10 times with value 1 to 10.

Lets see the **Range** **Pipe** code:
```TypeScript
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'range'})
export class RangePipe implements PipeTransform {
    transform(minValue:number, maxValue:number):number[] {
        let range = [];
        for (let index = minValue; index <= maxValue; index++) {
            range.push(index);
        }
        return range;
    }
}
```

So you can see in the above code, implementing the **custom** **pipe** in **angular2** is quite easy.

1. Import the **Pipe** and **PipeTransform** class from `@angular/code`.
2. Provide **Pipe** name in `@Pipe` annotation.
3. Implement **transform** method of **PipeTransform**.

> transform method will contain all the logic for transforming the input.

Follow Me
---
[Github](https://github.com/AmitThakkar)

[Twitter](https://twitter.com/amit_thakkar01)

[LinkedIn](https://in.linkedin.com/in/amitthakkar01)

[More Blogs By Me](http://amitthakkar.github.io/)