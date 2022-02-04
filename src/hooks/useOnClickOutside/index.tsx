import {MouseEvent, RefObject, useEffect} from 'react';
import {Event} from '../../const/consts';

export const useOnClickOutside = (ref: RefObject<HTMLElement>, handler: (e: MouseEvent | KeyboardEvent) => void) => {
  useEffect(
    () => {
      const listener = (event: any) => {
        if (!ref.current || ref.current.contains(event.target)
        ) {
          return;
        }

        handler(event);
      };
      document.addEventListener(Event.MOUSEUP, listener);
      document.addEventListener(Event.TOUCHSTART, listener);
      return () => {
        document.removeEventListener(Event.MOUSEUP, listener);
        document.removeEventListener(Event.TOUCHSTART, listener);
      };
    },
    [ref, handler]
  );
}
