# Welcome

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

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

## 🛠️ Development

### Adding New Screens
Create files in the `app/` directory:
```typescript
// app/profile.tsx - Creates /profile route
export default function ProfileScreen() {
  return <Text>Profile Screen</Text>;
}
```

### Creating Components
Add reusable components in `components/`:
```typescript
// components/RouteCard.tsx
export default function RouteCard({ route }) {
  return <View>{/* Route display logic */}</View>;
}
```

### File-Based Routing
This project uses [Expo Router](https://docs.expo.dev/router/introduction/) with automatic file-based routing:
- `app/index.tsx` → `/` (home)
- `app/profile.tsx` → `/profile`
- `app/route/[id].tsx` → `/route/123` (dynamic)

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

## 📁 Project Structure

```
SprayWallApp/
├── 📱 app/                    # Screens & Navigation
│   ├── _layout.tsx           # Root layout
│   ├── +not-found.tsx        # 404 page
│   └── (tabs)/               # Tab navigation
│       ├── _layout.tsx       # Tab layout
│       ├── index.tsx         # Home screen
│       └── explore.tsx       # Explore screen
├── 🧩 components/            # Reusable UI components
├── 🎨 assets/               # Images, fonts, icons
├── 🔧 constants/            # App configuration
├── 🪝 hooks/                # Custom React hooks
└── 📦 package.json          # Dependencies
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Tech Stack

- **Framework**: [Expo](https://expo.dev) with Expo Router
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: React Native StyleSheet
- **Navigation**: File-based routing with Expo Router
- **Development**: Hot reloading with Expo CLI

## 📖 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Router Guide](https://docs.expo.dev/router/introduction/)

## 👥 Team

- **Nils Johansson** - [@your-github](https://github.com/nisselol)
- **Viktor Vikström** - [@friend1-github](https://github.com/viktorvikstrom)
- **Emil Johansson** - [@friend2-github](https://github.com/emilempe)

