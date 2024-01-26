# Programmieraufgabe

## Taschenrechner

**Klone das Repository**: https://github.com/devs-group/calculator-fatih

### Styling

* Designe einen anschaulichen (aber einfachen) Taschenrechner mit HTML und CSS
* Folgendes soll zu sehen sein:
    - [ ] Eingabefeld (Read Only), welches den aktuellen Wert anzeigt
    - [ ] Clear Funktion: Löschen der gesamten Eingabe
    - [ ] Operatoren: Dividieren ( **/** ), Multiplizieren ( ***** ) , Minus ( **-** ) , Plus ( **+** ), Klammern (Auf, Zu) und Gleichheitszeichen ( **=** )
    - [ ] Funktionen: Prozentrechnung
    - [ ] Zahlen: 0 bis 9, Punkt für Gleitkomma

### Funktionalität

> Hinweis: Die Funktionalitäten sollen durch Nutzung aller Möglichkeiten mit Angular JS, reaktiv und korrekt implementiert werden

* Zahleneingabe
    - [ ] Wird eine Zahl ausgewählt, soll diese oben im Eingabefeld erscheinen
    - [ ] Wird eine weitere ausgewählt, soll diese hinten angehängt werden
        * Beispiel:
            * `Wir sehen: ~leer~`
            * `Auswahl 1: 1`
            * `Auswahl 0: 10`
* Operatoreneingabe
    - [ ] Wird einer der Operatoren ausgewählt, soll im Eingabefeld das Zeichen ( /, *, +, -, (, ), . ) hinten angehängt werden. Das Gleichheitszeichen ist hiervon ausgenommen.
        * Beispiel:
            * `Wir sehen: 10`
            * `Auswahl *: 10 *`
            * `Auswahl (: 10 * (`
            * `Auswahl 3: 10 * ( 3`
            * `Auswahl 5: 10 * ( 35`
            * `Auswahl .: 10 * ( 35.`
* Funktionseingabe
    - [ ] Wird die Prozentrechnung ausgewählt, soll die **nächstgelegene Zahl, an der sich aktuell der Cursor befindet**, in ihren Gleitkommawert umgewandelt werden
        * Beispiel:
            * `Wir sehen: 10 * ( 35.5 + |5 )`
            * `Der Cursor blinkt an der Stelle 5 (siehe | links neben der 5, es kann aber auch rechts davon sein)`
            * `Das Ergebnis sollte dann sein: 10 * ( 35.5 + 0.05 )`
  
* Gleichheitszeichen
    - [ ] Wird das Gleichheitszeichen ausgewählt soll die angezeigte Kalkulation durchgeführt werden
        * Hierbei ist es wichtig dass die korrekte mathematische Reihenfolge, beispielsweise “Multiplikation vor Addition” oder “Klammer zuerst” berücksichtigt wird
    - [ ] Sollte die Kalkulation
        * **einen Fehler** werfen: Soll dieser abgefangen werden und ein Hinweis erscheinen
        * **funktioniert haben**: Soll der Wert im Inputfeld durch den neu berechneten Wert ersetzt werden

### Bedingungen

- [ ] Genauigkeit und Fehlerbehandlung: Das Ergebnis sollte immer **auf 3 Nachkommastellen** gerundet werden. Stelle sicher, dass der Rechner hierbei keine Rundungsfehler enthält.

### Abschluss

- [ ] Schreibe ein paar “good-case” und ein paar “bad-case” Unit Tests zum Prüfen von verschiedenen Kombinationen, angefangen von einfacher Addition zu komplexeren, Gleitkommaberechnungen mit Klammersetzung
- [ ] Erstelle einen neuen Branch mit einem Namen deiner Wahl
- [ ] Erstelle einen Commit mit einer angemessenen Nachricht
- [ ] Erstelle einen Pull Request auf Github

Fertig! Vielen Dank für deine Teilnahme und gutes Gelingen 🙂
