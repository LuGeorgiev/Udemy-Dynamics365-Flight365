namespace sf365.Ribbon {

    export class BookingCommands {
        static cancelCommand(commandId: CommandProperties, formContext: Xrm.Page) {

            Xrm.Navigation.openConfirmDialog({
                text: ResourceStrings.AreYouSure
            },
                null,
            ).then((result) => {
                if (result.confirmed) {
                    // TODO: Cancel
                }
            });
        }

        static async canCancel(commandId: string, selectedRecordId: string) {

            // In Unified Client can return Promise
            var booking: sf365_booking = await Xrm.WebApi.retrieveRecord(
                sf365_booking._meta.logicalname,
                selectedRecordId,
                "");

            return booking.statuscode != sf365_bookingStatus.Paid;
        }
    }
}