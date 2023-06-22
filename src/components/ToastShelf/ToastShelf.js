import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { useToast } from '../ToastProvider';

function ToastShelf() {
  const { stack } = useToast();

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {stack.map(({ message, variant, id }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} id={id}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
