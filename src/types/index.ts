export interface SpendMetrics {
    current: number;
    reference: number;
    absoluteChange: number;
    percentChange: number;
}

export interface DataItem {
    country: string;
    state: string;
    city: string;
    sector: string;
    category: string;
    startDate: string;
    endDate: string;
    mySpend: SpendMetrics;
    sameStoreSpend?: SpendMetrics;
    newStoreSpend?: SpendMetrics;
    lostStoreSpend?: SpendMetrics;
}
