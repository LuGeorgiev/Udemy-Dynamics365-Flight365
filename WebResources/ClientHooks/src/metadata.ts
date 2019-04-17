namespace sf365 {
    export class sf365_booking {
        static _meta = {
            logicalname: "sf365_booking",
            attributes: {
                sf365_routeid: "sf365_routeid",
                sf365_flightid: "sf365_flightid",
            }
        };
        [key: string]: string | number;
    }

    export class sf365_flight {
        static _meta = {
            logicalname: "sf365_flight",
            attributes: {
                sf365_routeid: "sf365_routeid",
                sf365_routeid_value: "_sf365_routeid_value",
                sf365_routeid_name: "_sf365_routeid_value@OData.Community.Display.V1.FormattedValue",
                sf365_routeid_logicalname: "_sf365_routeid_value@Microsoft.Dynamics.CRM.lookuplogicalname",
            }
        };
        [key: string]: string | number;
        sf365_flightid?: string;
        _sf365_routeid_value?: string;
    }
}