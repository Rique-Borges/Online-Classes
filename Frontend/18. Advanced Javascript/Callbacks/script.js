function getEvent (typeOfEvent, callback){
   //detect event code...
    const thisEvent = {
        eventType: "keypress",
        key: "p",
        durationOfKeyPress: 2
    }
    if (thisEvent.eventType === typeOfEvent) {
        callback(thisEvent);
    }
}

getEvent("keypress", function(event){
    console.log(event);
})