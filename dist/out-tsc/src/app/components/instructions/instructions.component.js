import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let InstructionsComponent = class InstructionsComponent {
    constructor(route) {
        this.route = route;
        this.route.params.subscribe(params => {
            this.name = params.name;
        });
    }
    ngOnInit() {
    }
};
InstructionsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-instructions',
        templateUrl: './instructions.component.html',
        styleUrls: ['./instructions.component.css']
    })
], InstructionsComponent);
export { InstructionsComponent };
//# sourceMappingURL=instructions.component.js.map