import Routes from './src/Routes/index';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/context/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}