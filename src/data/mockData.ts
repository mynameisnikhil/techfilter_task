import { MetricData } from "../types";

// Mock data for the dashboard
export const mockDataJohnDoe: MetricData[] = [
    {
        country: "India",
        state: "Maharashtra",
        city: "Mumbai",
        sector: "Retail",
        category: "Juice",
        startDate: "2025-03-30",
        endDate: "2025-04-30",
        mySpend: {
            current: 120000,
            reference: 100000,
            absoluteChange: 20000,
            percentChange: 20
        },
        sameStoreSpend: {
            current: 95000,
            reference: 90000,
            absoluteChange: 5000,
            percentChange: 5.56
        },
        newStoreSpend: {
            current: 15000,
            reference: 10000,
            absoluteChange: 5000,
            percentChange: 50
        },
        lostStoreSpend: {
            current: 10000,
            reference: 15000,
            absoluteChange: -5000,
            percentChange: -33.33
        }
    },
    {
        country: "India",
        state: "Karnataka",
        city: "Bengaluru",
        sector: "Retail",
        category: "Snacks",
        startDate: "2025-03-30",
        endDate: "2025-04-30",
        mySpend: {
            current: 90000,
            reference: 85000,
            absoluteChange: 5000,
            percentChange: 5.88
        },
        sameStoreSpend: {
            current: 70000,
            reference: 75000,
            absoluteChange: -5000,
            percentChange: -6.67
        },
        newStoreSpend: {
            current: 10000,
            reference: 5000,
            absoluteChange: 5000,
            percentChange: 100
        },
        lostStoreSpend: {
            current: 10000,
            reference: 5000,
            absoluteChange: 5000,
            percentChange: 100
        }
    },
    {
        country: "USA",
        state: "California",
        city: "San Francisco",
        sector: "Hospitality",
        category: "Beverages",
        startDate: "2025-03-30",
        endDate: "2025-04-30",
        mySpend: {
            current: 130000,
            reference: 110000,
            absoluteChange: 20000,
            percentChange: 18.18
        },
        sameStoreSpend: {
            current: 100000,
            reference: 95000,
            absoluteChange: 5000,
            percentChange: 5.26
        },
        newStoreSpend: {
            current: 20000,
            reference: 10000,
            absoluteChange: 10000,
            percentChange: 100
        },
        lostStoreSpend: {
            current: 10000,
            reference: 15000,
            absoluteChange: -5000,
            percentChange: -33.33
        }
    },
    {
        country: "USA",
        state: "Texas",
        city: "Austin",
        sector: "Retail",
        category: "Frozen Foods",
        startDate: "2025-03-30",
        endDate: "2025-04-30",
        mySpend: {
            current: 80000,
            reference: 70000,
            absoluteChange: 10000,
            percentChange: 14.29
        },
        sameStoreSpend: {
            current: 60000,
            reference: 55000,
            absoluteChange: 5000,
            percentChange: 9.09
        },
        newStoreSpend: {
            current: 10000,
            reference: 10000,
            absoluteChange: 0,
            percentChange: 0
        },
        lostStoreSpend: {
            current: 10000,
            reference: 5000,
            absoluteChange: 5000,
            percentChange: 100
        }
    },
    {
        country: "Canada",
        state: "Ontario",
        city: "Toronto",
        sector: "Food",
        category: "Beverages",
        startDate: "2025-03-30",
        endDate: "2025-04-30",
        mySpend: {
            current: 115000,
            reference: 100000,
            absoluteChange: 15000,
            percentChange: 15
        },
        sameStoreSpend: {
            current: 90000,
            reference: 85000,
            absoluteChange: 5000,
            percentChange: 5.88
        },
        newStoreSpend: {
            current: 20000,
            reference: 10000,
            absoluteChange: 10000,
            percentChange: 100
        },
        lostStoreSpend: {
            current: 5000,
            reference: 5000,
            absoluteChange: 0,
            percentChange: 0
        }
    },
    {
        country: "UK",
        state: "London",
        city: "Central",
        sector: "Retail",
        category: "Juice",
        startDate: "2025-03-30",
        endDate: "2025-04-30",
        mySpend: {
            current: 95000,
            reference: 80000,
            absoluteChange: 15000,
            percentChange: 18.75
        },
        sameStoreSpend: {
            current: 80000,
            reference: 75000,
            absoluteChange: 5000,
            percentChange: 6.67
        },
        newStoreSpend: {
            current: 10000,
            reference: 5000,
            absoluteChange: 5000,
            percentChange: 100
        },
        lostStoreSpend: {
            current: 5000,
            reference: 10000,
            absoluteChange: -5000,
            percentChange: -50
        }
    },
    {
        country: "Germany",
        state: "Berlin",
        city: "Central",
        sector: "Food",
        category: "Snacks",
        startDate: "2025-03-30",
        endDate: "2025-04-30",
        mySpend: {
            current: 110000,
            reference: 100000,
            absoluteChange: 10000,
            percentChange: 10
        },
        sameStoreSpend: {
            current: 90000,
            reference: 85000,
            absoluteChange: 5000,
            percentChange: 5.88
        },
        newStoreSpend: {
            current: 15000,
            reference: 10000,
            absoluteChange: 5000,
            percentChange: 50
        },
        lostStoreSpend: {
            current: 5000,
            reference: 5000,
            absoluteChange: 0,
            percentChange: 0
        }
    },
    {
        country: "France",
        state: "Paris",
        city: "Central",
        sector: "Hospitality",
        category: "Beverages",
        startDate: "2025-03-30",
        endDate: "2025-04-30",
        mySpend: {
            current: 140000,
            reference: 120000,
            absoluteChange: 20000,
            percentChange: 16.67
        },
        sameStoreSpend: {
            current: 110000,
            reference: 100000,
            absoluteChange: 10000,
            percentChange: 10
        },
        newStoreSpend: {
            current: 25000,
            reference: 15000,
            absoluteChange: 10000,
            percentChange: 66.67
        },
        lostStoreSpend: {
            current: 5000,
            reference: 5000,
            absoluteChange: 0,
            percentChange: 0
        }
    },
    {
        country: "Canada",
        state: "Ontario",
        city: "Toronto",
        sector: "Food",
        category: "Beverages",
        startDate: "2024-04-01",
        endDate: "2024-04-30",
        mySpend: {
            current: 115000,
            reference: 100000,
            absoluteChange: 15000,
            percentChange: 15
        },
        sameStoreSpend: {
            current: 90000,
            reference: 85000,
            absoluteChange: 5000,
            percentChange: 5.88
        },
        newStoreSpend: {
            current: 20000,
            reference: 10000,
            absoluteChange: 10000,
            percentChange: 100
        },
        lostStoreSpend: {
            current: 5000,
            reference: 5000,
            absoluteChange: 0,
            percentChange: 0
        }
    },
    {
        country: "USA",
        state: "New York",
        city: "New York City",
        sector: "Food",
        category: "Snacks",
        startDate: "2024-04-01",
        endDate: "2024-04-30",
        mySpend: {
            current: 140000,
            reference: 120000,
            absoluteChange: 20000,
            percentChange: 16.67
        },
        sameStoreSpend: {
            current: 100000,
            reference: 95000,
            absoluteChange: 5000,
            percentChange: 5.26
        },
        newStoreSpend: {
            current: 30000,
            reference: 20000,
            absoluteChange: 10000,
            percentChange: 50
        },
        lostStoreSpend: {
            current: 10000,
            reference: 5000,
            absoluteChange: 5000,
            percentChange: 100
        }
    },
    {
        country: "Mexico",
        state: "Mexico City",
        city: "Central",
        sector: "Food",
        category: "Juice",
        startDate: "2024-04-01",
        endDate: "2024-04-30",
        mySpend: {
            current: 85000,
            reference: 80000,
            absoluteChange: 5000,
            percentChange: 6.25
        },
        sameStoreSpend: {
            current: 70000,
            reference: 65000,
            absoluteChange: 5000,
            percentChange: 7.69
        },
        newStoreSpend: {
            current: 10000,
            reference: 10000,
            absoluteChange: 0,
            percentChange: 0
        },
        lostStoreSpend: {
            current: 5000,
            reference: 5000,
            absoluteChange: 0,
            percentChange: 0
        }
    },
];

