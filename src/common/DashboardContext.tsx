import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";
import { MetricData, User, Filters, SortConfig } from "../types";
import { mockUsers } from "../data/mockUsers";
import { userDataMap } from "../data/mockData";
import { subMonths } from "date-fns";

interface DashboardContextType {
  // User state
  currentUser: User;
  users: User[];
  setCurrentUser: (user: User) => void;

  // Tab state
  activeTab: "metrics" | "analytics";
  setActiveTab: (tab: "metrics" | "analytics") => void;

  // Filter state
  filters: Filters;
  updateFilters: (newFilters: Partial<Filters>) => void;
  clearFilters: () => void;

  // Data
  data: MetricData[];
  filteredData: MetricData[];

  // Table sorting
  sortConfig: SortConfig;
  setSortConfig: (config: SortConfig) => void;

  // Pagination
  page: number;
  rowsPerPage: number;
  setPage: (page: number) => void;
  setRowsPerPage: (rowsPerPage: number) => void;
}

// Initial filter values
const initialFilters: Filters = {
  startDate: subMonths(new Date(), 1), // Default to 1 month ago
  endDate: new Date(),
  sector: null,
  category: null,
  attributes: [], // Default grouping attributes
  metrics: [], // Default metrics
};

// Create context with initial values
const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

// Get maximum date that is one year ago from today
const getMaxPastDate = () => {
  const today = new Date();
  return subMonths(today, 12);
};

// Provider component
export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // User state
  const [currentUser, setCurrentUser] = useState<User>(mockUsers[0]);

  // Tab state
  const [activeTab, setActiveTab] = useState<"metrics" | "analytics">(
    "metrics"
  );

  // Filter state
  const [filters, setFilters] = useState<Filters>(initialFilters);

  // Get data for current user
  const data = useMemo(() => {
    return userDataMap[currentUser.id as keyof typeof userDataMap] || [];
  }, [currentUser.id]);

  // const gourpDataByAttributes = () => {}

  // Apply filters to data
  const filteredData = useMemo(() => {
    let dataAfterFiltering = [] as MetricData[];
    //filter the data one-by-one applying the filters

    if (filters.startDate && filters.endDate) {
      dataAfterFiltering = data.filter((item) => {
        const startDate = new Date(filters.startDate!);
        const endDate = new Date(filters.endDate!);
        const itemStartDate = new Date(item.startDate);
        const itemEndDate = new Date(item.startDate);
        return itemStartDate >= startDate;
        // && itemStartDate <= endDate && itemEndDate >= startDate && itemEndDate <= endDate;
      });
    }
    if (filters.sector) {
      dataAfterFiltering = dataAfterFiltering.filter(
        (item) => item.sector === filters.sector
      );
    }
    if (filters.category) {
      dataAfterFiltering = dataAfterFiltering.filter(
        (item) => item.category === filters.category
      );
    }

    return dataAfterFiltering;
  }, [data, filters]);

  // Sorting
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "mySpend.current",
    direction: "desc",
    label: "My Spend",
  });

  // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Update filters
  const updateFilters = useCallback((newFilters: Partial<Filters>) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  }, []);

  // Clear filters
  const clearFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  // Create memoized context value
  const value = useMemo(
    () => ({
      currentUser,
      users: mockUsers,
      setCurrentUser,
      activeTab,
      setActiveTab,
      filters,
      updateFilters,
      clearFilters,
      data,
      filteredData,
      sortConfig,
      setSortConfig,
      page,
      setPage,
      rowsPerPage,
      setRowsPerPage,
    }),
    [
      currentUser,
      activeTab,
      filters,
      data,
      filteredData,
      sortConfig,
      page,
      rowsPerPage,
      updateFilters,
      clearFilters,
    ]
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

// Custom hook to use the context
export const useDashboard = (): DashboardContextType => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
