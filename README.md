# SprayWall App

A modern climbing route tracking application built with Expo and React Native.

[![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

## About

SprayWall App helps climbers track their routes, progress, and share climbing experiences with friends. Built with modern React Native and Expo Router for seamless cross-platform navigation.

## Features

- Route tracking and progress monitoring
- Cross-platform support (iOS, Android, Web)
- Modern UI with dark/light theme support
- File-based routing with Expo Router
- TypeScript for type safety

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)

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

4. **Run on your platform**
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator  
   - Scan QR code with [Expo Go](https://expo.dev/go) on your device

## Project Structure

```
SprayWallApp/
├── app/                      # Screens & Navigation
│   ├── _layout.tsx          # Root layout
│   ├── +not-found.tsx       # 404 page
│   └── (tabs)/              # Tab navigation
│       ├── _layout.tsx      # Tab layout
│       ├── index.tsx        # Home screen
│       └── explore.tsx      # Explore screen
├── components/              # Reusable UI components
│   ├── ui/                  # Base UI components
│   ├── ThemedText.tsx       # Themed text component
│   ├── ThemedView.tsx       # Themed view component
│   └── ...                  # Other components
├── assets/                  # Images, fonts, icons
├── constants/               # App configuration
├── hooks/                   # Custom React hooks
└── package.json            # Dependencies
```

## Development Workflow

### Team Collaboration

#### Branch Strategy
```bash
# Create feature branch
git checkout -b feature/route-tracking
git checkout -b fix/navigation-bug
git checkout -b ui/wall-card-design

# Work on your changes...

# Push your branch
git push origin feature/route-tracking
or
git push
```

#### Pull Request Process
1. Create PR on GitHub with descriptive title
2. Add description explaining what you built/fixed
3. Request review from team members
4. Address feedback if needed
5. Merge after approval

#### Staying Updated
```bash
# Before starting new work
git checkout main
git pull origin main

# Update your feature branch
git checkout feature/your-feature
git merge main
```

### Development Process

#### Adding New Screens
```typescript
// For tab screens: app/(tabs)/newscreen.tsx
export default function NewScreen() {
  return (
    <View>
      <Text>New Screen</Text>
    </View>
  );
}

// For standalone screens: app/newscreen.tsx
export default function StandaloneScreen() {
  return (
    <View>
      <Text>Standalone Screen</Text>
    </View>
  );
}
```

#### Creating Components
```typescript
// components/MyComponent.tsx
interface MyComponentProps {
  title: string;
  onPress: () => void;
}

export default function MyComponent({ title, onPress }: MyComponentProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
```

#### Adding Navigation
```typescript
import { router } from 'expo-router';

// Navigate to screen
router.push('/profile');
router.push('/wall/123');

// Go back
router.back();
```

### Common Tasks

#### Adding a New Tab
1. Create screen file: `app/(tabs)/newtab.tsx`
2. Update tab layout: `app/(tabs)/_layout.tsx`
```typescript
<Tabs.Screen
  name="newtab"
  options={{
    title: 'New Tab',
    tabBarIcon: ({ color }) => <IconSymbol size={28} name="star.fill" color={color} />,
  }}
/>
```

#### Code Quality
```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

### Daily Workflow

1. **Start of Day**
   ```bash
   git checkout main
   git pull origin main
   npx expo start
   ```

2. **During Development**
   - Make small, focused commits
   - Test changes frequently
   - Push work-in-progress to your branch

3. **End of Day**
   ```bash
   git add .
   git commit -m "feat: add wall card component"
   git push
   ```
   
## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Start on Android emulator
- `npm run ios` - Start on iOS simulator
- `npm run web` - Start web version
- `npm run lint` - Run ESLint
- `npm run reset-project` - Reset to blank project

## Tech Stack

- **Framework**: [Expo](https://expo.dev) with Expo Router
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: React Native StyleSheet
- **Navigation**: File-based routing with Expo Router
- **Development**: Hot reloading with Expo CLI

## Best Practices

- **Commit Messages**: Use conventional commits (`feat:`, `fix:`, `ui:`)
- **Component Names**: Use PascalCase (`WallCard.tsx`)
- **File Organization**: Group related files together
- **Code Reviews**: Always review each other's code
- **Documentation**: Update README when adding new features
- **Performance**: Test on slower devices occasionally

## Troubleshooting

### Common Issues
```bash
# Clear cache if weird errors
npx expo start --clear

# Reset Metro bundler
npx expo start --reset-cache

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Router Guide](https://docs.expo.dev/router/introduction/)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push)
5. Open a Pull Request

## Team

- **Nils Johansson** - [@nisselol](https://github.com/nisselol)
- **Viktor Vikström** - [@viktorvikstrom](https://github.com/viktorvikstrom)
- **Emil Johansson** - [@emilempe](https://github.com/emilempe)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