// Jane Smith's data (with some modifications from John's data)
export const mockDataJaneSmith: MetricData[] = [
    {
        country: "UK",
        state: "London",
        city: "Central",
        sector: "Retail",
        category: "Juice",
        startDate: "2024-06-01",
        endDate: "2025-04-30",
        mySpend: {
            current: 95000,
            reference: 80000,
            absoluteChange: 15000,
            percentChange: 18.75
        },
        sameStoreSpend: {
            current: 80000,
            reference: 75000,
            absoluteChange: 5000,
            percentChange: 6.67
        },
        newStoreSpend: {
            current: 10000,
            reference: 5000,
            absoluteChange: 5000,
            percentChange: 100
        },
        lostStoreSpend: {
            current: 5000,
            reference: 10000,
            absoluteChange: -5000,
            percentChange: -50
        }
    },
    {
        country: "Germany",
        state: "Berlin",
        city: "Central",
        sector: "Food",
        category: "Snacks",
        startDate: "2024-06-01",
        endDate: "2025-04-30",
        mySpend: {
            current: 110000,
            reference: 100000,
            absoluteChange: 10000,
            percentChange: 10
        },
        sameStoreSpend: {
            current: 90000,
            reference: 85000,
            absoluteChange: 5000,
            percentChange: 5.88
        },
        newStoreSpend: {
            current: 15000,
            reference: 10000,
            absoluteChange: 5000,
            percentChange: 50
        },
        lostStoreSpend: {
            current: 5000,
            reference: 5000,
            absoluteChange: 0,
            percentChange: 0
        }
    },
    {
        country: "France",
        state: "Paris",
        city: "Central",
        sector: "Hospitality",
        category: "Beverages",
        startDate: "2024-07-01",
        endDate: "2025-04-30",
        mySpend: {
            current: 140000,
            reference: 120000,
            absoluteChange: 20000,
            percentChange: 16.67
        },
        sameStoreSpend: {
            current: 110000,
            reference: 100000,
            absoluteChange: 10000,
            percentChange: 10
        },
        newStoreSpend: {
            current: 25000,
            reference: 15000,
            absoluteChange: 10000,
            percentChange: 66.67
        },
        lostStoreSpend: {
            current: 5000,
            reference: 5000,
            absoluteChange: 0,
            percentChange: 0
        }
    },
    {
        country: "USA",
        state: "Texas",
        city: "Austin",
        sector: "Retail",
        category: "Frozen Foods",
        startDate: "2025-03-30",
        endDate: "2025-04-30",
        mySpend: {
            current: 80000,
            reference: 70000,
            absoluteChange: 10000,
            percentChange: 14.29
        },
        sameStoreSpend: {
            current: 60000,
            reference: 55000,
            absoluteChange: 5000,
            percentChange: 9.09
        },
        newStoreSpend: {
            current: 10000,
            reference: 10000,
            absoluteChange: 0,
            percentChange: 0
        },
        lostStoreSpend: {
            current: 10000,
            reference: 5000,
            absoluteChange: 5000,
            percentChange: 100
        }
    },
    {
        country: "Canada",
        state: "Ontario",
        city: "Toronto",
        sector: "Food",
        category: "Beverages",
        startDate: "2025-03-30",
        endDate: "2025-04-30",
        mySpend: {
            current: 115000,
            reference: 100000,
            absoluteChange: 15000,
            percentChange: 15
        },
        sameStoreSpend: {
            current: 90000,
            reference: 85000,
            absoluteChange: 5000,
            percentChange: 5.88
        },
        newStoreSpend: {
            current: 20000,
            reference: 10000,
            absoluteChange: 10000,
            percentChange: 100
        },
        lostStoreSpend: {
            current: 5000,
            reference: 5000,
            absoluteChange: 0,
            percentChange: 0
        }
    },
    {
        country: "UK",
        state: "London",
        city: "Central",
        sector: "Retail",
        category: "Juice",
        startDate: "2025-03-30",
        endDate: "2025-04-30",
        mySpend: {
            current: 95000,
            reference: 80000,
            absoluteChange: 15000,
            percentChange: 18.75
        },
        sameStoreSpend: {
            current: 80000,
            reference: 75000,
            absoluteChange: 5000,
            percentChange: 6.67
        },
        newStoreSpend: {
            current: 10000,
            reference: 5000,
            absoluteChange: 5000,
            percentChange: 100
        },
        lostStoreSpend: {
            current: 5000,
            reference: 10000,
            absoluteChange: -5000,
            percentChange: -50
        }
    },
    {
        country: "Germany",
        state: "Berlin",
        city: "Central",
        sector: "Food",
        category: "Snacks",
        startDate: "2025-03-30",
        endDate: "2025-04-30",
        mySpend: {
            current: 110000,
            reference: 100000,
            absoluteChange: 10000,
            percentChange: 10
        },
        sameStoreSpend: {
            current: 90000,
            reference: 85000,
            absoluteChange: 5000,
            percentChange: 5.88
        },
        newStoreSpend: {
            current: 15000,
            reference: 10000,
            absoluteChange: 5000,
            percentChange: 50
        },
        lostStoreSpend: {
            current: 5000,
            reference: 5000,
            absoluteChange: 0,
            percentChange: 0
        }
    },
    {
        country: "France",
        state: "Paris",
        city: "Central",
        sector: "Hospitality",
        category: "Beverages",
        startDate: "2025-03-30",
        endDate: "2025-04-30",
        mySpend: {
            current: 140000,
            reference: 120000,
            absoluteChange: 20000,
            percentChange: 16.67
        },
        sameStoreSpend: {
            current: 110000,
            reference: 100000,
            absoluteChange: 10000,
            percentChange: 10
        },
        newStoreSpend: {
            current: 25000,
            reference: 15000,
            absoluteChange: 10000,
            percentChange: 66.67
        },
        lostStoreSpend: {
            current: 5000,
            reference: 5000,
            absoluteChange: 0,
            percentChange: 0
        }
    }
];

