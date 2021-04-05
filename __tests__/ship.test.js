const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/Itinerary');

describe('Ship', () => {
    
    describe('with ports and an itinerary', () => {
        
        let southampton;
        let bridgetown;

        beforeEach(() => {
            
            southampton = {
                name: 'Southampton UK',
                addShip: jest.fn(),
                removeShip: jest.fn(),
                ships: [],
            }
            bridgetown = {
                name: 'Bridgetown Barbados',
                addShip: jest.fn(),
                removeShip: jest.fn(),
                ships: [],
            }
            
            itinerary = {
                ports: [southampton, bridgetown]
            }
            
            ship = new Ship(itinerary);
        });

        it('returns an object', () => {
            expect(ship).toBeInstanceOf(Object);
        });
        
        it('has a starting port', () => {
            expect(ship.currentPort).toEqual(southampton);
        });
        
        it('set sail', () => {
            ship.setSail();
    
            expect(ship.currentPort).toBeFalsy();
            expect(southampton.removeShip).toHaveBeenCalledWith(ship);
        });
        
        it('gets added to port on instantiation', () => {
            expect(southampton.addShip).toHaveBeenCalledWith(ship);
        });

        it('the ship can dock at a different port', () => {
            
            ship.setSail();
            ship.dock();
    
            expect(bridgetown.addShip).toHaveBeenCalledWith(ship);
        });
    });
    
    

    it('the ship cant sail further than its itinerary', () => {
        const southampton = new Port('Southampton UK');
        const bridgetown = new Port('Bridgetown Barbados');
        const itinerary = new Itinerary([southampton, bridgetown])
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached');  
    });

});

