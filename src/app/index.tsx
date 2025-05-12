import { AppRouter } from "./router";
import { ParallaxProvider } from 'react-scroll-parallax';

export const App = () => {
  return (
    <ParallaxProvider>
      <AppRouter />
    </ParallaxProvider>
  );
};
