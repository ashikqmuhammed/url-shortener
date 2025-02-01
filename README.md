
# URL Shortener Service

A URL shortener service built with NestJS, using MongoDB for storage and caching with Redis. This project allows you to create short URLs and retrieve the original URL from a short code.

## Features

- Shorten long URLs into a short code.
- Retrieve original URLs by the short code.
- Caching for fast retrieval of URLs.
- MongoDB as the database for storing the original and short URLs.
- Uses `nanoid` for generating unique short codes.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB instance running (locally or using a cloud provider like MongoDB Atlas)
- Redis (for caching) or you can skip caching in the development environment.

## Installation

1. Clone the repository.

   ```bash
   git clone <repository_url>
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the project with the following variables:

   ```bash
   MONGODB_URL=<your_mongodb_connection_string>
   ```

4. Start the application.

   ```bash
   npm run start
   ```

   The server will start on `http://localhost:3000`.

## API Endpoints

### 1. `POST /shorten`

Shortens a given URL.

- **Request body**:

   ```json
   {
     "url": "<original_url>"
   }
   ```

- **Response**:

   ```json
   {
     "shortCode": "<generated_short_code>"
   }
   ```

### 2. `GET /shorten/:code`

Redirects to the original URL based on the short code.

- **Request parameter**:

   - `code` (string): The generated short code.

- **Response**:

   - Redirects to the original URL.

## Technologies Used

- **NestJS**: The main framework used to build the backend service.
- **MongoDB**: Database for storing original URLs and their respective short codes.
- **Redis (Optional)**: Caching layer for fast URL retrieval.
- **nanoid**: A lightweight and secure library for generating unique IDs.
- **Mongoose**: MongoDB ODM for interacting with the database.

## Testing

To run the tests:

```bash
npm run test
```

### Unit Tests

- **ShortenerController**: Tests for controller methods (shortening URL and redirecting).
- **ShortenerService**: Tests for service logic, including URL creation and retrieval.

## Contributions

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.
