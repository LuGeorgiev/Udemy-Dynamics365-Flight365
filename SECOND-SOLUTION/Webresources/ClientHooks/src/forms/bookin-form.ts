/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />

namespace sf365.forms {
    export class booking {
        static onLoad(executionContext:Xrm.Page.EventContext) {
            var formContext = executionContext.getFormContext();
            const flightAttribute = formContext.data.entity.attributes
                .get<Xrm.Page.LookupAttribute>(sf365_booking._meta.attributes.sf365_flightid);

            flightAttribute.addOnChange(sf365.forms.booking.flight_onchange);
            
        }

        static flight_onchange(executionContext: Xrm.Page.EventContext) {
            var formConext = executionContext.getFormContext();
            const flightAttribute = formConext.data.entity.attributes
                .get<Xrm.Page.LookupAttribute>(sf365_booking._meta.attributes.sf365_flightid);

            const flight = flightAttribute.getValue();

            if (flight != null) {
                Xrm.WebApi.retrieveRecord(sf365_flight._meta.logicalname,
                    flight[0].id,
                    "?$select=" + sf365_flight._meta.attributes.sf365_routeid_value)
                    .then((flightRecord: sf365_flight) => {
                        const routeAttribute = formConext.data.entity.attributes
                            .get<Xrm.Page.LookupAttribute>(sf365_booking._meta.attributes.sf365_routeid);

                        routeAttribute.setValue([{
                            entityType: <string>flightRecord[sf365_flight._meta.attributes.sf365_routeid_logicalname],
                            name: <string>flightRecord[sf365_flight._meta.attributes.sf365_routeid_name],
                            id: flightRecord._sf365_routeid_value
                        }]);
                    });

            }
        }
    }
}