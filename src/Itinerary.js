
(function exportItinerary(){

    class Itinerary {
        constructor(itinerary) {
            this.ports = itinerary;
        }
    }
    
    if(typeof module !== 'undefined' && module.exports) {
        module.exports = Itinerary;
    } else {
        window.Itinerary = Itinerary;
    };
}());


