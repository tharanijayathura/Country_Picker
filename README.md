# 🌍 Country Picker - Find Your Perfect Travel Destination

An interactive quiz application that helps you discover your ideal travel destination based on your preferences for weather, roads, landscapes, culture, and activities.

![Country Picker](https://img.shields.io/badge/React-19.1.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.7-purple) ![Material-UI](https://img.shields.io/badge/Material--UI-7.3.2-blue)

## ✨ Features

- 🎯 **Smart Matching Algorithm**: Weighted scoring system that matches your preferences to 24 countries
- 🖼️ **Beautiful Images**: High-quality images with automatic fallback system
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- ⬅️ **Back Navigation**: Go back to previous questions to change your answers
- 🎨 **Modern UI**: Beautiful, polished interface with smooth animations
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tharanijayathura/Country_Picker.git
cd Country_Picker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎮 How It Works

1. **Start Screen**: Click "Start your journey" to begin the quiz
2. **Answer Questions**: Select your preferences for:
   - Weather (Sunny, Tropical, Cold, Temperate, Rainy, Windy)
   - Roads (Straight, Curved, Beachside, Urban, Mountain, Countryside)
   - Landscape (Beaches, Mountains, Jungles, Cities, Deserts, Savanna, Plains, Forests, Islands, Lakes)
   - Culture (Vibrant, Historical, Relaxed, Diverse, Traditional, Modern)
   - Activities (Outdoor, Cultural, Festivals, Relaxation, Adventure, Nightlife)
3. **Get Your Match**: The algorithm calculates the best country match based on weighted scoring
4. **View Results**: See your perfect destination with flag, image, and a fun message!

## 🧮 Algorithm

The matching algorithm uses a **weighted scoring system**:

- **Weather**: Weight 3 (30%)
- **Landscape**: Weight 3 (30%)
- **Culture**: Weight 2 (20%)
- **Roads**: Weight 1 (10%)
- **Activities**: Weight 1 (10%)

Each country is scored based on how many of your preferences match. The country with the highest score wins! If multiple countries tie, one is randomly selected.

For detailed algorithm explanation, see [ALGORITHM_EXPLANATION.md](./ALGORITHM_EXPLANATION.md)

## 🗺️ Countries Included

Australia, Brazil, Canada, Italy, Japan, New Zealand, Thailand, Switzerland, India, South Africa, Greece, Norway, Mexico, France, Argentina, Spain, Peru, Indonesia, Iceland, Egypt, Vietnam, Chile, Morocco, Sweden, Portugal

## 🛠️ Tech Stack

- **React 19.1.1** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material-UI (MUI)** - Component library
- **Emotion** - CSS-in-JS styling

## 📁 Project Structure

```
country-picker/
├── src/
│   ├── components/       # React components
│   │   ├── StartScreen.tsx
│   │   ├── Quiz.tsx
│   │   ├── Question.tsx
│   │   ├── Result.tsx
│   │   └── SafeImage.tsx
│   ├── data/            # Quiz data and countries
│   │   └── index.ts
│   ├── utils/           # Utility functions
│   │   └── imageUtils.ts
│   ├── types.ts         # TypeScript types
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── public/              # Static assets
└── package.json
```

## 🎨 Customization

### Adding More Countries

Edit `src/data/index.ts` and add a new country object:

```typescript
{
  name: 'Your Country',
  flag: 'https://flagcdn.com/xx.svg',
  image: getCountryImage('Your Country')[0],
  weather: 'sunny',
  roads: 'straight',
  landscape: 'mountains',
  culture: 'vibrant',
  activities: 'outdoor'
}
```

### Changing Question Weights

Edit `src/App.tsx` in the `calculateResult` function:

```typescript
const weights: Record<MatchKey, number> = {
  weather: 3,      // Change these values
  landscape: 3,
  culture: 2,
  roads: 1,
  activities: 1,
};
```

### Adding Custom Images

Edit `src/utils/imageUtils.ts` to add your own image URLs. Images are organized by category and have automatic fallback support.

## 🐛 Troubleshooting

### Images not loading?
- Check your internet connection
- The app uses automatic fallback images, so it should work even if some images fail
- Check browser console for any CORS errors

### Build errors?
- Make sure all dependencies are installed: `npm install`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/tharanijayathura/Country_Picker/issues).

## 👤 Author

**Tharani Jayathura**

- GitHub: [@tharanijayathura](https://github.com/tharanijayathura)

## 🙏 Acknowledgments

- Images from Pinterest and Picsum Photos
- Country flags from [flagcdn.com](https://flagcdn.com)
- Built with amazing open-source tools

---

⭐ If you like this project, please give it a star on GitHub!
