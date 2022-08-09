const mongoose = require("mongoose");

const sessionsSchema = new mongoose.Schema({
    Participants: { type: Array, required: false},
    SessionLength: { type: String, required: false },
    SessionType: { type: String, required: false },
    Title: { type: String, required: false },
    Description: { type: String, required: false },
    Takeaways: { type: Array, required: false },
    ListOfServicesCovered: { type: String, required: false },
    SessionTracks: { type: String, required: false },
    Usecase: { type: String, required: false },
    DeploymentStage: { type: String, required: false },
    MostlyAssignWith: { type: String, required: false },
    WillingForOther: { type: String, required: false },
    WillingForMore: { type: String, required: false },
    WillingForBoth: { type: String, required: false }
});

const Sessions = mongoose.model("sessions", sessionsSchema)

module.exports = Sessions