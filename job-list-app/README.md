# Job List App

This project is a job listing application that provides a GraphQL API for managing job lists and jobs. It includes functionalities for listing jobs, creating lists, adding jobs to lists, and publishing lists. The frontend is built using Next.js and provides a user-friendly interface for interacting with the job lists.

## Project Structure

The project is organized into two main packages: `api` and `web`.

### API Package

- **Location**: `packages/api`
- **Description**: This package contains the GraphQL API for managing jobs and lists.
- **Key Files**:
  - `src/graphql/job/job.resolvers.ts`: Resolvers for job-related queries and mutations.
  - `src/graphql/job/job.schema.graphql`: GraphQL schema for job-related types and operations.
  - `src/graphql/list/list.resolvers.ts`: Resolvers for list-related queries and mutations.
  - `src/graphql/list/list.schema.graphql`: GraphQL schema for list-related types and operations.
  - `src/graphql/index.ts`: Combines job and list schemas and resolvers.
  - `src/services/job.service.ts`: Business logic for managing jobs.
  - `src/services/list.service.ts`: Business logic for managing lists.
  - `src/server.ts`: Sets up the GraphQL server.

### Web Package

- **Location**: `packages/web`
- **Description**: This package contains the frontend application built with Next.js.
- **Key Files**:
  - `components/Dashboard.tsx`: Displays an overview of job lists and statistics.
  - `components/JobCard.tsx`: Represents a single job in the UI.
  - `components/ListForm.tsx`: Allows users to create a new job list.
  - `components/ListView.tsx`: Displays the details of a specific job list.
  - `lib/graphqlClient.ts`: Configured GraphQL client for making requests to the API.
  - `pages/api/graphql.ts`: Proxies requests to the GraphQL API.
  - `pages/dashboard.tsx`: Page component for the dashboard view.
  - `pages/lists/[listId].tsx`: Displays a specific job list based on the listId parameter.
  - `pages/lists/new.tsx`: Page component for creating a new job list.
  - `pages/share/[listId].tsx`: Dynamic page component for sharing a specific job list.
  - `pages/_app.tsx`: Custom App component for Next.js.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd job-list-app
   ```

3. Install dependencies for both the API and web packages:
   ```
   cd packages/api
   npm install
   cd ../web
   npm install
   ```

4. Start the API server:
   ```
   npm run dev
   ```

5. Start the Next.js application:
   ```
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000` to view the application.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.