// Robert Johnson's data
export const mockDataRobertJohnson: MetricData[] = [
    {
        country: "Canada",
        state: "Ontario",
        city: "Toronto",
        sector: "Food",
        category: "Beverages",
        startDate: "2024-04-01",
        endDate: "2024-04-30",
        mySpend: {
            current: 115000,
            reference: 100000,
            absoluteChange: 15000,
            percentChange: 15
        },
        sameStoreSpend: {
            current: 90000,
            reference: 85000,
            absoluteChange: 5000,
            percentChange: 5.88
        },
        newStoreSpend: {
            current: 20000,
            reference: 10000,
            absoluteChange: 10000,
            percentChange: 100
        },
        lostStoreSpend: {
            current: 5000,
            reference: 5000,
            absoluteChange: 0,
            percentChange: 0
        }
    },
    {
        country: "USA",
        state: "New York",
        city: "New York City",
        sector: "Food",
        category: "Snacks",
        startDate: "2024-04-01",
        endDate: "2024-04-30",
        mySpend: {
            current: 140000,
            reference: 120000,
            absoluteChange: 20000,
            percentChange: 16.67
        },
        sameStoreSpend: {
            current: 100000,
            reference: 95000,
            absoluteChange: 5000,
            percentChange: 5.26
        },
        newStoreSpend: {
            current: 30000,
            reference: 20000,
            absoluteChange: 10000,
            percentChange: 50
        },
        lostStoreSpend: {
            current: 10000,
            reference: 5000,
            absoluteChange: 5000,
            percentChange: 100
        }
    },
    {
        country: "Mexico",
        state: "Mexico City",
        city: "Central",
        sector: "Food",
        category: "Juice",
        startDate: "2024-04-01",
        endDate: "2024-04-30",
        mySpend: {
            current: 85000,
            reference: 80000,
            absoluteChange: 5000,
            percentChange: 6.25
        },
        sameStoreSpend: {
            current: 70000,
            reference: 65000,
            absoluteChange: 5000,
            percentChange: 7.69
        },
        newStoreSpend: {
            current: 10000,
            reference: 10000,
            absoluteChange: 0,
            percentChange: 0
        },
        lostStoreSpend: {
            current: 5000,
            reference: 5000,
            absoluteChange: 0,
            percentChange: 0
        }
    },
    {
        country: "France",
        state: "Paris",
        city: "Central",
        sector: "Hospitality",
        category: "Beverages",
        startDate: "2024-07-01",
        endDate: "2025-04-30",
        mySpend: {
            current: 140000,
            reference: 120000,
            absoluteChange: 20000,
            percentChange: 16.67
        },
        sameStoreSpend: {
            current: 110000,
            reference: 100000,
            absoluteChange: 10000,
            percentChange: 10
        },
        newStoreSpend: {
            current: 25000,
            reference: 15000,
            absoluteChange: 10000,
            percentChange: 66.67
        },
        lostStoreSpend: {
            current: 5000,
            reference: 5000,
            absoluteChange: 0,
            percentChange: 0
        }
    },
    {
        country: "USA",
        state: "Texas",
        city: "Austin",
        sector: "Retail",
        category: "Frozen Foods",
        startDate: "2025-03-30",
        endDate: "2025-04-30",
        mySpend: {
            current: 80000,
            reference: 70000,
            absoluteChange: 10000,
            percentChange: 14.29
        },
        sameStoreSpend: {
            current: 60000,
            reference: 55000,
            absoluteChange: 5000,
            percentChange: 9.09
        },
        newStoreSpend: {
            current: 10000,
            reference: 10000,
            absoluteChange: 0,
            percentChange: 0
        },
        lostStoreSpend: {
            current: 10000,
            reference: 5000,
            absoluteChange: 5000,
            percentChange: 100
        }
    },
    {
        country: "Canada",
        state: "Ontario",
        city: "Toronto",
        sector: "Food",
        category: "Beverages",
        startDate: "2025-03-30",
        endDate: "2025-04-30",
        mySpend: {
            current: 115000,
            reference: 100000,
            absoluteChange: 15000,
            percentChange: 15
        },
        sameStoreSpend: {
            current: 90000,
            reference: 85000,
            absoluteChange: 5000,
            percentChange: 5.88
        },
        newStoreSpend: {
            current: 20000,
            reference: 10000,
            absoluteChange: 10000,
            percentChange: 100
        },
        lostStoreSpend: {
            current: 5000,
            reference: 5000,
            absoluteChange: 0,
            percentChange: 0
        }
    },
];

