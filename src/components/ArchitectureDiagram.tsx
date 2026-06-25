import type { Architecture } from "../data/architectures";

const nodeColors = {
  primary: { fill: "#4ade8020", stroke: "#4ade80", text: "#4ade80" },
  storage: { fill: "#22d3ee15", stroke: "#22d3ee", text: "#22d3ee" },
  queue: { fill: "#fb923c15", stroke: "#fb923c", text: "#fb923c" },
  client: { fill: "#a1a1aa15", stroke: "#a1a1aa", text: "#fafafa" },
};

function getNode(id: string, arch: Architecture) {
  return arch.nodes.find((n) => n.id === id)!;
}

export function ArchitectureDiagram({ arch }: { arch: Architecture }) {
  return (
    <div className="arch-diagram mt-5 overflow-hidden rounded-xl border border-border-subtle bg-bg p-3">
      <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-text-dim">
        Architecture
      </p>
      <svg
        viewBox="0 0 420 200"
        className="h-auto w-full"
        aria-label="System architecture diagram"
      >
        <defs>
          <marker
            id="arrow"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="#4ade8060" />
          </marker>
        </defs>

        {arch.edges.map((edge, i) => {
          const from = getNode(edge.from, arch);
          const to = getNode(edge.to, arch);
          return (
            <g key={`${edge.from}-${edge.to}`}>
              <line
                x1={from.x + 36}
                y1={from.y}
                x2={to.x - 4}
                y2={to.y}
                stroke="#4ade8030"
                strokeWidth="1.5"
                markerEnd="url(#arrow)"
              />
              <circle r="3" fill="#4ade80" className="arch-packet">
                <animateMotion
                  dur={`${2 + (i % 3) * 0.5}s`}
                  repeatCount="indefinite"
                  path={`M${from.x + 36},${from.y} L${to.x - 4},${to.y}`}
                />
              </circle>
            </g>
          );
        })}

        {arch.nodes.map((node) => {
          const colors = nodeColors[node.variant ?? "primary"];
          return (
            <g key={node.id} className="arch-node">
              <rect
                x={node.x - 36}
                y={node.y - 18}
                width="72"
                height="36"
                rx="6"
                fill={colors.fill}
                stroke={colors.stroke}
                strokeWidth="1"
                strokeOpacity="0.6"
              />
              <text
                x={node.x}
                y={node.y + 4}
                textAnchor="middle"
                fill={colors.text}
                fontSize="10"
                fontFamily="JetBrains Mono, monospace"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
