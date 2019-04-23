/// <reference path="../../../node_modules/@types/knockout/index.d.ts" />

namespace sf365.checkin {
    export class CheckInViewModel {
        isBusy: KnockoutObservable<boolean>;
        constructor() {
            this.isBusy = ko.observable(false);
        }

        public foo() {
            alert("bang");
        }
    }
}
