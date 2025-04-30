## Prerequisites

Ensure you have the correct versions of Node.js and npm installed:

- Node.js: `18.12.1`
- npm: `8.19.2`

You can verify the versions by running:

```bash
node -v
npm -v
```

## Installing Dependencies

To install the required dependencies, run:

```bash
npm install
```

## Mock Data Structure

The application uses mock data to simulate user metrics and filters. The mock data is structured as follows:

Example:

```ts
{
  country: "India",
  state: "Maharashtra",
  city: "Mumbai",
  sector: "Retail",
  category: "Juice",
  startDate: "2025-03-01",
  endDate: "2025-03-31",
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
}
```

## User's Data Structure

```ts
{
    id: "john-doe",
    name: "John Doe",
    initials: "JD",
    role: "Retail Manager",
    avatarColor: "#1976d2"
}
```

## Testing or Simulating User Switching and Filters

1. **User Switching**:

   - The application uses a `userDataMap` to associate user IDs with their respective mock data.
   - To simulate switching users, modify the `userId` parameter in the relevant function (e.g., `generateTimeSeriesData`, `generateStackedBarData`).
   - Example:
     ```ts
     const userId = "john-doe"; // Change this to "jane-smith", "michael-patel", etc.
     const data = generateTimeSeriesData(userId);
     ```

2. **Filters**:

   - Filters are applied using the `Filters` interface, which includes attributes like `startDate`, `endDate`, `sector`, `category`, etc.
   - To test filters, update the filter values in the application state or directly in the mock data.
   - Example:
     ```ts
     const filters: Filters = {
       startDate: new Date("2025-01-01"),
       endDate: new Date("2025-03-31"),
       sector: "Retail",
       category: "Juice",
       attributes: ["Country", "State"],
       metrics: ["My Spend", "New Store Spend"],
     };
     ```

3. **Simulating Changes**:
   - Modify the mock data in `/src/data/mockData.ts` to simulate different scenarios, such as changes in metrics or new user data.
   - Example:
     ```ts
     mockDataJohnDoe[0].mySpend.current = 150000; // Update the current spend value.
     ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
