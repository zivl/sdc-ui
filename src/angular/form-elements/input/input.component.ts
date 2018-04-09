import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { ValidationComponent } from '../validation/validation.component';
import 'rxjs/add/operator/debounceTime';
import template from "./input.component.html";

@Component({
    selector: 'sdc-input',
    template: template,
})
export class InputComponent implements OnInit {

    @Output('valueChange') public baseEmitter: EventEmitter<any> = new EventEmitter<any>();
    @Input() public label: string;
    @Input() public value: any;
    @Input() public pattern: any;
    @Input() public disabled: boolean;
    @Input() public placeHolder: string;
    @Input() public required: boolean;
    @Input() public minLength: number;
    @Input() public maxLength: number;
    @Input() public debounceTime: number;
    @Input() public validation: ValidationComponent; // Refernce to validation component, and activate validation for this input.

    protected control: FormControl;

    constructor() {
        this.control = new FormControl('', []);
        this.debounceTime = 0;
        this.placeHolder = '';
    }

    ngOnInit() {
        this.control.valueChanges.
        debounceTime(this.debounceTime)
            .subscribe((newValue: any) => {
                this.baseEmitter.emit(this.value);
            });
    }

    onKeyPress(value: string) {
        this.validation.validate(this.value);
    }

}
