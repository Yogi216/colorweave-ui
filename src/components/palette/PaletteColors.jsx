export default function PaletteColors({ colors }) {
  return (
    <div className="palette-colors">
      {colors.map((color) => (
        <div
          key={color}
          className="palette-color-block"
          style={{ backgroundColor: color }}
          title={color}
        >
          <span>{color}</span>
        </div>
      ))}
    </div>
  );
}
