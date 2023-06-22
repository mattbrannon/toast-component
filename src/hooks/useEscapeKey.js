import React from 'react';

export function useEscapeKey(callback) {
  if (typeof callback !== 'function') {
    throw new Error('You must pass a callback function to useEscapeKey.');
  }

  React.useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') {
        callback();
      }
    }

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [callback]);
}
