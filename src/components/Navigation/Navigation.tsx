/*
 * Navigation — Figma: Design System > Navigation
 *
 * Two-part header: SitewideBanner (40px) + Nav bar (56px) = 96px total
 *
 * Sizes: "desktop" | "mobile"
 * States:
 *   "default"      — full nav links + icons (Guest, empty cart)
 *   "items-added"  — same as default but cart has accent dot badge
 *   "consultation" — simplified: ← Back | Logo | Exit
 *   "checkout"     — simplified: ← Arrow | Logo
 *
 * Icons from images/icons/Nav/ (Account.svg, Cart.svg, Hamburger.svg)
 * Close (X) and dropdown caret drawn inline.
 */

import { typography } from "../../tokens";
import { SitewideBanner, type SitewideBannerState } from "../SitewideBanner/SitewideBanner";
import { Logo } from "../Logo/Logo";

export type NavigationSize = "desktop" | "mobile";
export type NavigationState = "default" | "items-added" | "consultation" | "checkout";

type NavigationProps = {
  size?: NavigationSize;
  state?: NavigationState;
  bannerState?: SitewideBannerState;
  bannerMessage?: string;
  userName?: string;
  className?: string;
};

// ─── Icons ──────────────────────────────────────────────────────────────────

function AccountIcon() {
  return (
    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" aria-hidden="true">
      <path
        d="M10.5 11.2063C13.3322 11.2063 15.8882 12.3063 17.8224 14.1625C19.6875 16.0188 20.9309 18.4937 21 21.3125V22H20.3092H0.690789H0V21.3125C0.0690789 18.4937 1.3125 15.95 3.17763 14.1625C5.04276 12.3063 7.66776 11.2063 10.5 11.2063ZM10.5 0C13.3322 0 15.6809 2.26875 15.6809 5.15625C15.6809 7.975 13.3322 10.3125 10.5 10.3125C7.66776 10.3125 5.31908 8.04375 5.31908 5.15625C5.31908 2.3375 7.59868 0 10.5 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="25" height="22" viewBox="0 0 25 22" fill="none" aria-hidden="true">
      <path d="M15.0778 22H1.11111L0 6.26666H16.1889L15.0778 22Z" fill="currentColor" />
      <path
        d="M8.10018 0C5.43351 0 3.26685 2.16667 3.26685 4.82222V5.26667H5.3224V4.82222C5.3224 3.28889 6.56685 2.05556 8.08907 2.05556C9.61129 2.05556 10.8557 3.3 10.8557 4.82222V5.26667H12.9113V4.82222C12.9224 2.16667 10.7557 0 8.10018 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" aria-hidden="true">
      <line y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="2" />
      <line y1="9" x2="20" y2="9" stroke="currentColor" strokeWidth="2" />
      <line y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
      <path d="M1 1L16 16M16 1L1 16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function DropdownCaret() {
  return (
    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" aria-hidden="true">
      <path d="M0.5 0.5L4 4L7.5 0.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function BackArrowIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
      <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="1" y1="7" x2="17" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ─── Cart with badge ────────────────────────────────────────────────────────

function CartWithBadge({ hasItems }: { hasItems: boolean }) {
  return (
    <div className="relative">
      <CartIcon />
      {hasItems && (
        <div className="absolute -top-[2px] -right-[2px] size-[16px] rounded-full bg-(--color-accent-200) flex items-center justify-center">
          <span className="sr-only">Items in cart</span>
        </div>
      )}
    </div>
  );
}

// ─── Nav link text ──────────────────────────────────────────────────────────

const navLinkStyle = {
  fontFamily: typography.styles.body4Regular.fontFamily,
  fontSize: typography.styles.body4Regular.fontSize,
  fontWeight: typography.styles.body4Regular.fontWeight,
  lineHeight: typography.styles.body4Regular.lineHeight,
  letterSpacing: typography.styles.body4Regular.letterSpacing,
};

function NavLink({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-(--color-primary-400) whitespace-nowrap cursor-pointer" style={navLinkStyle}>
      {children}
    </span>
  );
}

// ─── Desktop nav links ──────────────────────────────────────────────────────

const desktopLinks = [
  "Haircare",
  "Skincare",
  "Accessories",
  "Our Ingredients",
  "Our Story",
  "Reviews",
  "Gift Prose",
  "Subscribe & Save",
];

function DesktopNavLinks() {
  return (
    <div className="flex items-center justify-between flex-1 min-w-0">
      <Logo variant="dark" height={22} />
      {desktopLinks.map((link) =>
        link === "Our Story" ? (
          <div key={link} className="flex items-center gap-1 cursor-pointer">
            <NavLink>{link}</NavLink>
            <DropdownCaret />
          </div>
        ) : (
          <NavLink key={link}>{link}</NavLink>
        )
      )}
    </div>
  );
}

// ─── Desktop icons ──────────────────────────────────────────────────────────

function DesktopIcons({ hasItems, userName }: { hasItems: boolean; userName?: string }) {
  return (
    <div className="flex items-center gap-(--spacing-spacing-32) text-(--color-primary-400)">
      <CartWithBadge hasItems={hasItems} />
      <div className="flex items-center gap-(--spacing-spacing-8)">
        <AccountIcon />
        {userName && (
          <span className="text-(--color-primary-400) whitespace-nowrap" style={navLinkStyle}>
            {userName}
          </span>
        )}
      </div>
    </div>
  );
}

// ─── Mobile icons ───────────────────────────────────────────────────────────

function MobileIcons({ hasItems }: { hasItems: boolean }) {
  return (
    <div className="flex items-center gap-(--spacing-spacing-16) text-(--color-primary-400)">
      <CartWithBadge hasItems={hasItems} />
      <AccountIcon />
    </div>
  );
}

// ─── Component ──────────────────────────────────────────────────────────────

export function Navigation({
  size = "desktop",
  state = "default",
  bannerState = "banner",
  bannerMessage,
  userName,
  className = "",
}: NavigationProps) {
  const hasItems = state === "items-added";
  const isSimplified = state === "consultation" || state === "checkout";
  const isDesktop = size === "desktop";

  const checkoutBanner = "Love your first order (or it's on us)";
  const resolvedBannerMessage =
    bannerMessage ?? (state === "checkout" ? checkoutBanner : undefined);

  // ── Desktop ─────────────────────────────────────────────────────────────
  if (isDesktop) {
    return (
      <div className={`flex flex-col w-full ${className}`}>
        <SitewideBanner state={bannerState} message={resolvedBannerMessage} />

        <div className="flex items-center justify-between w-full h-[56px] px-(--spacing-spacing-32) py-[17px] bg-(--color-neutral-100)">
          {isSimplified ? (
            <>
              {/* Left */}
              <div className="flex items-center text-(--color-primary-400)">
                {state === "consultation" ? (
                  <span className="cursor-pointer" style={navLinkStyle}>
                    ← Back
                  </span>
                ) : (
                  <span className="cursor-pointer text-(--color-primary-400)">
                    <BackArrowIcon />
                  </span>
                )}
              </div>
              {/* Center */}
              <Logo variant="dark" height={22} />
              {/* Right */}
              {state === "consultation" ? (
                <span className="text-(--color-primary-400) cursor-pointer" style={navLinkStyle}>
                  Exit
                </span>
              ) : (
                <div className="w-[40px]" />
              )}
            </>
          ) : (
            <>
              <DesktopNavLinks />
              <div className="ml-(--spacing-spacing-32)">
                <DesktopIcons hasItems={hasItems} userName={userName} />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // ── Mobile ──────────────────────────────────────────────────────────────
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <SitewideBanner state={bannerState} message={resolvedBannerMessage} />

      <div className="flex items-center justify-between w-full h-[55px] px-(--spacing-spacing-24) bg-(--color-neutral-100)">
        {isSimplified ? (
          <>
            {/* Left */}
            <div className="flex items-center text-(--color-primary-400)">
              {state === "consultation" ? (
                <span className="cursor-pointer" style={navLinkStyle}>
                  ← Back
                </span>
              ) : (
                <span className="cursor-pointer text-(--color-primary-400)">
                  <BackArrowIcon />
                </span>
              )}
            </div>
            {/* Center */}
            <Logo variant="dark" height={18} />
            {/* Right */}
            {state === "consultation" ? (
              <span className="text-(--color-primary-400) cursor-pointer" style={navLinkStyle}>
                Exit
              </span>
            ) : (
              <div className="w-[40px]" />
            )}
          </>
        ) : (
          <>
            {/* Left: hamburger */}
            <span className="text-(--color-primary-400) cursor-pointer">
              <HamburgerIcon />
            </span>
            {/* Center + Right: logo and icons */}
            <div className="flex items-center justify-between flex-1 ml-(--spacing-spacing-24)">
              <Logo variant="dark" height={18} />
              <MobileIcons hasItems={hasItems} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
