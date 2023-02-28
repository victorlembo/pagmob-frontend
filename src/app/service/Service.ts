export interface Service {
    routeCode: string;
    routeMnemonic: string;
    companyId: number;
    stopId: number;
    serviceId: number;
    serviceMnemonic: string;
    predictionType: string;
    activeVehicles: number;
    scheduledVehicles: number;
    messages: any[];
    vehicles: Vehicle[];
    hasRealTime: boolean;
  }
  
  export interface Vehicle {
    plate: string;
    prefix: string;
    wheelchair: boolean;
    climatized: boolean;
    prediction: number;
    age: number;
    type: string;
  }
  