export default function EmptyState({ title = "Nothing here yet", message }) {
  return (
    <div className="empty-state glass-panel">
      <div className="empty-icon">◎</div>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}
