import { memo, useEffect, useMemo, useState } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import PaletteCard from "./PaletteCard";

function getGridConfig(width) {
  if (width <= 580) {
    return {
      columnCount: 1,
      cardWidth: Math.max(width - 58, 260),
      cardHeight: 300,
      gap: 20,
      bottomGap: 100,
      gridHeight: Math.floor(window.innerHeight * 0.72),
    };
  }

  if (width <= 768) {
    return {
      columnCount: 3,
      cardWidth: Math.floor((width - 316) / 2),
      cardHeight: 205,
      gap: 18,
      bottomGap: 100,
      gridHeight: Math.floor(window.innerHeight * 0.74),
    };
  }

  if (width <= 1024) {
    return {
      columnCount: 3,
      cardWidth: 300,
      cardHeight: 215,
      gap: 18,
      bottomGap: 140,
      gridHeight: Math.floor(window.innerHeight * 0.76),
    };
  }

  if (width <= 1440) {
    return {
      columnCount: 4,
      cardWidth: 280,
      cardHeight: 220,
      gap: 20,
      bottomGap: 90,
      gridHeight: Math.floor(window.innerHeight * 0.78),
    };
  }

  return {
    columnCount: 4,
    cardWidth: 280,
    cardHeight: 260,
    gap: 20,
    bottomGap: 90,
    gridHeight: Math.floor(window.innerHeight * 0.8),
  };
}

function PaletteGrid({ palettes }) {
  const [viewport, setViewport] = useState(() => ({
    width: typeof window !== "undefined" ? window.innerWidth : 1440,
    height: typeof window !== "undefined" ? window.innerHeight : 900,
  }));

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const config = useMemo(() => getGridConfig(viewport.width), [viewport.width]);

  const { columnCount, cardWidth, cardHeight, gap, bottomGap, gridHeight } =
    config;

  const sidePadding =
    viewport.width <= 480 ? 12 : viewport.width <= 768 ? 16 : 32;
  const containerWidth = Math.max(viewport.width - sidePadding * 2, 280);
  const rowCount = Math.ceil(palettes.length / columnCount);

  const itemData = useMemo(
    () => ({
      palettes,
      columnCount,
      gap,
      bottomGap,
    }),
    [palettes, columnCount, gap, bottomGap],
  );

  return (
    <div
      style={{
        width: "100%",
        height: `${gridHeight}px`,
        paddingBottom: `${bottomGap}px`,
      }}
    >
      <Grid
        columnCount={columnCount}
        columnWidth={cardWidth + gap}
        height={gridHeight}
        rowCount={rowCount}
        rowHeight={cardHeight + gap + bottomGap}
        width={containerWidth}
        itemData={itemData}
        overscanRowCount={2}
        overscanColumnCount={1}
      >
        {Cell}
      </Grid>
    </div>
  );
}

const Cell = memo(({ columnIndex, rowIndex, style, data }) => {
  const index = rowIndex * data.columnCount + columnIndex;
  const palette = data.palettes[index];

  if (!palette) return null;

  return (
    <div
      style={{
        ...style,
        paddingTop: data.gap / 2,
        paddingRight: data.gap / 2,
        paddingBottom: `${data.bottomGap}px`,
        paddingLeft: data.gap / 2,
        boxSizing: "border-box",
      }}
    >
      <PaletteCard palette={palette} />
    </div>
  );
});

export default memo(PaletteGrid);
