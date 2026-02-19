# Dag 1
Vandaag hadden we een workshop over HTML-inputs en formulier-validatie. Ik werkte samen met Jelle, maar ik heb vandaag vooral aan de HTML-structuur gewerkt.

Belangrijkste inzicht (UX)

Ik leerde dat input:invalid ervoor zorgt dat velden al vanaf het openen van de pagina als “fout” kunnen worden gestyled.
Dat is slechte UX, omdat required-velden meteen invalid zijn, nog vóórdat de gebruiker iets heeft gedaan. Dit botst met het idee van validatie op het juiste moment (niet te vroeg).

Mijn aanpak vandaag

Omdat er veel tegelijk te zien was, heb ik ervoor gekozen om per onderdeel te werken:

Ik heb veel stukken tijdelijk in comment gezet.

Daarna werkte ik stap voor stap, zodat ik overzicht hield en mijn HTML netjes en duidelijk bleef.

# Dag 2
Wat ik heb uitgewerkt

Vandaag heb ik het eerste deel (naam/gegevens en nummers) beter georganiseerd en extra validatie toegevoegd.

1) BSN: precies 9 cijfers

Ik probeerde af te dwingen dat er exact 9 cijfers ingevuld kunnen worden:

<label for="bsn">Bsn overledene</label>
<input
  type="text"
  name="bsn"
  id="bsn"
  inputmode="numeric"
  pattern="^[0-9]{9}$"
  minlength="9"
  maxlength="9"
  required
/>

Hier heb ik gewerkt met pattern, minlength en maxlength om de invoer te beperken tot exact negen cijfers.

2) Overlijdensdatum: niet in de toekomst

Ik stelde een maximumdatum in zodat de datum niet in de toekomst kan liggen:

<label for="overlijdensdatum">Overlijdensdatum</label>
<input type="date" name="overijdensdatum" id="overlijdensdatum" max="2026-02-17" required />

Ik ontdekte ook dat een datum alleen correct werkt in het formaat YYYY-MM-DD (dus niet 17-02-2026).

3) Autocomplete

Ik leerde dat autocomplete niet via CSS gaat, maar als HTML-attribuut wordt toegevoegd (bijvoorbeeld autocomplete="name").
Dat was nieuw voor mij, omdat ik eerst dacht dat dit via styling werd geregeld.

Ik merk dat ik langzaam werk, maar daardoor wordt mijn HTML wel netter en overzichtelijker.
Wat ik nog lastig vind is vooral de styling van formulieren — dat kost mij op dit moment het meeste moeite.
Plan:
-Verder met de styling van het formulier
-Extra uitleg/video’s zoeken over form styling, omdat ik de uitleg op MDN nog niet voldoende vond