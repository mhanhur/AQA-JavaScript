class Device {
    #name;
    #type;
    constructor(name, type) {
        this.#name = name;
        this.#type = type;
    }
    getInfo() {
        return `${this.#name} - ${this.#type}`;
    }
    getName() {
        return this.#name;
    }
    setName(name) {
        this.#name = name;
    }
    getType() {
        return this.#type;
    }
    setType(type) {
        this.#type = type;
    }

}

class SmartDevice extends Device {
    #isSmart
    constructor(name, type, isSmart) {
        super(name, type)
        this.#isSmart = isSmart;
    }
    isDeviceSmart() {
        return this.#isSmart
    }
    setDeviceSmart(value) {
        this.#isSmart = value
    }
}
class Network {
    #devices;

    constructor() {
        this.#devices = [];
    }

    addDevice(device) {
        this.#devices.push(device);
    }
    getDevices() {
        return [...this.#devices];
    }
    getDevicesInfo() {
        return this.#devices.map(device => ({
            DeviceName: device.getName(),
            DeviceType: device.getType()
        }))
    }
}

const smart = new SmartDevice('Google', 'smartphone', true);
const device1 = new SmartDevice('iPad', 'tablet', false )
const device2 = new Device('Mac', 'computer')

const network = new Network();
network.addDevice(smart);
network.addDevice(device1);
network.addDevice(device2);
console.log(device1.getInfo()); // get info about specific tablet
console.log(network.getDevicesInfo()); // encapsulation

console.log(smart.isDeviceSmart());
console.log(device1.isDeviceSmart());
device1.setDeviceSmart(true)
console.log(device1.isDeviceSmart());
