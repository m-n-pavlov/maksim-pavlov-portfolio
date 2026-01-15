import { Header } from '@/widgets/header';
import { ThemeProvider } from '@/shared/lib/theme';
// import { MainPage } from '@/pages/main-page';
// import { Footer } from '@/widgets/footer';

export const App = () => {
  return (
    <ThemeProvider>
    <>
      <Header />
      {/* <MainPage /> - ширина 1168px, центрирована */}
      {/* <Footer /> - ширина 100%, внутри свой контейнер-ограничитель */}
    </>
    </ThemeProvider>
  );
};
