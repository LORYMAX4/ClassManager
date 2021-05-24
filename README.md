
![plansoft-icon-1 (1)](https://user-images.githubusercontent.com/51908859/113130686-a16dcf80-921c-11eb-9e65-a0821a6aab71.png)

# ClassManager

**Data emissione** : 31 marzo 2021

## Indice
- [Indice](#indice)
- [Gruppo di lavoro](#gruppo-di-lavoro)
- [Scopo del progetto](#scopo-del-progetto)
- [Richieste implementative](#richieste-implementative)
  - [Oggetti](#oggetti)
- [Modello Entità Relazione](#modello-entità-relazione)
- [Implementazione](#implementazione)
  - [Tecnologie/Linguaggi utilizzati](#tecnologielinguaggi-utilizzati)
- [Frontend](#frontend)
	- [Esecuzione](#esecuzione)
	- [Struttura e Componenti](#struttura-e-componenti)
		- [Home](#home)
		- [Elenco Studenti](#elenco-studenti)
		- [Elenco Classi](#elenco-classi)
		- [Dettaglio Studenti - Modale](#dettaglio-studenti---modale)
		- [Modifica Studente - Modale](#modifica-studente---modale)
		- [Eliminazione Studente - Alert](#eliminazione-studente---alert)
- [Backend](#backend)
	- [Classi](#classi)

---

## Gruppo di lavoro

- [PlanSoft](https://www.plansoft.it/) (Cliente e PM)
- [Leonardo Morganti](https://github.com/Leomorga) (Sviluppatore)
- [Leonardo Scrivere](https://github.com/scrivereleonardo) (Sviluppatore)
- [Lorenzo Merlini](https://github.com/LORYMAX4) (Sviluppatore)

## Scopo del progetto

Viene richiesta la creazione della parte di backend per la gestione degli studenti all'interno delle proprie classi. Le funzionalità che saranno implementate sono le seguenti:

- Visualizzazione di tutti o di un singolo studente.
- Inserimento, modifica e cancellazione di un determinato studente.
- Visualizzazione di tutte o di una singola classe.

Ad ogni dipendente è associato: un id identificativo, nome, cognome, codice fiscale, SIDI_CODE e l’id identificativa della propria classe di appartenenza.

## Richieste implementative

### Oggetti

Gli oggetti che dobbiamo trattare sono:
- Studente(id, nome, cognome, codice fiscale, SIDI_CODE)
- Classe(id, sezione, grado)

Inoltre gli oggetti sono collegati in questo modo:
- Una classe è composta da più studenti.

## Modello Entità Relazione

![unnamed (2)](https://user-images.githubusercontent.com/51908859/113143311-480d9c80-922c-11eb-9d4f-23f16bc941a6.png)

Studente(id, nome, cognome, codice fiscale, SIDI_CODE, classroom)

Classe(id, nome, grado)

## Implementazione

### Tecnologie/Linguaggi utilizzati

**Backend**
- Java
   - Linguaggio di programmazione utilizzato per lo sviluppo dell’applicazione tramite il framework Spring.
- Spring
  - Framework utilizzato per lo sviluppo di web application, quindi collegamento al database(MySql) ed esposizione delle API.
- Maven
  - Strumento utilizzato per facilitare la gestione delle dipendenze utilizzando il file pom.xml.
- Postman
  - Strumento utilizzato per verificare il corretto funzionamento delle API realizzate.
 
---

## Frontend 

### Esecuzione

Per eseguire l'applicazione frontend spostarsi nella direcotry `src/main/webapp/` ed eseguire il comando `npm run dev`.  
L'applicazione è accessibile sulla porta `3000` all'indirizzo `http://localhost:3000/`.

```
📦webapp
 ┣ 📂pages
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜hello.js
 ┃ ┣ 📂classrooms
 ┃ ┃ ┗ 📜modalClass.js
 ┃ ┣ 📂students
 ┃ ┃ ┣ 📜deleteAllert.js
 ┃ ┃ ┣ 📜modelForm.js
 ┃ ┃ ┣ 📜modelStudent.js
 ┃ ┃ ┣ 📜studenstList.js
 ┃ ┃ ┗ 📜studentForm.js
 ┃ ┣ 📜_app.js
 ┃ ┣ 📜classrooms.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜istruzioni.txt
 ┃ ┗ 📜students.js
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┗ 📜vercel.svg
 ┣ 📂styles
 ┃ ┣ 📜Home.module.css
 ┃ ┗ 📜globals.css
 ┣ 📜package-lock.json
 ┗ 📜package.json
```

### Struttura e Componenti

#### [Home](http://localhost:3000/)

Home page dell'aplicazione, permette la navigazione attrvaerso due pulsanti:
il primo, etichettato *Classi*, conduce ad una pagina in cui è possibile consultare la lista di classi.
il secondo, etichettato *Studenti*,  conduce ad una pagina in cui è possibile consultare la lista di studenti.

#### [Elenco Studenti](http://localhost:3000/students)

La pagina mette a disposizione la lista degli studenti; per ogni elemento della lista è possibile visualizzare i suoi dettagli, aggiornare i suoi dati oppure rimuoverlo dalla lista.

È presente inoltre un pulsante per l'aggiunta di un nuovo studente alla lista.

#### [Elenco Classi](http://localhost:3000/classroom)

La pagina permette la visualizzazione della lista delle classi. Per ogni classe è possibile visualizzare la sua lista dei suoi studenti ed apportare modifiche.

#### Dettaglio Studenti - Modale

Mostra i dettagli di un singolo studente:
- nome
- cognome
- codice sidi
- codice fiscale
- anno scolastico
- sezione

#### Modifica Studente - Modale

Offre la possibilità di modificare i dettagli di uno studente.

#### Eliminazione Studente - Alert

Prima dell'eliminazione effettiva di uno studente vieni fatta una ichiesta di conferma la rimozione.

---

## Backend


- Get Lista studenti= `/classmanager/students`

```
[
  {
    id: 1,
    name: "Lorenzo",
    surname: "Merlini",
    taxCode: "AAAAAA99A99A999A",
    sidiCode: "99999999",
    classroom: 1
  },
  {
    id: 2,
    name: "Mario",
    surname: "Rossi",
    taxCode: "BBBBBB77B77B777B",
    sidiCode: "77777777",
    classroom: 2
  }
]
```

- Get Studente = `/classmanager/students/{id}`

```
{
  id: 1,
  name: "Lorenzo",
  surname: "Merlini",
  taxCode: "AAAAAA99A99A999A",
  sidiCode: "99999999",
  classroom: 1
}
```

- POST Studente = `/classmanager/students/`

```
{
  id: 1,
  name: "Lorenzo",
  surname: "Merlini",
  taxCode: "AAAAAA99A99A999A",
  sidiCode: "99999999",
  classroom: 1
}
```

- PUT Studente = `/classmanager/students/{id}`

```
{
  name: "Lorenzo",
  surname: "Merlini",
  taxCode: "AAAAAA99A99A999A",
  sidiCode: "99999999",
  classroom: 1
}
```
- DELETE Studente = `/classmanager/students/{id}`

### Classi
- GET Lista classi = `/classmanager/classroom/`
```
[
  {
    id: 1,
    grade: 1,
    name: "NEE"
  },
  {
    id: 2,
    grade: 1,
    name: "DMME"
  }
]
```
- GET classe = `/classmanager/classroom/{id}`
```
{
  id: 1,
  grade: 1,
  name: "NEE"
}
```

##### [Torna all'indice](#indice)