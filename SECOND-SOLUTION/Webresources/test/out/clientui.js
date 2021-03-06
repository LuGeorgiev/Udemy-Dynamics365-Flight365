var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var sf365;
(function (sf365) {
    var libs;
    (function (libs) {
        var Guid = /** @class */ (function () {
            function Guid() {
            }
            Guid.compare = function (id1, id2) {
                return (id1.replace("{", "").replace("}", "").toLowerCase() ==
                    id2.replace("{", "").replace("}", "").toLowerCase());
            };
            return Guid;
        }());
        libs.Guid = Guid;
    })(libs = sf365.libs || (sf365.libs = {}));
})(sf365 || (sf365 = {}));
/// <reference path="../lib/sortable.ts" />
/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />
/// <reference path="../lib/guid.ts" />
var sf365;
(function (sf365) {
    var ViewModels;
    (function (ViewModels) {
        var SelectSeatsViewModel = /** @class */ (function () {
            function SelectSeatsViewModel() {
                this.Seats = ko.observable();
                this.Passengers = ko.observableArray();
                this.EditedPassengers = ko.observableArray();
                this.IsBusy = ko.observable(false);
                this.PassengerEdited = ko.observable();
            }
            SelectSeatsViewModel.prototype.canSeatAcceptPassenger = function (seat, passenger) {
                return !this.isSeatOccupied(seat.passengers);
            };
            SelectSeatsViewModel.prototype.isSeatOccupied = function (passengers) {
                return passengers().length !== 0;
            };
            SelectSeatsViewModel.prototype.isSeatUnoccupied = function (passengers) {
                return passengers().length == 0;
            };
            SelectSeatsViewModel.prototype.assignSeat = function (seat, passenger) {
                if (this.canSeatAcceptPassenger(seat, passenger)) {
                    passenger.sf365_seat = seat.name;
                    this.Seats().SeatIndex[passenger.sf365_seat].passengers.push(passenger);
                }
                else {
                    throw new Error("Cannot assign seat");
                }
            };
            SelectSeatsViewModel.prototype.afterAssign = function () {
                var _this = this;
                return function (args) {
                    _this.EditedPassengers.push(args.item);
                    var parent = args.targetParent;
                    args.item.sf365_seat = parent.seat.name;
                    _this.PassengerEdited(args.item);
                };
            };
            SelectSeatsViewModel.prototype.afterUnAssign = function () {
                var _this = this;
                return function (args) {
                    _this.EditedPassengers.push(args.item);
                    args.item.sf365_seat = "";
                    _this.PassengerEdited(args.item);
                };
            };
            SelectSeatsViewModel.prototype.loadSeats = function (flightId, bookingId) {
                return __awaiter(this, void 0, void 0, function () {
                    var results, seatConfiguration, existingSeatAssignments, seatConfig, seats, settings, seatsData, _i, _a, passengerRecord, seat;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                this.IsBusy(true);
                                return [4 /*yield*/, Promise.all([
                                        // Get the seat configuration
                                        Xrm.WebApi.retrieveRecord("sf365_flight", flightId, "?$select=sf365_flightnumber&$expand=sf365_AssignedSpacecraftId($select=sf365_seatconfiguration)"),
                                        // Get the existing seat assignments
                                        Xrm.WebApi.retrieveMultipleRecords("sf365_passenger", encodeURI("?fetchXml=<fetch version=\"1.0\" output-format=\"xml-platform\" mapping=\"logical\">\n                              <entity name=\"sf365_passenger\">\n                                <attribute name=\"sf365_passengerid\" />\n                                <attribute name=\"sf365_fullname\" />\n                                <attribute name=\"sf365_seat\" />\n                                <attribute name=\"sf365_bookingid\" />\n                                <order attribute=\"sf365_fullname\" descending=\"false\" />\n                                <link-entity name=\"sf365_booking\" from=\"sf365_bookingid\" to=\"sf365_bookingid\" link-type=\"inner\" alias=\"aa\">\n                                  <filter type=\"and\">\n                                    <condition attribute=\"sf365_flightid\" operator=\"eq\" uitype=\"sf365_flight\" value=\"" + flightId + "\" />\n                                  </filter>\n                                </link-entity>\n                              </entity>\n                            </fetch>"))
                                    ])];
                            case 1:
                                results = _b.sent();
                                seatConfiguration = results[0];
                                existingSeatAssignments = results[1];
                                seatConfig = seatConfiguration
                                    .sf365_AssignedSpacecraftId.sf365_seatconfiguration;
                                seats = seatConfig.split('\n');
                                settings = {
                                    ColumnNames: ["A", "B", "C", "D", "E", "F", "G", "H"],
                                    SeatMap: seats
                                };
                                seatsData = new sf365.Model.SeatsModel(settings);
                                this.Seats(seatsData);
                                // Set the seats occupied already
                                for (_i = 0, _a = existingSeatAssignments.entities; _i < _a.length; _i++) {
                                    passengerRecord = _a[_i];
                                    if (passengerRecord.sf365_seat != null) {
                                        seat = seatsData.SeatIndex[passengerRecord.sf365_seat];
                                        if (seat != null) {
                                            this.assignSeat(seat, passengerRecord);
                                        }
                                    }
                                    else if (sf365.libs.Guid
                                        .compare(passengerRecord._sf365_bookingid_value, bookingId)) {
                                        this.Passengers.push((passengerRecord));
                                    }
                                }
                                this.IsBusy(false);
                                return [2 /*return*/];
                        }
                    });
                });
            };
            SelectSeatsViewModel.prototype.saveSeatAssignments = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var updates, _i, _a, passenger, updatePassenger;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                updates = new Array();
                                for (_i = 0, _a = this.EditedPassengers(); _i < _a.length; _i++) {
                                    passenger = _a[_i];
                                    updatePassenger = {};
                                    updatePassenger.sf365_passengerid = passenger.sf365_passengerid;
                                    updatePassenger.sf365_seat = passenger.sf365_seat;
                                    // Update seat assignment
                                    updates.push(this.savePassenger(updatePassenger));
                                }
                                this.EditedPassengers.removeAll();
                                return [4 /*yield*/, Promise.all(updates)];
                            case 1:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
            SelectSeatsViewModel.prototype.savePassenger = function (passenger) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Xrm.WebApi.updateRecord("sf365_passenger", passenger.sf365_passengerid, passenger)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
            return SelectSeatsViewModel;
        }());
        ViewModels.SelectSeatsViewModel = SelectSeatsViewModel;
    })(ViewModels = sf365.ViewModels || (sf365.ViewModels = {}));
})(sf365 || (sf365 = {}));
/// <reference path="../lib/dictionary.ts" />
/// <reference path="../../../node_modules/@types/knockout/index.d.ts" />
var sf365;
(function (sf365) {
    var Model;
    (function (Model) {
        var SeatsModel = /** @class */ (function () {
            function SeatsModel(settings) {
                this.settings = settings;
                this.init();
            }
            SeatsModel.prototype.init = function () {
                this.Rows = ko.observableArray();
                this.SeatIndex = {};
                // initialise the seats using the map
                var rowIndex = 0;
                var colIndex = 0;
                for (var _i = 0, _a = this.settings.SeatMap; _i < _a.length; _i++) {
                    var row = _a[_i];
                    colIndex = 0;
                    var rowItems = new Row();
                    for (var _b = 0, row_1 = row; _b < row_1.length; _b++) {
                        var seat = row_1[_b];
                        var seatItem = new Seat();
                        seatItem.seatclass = seat;
                        if (seat !== '_') {
                            seatItem.name = (this.settings.RowNames ? this.settings.RowNames[rowIndex] : (rowIndex + 1).toString()) + this.settings.ColumnNames[colIndex];
                            colIndex++;
                        }
                        rowItems.Seats.push(seatItem);
                        this.SeatIndex[seatItem.name] = seatItem;
                    }
                    this.Rows.push(rowItems);
                    rowIndex++;
                }
            };
            return SeatsModel;
        }());
        Model.SeatsModel = SeatsModel;
        var Row = /** @class */ (function () {
            function Row() {
                this.Seats = ko.observableArray();
            }
            return Row;
        }());
        Model.Row = Row;
        var Seat = /** @class */ (function () {
            function Seat() {
                this.passengers = ko.observableArray();
                //this.passengers.seat = this;
            }
            return Seat;
        }());
        Model.Seat = Seat;
    })(Model = sf365.Model || (sf365.Model = {}));
})(sf365 || (sf365 = {}));
/// <reference path="../../node_modules/@types/qunit/index.d.ts" />
/// <reference path="../../ClientUI/src/ViewModel/seatselectionviewmodel.ts" />
/// <reference path="../../clientui/src/model/seatsmodel.ts" />
/// <reference path="../../clientui/src/viewmodel/seatselectionviewmodel.ts" />
QUnit.module("Select Seats Tests");
QUnit.test("Seat settings", function (assert) {
    assert.expect(2);
    var settings = {
        ColumnNames: ["A", "B", "C", "D", "E"],
        SeatMap: [
            "aa_aaa_aa",
            "aa_aaa_aa",
            "aa_aaa_aa"
        ]
    };
    var seats = new sf365.Model.SeatsModel(settings);
    assert.equal(seats.Rows().length, 3);
    assert.equal(seats.Rows()[0].Seats().length, 9);
});
QUnit.test("Seat assignment", function (assert) {
    assert.expect(2);
    var settings = {
        ColumnNames: ["A", "B", "C", "D", "E"],
        SeatMap: [
            "aa_aaa_aa",
            "aa_aaa_aa",
            "aa_aaa_aa"
        ]
    };
    var seats = new sf365.Model.SeatsModel(settings);
    var vm = new sf365.ViewModels.SelectSeatsViewModel();
    vm.Seats(seats);
    var passenger1 = {
        sf365_passengerid: "1",
        sf365_fullname: "Bob"
    };
    var passenger2 = {
        sf365_passengerid: "2",
        sf365_fullname: "Julie"
    };
    var row1 = seats.Rows()[1];
    var canAccept = vm.canSeatAcceptPassenger(row1.Seats()[1], passenger1);
    vm.assignSeat(row1.Seats()[1], passenger1);
    var canAcceptAgain = vm.canSeatAcceptPassenger(row1.Seats()[1], passenger2);
    assert.equal(canAccept, true);
    assert.equal(canAcceptAgain, false);
});
//# sourceMappingURL=clientui.js.map