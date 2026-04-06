import { typography } from "../tokens";

const categories = [
  {
    label: "Custom Haircare",
    image: "/assets/haircare.jpg",
    alt: "Woman styling her hair",
  },
  {
    label: "Custom Skincare",
    image: "/assets/skincare.jpg",
    alt: "Woman applying skincare",
  },
];

export default function CategorySplitPage() {
  return (
    <div className="min-h-dvh bg-(--color-neutral-200) flex flex-col">
      {/* Promo banner */}
      <div
        className="bg-(--color-primary-400) text-(--color-neutral-100) text-center py-2.5 px-4"
        style={{
          fontFamily: typography.styles.body5Regular.fontFamily,
          fontSize: typography.styles.body5Regular.fontSize,
          fontWeight: typography.styles.body5Regular.fontWeight,
          lineHeight: typography.styles.body5Regular.lineHeight,
          letterSpacing: typography.styles.body5Regular.letterSpacing,
        }}
      >
        Exclusive Welcome Offer: 60% off + a free gift
      </div>

      {/* Nav bar */}
      <nav className="bg-(--color-neutral-100) flex items-center justify-center relative px-6 py-4 shadow-sm">
        <span
          style={{
            fontFamily: typography.styles.h5.fontFamily,
            fontSize: typography.styles.h5.fontSize,
            fontWeight: typography.styles.h5.fontWeight,
            lineHeight: typography.styles.h5.lineHeight,
            color: "var(--color-primary-400)",
          }}
        >
          prose
        </span>
        <button
          className="absolute right-6 bg-transparent border-none cursor-pointer"
          style={{
            fontFamily: typography.styles.body4Regular.fontFamily,
            fontSize: typography.styles.body4Regular.fontSize,
            fontWeight: typography.styles.body4Regular.fontWeight,
            lineHeight: typography.styles.body4Regular.lineHeight,
            color: "var(--color-primary-400)",
          }}
        >
          Exit
        </button>
      </nav>

      {/* Content */}
      <main className="flex-1 flex flex-col items-center px-6 pt-16 pb-8">
        <h1
          className="text-center"
          style={{
            fontFamily: typography.styles.h3.fontFamily,
            fontSize: typography.styles.h3.fontSize,
            fontWeight: typography.styles.h3.fontWeight,
            lineHeight: typography.styles.h3.lineHeight,
            letterSpacing: typography.styles.h3.letterSpacing,
            color: "var(--color-primary-300)",
          }}
        >
          Start your consultation
        </h1>

        <p
          className="text-center mt-6 max-w-[310px]"
          style={{
            fontFamily: typography.styles.body4Regular.fontFamily,
            fontSize: typography.styles.body4Regular.fontSize,
            fontWeight: typography.styles.body4Regular.fontWeight,
            lineHeight: typography.styles.body4Regular.lineHeight,
            letterSpacing: typography.styles.body4Regular.letterSpacing,
            color: "var(--color-primary-300)",
          }}
        >
          We'll analyze everything from what you eat to where you live to
          personalize your formulas.
        </p>

        {/* Category cards */}
        <div className="flex flex-col gap-4 mt-10 w-full max-w-[329px]">
          {categories.map((cat) => (
            <button
              key={cat.label}
              className="flex items-stretch border border-(--color-primary-400) bg-(--color-neutral-100) overflow-hidden text-left cursor-pointer p-0 h-[127px]"
            >
              <div className="w-[100px] shrink-0 bg-(--color-neutral-500)">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div className="flex items-center px-6">
                <span
                  style={{
                    fontFamily: typography.styles.body3Regular.fontFamily,
                    fontSize: typography.styles.body3Regular.fontSize,
                    fontWeight: typography.styles.body3Regular.fontWeight,
                    lineHeight: typography.styles.body3Regular.lineHeight,
                    color: "var(--color-primary-300)",
                  }}
                >
                  {cat.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center pb-12">
        <p
          style={{
            fontFamily: typography.styles.body4Regular.fontFamily,
            fontSize: typography.styles.body4Regular.fontSize,
            fontWeight: typography.styles.body4Regular.fontWeight,
            lineHeight: typography.styles.body4Regular.lineHeight,
            color: "var(--color-neutral-800)",
          }}
        >
          Already gave us your email?
        </p>
        <a
          href="#"
          className="underline mt-1 inline-block"
          style={{
            fontFamily: typography.styles.body4Regular.fontFamily,
            fontSize: typography.styles.body4Regular.fontSize,
            fontWeight: typography.styles.body4Regular.fontWeight,
            lineHeight: typography.styles.body4Regular.lineHeight,
            color: "var(--color-neutral-800)",
          }}
        >
          Resume here
        </a>
      </footer>
    </div>
  );
}
