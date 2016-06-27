# Pipes in Angular2

This blog explain Pipes in Angular2

In Angular2, we call **Pipe** to **[Filters](http://namitamalik.github.io/Filters-in-AngularJS/)**. 
Who are not aware with **AngularJS**, **Pipe** transform the display value within view e.g.

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
    
4. 

We can chain multiple **Pipe** one after one. So output of one **pipe** will be input for second **pipe**. And output of 
last **pipe** will be displayed on view e.g.

```HTML
Chaining Pipe result : <strong> {{ birthday | date : 'MMM dd, yyyy' | uppercase }} </strong>
```