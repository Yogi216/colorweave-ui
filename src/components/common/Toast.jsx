<<<<<<< HEAD
// import { useToast } from "../../context/ToastContext";

// const iconMap = {
//   success: "✓",
//   error: "✕",
//   warning: "!",
//   info: "i",
// };

// export default function Toast() {
//   const { toast, hideToast } = useToast();

//   if (!toast) return null;

//   return (
//     <div className="toast-container">
//       <div className={`toast toast-${toast.type}`}>
//         <div className="toast-icon">{iconMap[toast.type] || "i"}</div>

//         <div className="toast-content">
//           <h4>{toast.title}</h4>
//           <p>{toast.message}</p>
//         </div>

//         <button className="toast-close" onClick={hideToast}>
//           ×
//         </button>

//         <div className="toast-progress">
//           <span></span>
//         </div>
//       </div>
//     </div>
//   );
// }

=======
>>>>>>> 9e51304b830b979c32a18e9432f1b6315eaf8ae9
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
