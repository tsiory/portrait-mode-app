interface HTMLElementCustom extends HTMLElement {
  mozRequestFullscreen: () => void;
  webkitRequestFullscreen: () => void;
  msRequestFullscreen: () => void;
}

export function lockOrientationTo(orientation: OrientationLockType) {
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