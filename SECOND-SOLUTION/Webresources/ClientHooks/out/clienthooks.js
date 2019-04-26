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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var sf365;
(function (sf365) {
    var ResourceStrings = /** @class */ (function () {
        function ResourceStrings() {
        }
        ResourceStrings.HelloWord = 'HelloWord';
        ResourceStrings.AreYouSure = "Are you sure?";
        return ResourceStrings;
    }());
    sf365.ResourceStrings = ResourceStrings;
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
var sf365;
(function (sf365) {
    var Ribbon;
    (function (Ribbon) {
        var BookingCommands = /** @class */ (function () {
            function BookingCommands() {
            }
            BookingCommands.cancelCommand = function (commandId, formContext) {
                Xrm.Navigation.openConfirmDialog({
                    text: sf365.ResourceStrings.AreYouSure
                }, null).then(function (result) {
                    if (result.confirmed) {
                        // TODO: Cancel
                    }
                });
            };
            BookingCommands.canCancel = function (commandId, selectedRecordId) {
                return __awaiter(this, void 0, void 0, function () {
                    var booking;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Xrm.WebApi.retrieveRecord(sf365.sf365_booking._meta.logicalname, selectedRecordId, "")];
                            case 1:
                                booking = _a.sent();
                                return [2 /*return*/, booking.statuscode != sf365.sf365_bookingStatus.Paid];
                        }
                    });
                });
            };
            return BookingCommands;
        }());
        Ribbon.BookingCommands = BookingCommands;
    })(Ribbon = sf365.Ribbon || (sf365.Ribbon = {}));
})(sf365 || (sf365 = {}));
var sf365;
(function (sf365) {
    var Ribbon;
    (function (Ribbon) {
        var Encoding = /** @class */ (function () {
            function Encoding() {
            }
            Encoding.xmlEncode = function (text) {
                if (text == null || text === "") {
                    return text;
                }
                return Xrm.Encoding.xmlEncode(text);
            };
            return Encoding;
        }());
        Ribbon.Encoding = Encoding;
        var RibbonControl = /** @class */ (function () {
            function RibbonControl(id, sequence, labelText, command, image16, image32) {
                this.id = id;
                this.sequence = sequence;
                this.labelText = labelText;
                this.command = command;
                this.image16By16 = image16;
                this.image32By32 = image32;
            }
            RibbonControl.prototype.serialiseToRibbonXml = function (sb) {
            };
            return RibbonControl;
        }());
        Ribbon.RibbonControl = RibbonControl;
        var RibbonFlyoutAnchor = /** @class */ (function (_super) {
            __extends(RibbonFlyoutAnchor, _super);
            function RibbonFlyoutAnchor() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RibbonFlyoutAnchor.prototype.serialiseToRibbonXml = function (sb) {
                sb.push("<FlyoutAnchor Id=\"" + Encoding.xmlEncode(this.id) + "\" LabelText=\"" + Encoding.xmlEncode(this.labelText) + "\" Sequence=\"" + this.sequence.toString() + "\" Command=\"" + Encoding.xmlEncode(this.command) + "\"" + ((this.image32By32 != null) ? (" Image32by32=\"" + Encoding.xmlEncode(this.image32By32) + "\"") : "") + ((this.image16By16 != null) ? (" Image16by16=\"" + Encoding.xmlEncode(this.image16By16) + "\"") : "") + " PopulateDynamically=\"false\">");
                sb.push(this.menu.serialiseToRibbonXml());
                sb.push("</FlyoutAnchor>");
            };
            return RibbonFlyoutAnchor;
        }(RibbonControl));
        Ribbon.RibbonFlyoutAnchor = RibbonFlyoutAnchor;
        var RibbonButton = /** @class */ (function (_super) {
            __extends(RibbonButton, _super);
            function RibbonButton() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RibbonButton.prototype.serialiseToRibbonXml = function (sb) {
                sb.push("<Button Id=\"" + Encoding.xmlEncode(this.id) + "\" LabelText=\"" + Encoding.xmlEncode(this.labelText) + "\" Sequence=\"" + this.sequence.toString() + "\" Command=\"" + Encoding.xmlEncode(this.command) + "\"" + ((this.image32By32 != null) ? (" Image32by32=\"" + Encoding.xmlEncode(this.image32By32) + "\"") : "") + ((this.image16By16 != null) ? (" Image16by16 =\"" + Encoding.xmlEncode(this.image16By16) + "\"") : "") + " />");
            };
            return RibbonButton;
        }(RibbonControl));
        Ribbon.RibbonButton = RibbonButton;
        var RibbonMenu = /** @class */ (function () {
            function RibbonMenu(id) {
                this.sections = new Array();
                this.id = id;
            }
            RibbonMenu.prototype.serialiseToRibbonXml = function () {
                var sb = new Array();
                sb.push("<Menu Id=\"" + this.id + "\">");
                this.sections.forEach(function (section) {
                    section.serialiseToRibbonXml(sb);
                });
                sb.push("</Menu>");
                return sb.join("");
            };
            RibbonMenu.prototype.addSection = function (section) {
                this.sections.push(section);
                return this;
            };
            return RibbonMenu;
        }());
        Ribbon.RibbonMenu = RibbonMenu;
        var RibbonMenuSection = /** @class */ (function () {
            function RibbonMenuSection(id, labelText, sequence, displayMode) {
                this.buttons = new Array();
                this.id = id;
                this.title = labelText;
                this.sequence = sequence;
                this.displayMode = displayMode;
            }
            RibbonMenuSection.prototype.serialiseToRibbonXml = function (sb) {
                sb.push("<MenuSection Id=\"" + Encoding.xmlEncode(this.id) + (this.title != null ? "\" Title=\"" + this.title.toString() : "") + "\" Sequence=\"" + this.sequence.toString() + "\" DisplayMode=\"" + this.displayMode + "\">");
                sb.push("<Controls Id=\"" + Encoding.xmlEncode(this.id + ".Controls") + "\">");
                this.buttons.forEach(function (button) {
                    button.serialiseToRibbonXml(sb);
                });
                sb.push("</Controls>");
                sb.push("</MenuSection>");
            };
            RibbonMenuSection.prototype.addButton = function (button) {
                this.buttons.push(button);
                return this;
            };
            return RibbonMenuSection;
        }());
        Ribbon.RibbonMenuSection = RibbonMenuSection;
        var CommandProperties = /** @class */ (function () {
            function CommandProperties() {
            }
            return CommandProperties;
        }());
        Ribbon.CommandProperties = CommandProperties;
    })(Ribbon = sf365.Ribbon || (sf365.Ribbon = {}));
})(sf365 || (sf365 = {}));
//# sourceMappingURL=clienthooks.js.map