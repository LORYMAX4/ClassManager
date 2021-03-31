![plansoft-icon-1 (1)](https://user-images.githubusercontent.com/51908859/113130686-a16dcf80-921c-11eb-9e65-a0821a6aab71.png)

# ClassManager

**Data emissione** : 31 marzo 2021

## Indice
- [Gruppo di lavoro](#gruppo-di-lavoro)
- [Scopo del progetto](#scopo-del-progetto)
- [Richieste implementative](#richieste-implementative)
- [Modello E/R](#modello-entità-relazione)
- [Endpoint](#endpoint)
- [Implementazione](#implementazione)

## Gruppo di lavoro
- [PlanSoft](https://www.plansoft.it/) (Cliente e PM)
- [Leonardo Morganti](https://github.com/Leomorga) (Sviluppatore)
- [Leonardo Scrivere](https://github.com/scrivereleonardo) (Sviluppatore)
- [Lorenzo Merlini](https://github.com/LORYMAX4) (Sviluppatore)

## Scopo del progetto
Viene richiesta la creazione della parte di backend per la gestione degli studenti all'interno delle proprie classi. Le funzionalità che saranno implementate sono le seguenti:

- Visualizzazione di tutti o di un singolo dipendente.
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

## Endpoint
- [Studenti](#studenti)
- [Classi](#classi)

### Studenti
- Get Lista studenti= `/classmanager/students`
```
[
  {
    id: 1,
    name: "Lorenzo",
    surname: "Merlini",
    taxCode: “AAAAAA99A99A999A”,
    sidiCode: “99999999”,
    classroom: 1
  },
  {
    id: 2,
    name: "Mario",
    surname: "Rossi",
    taxCode: “BBBBBB77B77B777B”,
    sidiCode: “77777777”,
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
  taxCode: “AAAAAA99A99A999A”,
  sidiCode: “99999999”,
  classroom: 1
}
```
- POST Studente = `/classmanager/students/`
```
{
  id: 1,
  name: "Lorenzo",
  surname: "Merlini",
  taxCode: “AAAAAA99A99A999A”,
  sidiCode: “99999999”,
  classroom: 1
}
```
- PUT Studente = `/classmanager/students/{id}`
```
{
  name: "Lorenzo",
  surname: "Merlini",
  taxCode: “AAAAAA99A99A999A”,
  sidiCode: “99999999”,
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
    name: “NEE”
  },
  {
    id: 2,
    grade: 1,
    name: “DMME”
  }
]
```
- GET classe = `/classmanager/classroom/{id}`
```
{
  id: 1,
  grade: 1,
  name: “NEE”
}
```

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
 

##### [Torna all'indice](#indice)
