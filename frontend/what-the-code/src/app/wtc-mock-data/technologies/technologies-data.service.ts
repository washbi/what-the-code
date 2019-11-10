import {Injectable} from "@angular/core";
import {TecType} from "./tec-type";
import {Technology} from "./technology";

@Injectable({
  providedIn: 'root',
})
export class TechnologiesDataService {

  private tecTypes: TecType[] = [
    { id: 0, position: 2, name: 'Frontend'},
    { id: 1, position: 3, name: 'Backend'},
    { id: 5, position: 4, name: 'Database'},
    { id: 2, position: 5, name: 'Security'},
    { id: 3, position: 6, name: 'Management'},
    { id: 4, position: 7, name: 'Development'},
    { id: 7, position: 8, name: 'Paradigms'},
    { id: 6, position: 1, name: 'Your Techstack'}
  ];

  private technologies: Technology[] = [
    { id: 0, position: 1, type: this.tecTypes[0], name: 'Angular', description: 'Framework with Typescript'},
    { id: 1, position: 2, type: this.tecTypes[0], name: 'Vue', description: 'Framework'},
    { id: 2, position: 3, type: this.tecTypes[0], name: 'React JS', description: 'Framework'},
    { id: 3, position: 4, type: this.tecTypes[0], name: 'Angular Material', description: 'Framework for Styles and Animations working with Angular'},
    { id: 4, position: 1, type: this.tecTypes[1], name: 'Spring Boot', description: 'Das Spring Framework ist ein quelloffenes Framework für die Java-Plattform. Ziel des Spring-Frameworks (kurz Spring) ist es, die Entwicklung mit Java/Java EE zu vereinfachen und gute Programmierpraktiken zu fördern.\n' +
        '\n' +
        'Spring bietet mit einem breiten Spektrum an Funktionalität eine ganzheitliche Lösung zur Entwicklung von Anwendungen und deren Geschäftslogiken; dabei steht die Entkopplung der Applikationskomponenten im Vordergrund.\n' +
        '\n' +
        'Spring bietet das Zusammenspiel unterschiedlichster Plattformen und Tools, von J2EE-Servern über Persistenztools bis hin zur Web-Integration.'},
    { id: 5, position: 2, type: this.tecTypes[1], name: 'Spring MVC', description: 'Framework '},
    { id: 6, position: 3, type: this.tecTypes[1], name: 'Laravel', description: 'PHP Framework '},
    { id: 7, position: 1, type: this.tecTypes[2], name: 'MySQL', description: 'Der MySQL Server ist ein relationales Datenbankverwaltungssystem. Es ist als Open-Source-Software sowie als kommerzielle Enterpriseversion für verschiedene Betriebssysteme verfügbar und bildet die Grundlage für viele dynamische Webauftritte.'},
    { id: 8, position: 4, type: this.tecTypes[2], name: 'PostgreSQL', description: ''},
    { id: 9, position: 2, type: this.tecTypes[2], name: 'Firebase', description: 'Use it with Android/iOS'},
    { id: 10, position: 3, type: this.tecTypes[2], name: 'PouchDB', description: 'indexed db local on the browser'},
    { id: 11, position: 4, type: this.tecTypes[2], name: 'MongoDB', description: 'NoSQL database'},
    { id: 12, position: 1, type: this.tecTypes[4], name: 'Trello', description: ''},
    { id: 13, position: 2, type: this.tecTypes[4], name: 'Confluence', description: ''},
    { id: 14, position: 3, type: this.tecTypes[4], name: 'RedHat', description: 'open source'},
    { id: 15, position: 4, type: this.tecTypes[4], name: 'Git Issues', description: ''},
    { id: 16, position: 1, type: this.tecTypes[5], name: 'IntelliJ', description: ''},
    { id: 17, position: 2, type: this.tecTypes[5], name: 'NetBeans', description: ''},
    { id: 18, position: 3, type: this.tecTypes[5], name: 'Eclipse', description: ''},
    { id: 19, position: 1, type: this.tecTypes[3], name: 'Spring Security', description: ''},
    { id: 20, position: 4, type: this.tecTypes[0], name: 'Sourcemaps', description: 'Sourcemaps helps you to debug typescript in Chrome. It maps the original typescript files to the main.bundle.js'},
    { id: 21, position: 5, type: this.tecTypes[0], name: 'Augury', description: 'Chrome Extension Tool to analyze Angular components and its data values'},
    { id: 22, position: 1, type: this.tecTypes[7], name: 'STUPID and SOLID', description: 'Stupid: Singleton, Tight Coupling, Untestability, Premature Optimization, Indescriptive Naming, Duplication. Solid: Single Responsibility Principle, Open/Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, Dependenxy Inversion Principle'},
    { id: 23, position: 10, type: this.tecTypes[1], name: 'Apache Webserver', description: 'Der Apache HTTP Server ist ein Produkt der Apache Software Foundation und der meistbenutzte Webserver im Internet. Über einen Webserver werden in der Regel HTML-Seiten (Internetseiten), Bilder, Dokumente etc. für einen Benutzer zur Verfügung gestellt, der diese z.B. über einen Browser anfragt.'},
    { id: 24, position: 11, type: this.tecTypes[0], name: 'Google Web Toolkit (GWT)', description: 'Das Google Web Toolkit (GWT) ist ein Framework zur Entwicklung von Webanwendungen. Es wurde am 17. Mai 2006 von Google als freie Software unter Version 2.0 der Apache-Lizenz veröffentlicht. GWT enthält insbesondere ein Widget-Paket zur Gestaltung der graphischen Oberfläche (GUI).\n' +
        '\n' +
        'Was das GWT im Wesentlichen von anderen Frameworks dieser Art unterscheidet ist die Tatsache, dass auch der client-seitige Code komplett in Java erstellt werden kann, was erhebliche Vorteile in der Entwicklung mit sich bringt, da bewährte Entwicklungsumgebungen benutzt werden können.'},
    { id: 25, position: 1, type: this.tecTypes[7], name: 'Objektrelationale Abbildung  (ORM)', description: 'Objektrelationale Abbildung (englisch object-relational mapping, ORM) ist eine Technik der Softwareentwicklung, mit der ein in einer objektorientierten Programmiersprache geschriebenes Anwendungsprogramm seine Daten-Objekte in einer relationalen Datenbank ablegen kann.\n' +
        '\n' +
        'Dem Programm erscheint die Datenbank dann als objektorientierte Datenbank, was die Programmierung erleichtert.'},
    { id: 26, position: 12, type: this.tecTypes[2], name: 'Hibernate', description: 'Implementiert wird ORM (vgl. oben) normalerweise mit Klassenbibliotheken, wie beispielsweise Hibernate für die Programmiersprache Java oder SQLAlchemy für Python.'},
    { id: 27, position: 13, type: this.tecTypes[1], name: 'Tomcat Application Server', description: 'Ein Anwendungsserver (engl. application server) ist im Allgemeinen ein Server in einem Computernetzwerk, auf dem Anwendungsprogramme ausgeführt werden. Im engeren Sinne bezeichnet der Begriff eine Software, die spezielle Dienste zur Verfügung stellt, wie beispielsweise Transaktionen, Authentifizierung oder den Zugriff auf Verzeichnisdienste und Datenbanken über definierte Schnittstellen.\n' +
        '\n' +
        'Ein spezieller Open Source Application Server ist der Apache Tomcat, der die Ausführung von Java-Code ermöglicht.'},
    { id: 28, position: 14, type: this.tecTypes[3], name: 'Single Sign On (SSO)', description: 'Single Sign-on (engl. single sign-on, kurz SSO, mitunter als „Einmalanmeldung“ übersetzt) bedeutet, dass ein Benutzer nach einer einmaligen Authentifizierung an einem Arbeitsplatz auf alle Rechner und Dienste, für die er lokal berechtigt (autorisiert) ist, am selben Arbeitsplatz zugreifen kann, ohne sich jedes Mal neu anmelden zu müssen. Wechselt der Benutzer den Arbeitsplatz, wird die Authentifizierung, wie auch die lokale Autorisierung, hinfällig.'},
    { id: 29, position: 15, type: this.tecTypes[3], name: 'AD / LDAP', description: 'Der Verzeichnisdienst von Microsoft Windows Server heißt Active Directory (AD). (Ab der Version Windows Server 2008 wird die Kernkomponente als Active Directory Domain Services (ADDS) bezeichnet.)\n' +
        '\n' +
        'Bei einem Verzeichnis (englisch: directory) handelt es sich um eine Zuordnungsliste wie zum Beispiel bei einem Telefonbuch, das Telefonnummern den jeweiligen Anschlüssen (Besitzern) zuordnet.\n' +
        '\n' +
        'Active Directory ermöglicht es, ein Netzwerk entsprechend der realen Struktur des Unternehmens oder seiner räumlichen Verteilung zu gliedern. Dazu verwaltet es verschiedene Objekte in einem Netzwerk wie beispielsweise Benutzer, Gruppen, Computer, Dienste, Server, Dateifreigaben und andere Geräte wie Drucker und Scanner und deren Eigenschaften. Mit Hilfe von Active Directory kann ein Administrator die Informationen der Objekte organisieren, bereitstellen und überwachen.\n' +
        '\n' +
        'Den Benutzern des Netzwerkes können Zugriffsbeschränkungen erteilt werden. So darf zum Beispiel nicht jeder Benutzer jede Datei ansehen oder jeden Drucker verwenden.\n' +
        '\n' +
        'Das Lightweight Directory Access Protocol (LDAP) ist ein Anwendungsprotokoll aus der Netzwerktechnik. Es erlaubt die Abfrage und die Modifikation von Informationen eines Verzeichnisdienstes.'},

  ];

  public getTecTypes(): TecType[] {
    return this.tecTypes;
  }

  public getTechnologies(): Technology[] {
    return this.technologies;
  }
}
