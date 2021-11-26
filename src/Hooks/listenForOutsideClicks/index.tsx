import {RefObject} from 'react';

import {Event} from '../../const/consts';

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
    [Event.CLICK, Event.TOUCHSTART].forEach((type) => {
      document.addEventListener(Event.CLICK, (evt) => {
        if (menuRef?.current?.contains(evt.target)) return;
        setIsOpen(false);
      });
    });
  }
}
