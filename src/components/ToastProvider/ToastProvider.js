import React from 'react';
import { useEscapeKey } from '../../hooks/useEscapeKey';

const ToastContext = React.createContext();

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastProvider({ children }) {
  const [stack, setStack] = React.useState([]);
  const [currentVariant, setCurrentVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );

  const [currentMessage, setCurrentMessage] = React.useState('');

  const addToStack = React.useCallback((message, variant) => {
    if (!message.length) return;
    const id = crypto.randomUUID();
    setStack((stack) => [...stack, { message, variant, id }]);
    setCurrentMessage('');
    setCurrentVariant(VARIANT_OPTIONS[0]);
  }, []);

  const removeFromStack = React.useCallback((id) => {
    setStack((stack) => stack.filter((toast) => toast.id !== id));
  }, []);

  const dismissAllMessages = React.useCallback(() => {
    setStack([]);
  }, []);

  useEscapeKey(dismissAllMessages);

  const value = React.useMemo(() => {
    return {
      stack,
      currentVariant,
      currentMessage,
      setCurrentVariant,
      setCurrentMessage,
      addToStack,
      removeFromStack,
      VARIANT_OPTIONS,
    };
  }, [
    stack,
    currentVariant,
    currentMessage,
    setCurrentVariant,
    setCurrentMessage,
    addToStack,
    removeFromStack,
    VARIANT_OPTIONS,
  ]);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

function useToast() {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export { ToastProvider, useToast };
