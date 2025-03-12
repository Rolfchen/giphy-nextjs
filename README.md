# Next.js Giphy API Exploration

This is a **Next.js** test project focused on exploring **Server Components** and **Server Actions** while integrating with the **Giphy API**. The primary goal is to handle all API requests securely through server actions, ensuring that the API key is kept hidden from the client side and that raw data responses aren't exposed. The project also explores server-side streaming capabilities.

## Features

- **Server Components & Server Actions**: Test and experiment with the latest Next.js features.
- **Giphy API Integration**: Fetch and display GIFs securely.
- **Secure API Handling**: API requests are made server-side to prevent exposing API keys.
- **Server-Side Streaming**: Utilize streaming to enhance performance and data handling.

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- [pnpm](https://pnpm.io/) package manager
- A valid **Giphy API Key**

### Installation

1. **Clone the Repository**

   ```bash
   git clone <your-repo-url>
   cd <repo-directory>
   ```

2. **Install Dependencies**

   ```bash
   pnpm install
   ```

3. **Setup Environment Variables**
   Create a `.env` or `.env.local` file in the root of the project and add your Giphy API key:
   ```env
   GIPHY_API_KEY=your_giphy_api_key_here
   ```

### Running the Project

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Goals

- **Security**: Ensure API keys remain server-side.
- **Data Privacy**: Avoid exposing raw API responses to the client.
- **Performance**: Leverage server-side streaming for efficient data delivery.

## Scripts

- `pnpm dev` - Run the development server.
- `pnpm build` - Build the application for production.
- `pnpm start` - Start the production server.

## Contributing

This is an experimental project, but contributions are welcome. Feel free to fork the repo and submit pull requests for improvements.

## License

This project is open-source and available under the [MIT License](LICENSE).
