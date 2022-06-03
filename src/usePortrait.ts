import { useEffect } from "react";

interface HTMLElementCustom extends HTMLElement {
  mozRequestFullscreen: () => void;
  webkitRequestFullscreen: () => void;
  msRequestFullscreen: () => void;
}

export default function useOrientation(orientation: OrientationLockType): {
  lock: (orientation: OrientationLockType) => void;
} {
  function lock() {
    console.log('lock() called');
    const de = document.documentElement as HTMLElementCustom;

    if (de.requestFullscreen) {
      de.requestFullscreen();
    } else if (de.mozRequestFullscreen) {
      de.mozRequestFullscreen();
    } else if (de.webkitRequestFullscreen) {
      de.webkitRequestFullscreen();
    } else if (de.msRequestFullscreen) {
      de.msRequestFullscreen();
    }

    window.screen.orientation.lock(orientation);
  }

  function constructLockBtn() {
    const buttonLockElt = document.createElement('button');
    buttonLockElt.setAttribute('onclick', 'lock()');
    buttonLockElt.hidden = true;
    document.body.appendChild(buttonLockElt);

    buttonLockElt.click();
  }

  useEffect(() => {
    constructLockBtn();
    lock(); 
  }, []);

  return {
    lock,
  };
}
