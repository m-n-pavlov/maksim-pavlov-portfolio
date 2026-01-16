/* Глобальный интерфейс для адаптивности */
export interface Responsive<T> {
  mobile?: T;
  tablet?: T;
  desktop?: T;
}
