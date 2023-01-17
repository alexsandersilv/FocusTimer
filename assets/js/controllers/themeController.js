import { dayThemeButton, nightThemeButton } from '../elements.js';

const body = document.body;
export function handleThemeDayClick() {
  dayThemeButton.classList.add('hide');
  nightThemeButton.classList.remove('hide');
  body.classList.add('darkTheme')
}

export function handleThemeNightClick() {
  dayThemeButton.classList.remove('hide');
  nightThemeButton.classList.add('hide');

  body.classList.remove('darkTheme');
}