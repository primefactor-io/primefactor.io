# Website

Code for the Primefactor Website located at
[primefactor.io](https://primefactor.io).

Built with [Deno](https://deno.com) and [Lume](https://lume.land).

## Setup

1. `git clone <url>`
2. `cd <name>`
3. `asdf install` (optional)
4. `cp .env.example .env.local`
5. Update `.env.local`
6. `direnv allow` (optional)
7. `deno task serve`

## Useful Commands

```sh
deno task serve
deno task build

deno task lume [-h]
deno task lume upgrade

deno lint
deno fmt
```
