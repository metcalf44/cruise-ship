
(function exportController() {

    class Controller {
        constructor(ship){
        this.ship = ship;
        this.initialiseSea();
        
        document.getElementById('sailButton').addEventListener('click', () => {
            this.setSail();
        });
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
    
    renderShip() {
        
        const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
        const shipElement = document.getElementById('ship');
        
        shipElement.style.top = `${portElement.offsetTop + 10}px`;
        shipElement.style.left = `${portElement.offsetLeft - 35}px`;
    }
    
    renderMessage(message){
            const messageElement = document.createElement('div');
            messageElement.id = 'message';
            messageElement.innerHTML = message;
    
            const container = document.getElementById('container');
            container.appendChild(messageElement);
    
            setTimeout(() => {
                container.removeChild(messageElement);
            }, 2000);
    };
    
    renderMessageNext(message){
            const messageElementNext = document.createElement('div');
            messageElementNext.id = 'message';
            messageElementNext.innerHTML = message;

            const container = document.getElementById('container');
            container.appendChild(messageElementNext);
    
            setTimeout(() => {
                container.removeChild(messageElementNext);
            }, 2000);
    };
    
    renderMessageEnd(message){
        const messageElementEnd = document.createElement('div');
        messageElementEnd.id = 'message';
        messageElementEnd.innerHTML = message;
        
        const viewport = document.getElementById('container');
        viewport.appendChild(messageElementEnd);
    
        setTimeout(() => {
            viewport.removeChild(messageElementEnd);
        }, 2000);
    };
    setSail() {
        
        const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const nextPortIndex = currentPortIndex + 1;
        const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);
        
        if (!nextPortElement) {
            return this.renderMessageEnd(`we have arrived at ${ship.currentPort.name}, your trip has finished!`)
        }
        
        this.renderMessage(`Now departing ${ship.currentPort.name}`);
        
        
        const shipElement = document.getElementById('ship');
        const sailInterval = setInterval(() => {
            const shipLeft = parseInt(shipElement.style.left, 10);
            if (shipLeft === (nextPortElement.offsetLeft - 35)) {
                ship.setSail();
                ship.dock();
                clearInterval(sailInterval);
            } 
            
            shipElement.style.left = `${shipLeft + 1}px`;
        }, 20);
      
    }
    
    
};

    if(typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    };
}());