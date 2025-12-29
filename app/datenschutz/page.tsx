import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der ALS-Aknur GmbH"
}

export default function DatenschutzPage() {
  return (
    <div className='flex flex-col bg-white font-sans min-h-screen'>
      <div className='w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 min-[1920px]:px-[212px] pt-[117px] pb-16'>
        <h1 className='text-4xl font-bold text-gray-900 mb-8'>
          Datenschutzerklärung
        </h1>

        <div className='prose prose-lg max-w-none space-y-8 text-gray-700'>
          <section>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              1. Datenschutz auf einen Blick
            </h2>
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold text-gray-900'>
                Allgemeine Hinweise
              </h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können. Ausführliche
                Informationen zum Thema Datenschutz entnehmen Sie unserer unter
                diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className='text-xl font-semibold text-gray-900'>
                Datenerfassung auf dieser Website
              </h3>
              <p>
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              </p>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
                "Hinweis zur Verantwortlichen Stelle" in dieser
                Datenschutzerklärung entnehmen.
              </p>

              <p>
                <strong>Wie erfassen wir Ihre Daten?</strong>
              </p>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie
                in ein Kontaktformular eingeben.
              </p>
              <p>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
                Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
                allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
                Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
                automatisch, sobald Sie diese Website betreten.
              </p>

              <p>
                <strong>Wofür nutzen wir Ihre Daten?</strong>
              </p>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
                der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
                Nutzerverhaltens verwendet werden.
              </p>

              <p>
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
              </p>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen
                Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung
                oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung
                zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
                jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
                unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
                Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
              <p>
                Hierzu sowie zu weiteren Fragen zum Datenschutz können Sie sich
                jederzeit an uns wenden.
              </p>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              2. Verantwortliche Stelle
            </h2>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>
            <div className='bg-gray-50 p-6 rounded-lg mt-4'>
              <p className='font-semibold mb-2'>Oğuzhan Aknur</p>
              <p>Friedrich-Alfredstr.182</p>
              <p>47226 Duisburg</p>
              <p>Deutschland</p>
              <p className='mt-4'>
                Telefon:{" "}
                <a href='tel:+491731673675' className='text-blue-600 hover:underline'>
                  +49 173 167 36 75
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a
                  href='mailto:oguzhanaknur@als-aknurgmbh.com'
                  className='text-blue-600 hover:underline'
                >
                  oguzhanaknur@als-aknurgmbh.com
                </a>
              </p>
            </div>
            <p className='mt-4'>
              Verantwortliche Stelle ist die natürliche oder juristische Person,
              die allein oder gemeinsam mit anderen über die Zwecke und Mittel der
              Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen
              o. Ä.) entscheidet.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 className='text-xl font-semibold text-gray-900 mb-3'>
              Server-Log-Dateien
            </h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen
              in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
              übermittelt. Dies sind:
            </p>
            <ul className='list-disc pl-6 space-y-2 mt-4'>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className='mt-4'>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
              vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art.
              6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
              Interesse an der technisch fehlerfreien Darstellung und der
              Optimierung seiner Website – hierzu müssen die Server-Log-Dateien
              erfasst werden.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              4. Kontaktaufnahme per E-Mail oder Formular
            </h2>
            <p>
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen,
              werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen
              dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
              wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className='mt-4'>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
              zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
              unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
              gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
            </p>
            <p className='mt-4'>
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns,
              bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
              widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach
              abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
              Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>5. Cookies</h2>
            <p>
              Diese Website verwendet nur technisch notwendige Cookies. Diese Cookies
              sind für das ordnungsgemäße Funktionieren der Website erforderlich und
              können nicht deaktiviert werden.
            </p>
            <p className='mt-4'>
              Die Verwendung technisch notwendiger Cookies erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an der
              Speicherung von Cookies zur technisch fehlerfreien und optimierten
              Bereitstellung unserer Dienste.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              6. Rechte der betroffenen Personen
            </h2>
            <p>
              Sie haben folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
            </p>
            <ul className='list-disc pl-6 space-y-2 mt-4'>
              <li>
                <strong>Recht auf Auskunft</strong> (Art. 15 DSGVO): Sie können
                Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten
                verlangen.
              </li>
              <li>
                <strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO): Sie haben
                das Recht, die Berichtigung unrichtiger oder die Vervollständigung
                Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.
              </li>
              <li>
                <strong>Recht auf Löschung</strong> (Art. 17 DSGVO): Sie können die
                Löschung Ihrer personenbezogenen Daten verlangen, soweit nicht
                gesetzliche Aufbewahrungspflichten entgegenstehen.
              </li>
              <li>
                <strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18
                DSGVO): Sie können die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten verlangen.
              </li>
              <li>
                <strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO): Sie
                haben das Recht, Ihre personenbezogenen Daten in einem strukturierten,
                gängigen und maschinenlesbaren Format zu erhalten.
              </li>
              <li>
                <strong>Widerspruchsrecht</strong> (Art. 21 DSGVO): Sie können der
                Verarbeitung Ihrer personenbezogenen Daten aus Gründen, die sich aus
                Ihrer besonderen Situation ergeben, jederzeit widersprechen.
              </li>
              <li>
                <strong>Widerruf der Einwilligung</strong> (Art. 7 Abs. 3 DSGVO): Wenn
                Sie eine Einwilligung erteilt haben, können Sie diese jederzeit
                widerrufen.
              </li>
            </ul>
            <p className='mt-4'>
              <strong>Beschwerderecht bei einer Aufsichtsbehörde</strong>
            </p>
            <p>
              Unbeschadet eines anderweitigen verwaltungsrechtlichen oder
              gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei
              einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres
              Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen
              Verstoßes, zu, wenn Sie der Ansicht sind, dass die Verarbeitung der
              Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              7. SSL- bzw. TLS-Verschlüsselung
            </h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
              vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die
              Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung.
              Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
              des Browsers von "http://" auf "https://" wechselt und an dem
              Schloss-Symbol in Ihrer Browserzeile.
            </p>
            <p className='mt-4'>
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten,
              die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              8. Änderung dieser Datenschutzerklärung
            </h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
              stets den aktuellen rechtlichen Anforderungen entspricht oder um
              Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen,
              z. B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt
              dann die neue Datenschutzerklärung.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

