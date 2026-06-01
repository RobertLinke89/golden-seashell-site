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

export const vortragService: Service = {
  id: "vortraege",
  title: "Vorträge & Keynotes",
  short:
    "Inspirierende Vorträge zu energetischer Heilarbeit, Bewusstsein und Transformation — für Unternehmen, Kongresse und private Veranstaltungen.",
  duration: "Individuell",
  price: "Preis auf Anfrage",
  long: [
    "Ich halte Vorträge und Keynotes zu Themen rund um energetische Heilarbeit, ganzheitliches Bewusstsein, Traumaintegration und persönliche Transformation — zugeschnitten auf Ihr Publikum und Format.",
    "Ob Unternehmens-Event, Kongress, Retreat oder geschlossene Gesellschaft: Ich gestalte einen Vortrag, der berührt, klärt und einen bleibenden Impuls hinterlässt. Formate von 30 Minuten bis hin zu mehrstündigen Workshops sind möglich.",
    "Senden Sie mir gerne eine unverbindliche Anfrage mit Anlass, Datum, Ort und gewünschter Dauer — ich erstelle Ihnen ein individuelles Angebot.",
  ],
  benefits: [
    "Maßgeschneiderter Inhalt für Ihr Publikum",
    "Persönliches Vorgespräch inklusive",
    "Online, hybrid oder vor Ort",
  ],
};

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  topic: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Klientin",
    location: "",
    topic: "Energetische Heilsitzung",
    text: "Ich bin Maria zutiefst dankbar für ihre außergewöhnliche Unterstützung durch ihre energetischen Heilsitzungen. Als ich zu ihr kam, litt ich unter einer sehr belastenden Herzbeutelentzündung und dadurch auch unter einer lähmenden Angststörung. Marias einfühlsame und liebevolle Art schuf sofort eine Atmosphäre des Vertrauens und der Sicherheit.",
  },
  {
    name: "Klientin",
    location: "",
    topic: "Energetische Heilsitzung",
    text: "Durch ihre energetischen Techniken und ihre Fähigkeit, Blockaden zu erkennen und zu lösen, konnte ich eine deutliche Verbesserung meines körperlichen und emotionalen Zustandes erfahren. Die Herzbeutelentzündung ist nach zwei Sitzungen abgeklungen und meine Angststörung hat sich erheblich reduziert. Sie hat in ihrer Sitzung auch noch andere Dinge lösen können die all das beeinflusst haben. Ihre Arbeit ist ganzheitlich, liebevoll und äußerst wirkungsvoll.",
  },
  {
    name: "Klientin",
    location: "",
    topic: "Energetische Heilsitzung",
    text: "Ich kann Maria von ganzem Herzen jedem empfehlen, der auf der Suche nach einer erfahrenen und mitfühlenden energetischen Heilerin ist. Sie hat mein Leben nachhaltig positiv verändert. Auch ihr energetisches Wirken in den Feengrotten kann ich wärmstens empfehlen.",
  },
  {
    name: "Klientin",
    location: "",
    topic: "Energetische Heilsitzung",
    text: "Maria-Fabijenna — eine Heilerin der Masterclass! Es ist kaum zu glauben, was ich mir in all meinen Inkarnationen energetisch aufgeladen habe. Eigentlich war ich der Meinung, schon intensiv und tiefgreifend transformiert zu haben.",
  },
  {
    name: "Klientin",
    location: "",
    topic: "Energetische Heilsitzung",
    text: "Doch meine Heilsession am Freitag mit unserer 'Wunderheilerin', sollte mich eines besseren belehren. Tiefgreifend und intensiv und doch mit einer gewissen Leichtigkeit würde ich sanft durch die liebevolle und sanfte Art von Maria und der göttlichen Quelle von Altlasten befreit. Es ist unglaublich, was an diesem Wochenende energetisch passiert ist. So frei und kraftvoll habe ich mich noch nie gefühlt.",
  },
  {
    name: "Klientin",
    location: "",
    topic: "Energetische Heilsitzung",
    text: "Und das Schöne an der ganzen Sache ist, dass ich endlich ins spirituelle Wirken und Tun komme!",
  },
  {
    name: "Klientin",
    location: "",
    topic: "Energetische Heilsitzung",
    text: "Liebe Maria, ich kann Dir gar nicht sagen, wie dankbar ich Dir bin für dieses neue Lebensgefühl.",
  },
  {
    name: "Klientin",
    location: "",
    topic: "Energetische Heilsitzung",
    text: "Liebe Maria, es geht mir wirklich wesentlich besser seit unserer Session. Dieses Gefühl der Sinnlosigkeit ist weg, ich habe wieder große Freude an meinem Wirken. Und das Wichtigste: Ich kann meine Seele wieder bei mir fühlen. Es hat mir auch sehr geholfen zu erfahren, wo der Ursprung saß, damit ich es ganz loslassen kann. Ganz lieben Dank von Herzen. Bis demnächst und ganz viel Licht, Liebe, Leichtigkeit und magische Momente auch für dich.",
  },
  {
    name: "Klientin",
    location: "",
    topic: "Traumaauflösung",
    text: "Maria hat einen sehr reinen Wahrnehmungskanal und löst z.B. Themen und Traumata, die auf frühere Leben basieren effektiv auf. Ich habe mich mit den heftigsten Themen anvertraut und habe Meilensteine durch sie bewegen können. Ich bin Maria für ihre Arbeit zutiefst dankbar.",
  },
  {
    name: "Klientin",
    location: "",
    topic: "Energetische Heilsitzung",
    text: "Ich arbeite schon seit einigen Monaten mit Fabijenna und bin extrem dankbar, sie zu haben!",
  },
  {
    name: "Klientin",
    location: "",
    topic: "Energetische Heilsitzung",
    text: "Ich fühle, dass ich mich ihr mit meinen tiefsten Blockaden anvertrauen kann und sie diese mit ihrem liebenden Herzen in tiefer psychologischer Kompetenz, ihrem Hellsehen und energetischen Anbindung an aufgestiegene Meister schnell auflösen kann. Ich kann sie als Heilerin bedingungslos weiterempfehlen!",
  },
];
