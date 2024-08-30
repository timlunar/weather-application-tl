# weather-app-tl

Simple Vue 3 + Vite weather app using [OpenWeather API]
[OpenWeather API]: https://openweathermap.org/current#name

## Project Setup

```sh
nvm use 20
```

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

## Concept

App has 3 main components:
- Search Input
  - A text field where the user enters the name of a city.
  - Triggers a search for the current weather data for the entered city.
  
- Current weather results display
  - Shows the current weather data for the city entered by the user.
  - If the city is valid and available via the API, the weather information is displayed.
  - If the city is not available or an error occurs, an error message is displayed below the input field.

- Search History
  - Displays the last five(5) successful city searches.
  - Clicking on a history item displays the historical weather data for that city.
  - The search history is stored in the browser's local storage.
  - User can clear the entire search history by clicking the delete button.

### Data shown by application

- Current temperature (temp)
- Feels like (feels_like)
- Min temperature (temp_min)
- Max temperature (temp_max)
- Humidity (humidity)


### Technology overview

- Vue 3 + Vite
- SCSS - CSS preprocessor for implementing the design
- Axios - HTTP client for making requests to API.
- Lodash (Debounce): used in the text input component to limit the frequency of API calls, improving performance by delaying the search until the user stops typing.


