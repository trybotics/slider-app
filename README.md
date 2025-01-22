# Slider App

This is a React-based slider application that dynamically fetches data from an API and displays items in a carousel with additional features like description display on hover and a button to open related links in a new tab.

---

## Features

1. **Dynamic Data Fetching**: Fetches slider data from an external API.
2. **Responsive Design**: Works seamlessly across devices with different screen sizes.
3. **Interactive Hover Effects**: Limits the description to 3 lines and shows the full description on hover.
4. **Visit Website Button**: Each slider item includes a button that opens the related website in a new tab.

---

## Demo

Check out the live version: [Slider App on Vercel](https://slider-app-opal-gamma.vercel.app/)

---

## Installation and Setup

Follow these steps to run the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/slider-app.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd slider-app
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. **Start the Development Server**:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

5. Open the app in your browser at `http://localhost:3000`.

---

## Deployment

This project is deployed using [Vercel](https://vercel.com/). To deploy your own version:

1. Link your GitHub repository to Vercel.
2. Configure the build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
3. Trigger the deployment.

---

## Project Structure

```plaintext
slider-app/
├── public/         # Static assets
├── src/
│   ├── components/ # React components
│   │   └── SliderComponent.js
│   ├── App.js      # Main app entry point
│   ├── index.js    # React DOM rendering
│   └── SliderComponent.css # Styling for slider
├── package.json    # Project metadata and dependencies
└── README.md       # Project documentation
```

---

## Technologies Used

- **React**: Frontend library for building UI components.
- **Slick Carousel**: Library for implementing the slider.
- **CSS**: Custom styling for layout and hover effects.
- **Axios**: For making HTTP requests.
- **Vercel**: Deployment platform.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

Developed by [Karan Shaw](https://github.com/trybotics).
