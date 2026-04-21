import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const timeoutRef = useRef(null);

  const hideToast = useCallback(() => {
    setToast(null);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const showToast = useCallback(
    ({
      type = "success",
      title = "Success",
      message = "",
      duration = 4000,
    }) => {
      const id = Date.now() + Math.random();

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      setToast({
        id,
        type,
        title,
        message,
        duration,
      });

      timeoutRef.current = setTimeout(() => {
        setToast((current) => {
          if (current?.id === id) {
            return null;
          }
          return current;
        });
        timeoutRef.current = null;
      }, duration);
    },
    [],
  );

  const value = useMemo(
    () => ({
      toast,
      showToast,
      hideToast,
    }),
    [toast, showToast, hideToast],
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }

  return context;
}
