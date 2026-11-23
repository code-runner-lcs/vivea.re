import { For, Show, createSignal } from "solid-js";
import { EXTRANET_URL, ESPACE_TABS, PRO_ITEMS } from "../data";
// NB: le css n'est PAS importé ici — ce composant est une île hydratée :
// l'import par le composant l'envoie dans le JS (FOUC). Les pages
// espaces l'importent côté build pour un CSS statique.

function ProPanel() {
  return (
    <div class="espace-panel" role="tabpanel" id="panel-pro" aria-labelledby="tab-pro">
      <div class="espace-banner">
        <img
          src="/img/espace-pro.webp"
          alt="Barquettes de fruits et légumes Vivéa prêtes pour la distribution"
          width="1225"
          height="400"
        />
      </div>
      <div class="espace-body">
        <h2 class="title">Espace pro Vivéa</h2>
        <p class="espace-slogan">Quantités, qualité, service</p>
        <ul class="pro-list">
          <For each={PRO_ITEMS}>
            {(it) => (
              <li>
                <strong>{it.title}</strong>
                <span>{it.detail}</span>
              </li>
            )}
          </For>
        </ul>
        <div class="espace-actions">
          <a class="btn btn-primary" href="#contact">
            Nous contacter
          </a>
        </div>
      </div>
    </div>
  );
}

function AdherentPanel() {
  return (
    <div class="espace-panel" role="tabpanel" id="panel-adherent" aria-labelledby="tab-adherent">
      <div class="espace-banner">
        <img
          src="/img/espace-adherent.webp"
          alt="Échanges entre producteurs Vivéa"
          width="1225"
          height="400"
        />
      </div>
      <div class="espace-body">
        <h2 class="title">Espace adhérent Vivéa</h2>
        <p class="lede">Vous êtes adhérent Vivéa, accédez à votre extranet :</p>
        <div class="espace-actions">
          <a class="btn btn-primary" href={EXTRANET_URL} target="_blank" rel="noopener noreferrer">
            Accéder à l'extranet
            <span class="ext" aria-hidden="true">
              &nbsp;&#8599;
            </span>
            <span class="sr-only">(nouvel onglet)</span>
          </a>
        </div>
        <p class="lede espace-note">Vous n'êtes pas encore adhérent et souhaitez le devenir ?</p>
        <div class="espace-actions">
          <a class="btn btn-ghost" href="#contact">
            Rejoignez-nous
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Espaces(props: { initialTab: "pro" | "adherent" }) {
  const [tab, setTab] = createSignal(props.initialTab);
  let tablistEl: HTMLDivElement | undefined;

  // La page adhérent est sa propre URL statique : l'onglet garde l'URL en phase.
  const onTab = (t: "pro" | "adherent") => {
    setTab(t);
    history.replaceState(null, "", t === "pro" ? "/espaces/" : "/espaces/adherent/");
  };

  // Pattern ARIA APG : flèches ←/→ bouclent, Home/End, activation au focus.
  const onTablistKeydown = (e: KeyboardEvent) => {
    const list = tablistEl
      ? Array.from(tablistEl.querySelectorAll<HTMLButtonElement>("button"))
      : [];
    const current = list.indexOf(document.activeElement as HTMLButtonElement);
    if (current === -1) return;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = (current + 1) % list.length;
    else if (e.key === "ArrowLeft") next = (current - 1 + list.length) % list.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = list.length - 1;
    if (next === null) return;
    e.preventDefault();
    list[next].focus();
    onTab(ESPACE_TABS[next].id);
  };

  return (
    <section class="espaces">
      <div class="wrap">
        <div class="page-head" data-reveal="1">
          <p class="eyebrow">Espaces connectés</p>
          <h1 class="title">Les espaces Vivéa</h1>
          <p class="lede">
            Professionnel de la distribution ou adhérent de l'OP : chaque profil a son point
            d'entrée — choisissez le vôtre.
          </p>
        </div>

        <div
          class="tabs"
          role="tablist"
          aria-label="Choisir un espace"
          data-reveal="1"
          ref={tablistEl}
          onKeyDown={onTablistKeydown}
        >
          <For each={ESPACE_TABS}>
            {(t) => (
              <button
                type="button"
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={tab() === t.id ? "true" : "false"}
                aria-controls={`panel-${t.id}`}
                tabindex={tab() === t.id ? 0 : -1}
                classList={{ active: tab() === t.id }}
                onClick={() => onTab(t.id)}
              >
                {t.label}
              </button>
            )}
          </For>
        </div>

        <Show when={tab() === "pro"} fallback={<AdherentPanel />}>
          <ProPanel />
        </Show>
      </div>
    </section>
  );
}
