<p align="right">Documento di analisi</p>

![plansoft-icon-1 (1)](https://user-images.githubusercontent.com/51908859/113130686-a16dcf80-921c-11eb-9e65-a0821a6aab71.png)

# ClassManager

**Data emissione** : 31 marzo 2021

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

## Modello E/R
![unnamed (2)](https://user-images.githubusercontent.com/51908859/113143311-480d9c80-922c-11eb-9d4f-23f16bc941a6.png)


