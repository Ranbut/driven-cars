import prisma from "../config/database.js";

async function getCars() {
  const data = await prisma.cars.findMany()
  return data;
}

async function getCar(id: number) {
  const data = await prisma.cars.findFirst({
    where: { id: id }
   });
  return data;
}

async function getCarWithLicensePlate(licensePlate: string) {
  const data = await prisma.cars.findFirst({
    where: { licensePlate: licensePlate }
   });
  return data;
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  await prisma.cars.create({
    data: {
      model: model,
      licensePlate: licensePlate,
      year: year,
      color: color
    },
  });
}

async function updateCar(id: number, model: string, licensePlate: string, year: number, color: string) {
  await prisma.cars.update({
    where: {
      id: id
    },
    data: {
      model: model,
      licensePlate: licensePlate,
      year: year,
      color: color
    },
  });
}

async function deleteCar(id: number) {
  await prisma.cars.delete({
    where: {
      id: id
    },
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  updateCar,
  deleteCar
}

export default carRepository;