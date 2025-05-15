const SERVICE_UUID = 0x1826;
const TREADMILL_DATA_UUID = 0x2ACD;
const TREADMILL_CONTROL_UUID = 0x2AD9;

export class TreadMillConnection{
    currentData = $state({
        speed: 0,
        distance: 0,
        inclination: 0,
        elapsedTime: 0,
        kcal: 0,
        hr: 0,
    });
    treadmillControlCharacteristic = null;
    connected = $state(false);

    connect(){
		return navigator.bluetooth
			.requestDevice({ filters: [{ services: [SERVICE_UUID] }] })
			.then((device) => {
				console.log('Connecting to GATT Server...');
				return device.gatt.connect();
			})
			.then((server) => {
				console.log('Getting Service...');
				return server.getPrimaryService(SERVICE_UUID);
			})
			.then((service) => {
				console.log('Getting Characteristic...');
                service.getCharacteristic(TREADMILL_CONTROL_UUID).then((characteristic) => {
                    console.log("control characteristic")
                    console.log(characteristic)
                    this.treadmillControlCharacteristic = characteristic
                });
				return service.getCharacteristic(TREADMILL_DATA_UUID);
			})
			.then((characteristic) => {
				return characteristic.startNotifications().then((_) => {
					console.log('> Notifications started');
					characteristic.addEventListener('characteristicvaluechanged', this.handleNotifications.bind(this));
                    this.connected = true;
				});
			})
			.catch((error) => {
				console.log('Argh! ' + error);
			});
    }

	handleNotifications(event) {
		let value = event.target.value;
		const flags = value.getUint16(0, /*littleEndian=*/ true);
		// 2octets for flags, 2octets for instant speed, nextPosition is incremented following the number of octets for each value
        let position = 4;
		let posInclination;
		let posElaspedTime;
        const features = new Map<string, number>();

		if ((flags & (1 << 1)) != 0) {
            features.set('avgSpeed', position);
            position += 2;
		}
		if ((flags & (1 << 2)) != 0) {
            features.set('totDistance', position);
			position += 3;
		}
		if ((flags & (1 << 3)) != 0) {
            features.set('inclination', position);
			position += 4;
		}
		if ((flags & (1 << 4)) != 0) {
            features.set('elevGain', position);
			position += 4;
		}
		if ((flags & (1 << 5)) != 0) {
            features.set('insPace', position);
			position += 1;
		}
		if ((flags & (1 << 6)) != 0) {
            features.set('avgPace', position);
			position += 1;
		}
		if ((flags & (1 << 7)) != 0) {
            features.set('kcal', position);
			position += 5;
		}
		if ((flags & (1 << 8)) != 0) {
            features.set('hr', position);
			position += 1;
		}
		if ((flags & (1 << 9)) != 0) {
            features.set('met', position);
			position += 1;
		}
		if ((flags & (1 << 10)) != 0) {
            features.set('elapsedTime', position);
			position += 2;
		}
		if ((flags & (1 << 11)) != 0) {
            features.set('remainTime', position);
			position += 2;
		}
		if ((flags & (1 << 12)) != 0) {
            features.set('forceBelt', position);
			position += 4;
		}

		// instantaneous speed
        this.currentData.speed = value.getUint16(2, /*littleEndian=*/ true) / 100;

		//distance
        const posTotDistance = features.get('totDistance');
		const distance = value.getUint16(posTotDistance, /*littleEndian=*/ true);
		let distance_complement = value.getUint8(posTotDistance + 2, /*littleEndian=*/ true);
		distance_complement = distance_complement << 16;
		this.currentData.distance = distance + distance_complement;

		if (features.has('inclination')) {
			this.currentData.inclination = value.getInt16(features.get('inclination'), /*littleEndian=*/ true) / 10;
		}
		if (features.has('elapsedTime')) {
			this.currentData.elapsedTime = value.getUint16(features.get('elapsedTime'), /*littleEndian=*/ true);
		}
		if (features.has('kcal')) {
			this.currentData.kcal = value.getUint16(features.get('kcal'), /*littleEndian=*/ true);
		}
		if (features.has('hr')) {
			this.currentData.hr = value.getUint8(features.get('hr'), /*littleEndian=*/ true);
		}
        console.log(features)
	}

    pause() {
        const buffer = new Uint8Array([0x08]).buffer;
        this.treadmillControlCharacteristic.writeValueWithResponse(buffer).then((response) => console.log(response));
        console.log("stop")
    }

    start() {
        const buffer = new Uint8Array([0x07]).buffer;
        this.treadmillControlCharacteristic.writeValueWithResponse(buffer).then((response) => console.log(response));
        console.log("start")
    }

    setSpeed(speedKMh: number) {
        const speedint16 = Math.round(speedKMh * 100);
        const hi = (speedint16 >> 8) & 0xFF;
        const lo = (speedint16 >> 0) & 0xFF;
        const buffer = new Uint8Array([0x02, lo, hi]).buffer;
        this.treadmillControlCharacteristic.writeValueWithResponse(buffer).then((response) => console.log(response));
        console.log("set speed", speedKMh, speedint16, lo, hi);
    }
}

let singletonTreadMillConnection: TreadMillConnection|null = null;

export function getTreadMillConnection(): TreadMillConnection {
    if (singletonTreadMillConnection == null) {
        singletonTreadMillConnection = new TreadMillConnection();
    }
    return singletonTreadMillConnection;
}
