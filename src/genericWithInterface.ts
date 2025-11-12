interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X;
}

type BrandCharaWatch = {
  heartRate: string;
  stopwatch: boolean;
};

const poorDeveloper: Developer<BrandCharaWatch> = {
  name: "Mr. Poor",
  salary: 20,
  device: {
    brand: "lenovo",
    model: "A21",
    releasedYear: "2010",
  },
  smartWatch: {
    heartRate: "200",
    stopwatch: true,
  },
};

type BrandedWatch = {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  ai: boolean;
};

type TBike = {
  model: string;
  cc: number;
};

const richDeveloper: Developer<BrandedWatch, TBike> = {
  name: "Mr. Rich",
  salary: 20000,
  device: {
    brand: "iphone",
    model: "17",
    releasedYear: "2025",
  },
  smartWatch: {
    heartRate: "100",
    callSupport: true,
    calculator: true,
    ai: false,
  },
  bike: {
    model: "R15",
    cc: 120,
  },
};
