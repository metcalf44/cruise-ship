const Port = require('../src/port');
const Ship = require('../src/ship');

const port = new Port('Southampton UK')

describe('Port', () => {

    let port;

    beforeEach(() => {
        port = new Port('Southampton UK');
    });

    it('returns an object', () => {
        expect(port).toBeInstanceOf(Object);
    })

    it('returns the ports name', () => {
        expect(port.name).toBe('Southampton UK')
    })

    it('can add a ship', () => {
        const ship = jest.fn();

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    })

    it('can remove a ship', () => {
        const titanic = jest.fn;
        const queenMary = jest.fn;

        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);
    });
});