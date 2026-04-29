/*
 * Tip — Figma: Design System > New Consultation Tip
 *
 * Bottom-sheet tooltip triggered by a link on the page.
 * BG: tertiary/200 (#ead7f3). Rounded top corners: radius-20.
 * Drag handle: 42×5px, tertiary/300, rounded 5px.
 * Title: Simplon Mono, uppercase, centered.
 *   Mobile: 13px, tracking 1px.  Desktop: 14px (label/1), tracking 1.12px.
 * Body: Simplon Norm, centered.
 *   Mobile: 14px, tracking 0.5px, leading 22px.  Desktop: 16px (body/3), leading 1.5.
 * Mobile: 375px, px-24, pt-12, pb-24, gap 16px handle→content.
 * Desktop: 500px, px-24, pt-18, pb-48, gap 32px handle→content.
 */

import { useState } from "react";
import { typography } from "../../tokens";

export type TipSize = "desktop" | "mobile";

// ─── Tip Panel ───────────────────────────────────────────

type TipProps = {
  title?: string;
  children: React.ReactNode;
  size?: TipSize;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

export function Tip({
  title = "WHY WE ASK:",
  children,
  size = "mobile",
  isOpen,
  onClose,
  className = "",
}: TipProps) {
  if (!isOpen) return null;

  const isDesktop = size === "desktop";

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 99,
        }}
      />

      {/* Panel */}
      <div
        className={className}
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: isDesktop ? 500 : 375,
          backgroundColor: "var(--color-tertiary-200)",
          borderTopLeftRadius: "var(--radius-radius-20)",
          borderTopRightRadius: "var(--radius-radius-20)",
          padding: isDesktop ? "18px 24px 48px" : "12px 24px 24px",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: isDesktop ? 32 : 16,
        }}
      >
        {/* Drag handle */}
        <div
          style={{
            width: 42,
            height: 5,
            borderRadius: 5,
            backgroundColor: "var(--color-tertiary-300)",
            flexShrink: 0,
            cursor: "pointer",
          }}
          onClick={onClose}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            width: "100%",
            textAlign: "center",
          }}
        >
          {/* Title */}
          <p
            style={{
              fontFamily: typography.families.label,
              fontWeight: typography.weights.regular,
              fontSize: isDesktop ? 14 : 13,
              lineHeight: 1.2,
              letterSpacing: isDesktop ? "1.12px" : "1px",
              textTransform: "uppercase",
              color: "var(--color-neutral-900)",
              margin: 0,
            }}
          >
            {title}
          </p>

          {/* Body */}
          <div
            style={{
              fontFamily: typography.families.body,
              fontWeight: typography.weights.regular,
              fontSize: isDesktop ? 16 : 14,
              lineHeight: isDesktop ? 1.5 : "22px",
              letterSpacing: isDesktop ? "0.32px" : "0.5px",
              color: "var(--color-neutral-900)",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Tip Trigger ─────────────────────────────────────────

type TipTriggerProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

export function TipTrigger({ label, onClick, className = "" }: TipTriggerProps) {
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        fontFamily: typography.families.body,
        fontWeight: typography.weights.regular,
        fontSize: 16,
        color: "var(--color-neutral-800)",
      }}
    >
      <span
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          border: "1.5px solid var(--color-tertiary-300)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          lineHeight: 1,
          color: "var(--color-tertiary-300)",
          flexShrink: 0,
        }}
      >
        +
      </span>
      <span style={{ textDecoration: "underline" }}>{label}</span>
    </button>
  );
}