// Sarah Kim's data
export const mockDataSarahKim: MetricData[] = [
    {
        country: "Japan",
        state: "Tokyo",
        city: "Central",
        sector: "Retail",
        category: "Snacks",
        startDate: "2024-04-01",
        endDate: "2024-04-30",
        mySpend: {
            current: 110000,
            reference: 95000,
            absoluteChange: 15000,
            percentChange: 15.79
        },
        sameStoreSpend: {
            current: 85000,
            reference: 80000,
            absoluteChange: 5000,
            percentChange: 6.25
        },
        newStoreSpend: {
            current: 20000,
            reference: 10000,
            absoluteChange: 10000,
            percentChange: 100
        },
        lostStoreSpend: {
            current: 5000,
            reference: 5000,
            absoluteChange: 0,
            percentChange: 0
        }
    },
    {
        country: "South Korea",
        state: "Seoul",
        city: "Central",
        sector: "Hospitality",
        category: "Beverages",
        startDate: "2024-04-01",
        endDate: "2024-04-30",
        mySpend: {
            current: 125000,
            reference: 110000,
            absoluteChange: 15000,
            percentChange: 13.64
        },
        sameStoreSpend: {
            current: 95000,
            reference: 90000,
            absoluteChange: 5000,
            percentChange: 5.56
        },
        newStoreSpend: {
            current: 25000,
            reference: 15000,
            absoluteChange: 10000,
            percentChange: 66.67
        },
        lostStoreSpend: {
            current: 5000,
            reference: 5000,
            absoluteChange: 0,
            percentChange: 0
        }
    },
    {
        country: "China",
        state: "Shanghai",
        city: "Central",
        sector: "Industrial",
        category: "Frozen Foods",
        startDate: "2024-04-01",
        endDate: "2024-04-30",
        mySpend: {
            current: 165000,
            reference: 150000,
            absoluteChange: 15000,
            percentChange: 10
        },
        sameStoreSpend: {
            current: 140000,
            reference: 130000,
            absoluteChange: 10000,
            percentChange: 7.69
        },
        newStoreSpend: {
            current: 20000,
            reference: 15000,
            absoluteChange: 5000,
            percentChange: 33.33
        },
        lostStoreSpend: {
            current: 5000,
            reference: 5000,
            absoluteChange: 0,
            percentChange: 0
        }
    }
];

