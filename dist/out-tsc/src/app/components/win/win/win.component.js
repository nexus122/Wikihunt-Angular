import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let WinComponent = class WinComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.route.params.subscribe(params => {
            this.name = params.name;
            this.pasos = params.cont;
        });
    }
    ngOnInit() {
    }
};
WinComponent = tslib_1.__decorate([
    Component({
        selector: 'app-win',
        templateUrl: './win.component.html',
        styleUrls: ['./win.component.css']
    })
], WinComponent);
export { WinComponent };
//# sourceMappingURL=win.component.js.map