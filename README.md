<h1 align="center">⛴ Salone Nautico di Venezia</h1>
<h3 align="center">React Native app</h3>
<br />

![screenshots](https://raw.githubusercontent.com/bizzarrowebgroup/Salone-Nautico-Venezia-2020/master/preview.jpg)

![Expo Publish](https://github.com/bizzarrowebgroup/Salone-Nautico-Venezia-2020/workflows/Expo%20Publish/badge.svg)
<br />

Codice sorgente dell'App del [Salone Nautico di Venezia](https://www.salonenautico.venezia.it/).
Fatta con React Native e Expo, e Typescript.

### 📦 Incomicia ora

Installa le dipendenze puoi usare npm o yarn, consigliamo yarn:

```sh
$ yarn
```

Avvia l'app:

```sh
$ yarn start
```

Per avviare l'app in un OS specifico:

```sh
$ yarn ios | yarn android
```

Copia questi 2 files e rimpiazzali con i tuoi

```
$ cp app.example.json app.json
$ cp secret.example.ts secret.ts
```

### 👩🏾‍💻 Sviluppo

- Eslint è utilizzato e ti consigliamo di usarlo nel tuo [editor](https://eslint.org/docs/user-guide/integrations).

- Typescript è utilizzato e ti consigliamo di usarlo nel tuo [editor](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support).

Puoi controllare manualmente la pulizia del codice con il seguende comando

```sh
yarn lint
```

oppure

```sh
yarn typescript
```

### 🛠 Testing

Usa il seguente comando per svolgere i test dei componenti nel progetto

```
$ yarn test
```

Usa questo per aggiornare i file di test

```
$ yarn test -u
```

Use questo per avviare i test in modalità watch mode mentre sviluppi:

```
$ yarn test --watch
```

### 📚Storybook

Componenti del tipo Storyies (\*.story.tsx) possono essere aggiungi al file `storyLoader.js` con :

```
$ yarn prestorybook
```

### 👨‍💻 Sviluppatori

[Canevese Jonathan](https://github.com/Derewith/) - [Giacomo Colombera](https://github.com/jackjt)

### ©️ Open source - licence

The repo is under GNU General Public License v3.0