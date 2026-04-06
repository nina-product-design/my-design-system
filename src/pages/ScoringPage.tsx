import { useState, useEffect, useRef } from "react";
import { colors, typography } from "../tokens";

/* ── Metric data ─────────────────────────────────────────────────────────── */

interface Metric {
  name: string;
  level: number;
  label: string;
  low: string;
  high: string;
  detail: string;
}

const METRICS: Metric[] = [
  {
    name: "DAMAGE",
    level: 0.9,
    label: "Very Damaged",
    low: "Not Damaged",
    high: "Very Damaged",
    detail:
      "We\u2019ll strengthen your hair and help repair what we can by adding ingredients for hair health, fiber repair, and nourishment.",
  },
  {
    name: "DRYNESS",
    level: 0.75,
    label: "High",
    low: "Hydrated",
    high: "Very Dry",
    detail:
      "Your formula will include deep hydrating ingredients to restore moisture balance and prevent future dryness.",
  },
  {
    name: "STRESSORS",
    level: 0.65,
    label: "Moderate\u2013High",
    low: "Low Stress",
    high: "High Stress",
    detail:
      "We\u2019ll add protective ingredients to shield against environmental stressors like UV, pollution, and hard water.",
  },
  {
    name: "SENSITIVITY",
    level: 0.25,
    label: "Low",
    low: "Not Sensitive",
    high: "Very Sensitive",
    detail:
      "Your scalp shows low sensitivity, so we can use a wider range of active ingredients in your formula.",
  },
  {
    name: "OILINESS",
    level: 0.15,
    label: "Low",
    low: "Not Oily",
    high: "Very Oily",
    detail:
      "With low oil levels, we\u2019ll focus on lightweight hydration without stripping your natural oils.",
  },
];

// Each metric maps to a design-system color pair (fill / dark)
const METRIC_COLORS: Array<{ fill: string; dark: string }> = [
  { fill: colors.accent[200], dark: colors.accent[300] },
  { fill: colors.secondary[200], dark: colors.secondary[300] },
  { fill: colors.neutral[400], dark: colors.neutral[500] },
  { fill: colors.tertiary[200], dark: colors.tertiary[300] },
  { fill: colors.primary[200], dark: colors.primary[300] },
];

/* ── Bubble generation (seeded RNG for deterministic layout) ─────────────── */

interface Bubble {
  cx: number;
  cy: number;
  r: number;
  metric: number;
  delay: number;
}

function seededRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateBubbles(): Bubble[] {
  const bubbles: Bubble[] = [];
  const rand = seededRng(12345);

  METRICS.forEach((metric, idx) => {
    const count = Math.max(4, Math.round(metric.level * 10));
    const baseAngle = (Math.PI * 2 * idx) / METRICS.length - Math.PI / 2;

    for (let j = 0; j < count; j++) {
      const r1 = rand();
      const angle = r1 < 0.4 ? baseAngle + (rand() - 0.5) * 2.5 : rand() * Math.PI * 2;
      const radiusOffset = (rand() - 0.5) * 30;
      const size = 3 + rand() * (metric.level * 8.5);
      const delay = rand() * 1800;

      bubbles.push({
        cx: 120 + (68 + radiusOffset) * Math.cos(angle),
        cy: 120 + (68 + radiusOffset) * Math.sin(angle),
        r: size,
        metric: idx,
        delay,
      });
    }
  });

  return bubbles.sort((a, b) => b.r - a.r);
}

const BUBBLES = generateBubbles();

/* ── Loading bar chart sub-component ─────────────────────────────────────── */

