
(function exportController() {

    class Controller {
        constructor(ship){
        this.ship = ship;
        this.initialiseSea();
        
    }
    
    
    initialiseSea() {
        const backgrounds = [
            './images/water0.png',
            './images/water1.png',
        ];
        let backgroundIndex = 0;
        window.setInterval(() => {
            document.getElementById('viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
            backgroundIndex +=1;
        }, 750);
    };

    
    renderPorts(ports) {
        const portsElement = document.getElementById('ports');
        portsElement.style.width = '0px';

        ports.forEach((port, index) => {
            const newPortElement = document.createElement('div');
            newPortElement.className = 'port';
            newPortElement.dataset.portName = port.name;
            newPortElement.dataset.portIndex = index;

            portsElement.appendChild(newPortElement);

            const portsElementWidth = parseInt(portsElement.style.width, 10);
            portsElement.style.width = `${portsElementWidth + 300}px`;
        });
    }

    renderShip(ship) {
        const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
        const shipElement = document.getElementById('ship');
        shipElement.style.top = `${portElement.offsetTop + 10}px`;
        shipElement.style.left = `${portElement.offsetLeft - 35}px`;
    }
};

    if(typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    };
}());