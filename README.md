# GiphyApp

This project is an Angular-based web application that allows users to search for GIFs using the GIPHY API. Users can input a word in the search bar, and the app will retrieve and display 10 results.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (Version 14 or newer)
- npm (Version 6 or newer)

## Setting Up the Project

To set up the project on your local machine:

1. Clone the repository:
`git clone https://github.com/secondary-jcav/GiphyApp.git`

2. Navigate to the project directory:
`cd GiphyApp`

3. Install the necessary dependencies:
`npm install`


## Configuration

Set up your GIPHY API key:

1. Obtain an API key from [GIPHY Developers](https://developers.giphy.com/).
2. Create a `secrets.ts` file in the root of your project and add your API key:
```
export default {
  api_key: 'your api key',
};
```


## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.