function LoadingBars({ visible, revealedMetric }: { visible: boolean; revealedMetric: number }) {
  return (
    <div
      className="flex flex-col gap-(--spacing-spacing-12) w-full bg-(--color-neutral-100) rounded-(--radius-radius-12) border border-(--color-neutral-400) overflow-hidden"
      style={{
        transition:
          "opacity 0.35s ease, max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1), padding 0.5s ease, margin-bottom 0.5s ease",
        opacity: visible ? 1 : 0,
        maxHeight: visible ? 280 : 0,
        padding: visible ? "20px" : "0 20px",
        marginBottom: visible ? 24 : 0,
      }}
    >
      {/* Low / High labels */}
      <div className="flex justify-end" style={{ marginBottom: -4 }}>
        <div className="flex justify-between" style={{ width: "calc(100% - 102px)" }}>
          <span
            style={{
              ...typography.styles.label3Regular,
              textTransform: "uppercase",
              color: "var(--color-neutral-700)",
            }}
          >
            Low
          </span>
          <span
            style={{
              ...typography.styles.label3Regular,
              textTransform: "uppercase",
              color: "var(--color-neutral-700)",
            }}
          >
            High
          </span>
        </div>
      </div>

      {/* Metric bars */}
      {METRICS.map((metric, idx) => (
        <div key={metric.name} className="flex items-center gap-(--spacing-spacing-12)">
          <span
            className="shrink-0"
            style={{
              ...typography.styles.label3Regular,
              textTransform: "uppercase",
              color: "var(--color-neutral-900)",
              width: 90,
            }}
          >
            {metric.name}
          </span>
          <div className="flex-1 h-1.5 bg-(--color-neutral-300) rounded-(--radius-radius-400) overflow-hidden">
            <div
              className="h-full rounded-(--radius-radius-400)"
              style={{
                width: idx <= revealedMetric ? `${metric.level * 100}%` : "0%",
                background: METRIC_COLORS[idx].fill,
                transition: "width 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Main scoring page ───────────────────────────────────────────────────── */

type Phase = "init" | "loading" | "ready";

export default function ScoringPage() {
  const [phase, setPhase] = useState<Phase>("init");
  const [revealedMetric, setRevealedMetric] = useState(-1);
  const [scoreCount, setScoreCount] = useState(0);
  const [centerTextIn, setCenterTextIn] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);
  const [cardVisible, setCardVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(true);
  const [slideDir, setSlideDir] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStart = useRef({ x: 0, y: 0 });
  const isSwiping = useRef(false);
  const mouseDown = useRef(false);

  const isReady = phase === "ready";
  const isLoading = phase === "loading";
  const current = METRICS[activeMetric];

  // Boot sequence
  useEffect(() => {
    const t1 = setTimeout(() => setPhase("loading"), 200);
    // Reveal each metric group (bars + bubbles) one at a time
    const metricTimers = METRICS.map((_, i) =>
      setTimeout(() => setRevealedMetric(i), 500 + i * 400)
    );
    // Center text after all metrics revealed
    const t3 = setTimeout(() => setCenterTextIn(true), 500 + METRICS.length * 400 + 200);
    const t4 = setTimeout(() => setPhase("ready"), 500 + METRICS.length * 400 + 800);
    const t5 = setTimeout(() => setIsPaused(false), 500 + METRICS.length * 400 + 1400);
    // Count from 1 → 85 over the same loading window
    const countStart = 500;
    const countEnd = 500 + METRICS.length * 400;
    const countDuration = countEnd - countStart;
    const target = 85;
    const frameMs = countDuration / target;
    let frame = 0;
    const countTimer = setTimeout(() => {
      const interval = setInterval(() => {
        frame++;
        setScoreCount(frame);
        if (frame >= target) clearInterval(interval);
      }, frameMs);
      metricTimers.push(interval as unknown as ReturnType<typeof setTimeout>);
    }, countStart);

    return () => {
      [t1, ...metricTimers, t3, t4, t5, countTimer].forEach(clearTimeout);
    };
  }, []);

  // Auto-rotate when not paused
  useEffect(() => {
    if (isPaused || phase !== "ready") return;
    const interval = setInterval(() => {
      setSlideDir(1);
      setCardVisible(false);
      setTimeout(() => {
        setActiveMetric((prev) => (prev + 1) % METRICS.length);
        setCardVisible(true);
      }, 150);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, phase]);

  const pauseAutoRotate = () => {
    setIsPaused(true);
    if (pauseTimer.current) clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(() => setIsPaused(false), 6000);
  };

  const goToMetric = (index: number, dir: number) => {
    if (index === activeMetric || phase !== "ready") return;
    pauseAutoRotate();
    setSlideDir(dir);
    setCardVisible(false);
    setTimeout(() => {
      setActiveMetric(index);
      setCardVisible(true);
    }, 150);
  };

  const stepMetric = (index: number) =>
    goToMetric(index, index > activeMetric ? 1 : -1);

  // Swipe commit — called on touch/mouse release
  const commitSwipe = (dx: number) => {
    if (Math.abs(dx) > 40) {
      if (dx < 0) goToMetric((activeMetric + 1) % METRICS.length, 1);
      else goToMetric((activeMetric - 1 + METRICS.length) % METRICS.length, -1);
    }
    setDragOffset(0);
  };

  // Touch swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    isSwiping.current = false;
    setDragOffset(0);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    const dx = e.touches[0].clientX - touchStart.current.x;
    const dy = e.touches[0].clientY - touchStart.current.y;
    if (!isSwiping.current && Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
      isSwiping.current = true;
    }
    if (isSwiping.current) {
      setDragOffset(dx);
      e.preventDefault();
    }
  };
  const onTouchEnd = () => {
    commitSwipe(dragOffset);
    isSwiping.current = false;
  };

  // Mouse drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    mouseDown.current = true;
    touchStart.current = { x: e.clientX, y: 0 };
    setDragOffset(0);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (mouseDown.current) {
      setDragOffset(e.clientX - touchStart.current.x);
    }
  };
  const onMouseUp = () => {
    if (mouseDown.current) {
      mouseDown.current = false;
      commitSwipe(dragOffset);
    }
  };

  return (
    <div className="min-h-dvh bg-(--color-neutral-200) flex justify-center p-(--spacing-spacing-32) px-(--spacing-spacing-16)">
      <div className="w-full" style={{ maxWidth: 420 }}>
        {/* Brand label */}
        <div className="text-center mb-(--spacing-spacing-8)">
          <span
            style={{
              ...typography.styles.label3Regular,
              textTransform: "uppercase",
              color: "var(--color-neutral-700)",
            }}
          >
            prose
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-(--spacing-spacing-24)">
          <h1
            style={{
              ...typography.styles.h3,
              fontSize: "36px",
              letterSpacing: "-1.08px",
              color: "var(--color-neutral-900)",
              margin: "0 0 4px",
            }}
          >
            Your results, Maggie
          </h1>
        </div>

        {/* Bubble visualization */}
        <div className="flex justify-center mb-(--spacing-spacing-16)">
          <div className="relative" style={{ width: 240, height: 240 }}>
            <svg width={240} height={240} viewBox="0 0 240 240">
              {BUBBLES.map((b, i) => {
                const revealed = b.metric <= revealedMetric;
                const isActive = isReady ? activeMetric === b.metric : true;
                return (
                  <circle
                    key={i}
                    cx={b.cx}
                    cy={b.cy}
                    r={revealed ? b.r : 0}
                    fill={METRIC_COLORS[b.metric].fill}
                    opacity={revealed ? (isReady ? (isActive ? 0.9 : 0.18) : 0.7) : 0}
                    style={{
                      cursor: isReady ? "pointer" : "default",
                      transition: `r 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${b.delay * 0.5}ms, opacity 0.4s ease ${isReady ? "0ms" : `${b.delay * 0.5}ms`}`,
                    }}
                    onClick={() => isReady && stepMetric(b.metric)}
                  />
                );
              })}
            </svg>

            {/* Center text */}
            <div
              className="absolute top-1/2 left-1/2 text-center pointer-events-none"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              {/* Score counter — visible during loading */}
              <div
                style={{
                  fontFamily: "var(--font-family-title)",
                  fontWeight: 300,
                  fontSize: "36px",
                  letterSpacing: "-1.08px",
                  color: "var(--color-neutral-900)",
                  transition: "opacity 0.4s ease",
                  opacity: scoreCount > 0 && !centerTextIn ? 1 : 0,
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  whiteSpace: "nowrap",
                }}
              >
                {scoreCount}+
              </div>

              {/* Metric name — visible when ready */}
              <div
                style={{
                  transition: "opacity 0.5s ease",
                  opacity: centerTextIn ? 1 : 0,
                }}
              >
                <div
                  style={{
                    ...typography.styles.label3Regular,
                    textTransform: "uppercase",
                    color: "var(--color-neutral-700)",
                    marginBottom: 2,
                  }}
                >
                  FORMULATED FOR
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-family-title)",
                    fontWeight: 300,
                    fontSize: "22px",
                    letterSpacing: "-0.66px",
                    color: "var(--color-neutral-900)",
                    transition: "opacity 0.2s ease",
                    opacity: cardVisible ? 1 : 0,
                  }}
                >
                  {current.name.charAt(0) + current.name.slice(1).toLowerCase()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div
          className="flex gap-(--spacing-spacing-8) justify-center mb-(--spacing-spacing-24)"
          style={{
            opacity: isReady ? 1 : 0,
            transition: "opacity 0.4s ease 0.1s",
          }}
        >
          {METRICS.map((m, i) => (
            <button
              key={m.name}
              onClick={() => stepMetric(i)}
              className="border-none cursor-pointer p-0"
              style={{
                width: activeMetric === i ? 28 : 8,
                height: 8,
                borderRadius: "var(--radius-radius-400)",
                background:
                  activeMetric === i
                    ? METRIC_COLORS[i].fill
                    : "var(--color-neutral-400)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* Loading bars */}
        <LoadingBars visible={isLoading} revealedMetric={revealedMetric} />

        {/* Detail card */}
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          className="w-full bg-(--color-neutral-100) rounded-(--radius-radius-12) overflow-hidden mb-(--spacing-spacing-24) select-none"
          style={{
            border: isReady
              ? "1px solid var(--color-neutral-400)"
              : "1px solid transparent",
            transition: dragOffset
              ? "opacity 0.3s ease, max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1), padding 0.5s ease"
              : "opacity 0.3s ease, transform 0.25s ease, max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1), padding 0.5s ease",
            opacity: isReady && cardVisible ? Math.max(0.4, 1 - Math.abs(dragOffset) / 200) : 0,
            transform:
              dragOffset
                ? `translateX(${dragOffset}px)`
                : isReady && cardVisible
                  ? "translateX(0)"
                  : `translateX(${slideDir * 20}px)`,
            maxHeight: isReady ? 300 : 0,
            padding: isReady ? "20px 20px 24px" : "0 20px",
            cursor: isReady ? "grab" : "default",
            touchAction: "pan-y",
          }}
        >
          {/* Card header */}
          <div className="flex items-center justify-between mb-(--spacing-spacing-16)">
            <span
              style={{
                ...typography.styles.label2Regular,
                textTransform: "uppercase",
                color: "var(--color-neutral-900)",
              }}
            >
              {current.name}
            </span>
            <span
              style={{
                ...typography.styles.body4Medium,
                fontSize: "13px",
                color: METRIC_COLORS[activeMetric].dark,
              }}
            >
              {current.label}
            </span>
          </div>

          {/* Progress bar with thumb */}
          <div className="mb-(--spacing-spacing-16)">
            <div className="relative h-1.5 bg-(--color-neutral-300) rounded-(--radius-radius-400) overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full rounded-(--radius-radius-400)"
                style={{
                  width: `${current.level * 100}%`,
                  background: METRIC_COLORS[activeMetric].fill,
                  transition: "width 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />
            </div>
            {/* Thumb */}
            <div className="relative" style={{ marginTop: -10 }}>
              <div
                className="absolute border-2 border-(--color-neutral-100)"
                style={{
                  top: 0,
                  left: `${current.level * 100}%`,
                  transform: "translate(-50%, 0)",
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: METRIC_COLORS[activeMetric].dark,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
                  transition: "left 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />
            </div>
            {/* Low / High labels */}
            <div className="flex justify-between" style={{ marginTop: 10 }}>
              <span
                style={{
                  ...typography.styles.label3Regular,
                  textTransform: "uppercase",
                  color: "var(--color-neutral-700)",
                }}
              >
                {current.low}
              </span>
              <span
                style={{
                  ...typography.styles.label3Regular,
                  textTransform: "uppercase",
                  color: "var(--color-neutral-700)",
                }}
              >
                {current.high}
              </span>
            </div>
          </div>

          {/* Detail text */}
          <p
            style={{
              ...typography.styles.body4Regular,
              color: "var(--color-neutral-800)",
              margin: 0,
            }}
          >
            {current.detail}
          </p>
        </div>

        {/* CTA Button */}
        <button
          className="w-full border-none cursor-pointer bg-(--color-primary-400) text-(--color-neutral-100) rounded-(--radius-radius-10) p-(--spacing-spacing-16)"
          style={{
            ...typography.styles.label2Regular,
            textTransform: "uppercase",
          }}
        >
          SEE YOUR CUSTOM ROUTINE
        </button>
      </div>
    </div>
  );
}
