export interface Service {
  id: string;
  title: string;
  short: string;
  duration: string;
  price: string;
  long: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    id: "energetische-heilsitzung",
    title: "Energetische Heilsitzung",
    short:
      "Aktivierung der Selbstheilungskräfte. Blockaden werden transformiert, Energie fließt wieder.",
    duration: "90 Minuten",
    price: "ab 180 €",
    long: [
      "Durch eine Energetische Heilsitzung werden die Selbstheilungskräfte deines Körpers tief aktiviert. Angestaute Energie und alte Blockaden werden sanft transformiert, sodass ein freier Energiefluss entstehen kann.",
      "Mein Schwerpunkt liegt auf der Auflösung von Traumata, den damit verbundenen Gefühlen und Glaubensmustern sowie karmisch bindenden Strukturen wie Schwüren, Eiden und Gelübden.",
    ],
    benefits: [
      "Spürbar mehr Energie nach der Sitzung",
      "Lösung tiefliegender emotionaler Muster",
      "Klarheit über Ursachen körperlicher Symptome",
    ],
  },
  {
    id: "traumaaufloesung",
    title: "Traumaauflösung",
    short:
      "Sanfte, tiefe Lösung alter Verletzungen — auf körperlicher, emotionaler und seelischer Ebene.",
    duration: "90 – 120 Minuten",
    price: "ab 220 €",
    long: [
      "Wir arbeiten mit den Wurzeln deiner Verletzungen — nicht mit den Symptomen. In einem geschützten Raum dürfen alte Erfahrungen gesehen, integriert und losgelassen werden.",
      "Du wirst dabei nicht erneut belastet, sondern liebevoll begleitet. Was sich löst, kommt nicht wieder.",
    ],
    benefits: [
      "Befreiung von wiederkehrenden Mustern",
      "Mehr innere Ruhe und Stabilität",
      "Wieder Vertrauen ins Leben",
    ],
  },
  {
    id: "glaubenssaetze",
    title: "Glaubenssätze transformieren",
    short:
      "Limitierende Überzeugungen erkennen, auflösen und durch tragende Wahrheiten ersetzen.",
    duration: "75 Minuten",
    price: "ab 160 €",
    long: [
      "Unsere inneren Glaubenssätze formen, was wir im Außen erleben. Gemeinsam decken wir auf, welche Sätze dich klein halten — und ersetzen sie durch neue, tragende Wahrheiten.",
      "So entstehen Veränderungen, die nicht aufgesetzt sind, sondern aus deinem Inneren kommen.",
    ],
    benefits: [
      "Mehr Selbstwert und Selbstvertrauen",
      "Klare Entscheidungen aus deiner Mitte",
      "Türen, die sich plötzlich öffnen",
    ],
  },
  {
    id: "beziehungen",
    title: "Beziehungen harmonisieren",
    short:
      "Beziehungen zu Partner, Familie, Freunden oder Kollegen energetisch klären.",
    duration: "90 Minuten",
    price: "ab 180 €",
    long: [
      "Beziehungen sind Spiegel. Wir lösen Verstrickungen, energetische Bindungen und alte Konflikte — auch ohne dass die andere Person anwesend sein muss.",
      "Was übrig bleibt, ist Klarheit, Respekt und ein neues Miteinander.",
    ],
    benefits: [
      "Konflikte lösen sich oft wie von selbst",
      "Mehr Leichtigkeit im Alltag",
      "Klare, gesunde Grenzen",
    ],
  },
  {
    id: "ahnenheilung",
    title: "Ahnenheilung",
    short:
      "Übernommene Themen aus dem Familiensystem erkennen und an die Wurzel zurückgeben.",
    duration: "120 Minuten",
    price: "ab 240 €",
    long: [
      "Vieles, was wir tragen, gehört uns nicht. In der Ahnenheilung lösen wir Lasten, die über Generationen weitergegeben wurden, und führen sie liebevoll dorthin zurück, wo sie hingehören.",
      "Dadurch entsteht Freiheit — für dich und für die nachfolgenden Generationen.",
    ],
    benefits: [
      "Auflösung familiärer Muster",
      "Frieden mit der eigenen Herkunft",
      "Heilung für die ganze Linie",
    ],
  },
  {
    id: "karma",
    title: "Karmaauflösung",
    short:
      "Karmische Bindungen, Schwüre und Eide aus früheren Leben erkennen und auflösen.",
    duration: "120 Minuten",
    price: "ab 240 €",
    long: [
      "Manche Themen wiederholen sich, obwohl wir alles getan haben, sie zu lösen. Oft liegen die Ursachen in karmischen Verträgen oder früheren Inkarnationen.",
      "Wir betrachten und lösen diese Strukturen mit Respekt — damit dein Weg frei wird.",
    ],
    benefits: [
      "Wiederkehrende Themen verlieren ihre Kraft",
      "Neue Möglichkeiten tauchen auf",
      "Innere Freiheit",
    ],
  },
  {
    id: "gruppenheilung",
    title: "Gruppenheilsessions",
    short:
      "Heilsame Energie in der Gruppe — kraftvoll, verbindend und tief berührend.",
    duration: "2 Stunden",
    price: "ab 65 € p.P.",
    long: [
      "In der Gruppe entsteht ein verstärktes Heilungsfeld. Du profitierst von deiner eigenen Arbeit und gleichzeitig von der Energie aller Teilnehmenden.",
      "Ideal für Menschen, die einen sanften, kraftvollen Einstieg in die energetische Arbeit suchen.",
    ],
    benefits: [
      "Tiefe Erfahrung im geschützten Raum",
      "Verbindung mit Gleichgesinnten",
      "Sanfter Einstieg in die energetische Arbeit",
    ],
  },
];

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  topic: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sandra K.",
    location: "Wien",
    topic: "Energetische Heilsitzung",
    text: "Nach Jahren der Suche habe ich bei Maria endlich gefunden, was mir gefehlt hat. Schon nach der ersten Sitzung war eine Last von mir gefallen, die ich für selbstverständlich gehalten hatte. Ich fühle mich wieder ich selbst.",
  },
  {
    name: "Thomas R.",
    location: "Salzburg",
    topic: "Traumaauflösung",
    text: "Ich war skeptisch — und tief berührt. Maria arbeitet mit einer Klarheit und einem Respekt, die ich vorher nicht kannte. Themen, die mich Jahrzehnte begleitet haben, durften endlich gehen.",
  },
  {
    name: "Elena M.",
    location: "München",
    topic: "Beziehungen harmonisieren",
    text: "Unser Familienverhältnis war über Jahre angespannt. Nach drei Sitzungen mit Maria haben sich Gespräche von selbst entwickelt, die vorher unmöglich schienen. Ein Wunder — und doch ganz natürlich.",
  },
  {
    name: "Julia S.",
    location: "Graz",
    topic: "Ahnenheilung",
    text: "Maria hat mir geholfen, Themen zu lösen, die nicht meine waren. Ich fühle mich seitdem leichter, klarer und freier als je zuvor in meinem Leben.",
  },
  {
    name: "Markus B.",
    location: "Zürich",
    topic: "Glaubenssätze transformieren",
    text: "Was Maria sieht und benennt, trifft immer ins Schwarze — mit unglaublicher Sanftheit. Mein berufliches und privates Leben hat sich seither spürbar verändert.",
  },
  {
    name: "Anna L.",
    location: "Linz",
    topic: "Gruppenheilsession",
    text: "Die Gruppenheilung mit Maria war eines der intensivsten Erlebnisse meines Lebens. Geschützt, getragen und tief heilsam.",
  },
];