// Michael Patel's data
export const mockDataMichaelPatel: MetricData[] = [
    {
        country: "Australia",
        state: "New South Wales",
        city: "Sydney",
        sector: "Hospitality",
        category: "Beverages",
        startDate: "2024-04-01",
        endDate: "2024-04-30",
        mySpend: {
            current: 120000,
            reference: 105000,
            absoluteChange: 15000,
            percentChange: 14.29
        },
        sameStoreSpend: {
            current: 90000,
            reference: 85000,
            absoluteChange: 5000,
            percentChange: 5.88
        },
        newStoreSpend: {
            current: 25000,
            reference: 15000,
            absoluteChange: 10000,
            percentChange: 66.67
        },
        lostStoreSpend: {
            current: 5000,
            reference: 5000,
            absoluteChange: 0,
            percentChange: 0
        }
    },
    {
        country: "New Zealand",
        state: "Auckland",
        city: "Central",
        sector: "Hospitality",
        category: "Snacks",
        startDate: "2024-04-01",
        endDate: "2024-04-30",
        mySpend: {
            current: 85000,
            reference: 75000,
            absoluteChange: 10000,
            percentChange: 13.33
        },
        sameStoreSpend: {
            current: 65000,
            reference: 60000,
            absoluteChange: 5000,
            percentChange: 8.33
        },
        newStoreSpend: {
            current: 15000,
            reference: 10000,
            absoluteChange: 5000,
            percentChange: 50
        },
        lostStoreSpend: {
            current: 5000,
            reference: 5000,
            absoluteChange: 0,
            percentChange: 0
        }
    },
    {
        country: "Singapore",
        state: "Singapore",
        city: "Central",
        sector: "Hospitality",
        category: "Juice",
        startDate: "2024-04-01",
        endDate: "2024-04-30",
        mySpend: {
            current: 95000,
            reference: 85000,
            absoluteChange: 10000,
            percentChange: 11.76
        },
        sameStoreSpend: {
            current: 75000,
            reference: 70000,
            absoluteChange: 5000,
            percentChange: 7.14
        },
        newStoreSpend: {
            current: 15000,
            reference: 10000,
            absoluteChange: 5000,
            percentChange: 50
        },
        lostStoreSpend: {
            current: 5000,
            reference: 5000,
            absoluteChange: 0,
            percentChange: 0
        }
    }
];

