# Weather App

The Weather App is a simple web application that allows users to get the current temperature of a specific city by making an API request to the WeatherStack API. Users can input a city name, and the application will display the current temperature for that city.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Key](#api-key)
- [Contributing](#contributing)


## Features

- Input a city name and retrieve its current temperature.
- Responsive design for a seamless experience on various devices.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- WeatherStack API Key (Sign up at [WeatherStack](https://weatherstack.com/) to get an API key)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-app
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage

1. Replace `YOUR_API_KEY` in the `.env` file with your WeatherStack API key.

2. Start the application:

   ```bash
   npm start
   ```

3. Open a web browser and navigate to `http://localhost:3000` to access the Weather App.

4. Enter a city name in the input field and click the "Click to Get City" button to retrieve the current temperature for that city.

## API Key

To use the WeatherStack API, you need an API key. Follow these steps to obtain an API key:

1. Sign up for an account on the [WeatherStack website](https://weatherstack.com/).

2. After signing up, you will receive an API key. Replace `YOUR_WEATHERSTACK_API_KEY` in the `.env` file with your actual API key.

**Note:** Keep your API key confidential and do not share it publicly.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.
