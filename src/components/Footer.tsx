import { For } from "solid-js";
import { FOOTER_LINKS, NB_PRODUCTEURS } from "../data";
import "./Footer.css";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer id="contact" class="footer">
      <div class="wrap">
        <div class="foot-grid">
          <div class="foot-brand">
            <a class="logo foot-logo" href="/" aria-label="Vivéa — haut de page">
              <img
                src="/logo-vivea-h.png"
                alt="Vivéa — La Coopérative"
                class="foot-logo-img"
              />
            </a>
            <p>
              Organisation de Producteurs regroupant {NB_PRODUCTEURS} producteurs
              de fruits et légumes sur toute l'île de La Réunion.
            </p>
            <p class="contact-note">
              Coordonnées (adresse, téléphone, email) à insérer.
            </p>
          </div>

          <nav class="foot-col" aria-label="Explorer">
            <h3>Explorer</h3>
            <For each={FOOTER_LINKS.explorer}>
              {(l) => <a href={l.href}>{l.label}</a>}
            </For>
          </nav>

          <nav class="foot-col" aria-label="Espaces">
            <h3>Espaces</h3>
            <For each={FOOTER_LINKS.espaces}>
              {(l) => <a href={l.href}>{l.label}</a>}
            </For>
          </nav>

          <nav class="foot-col" aria-label="Informations">
            <h3>Informer</h3>
            <For each={FOOTER_LINKS.informer}>
              {(l) => <a href={l.href}>{l.label}</a>}
            </For>
          </nav>
        </div>

        <div class="foot-bottom">
          <span>© {YEAR} Vivéa — OP de La Réunion</span>
          <span class="mock-note">Maquette de redesign — textes et visuels à valider</span>
          <span>
            <a href="/mentions-legales/">Mentions légales</a> ·{" "}
            <a href="/confidentialite/">Confidentialité</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
