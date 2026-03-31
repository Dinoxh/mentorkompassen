type LavaLampProps = {
  /** Override the three blob colors for the current page */
  colors?: [string, string, string]
}

export function LavaLamp({ colors }: LavaLampProps) {
  const style1 = colors ? { background: colors[0] } : undefined
  const style2 = colors ? { background: colors[1] } : undefined
  const style3 = colors ? { background: colors[2] } : undefined

  return (
    <div className="lava-container" aria-hidden="true">
      <div className="lava-blob lava-blob-1" style={style1} />
      <div className="lava-blob lava-blob-2" style={style2} />
      <div className="lava-blob lava-blob-3" style={style3} />
    </div>
  )
}
