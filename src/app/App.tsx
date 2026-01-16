import { ThemeProvider } from '@/shared/lib/theme';
import { Header } from '@/widgets/header';
import { MainPage } from '@/pages/main';
import { Footer } from '@/widgets/footer';

export const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <MainPage />
      <Footer />
    </ThemeProvider>
  );
};
