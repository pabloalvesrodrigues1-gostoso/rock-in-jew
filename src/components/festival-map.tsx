export function FestivalMap() {
  return (
    <svg
      viewBox="0 0 720 420"
      className="h-auto w-full overflow-visible rounded-xl bg-bg shadow-[var(--shadow-border)]"
      role="img"
      aria-label="Mapa dos palcos do Rock in Jew no Parque Villa-Lobos"
    >
      <rect width="720" height="420" fill="var(--color-bg)" />
      <rect x="24" y="24" width="672" height="372" fill="none" stroke="var(--color-primary)" strokeWidth="2" />
      <rect x="28" y="28" width="664" height="8" fill="var(--color-primary)" />
      <rect x="28" y="40" width="664" height="8" fill="var(--color-fg)" />
      <rect x="28" y="48" width="664" height="8" fill="var(--color-primary)" />

      <text
        x="360"
        y="90"
        textAnchor="middle"
        fill="var(--color-muted)"
        fontFamily="Oswald, sans-serif"
        fontSize="12"
        letterSpacing="4"
      >
        ENTRADA NORTE · AV. FONSECA RODRIGUES
      </text>

      <rect x="300" y="108" width="120" height="36" rx="6" fill="var(--color-surface)" stroke="var(--color-border)" />
      <text x="360" y="131" textAnchor="middle" fill="var(--color-fg)" fontFamily="Oswald, sans-serif" fontSize="13" letterSpacing="2">
        PRAÇA CHAI
      </text>

      <rect x="48" y="200" width="180" height="110" rx="10" fill="var(--color-surface)" stroke="var(--color-primary)" />
      <text x="138" y="248" textAnchor="middle" fill="var(--color-primary)" fontFamily="Oswald, sans-serif" fontSize="16" letterSpacing="2">
        PALCO SHALOM
      </text>
      <text x="138" y="272" textAnchor="middle" fill="var(--color-muted)" fontFamily="Figtree, sans-serif" fontSize="12">
        punk · nacional
      </text>

      <rect x="270" y="188" width="180" height="140" rx="10" fill="var(--color-primary)" />
      <text x="360" y="248" textAnchor="middle" fill="var(--color-fg)" fontFamily="Oswald, sans-serif" fontSize="18" letterSpacing="2">
        PALCO MAGEN
      </text>
      <text x="360" y="274" textAnchor="middle" fill="var(--color-fg)" fontFamily="Figtree, sans-serif" fontSize="12">
        headliners
      </text>

      <rect x="492" y="200" width="180" height="110" rx="10" fill="var(--color-surface)" stroke="var(--color-primary)" />
      <text x="582" y="248" textAnchor="middle" fill="var(--color-primary)" fontFamily="Oswald, sans-serif" fontSize="16" letterSpacing="2">
        PALCO SINAI
      </text>
      <text x="582" y="272" textAnchor="middle" fill="var(--color-muted)" fontFamily="Figtree, sans-serif" fontSize="12">
        Israel · metal
      </text>

      <rect x="270" y="348" width="180" height="32" rx="6" fill="var(--color-surface-2)" stroke="var(--color-border)" />
      <text x="360" y="369" textAnchor="middle" fill="var(--color-fg)" fontFamily="Oswald, sans-serif" fontSize="12" letterSpacing="2">
        CAMAROTE MENORÁ
      </text>
    </svg>
  );
}
