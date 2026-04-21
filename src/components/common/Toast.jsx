import { useToast } from "../../context/ToastContext";

const iconMap = {
  success: "✓",
  error: "✕",
  warning: "!",
  info: "i",
};

export default function Toast() {
  const { toast, hideToast } = useToast();

  if (!toast) return null;

  return (
    <div className="toast-container">
      <div className={`toast toast-${toast.type}`} key={toast.id}>
        <div className="toast-icon">{iconMap[toast.type] || "i"}</div>

        <div className="toast-content">
          <h4>{toast.title}</h4>
          <p>{toast.message}</p>
        </div>

        <button className="toast-close" onClick={hideToast}>
          ×
        </button>

        <div className="toast-progress">
          <span style={{ animationDuration: `${toast.duration}ms` }} />
        </div>
      </div>
    </div>
  );
}
