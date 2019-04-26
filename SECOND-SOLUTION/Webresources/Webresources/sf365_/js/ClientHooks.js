var sf365;
(function (sf365) {
    var ResourceString = /** @class */ (function () {
        function ResourceString() {
        }
        ResourceString.HelloWord = 'HelloWord';
        return ResourceString;
    }());
    sf365.ResourceString = ResourceString;
})(sf365 || (sf365 = {}));
var sf365;
(function (sf365) {
    var sf365_bookingStatus;
    (function (sf365_bookingStatus) {
        sf365_bookingStatus[sf365_bookingStatus["Enquiry"] = 1] = "Enquiry";
        sf365_bookingStatus[sf365_bookingStatus["Confirmed"] = 869190000] = "Confirmed";
        sf365_bookingStatus[sf365_bookingStatus["Paid"] = 869190001] = "Paid";
    })(sf365_bookingStatus = sf365.sf365_bookingStatus || (sf365.sf365_bookingStatus = {}));
    var sf365_booking = /** @class */ (function () {
        function sf365_booking() {
        }
        sf365_booking._meta = {
            logicalname: "sf365_booking",
            attributes: {
                sf365_routeid: "sf365_routeid",
                sf365_flightid: "sf365_flightid",
                sf365_totalprice: "sf365_totalprice"
            }
        };
        return sf365_booking;
    }());
    sf365.sf365_booking = sf365_booking;
    var sf365_flight = /** @class */ (function () {
        function sf365_flight() {
        }
        sf365_flight._meta = {
            logicalname: "sf365_flight",
            attributes: {
                sf365_routeid: "sf365_routeid",
                sf365_routeid_value: "_sf365_routeid_value",
                sf365_routeid_name: "_sf365_routeid_value@OData.Community.Display.V1.FormattedValue",
                sf365_routeid_logicalname: "_sf365_routeid_value@Microsoft.Dynamics.CRM.lookuplogicalname"
            }
        };
        return sf365_flight;
    }());
    sf365.sf365_flight = sf365_flight;
    var sf365_passenger = /** @class */ (function () {
        function sf365_passenger() {
        }
        sf365_passenger._meta = {
            logicalname: "sf365_passenger",
            attributes: {
                sf365_flightid: "sf365_routeid",
                sf365_seatclassid: "sf365_seatclassid",
                sf365_seatclassid_value: "_sf365_seatclassid_value",
                sf365_price: "sf365_price"
            }
        };
        return sf365_passenger;
    }());
    sf365.sf365_passenger = sf365_passenger;
    var sf365_seat = /** @class */ (function () {
        function sf365_seat() {
        }
        sf365_seat._meta = {
            logicalname: "sf365_seat",
            attributes: {
                sf365_price: "sf365_price"
            }
        };
        return sf365_seat;
    }());
    sf365.sf365_seat = sf365_seat;
})(sf365 || (sf365 = {}));
/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />
var sf365;
(function (sf365) {
    var forms;
    (function (forms) {
        var booking = /** @class */ (function () {
            function booking() {
            }
            booking.onLoad = function (executionContext) {
                var formContext = executionContext.getFormContext();
                var flightAttribute = formContext.data.entity.attributes
                    .get(sf365.sf365_booking._meta.attributes.sf365_flightid);
                flightAttribute.addOnChange(sf365.forms.booking.flight_onchange);
            };
            booking.flight_onchange = function (executionContext) {
                var formConext = executionContext.getFormContext();
                var flightAttribute = formConext.data.entity.attributes
                    .get(sf365.sf365_booking._meta.attributes.sf365_flightid);
                var flight = flightAttribute.getValue();
                if (flight != null) {
                    Xrm.WebApi.retrieveRecord(sf365.sf365_flight._meta.logicalname, flight[0].id, "?$select=" + sf365.sf365_flight._meta.attributes.sf365_routeid_value)
                        .then(function (flightRecord) {
                        var routeAttribute = formConext.data.entity.attributes
                            .get(sf365.sf365_booking._meta.attributes.sf365_routeid);
                        routeAttribute.setValue([{
                                entityType: flightRecord[sf365.sf365_flight._meta.attributes.sf365_routeid_logicalname],
                                name: flightRecord[sf365.sf365_flight._meta.attributes.sf365_routeid_name],
                                id: flightRecord._sf365_routeid_value
                            }]);
                    });
                }
            };
            return booking;
        }());
        forms.booking = booking;
    })(forms = sf365.forms || (sf365.forms = {}));
})(sf365 || (sf365 = {}));
var sf365;
(function (sf365) {
    var forms;
    (function (forms) {
        var passanger = /** @class */ (function () {
            function passanger() {
            }
            passanger.onLoad = function () {
            };
            return passanger;
        }());
        forms.passanger = passanger;
    })(forms = sf365.forms || (sf365.forms = {}));
})(sf365 || (sf365 = {}));
//# sourceMappingURL=ClientHooks.js.map
