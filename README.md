## Indice
- [Indice](#indice)
- [Gruppo di lavoro](#gruppo-di-lavoro)
- [Scopo del progetto](#scopo-del-progetto)
- [Esecuzione con docker](#esecuzione-con-docker)
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

---
## Esecuzione usando docker

1. Esecuzione del container mysql, sostituire <root> con il percorso assoluto al progetto:

```Bash
docker run --name db_classmanager -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -v <root>/src/main/docker/database:/docker-entrypoint-initdb.d -v <root>/database_data:/var/lib/mysql mysql
```

2. Appena il container db_classmanager è in stato di run possiamo eseguire la build del backend usando maven:

```Bash
mvn clean package
```

3. La build genera un file jar all'interno della directory target con il quale possiamo generare l'immagine del backend di classmanager:

```Bash
docker build -t classmanager/backend . -f src/main/docker/backend/Dockerfile
```

4. Generata l'immagine è possibile eseguirla generando la connessione con il database:

```Bash
docker run -p 8080:8080 --link=db_classmanager:localhost classmanager/backend
```

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
