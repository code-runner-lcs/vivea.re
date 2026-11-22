import { For, Show, createSignal, createEffect, onCleanup, onMount } from "solid-js";
import { NAV_ITEMS } from "../data";
import "./Header.css";

export default function Header(props: {
  currentPage?: "home" | "espaces" | "terracoop";
}) {
  const [scrolled, setScrolled] = createSignal(false);
  const [open, setOpen] = createSignal(false);
  let headerEl: HTMLElement | undefined;
  let burgerEl: HTMLButtonElement | undefined;

  onMount(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Échap : ferme le panneau et rend le focus au burger
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open()) {
        setOpen(false);
        burgerEl?.focus();
      }
    };
    // Clic extérieur : ferme le panneau
    const onOutside = (e: MouseEvent) => {
      if (open() && headerEl && !headerEl.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    // Passage desktop : le panneau mobile n'a plus lieu d'être
    const onResize = () => {
      if (window.innerWidth > 940 && open()) setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onOutside);
    window.addEventListener("resize", onResize);
    onCleanup(() => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onOutside);
      window.removeEventListener("resize", onResize);
    });
  });

  // Lock du scroll du fond tant que le panneau est ouvert
  createEffect(() => {
    document.body.style.overflow = open() ? "hidden" : "";
    onCleanup(() => {
      document.body.style.overflow = "";
    });
  });

  return (
    <header ref={headerEl} class="site" classList={{ scrolled: scrolled() }}>
      <div class="wrap site-inner">
        <a class="logo" href="/" aria-label="Vivéa — accueil">
          <img
            src="/logo-vivea-h.png"
            alt="Vivéa — La Coopérative"
            class="logo-img"
          />
        </a>

        <nav class="main" aria-label="Navigation principale">
          <For each={NAV_ITEMS}>
            {(it) => (
              <a
                href={it.href}
                aria-current={
                  props.currentPage === "terracoop" && it.href === "/terracoop/"
                    ? "page"
                    : undefined
                }
              >
                {it.label}
              </a>
            )}
          </For>
        </nav>

        <button
          type="button"
          ref={burgerEl}
          class="burger"
          aria-label={open() ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open() ? "true" : "false"}
          onClick={() => setOpen(!open())}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <Show when={open()}>
        <nav class="mobile-panel" aria-label="Navigation mobile">
          <For each={NAV_ITEMS}>
            {(it) => (
              <a href={it.href} onClick={() => setOpen(false)}>
                {it.label}
              </a>
            )}
          </For>
          <div class="panel-ctas">
            <a
              class="btn btn-ghost"
              href="/espaces/adherent/"
              onClick={() => setOpen(false)}
            >
              Espace adhérent
            </a>
            <a class="btn btn-primary" href="/espaces/" onClick={() => setOpen(false)}>
              Espace pro
            </a>
          </div>
        </nav>
      </Show>
    </header>
  );
}
