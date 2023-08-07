# URL Shortener API

This is a URL shortener API built using Nest.js, TypeScript, and PostgreSQL with Sequelize ORM.

## Features

- Shorten long URLs into unique and easy-to-remember short URLs.
- Redirect to the original long URL when a short URL is accessed.
- Handle errors gracefully and return appropriate error messages.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- PostgreSQL Database

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/url-shortener-api.git
cd url-shortener-api
```

2. Install the dependencies:

```bash
npm install
```

3. Configure the database:
Configure the database:
- Create a PostgreSQL database.
- Update the database configuration in the config/database.config.ts file with your PostgreSQL credentials.

### Usage

1. Start the server:

```bash
npm run start
```

2. Create a short URL:

Send a POST request to http://localhost:3000/url with the following JSON payload:

```json
{
  "longUrl": "https://www.example.com"
}
```

The API will return the generated short URL.


3. Access the original long URL:


```bash
curl http://localhost:3000/url/your-short-url-code
```

Replace your-short-url-code with the actual short URL code you received in step 2.

### API Endpoints

POST /url: Create a short URL for a long URL.

- Request body: { "longUrl": "your-long-url" }
- Response: { "shortUrl": "your-short-url" }

- GET /url/:shortUrl: Redirect to the original long URL associated with the short URL.
- Response: Redirect to the original long URL.