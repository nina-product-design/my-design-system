import { useState, useRef, useEffect } from "react";
import { InputField } from "../components/InputField/InputField";
import { typography } from "../tokens";
import proseLogo from "../assets/prose-logo.svg";

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada",
  "New Hampshire","New Jersey","New Mexico","New York","North Carolina",
  "North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island",
  "South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",
  "Virginia","Washington","West Virginia","Wisconsin","Wyoming",
];

export default function HiMichellePage() {
  const [state, setState] = useState("");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ background: "var(--color-neutral-200)" }}
    >
      <div
        className="flex w-full max-w-md flex-col items-center text-center"
        style={{
          background: "var(--color-neutral-100)",
          padding: "var(--spacing-spacing-64) var(--spacing-spacing-32)",
          gap: "var(--spacing-spacing-24)",
          borderRadius: "var(--radius-radius-20)",
        }}
      >
        {/* Logo */}
        <img
          src={proseLogo}
          alt="Prose"
          style={{ width: "60px", marginBottom: "var(--spacing-spacing-8)" }}
        />

        {/* Heading — h1: Saol Text Light 48px */}
        <h1
          style={{
            fontFamily: "var(--font-heading-h1-family)",
            fontSize: "var(--font-heading-h1-size)",
            fontWeight: "var(--font-heading-h1-weight)",
            lineHeight: "var(--font-heading-h1-line-height)",
            letterSpacing: "var(--font-heading-h1-letter-spacing)",
            color: "var(--color-neutral-900)",
          }}
        >
          hi michelle!!
        </h1>

        {/* Body — body-2: Simplon Norm Regular 20px */}
        <p
          style={{
            fontFamily: "var(--font-body-2-family)",
            fontSize: "var(--font-body-2-size)",
            fontWeight: "var(--font-body-2-weight-regular)",
            lineHeight: "var(--font-body-2-line-height)",
            letterSpacing: "var(--font-body-2-letter-spacing)",
            color: "var(--color-neutral-800)",
          }}
        >
          belated happy bday!
        </p>

        {/* State dropdown — using InputField from design system */}
        <div ref={dropdownRef} className="relative w-full">
          <div
            onClick={() => setOpen(!open)}
            style={{ cursor: "pointer" }}
          >
            <InputField
              type="dropdown"
              state={state ? "complete" : "default"}
              label="State"
              value={state || "Select your state"}
            />
          </div>
          {open && (
            <ul
              className="absolute w-full overflow-y-auto"
              style={{
                top: "100%",
                marginTop: "var(--spacing-spacing-4)",
                maxHeight: "240px",
                background: "var(--color-neutral-100)",
                border: "1px solid var(--color-neutral-600)",
                boxShadow: "2px 2px 3px rgba(234,234,234,0.5)",
                zIndex: 10,
                listStyle: "none",
                padding: "var(--spacing-spacing-8) 0",
              }}
            >
              {US_STATES.map((s) => (
                <li key={s}>
                  <button
                    type="button"
                    onClick={() => { setState(s); setOpen(false); }}
                    className="w-full"
                    style={{
                      ...typography.styles.body3Regular,
                      color: s === state ? "var(--color-primary-400)" : "var(--color-neutral-800)",
                      background: s === state ? "var(--color-primary-100)" : "transparent",
                      padding: "var(--spacing-spacing-8) var(--spacing-spacing-16)",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                    onMouseEnter={(e) => {
                      if (s !== state) e.currentTarget.style.background = "var(--color-neutral-300)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = s === state ? "var(--color-primary-100)" : "transparent";
                    }}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* CTA Button — accent coral */}
        <a
          href="#"
          className="flex items-center justify-center uppercase"
          style={{
            background: "var(--color-accent-200)",
            padding: "var(--spacing-spacing-16) var(--spacing-spacing-48)",
            fontFamily: "var(--font-label-1-family)",
            fontSize: "var(--font-label-1-size)",
            fontWeight: "var(--font-label-1-weight-medium)",
            lineHeight: "var(--font-label-1-line-height)",
            letterSpacing: "2px",
            color: "var(--color-neutral-100)",
            borderRadius: "var(--radius-radius-60)",
            textDecoration: "none",
          }}
        >
          present here!
        </a>
      </div>
    </div>
  );
}
