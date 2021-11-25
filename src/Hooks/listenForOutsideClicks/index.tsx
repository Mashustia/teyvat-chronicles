import {RefObject} from 'react';

export const listenForOutsideClicks = (
  listening: boolean,
  setListening: (arg: boolean) => void,
  menuRef: RefObject<any>,
  setIsOpen: (arg: boolean) => void
) => {
  return () => {
    if (listening) return;
    if (!menuRef.current) return;
    setListening(true);
    [`click`, `touchstart`].forEach((type) => {
      document.addEventListener(`click`, (evt) => {
        console.log(menuRef)
        if (menuRef?.current?.contains(evt.target)) return;
        setIsOpen(false);
      });
    });
  }
}
