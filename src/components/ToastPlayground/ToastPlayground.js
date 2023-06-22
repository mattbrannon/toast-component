import React from 'react';

import Button from '../Button';
import RadioButton from '../RadioButton';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';
import { useToast } from '../../hooks/useToast';

function ToastPlayground() {
  const {
    currentVariant,
    currentMessage,
    addToStack,
    setCurrentVariant,
    setCurrentMessage,
    VARIANT_OPTIONS,
  } = useToast();

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form
        className={styles.controlsWrapper}
        onSubmit={(e) => {
          e.preventDefault();
          addToStack(currentMessage, currentVariant);
        }}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              onChange={(e) => setCurrentMessage(e.target.value)}
              value={currentMessage}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => (
              <RadioButton
                onChange={() => setCurrentVariant(variant)}
                checked={currentVariant === variant}
                key={variant}
                value={variant}
              />
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
