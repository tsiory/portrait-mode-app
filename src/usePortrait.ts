export default function useOrientation(orientation: OrientationLockType): {
  lock: (orientation: OrientationLockType) => void;
} {
  function lock() {
    const de = document.documentElement as any;

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

  return {
    lock,
  };
}