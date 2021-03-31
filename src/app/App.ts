// @ts-ignore
import Template from './App.html';
import { Component, SuperClass } from '@munster/core';

@Component({
    selector: 'root',
    template: Template
})
export class App extends SuperClass() {

    public ref: Element;

    connected() {
        console.log(this.ref);
    }

}
