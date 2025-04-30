// User Types
export interface User {
    id: string;
    name: string;
    initials: string;
    role: string;
    avatarColor: string;
}

// Data Types
export interface SpendMetric {
    current: number;
    reference: number;
    absoluteChange: number;
    percentChange: number;
}

export interface MetricData {
    country: string;
    state: string;
    city: string;
    sector: string;
    category: string;
    startDate: string;
    endDate: string;
    mySpend: SpendMetric;
    sameStoreSpend: SpendMetric;
    newStoreSpend: SpendMetric;
    lostStoreSpend: SpendMetric;
}

// Filter Types
export interface Filters {
    startDate: Date | null;
    endDate: Date | null;
    sector: SectorType | null;
    category: CategoryType | null;
    attributes: GroupingAttribute[] | [];
    metrics: MetricType[] | [];
}

// Grouping Attributes
export type GroupingAttribute = 'Country' | 'State' | 'City' | 'Sector' | 'Category';
export const ALL_ATTRIBUTES: GroupingAttribute[] = ['Country', 'State', 'City', 'Sector', 'Category'];

// Metrics
export type MetricType = 'My Spend' | 'Same Store Spend' | 'New Store Spend' | 'Lost Store Spend';
export const ALL_METRICS: MetricType[] = ['My Spend', 'Same Store Spend', 'New Store Spend', 'Lost Store Spend'];

// Sectors
export type SectorType = 'Retail' | 'Food' | 'Industrial' | 'Hospitality';
export const ALL_SECTORS: SectorType[] = ['Retail', 'Food', 'Industrial', 'Hospitality'];

// Categories
export type CategoryType = 'Juice' | 'Snacks' | 'Beverages' | 'Frozen Foods';
export const ALL_CATEGORIES: CategoryType[] = ['Juice', 'Snacks', 'Beverages', 'Frozen Foods'];

// Table Types
export interface Column {
    id: string;
    label: string;
    numeric?: boolean;
    currency?: boolean;
    percentChange?: boolean;
}

export interface TableRowType {
    sector: string;
    category: string
    spend: number
    percentChange: number
    absoluteChange: number
}

export interface TablePagination {
    page: number;
    rowsPerPage: number;
    totalRows: number;
}

export interface SortConfig {
    key: string;
    direction: 'asc' | 'desc';
    label: MetricType
}

// Chart Data Types
export interface BarChartData {
    category: string;
    value: number;
}

export interface TimeSeriesData {
    date: string;
    [metric: string]: number | string;
}

export interface ComparisonData {
    id: string;
    x: number;
    y: number;
    size: number;
    label: string;
}

export interface StackedBarData {
    country: string;
    [metric: string]: number | string;
}

