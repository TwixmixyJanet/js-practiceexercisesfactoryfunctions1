const createVehicle = function (type, numWheels, color) {
  const vehicle = {};
  vehicle.type = type;
  vehicle.numWheels = numWheels;
  vehicle.color = color;

  return vehicle;
};

const car = createVehicle("car", 4, "black");
const motorcycle = createVehicle("motorcycle", 2, "blue");
const truck = createVehicle("truck", 4, "grey");

const myVehicles = [car, motorcycle, truck];

for (let vehicle of myVehicles) {
  for (let key in vehicle) {
    console.log(key, vehicle[key]);
  }
}