// Maps user IDs to their respective mock data
export const userDataMap = {
    "john-doe": mockDataJohnDoe,
    "jane-smith": mockDataJaneSmith,
    "robert-johnson": mockDataRobertJohnson,
    "sarah-kim": mockDataSarahKim,
    "michael-patel": mockDataMichaelPatel
};

// Map metric name to the corresponding property in data
export const metricMapping: Record<string, string> = {
    "My Spend": "mySpend",
    "Same Store Spend": "sameStoreSpend",
    "New Store Spend": "newStoreSpend",
    "Lost Store Spend": "lostStoreSpend",
};

// Define colors for each metric
export const metricColors: Record<string, string> = {
    "My Spend": "#1976d2",
    "Same Store Spend": "#9c27b0",
    "New Store Spend": "#2e7d32",
    "Lost Store Spend": "#d32f2f",
};

// Generate time series data for each user
export const generateTimeSeriesData = (userId: string) => {
    const userData = userDataMap[userId as keyof typeof userDataMap] || mockDataJohnDoe;

    // Create a time series spanning 6 months
    const now = new Date();
    const months = [];

    for (let i = 5; i >= 0; i--) {
        const date = new Date(now);
        date.setMonth(now.getMonth() - i);
        months.push(date.toISOString().slice(0, 7)); // Format as YYYY-MM
    }

    // Generate time series data based on user's metrics
    return months.map((month, index) => {
        // Calculate a factor that increases over time (for upward trend)
        const factor = 0.9 + (index * 0.02);

        // Calculate total spend across all categories for this user
        const totalMySpend = userData.reduce((sum, entry) => sum + entry.mySpend.current, 0) * factor;
        const totalSameStore = userData.reduce((sum, entry) => sum + entry.sameStoreSpend.current, 0) * factor;
        const totalNewStore = userData.reduce((sum, entry) => sum + entry.newStoreSpend.current, 0) * factor;
        const totalLostStore = userData.reduce((sum, entry) => sum + entry.lostStoreSpend.current, 0) * factor;

        // Add some randomness
        const randomFactor = 0.9 + Math.random() * 0.2;

        return {
            date: month,
            'My Spend': Math.round(totalMySpend * randomFactor),
            'Same Store Spend': Math.round(totalSameStore * randomFactor),
            'New Store Spend': Math.round(totalNewStore * randomFactor),
            'Lost Store Spend': Math.round(totalLostStore * randomFactor)
        };
    });
};

