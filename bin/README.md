This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

- Visualizzazione di tutti o di un singolo studente.
- Inserimento, modifica e cancellazione di un determinato studente.
- Visualizzazione di tutte o di una singola classe.

### Studenti

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

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

