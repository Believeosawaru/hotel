const mongoose = require('mongoose');

const bookingTodo = new mongoose.Schema({
    dateDetails: {
        checkInTime: String,
        checkOutTime: String
    },
    roomingInfo: {
        adults: Number,
        children: Number,
        infants: Number
    },
    roomSelection: {
        small: Boolean,
        large: Boolean,
        extraLarge: Boolean,
        xxLarge: Boolean
    },
    rateInfo: {
        pricePerNight: Number,
        taxes: Number,
        totalCost: Number
    },
    guestDetails: {
        personalInformation: {
            name: String,
            contactInfo: String,
            address: String
        },
        specialRequests: String
    },
    paymentDetails: {
        paymentMethod: String
    }
});