// Generate comparison data for scatter plot
export const generateComparisonData = (userId: string) => {
    const userData = userDataMap[userId as keyof typeof userDataMap] || mockDataJohnDoe;

    return userData.map((entry) => ({
        id: entry.category,
        x: entry.mySpend.reference,
        y: entry.mySpend.percentChange,
        size: Math.abs(entry.mySpend.absoluteChange) / 1000,
        label: entry.category.charAt(0)
    }));
};

// Generate stacked bar data
export const generateStackedBarData = (userId: string) => {
    const userData = userDataMap[userId as keyof typeof userDataMap] || mockDataJohnDoe;

    // Group by country
    const countryGroups = userData.reduce((groups, entry) => {
        if (!groups[entry.country]) {
            groups[entry.country] = {
                country: entry.country,
                'My Spend': 0,
                'Same Store Spend': 0,
                'New Store Spend': 0,
                'Lost Store Spend': 0
            };
        }

        groups[entry.country]['My Spend'] += entry.mySpend.current;
        groups[entry.country]['Same Store Spend'] += entry.sameStoreSpend.current;
        groups[entry.country]['New Store Spend'] += entry.newStoreSpend.current;
        groups[entry.country]['Lost Store Spend'] += entry.lostStoreSpend.current;

        return groups;
    }, {} as Record<string, any>);

    return Object.values(countryGroups);
};
