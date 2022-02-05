import {useEffect} from 'react';
import {Event, Key} from '../../const/consts';

const useEscapePress = (isShown: boolean, onEscapePress: ((e: KeyboardEvent) => void)) => {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (!isShown) return

      if (event.key === Key.ESCAPE){
        onEscapePress(event)
      }
    }
    window.addEventListener(Event.KEYDOWN, listener)
    return () => window.removeEventListener(Event.KEYDOWN, listener)

  },[isShown, onEscapePress])
}

export default useEscapePress
