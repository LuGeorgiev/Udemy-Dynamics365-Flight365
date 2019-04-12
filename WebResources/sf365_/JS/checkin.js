"use strict";
/// <reference path="../../node_modules/@types/knockout/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var sf365;
(function (sf365) {
    var checkin;
    (function (checkin) {
        var CheckInViewModel = /** @class */ (function () {
            function CheckInViewModel() {
                this.isBusy = ko.observable(false);
            }
            CheckInViewModel.prototype.foo = function () {
                alert("bar");
            };
            return CheckInViewModel;
        }());
    })(checkin = sf365.checkin || (sf365.checkin = {}));
})(sf365 || (sf365 = {}));
//# sourceMappingURL=checkin.js.map