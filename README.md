# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Main development areas

1. app/ directory - This is where your screens/pages go
2. components/ directory - This is where your reusable components go
3. assets/ directory - Images, fonts, and other static assets
4. constants/ directory - App constants and configuration
5. hooks/ directory - Custom React hooks

## Development workflow

1. Edit files in app/ and components/
2. Save changes - the app will automatically reload
3. Test on device/simulator using the Expo Go app or development build
4. Commit changes to git when ready
5. Push to GitHub for your friends to pull
## app/ file structure

SprayWallApp/
├── 📱 app/ # Screens & Navigation
│ ├── layout.tsx # Root layout
│ ├── +not-found.tsx # 404 page
│ └── (tabs)/ # Tab navigation
│ ├── layout.tsx # Tab layout
│ ├── index.tsx # Home screen
│ └── explore.tsx # Explore screen
├── 🧩 components/ # Reusable UI components
├── 🎨 assets/ # Images, fonts, icons
├── 🔧 constants/ # App configuration
├── 🪝 hooks/ # Custom React hooks
└── 📦 package.json # Dependencies

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/SprayWallApp.git
   cd SprayWallApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on your device**
   - Scan the QR code with [Expo Go](https://expo.dev/go) app
   - Or press `i` for iOS simulator / `a` for Android emulator

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
