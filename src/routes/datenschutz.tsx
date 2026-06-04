import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/datenschutz")({
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col selection:bg-gold selection:text-primary-foreground">
      {/* Navigation Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/60 py-4">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-2 group">
            <span className="font-display text-2xl tracking-wide text-ink group-hover:text-gold transition-colors">
              Maria Fabijenna
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-teal">
              Energetische Heilerin
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Zurück zur Startseite</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="eyebrow mb-3">Rechtliche Angaben</div>
        <h1 className="font-display text-4xl sm:text-5xl text-ink mb-6">Datenschutzerklärung</h1>
        <div className="gold-divider !mx-0 mb-12" />

        <div className="space-y-10 text-muted-foreground leading-relaxed text-sm">
          {/* Allgemeine Hinweise */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-ink border-b border-border/60 pb-2">1. Allgemeine Hinweise und Pflichtinformationen</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            <p className="font-medium text-foreground mt-4">Verantwortliche Stelle</p>
            <div className="bg-accent/20 border border-border/60 p-6 rounded-sm space-y-1 mt-2">
              <p className="font-semibold text-foreground">Maria Kröckel</p>
              <p>Goetheweg 15</p>
              <p>07422 Bad Blankenburg</p>
              <p className="pt-2">
                <span className="font-medium text-foreground">E-Mail:</span>{" "}
                <a href="mailto:mariafabijenna@gmx.de" className="hover:text-gold transition-colors underline decoration-gold/40">
                  mariafabijenna@gmx.de
                </a>
              </p>
            </div>
            <p className="mt-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>
          </section>

          {/* Datenerfassung */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-ink border-b border-border/60 pb-2">2. Datenerfassung auf dieser Website</h2>
            
            <h3 className="font-display text-xl text-foreground mt-6">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL (die zuvor besuchte Seite)</li>
              <li>Hostname des zugreifenden Rechners (IP-Adresse)</li>
              <li>Uhrzeit der Serveranfrage</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierfür müssen die Server-Logfiles erfasst werden.
            </p>

            <h3 className="font-display text-xl text-foreground mt-6">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) falls diese abgefragt wurde.
            </p>

            <h3 className="font-display text-xl text-foreground mt-6">Terminbuchung (Booking-Dialog)</h3>
            <p>
              Wenn Sie über unseren Buchungs-Dialog einen Termin vereinbaren, erfassen wir die für die Buchung und Durchführung des Termins erforderlichen Daten (z. B. Name, E-Mail-Adresse, Wunschtermin, Anliegen). 
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Anbahnung bzw. Durchführung unserer Dienstleistungen. Die Daten werden so lange gespeichert, wie es für die Erbringung der Dienstleistung und die Erfüllung gesetzlicher Aufbewahrungsfristen (z.B. steuerrechtliche Pflichten) erforderlich ist.
            </p>
          </section>

          {/* Drittanbieter */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-ink border-b border-border/60 pb-2">3. Plugins und Tools</h2>
            
            <h3 className="font-display text-xl text-foreground mt-6">Google Web Fonts (externes Hosting)</h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
            </p>
            <p>
              Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Webseitenbetreiber hat ein berechtigtes Interesse an der einheitlichen Darstellung des Schriftbildes auf seiner Webseite.
            </p>
            <p>
              Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift Ihres Computers genutzt. Weitere Informationen zu Google Web Fonts finden Sie unter{" "}
              <a
                href="https://developers.google.com/fonts/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors underline"
              >
                https://developers.google.com/fonts/faq
              </a>{" "}
              und in der Datenschutzerklärung von Google:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors underline"
              >
                https://policies.google.com/privacy
              </a>
              .
            </p>
          </section>

          {/* Rechte */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-ink border-b border-border/60 pb-2">4. Ihre Rechte als betroffene Person</h2>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
            </p>
            <p className="font-semibold text-foreground">Widerruf Ihrer Einwilligung zur Datenverarbeitung</p>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
            <p className="font-semibold text-foreground">Beschwerderecht bei der zuständigen Aufsichtsbehörde</p>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres üblichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
            </p>
            <p className="font-semibold text-foreground">Recht auf Datenübertragbarkeit</p>
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 bg-accent/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <div className="font-display text-xl text-ink">Maria Fabijenna</div>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/" className="hover:text-foreground transition-colors">Startseite</Link>
            <Link to="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
          </div>
          <div className="text-xs">© {new Date().getFullYear()} · Alle Rechte vorbehalten</div>
        </div>
      </footer>
    </div>
  );
}
