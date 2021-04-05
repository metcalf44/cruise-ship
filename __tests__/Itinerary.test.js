const Itinerary = require('../src/Itinerary');
const Ship = require('../src/ship');
const Port = require('../src/port');


describe('Itinerary', () => {
    
    
    it('returns an object', () => {
        const itinerary = new Itinerary
        expect(itinerary).toBeInstanceOf(Object);
    })
    
    it('can have ports', () => {
        const southampton = new Port('Southampton UK');
        const bridgetown = new Port('Bridgetown Barbados');
        const itinerary = new Itinerary(['Southampton UK, Bridgetown Barbados'])
        
        expect(itinerary.ports).toEqual(['Southampton UK, Bridgetown Barbados'])
    })
})