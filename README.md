# Welcome

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## 🔄 Development Workflow

### 🚀 Getting Started

1. **Clone and Setup**
   ```bash
   git clone https://github.com/YOUR_USERNAME/spraywallapp.git
   cd spraywallapp
   npm install
   ```

2. **Start Development Server**
   ```bash
   npx expo start
   ```

3. **Choose Your Platform**
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator  
   - Scan QR code with [Expo Go](https://expo.dev/go) on your device

### 👥 Team Collaboration

#### **Branch Strategy**
   ```bash
   # Create feature branch
   git checkout -b feature/route-tracking
   git checkout -b fix/navigation-bug
   git checkout -b ui/wall-card-design
   ```

# Work on your changes...

# Push your branch
   ```
   git push origin feature/route-tracking
   ```

#### **Pull Request Process**
   1. **Create PR** on GitHub with descriptive title
   2. **Add description** explaining what you built/fixed
   3. **Request review** from team members
   4. **Address feedback** if needed
   5. **Merge** after approval

#### **Staying Updated**
   ```bash
   # Before starting new work
   git checkout main
   git pull origin main

   # Update your feature branch
   git checkout feature/your-feature
   git merge main
   ```

### 🛠️ Development Process

#### **1. Planning**
   - Create GitHub issue for new features
   - Discuss approach in team chat
   - Break down large features into smaller tasks

#### **2. Coding**
   ```bash
   # Create new screen
   touch app/(tabs)/walls.tsx

   # Create new component  
   touch components/WallCard.tsx

   # Test your changes
   npx expo start
   ```

#### **3. Code Quality**
   ```bash
   # Run linting
   npm run lint

   # Type checking
   npx tsc --noEmit

   # Format code (if prettier is setup)
   npm run format
   ```

#### **4. Testing**
   - Test on both iOS and Android
   - Test different screen sizes
   - Verify navigation flows work
   - Check dark/light mode compatibility

### 🔧 Common Tasks

#### **Adding a New Tab**
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

#### **Adding Navigation**
   ```typescript
   import { router } from 'expo-router';

   // Navigate to screen
   router.push('/profile');
   router.push('/wall/123');

   // Go back
   router.back();
   ```

#### **Managing State**
   ```typescript
   // Local state
   const [routes, setRoutes] = useState([]);

   // Global state (consider Context API or Zustand)
   // For complex state management
   ```

### 📋 Daily Workflow

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
   git push origin feature/wall-cards
   ```

### 💡 Best Practices

- **Commit Messages**: Use conventional commits (`feat:`, `fix:`, `ui:`)
- **Component Names**: Use PascalCase (`WallCard.tsx`)
- **File Organization**: Group related files together
- **Code Reviews**: Always review each other's code
- **Documentation**: Update README when adding new features
- **Performance**: Test on slower devices occasionally

### Main development areas

1. app/ directory - This is where your screens/pages go
2. components/ directory - This is where your reusable components go
3. assets/ directory - Images, fonts, and other static assets
4. constants/ directory - App constants and configuration
5. hooks/ directory - Custom React hooks

### 📁 Project Structure

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

- **Nils Johansson** - [@https://github.com/nisselol](https://github.com/nisselol)
- **Viktor Vikström** - [@https://github.com/viktorvikstrom](https://github.com/viktorvikstrom)
- **Emil Johansson** - [@https://github.com/emilempe](https://github.com/emilempe)

