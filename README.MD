# Bliss Full Stack Software Engineer Test
## Fake eCommerce Store

### Used technologies

- [Node.js] - a cross-platform JavaScript runtime environment
- [Express.js] - fast, minimalist web framework for Node.js
- [Next.js] - React Framework
- [TypeORM] - feature rich ORM that can be used with TypeScript and JavaScript (ES5, ES6, ES7, ES8)
- [Docker Compose] - a tool for defining and running multi-container applications

## Installation

Clone this repository:

```
git clone https://github.com/YevhenLeonenko/assessment
```

After cloning the repository, navigate to `api` folder and install dependencies:

```sh
cd assessment/api && npm i
```
Next, run the same command from `frontend` directory, or just copy adn run this command:

```sh
cd ../frontend && npm i
```

## Starting up API

**1**- Spin up the DB container at first by navigating to `api` directory from repository root and running the following command 
```sh
docker-compose up -d
```

**2**- Apply DB migrations so ORM would create required tables:
```sh
npm run typeorm migration:run
```

**3**- Start development server by running following:

```sh
npm run dev
```

**4**- Trigger DB population by test data by sending `GET` request to [http://localhost:4000/products/seed],
the easiest way is just to open this link in a browser

## Starting up Frontend

Navigate to `frontend` directory from repository root and execute:
```sh
npm run dev
```

### Notes

**1** Ideally, adding products to cart and wishlist should be connected to API so it would be possible to save user session and restore it when user closes the app and comes back.
As an alternative, using localstorage to save cart and wishlist data would be a possible solution as well

**2** In real life scenario, validation rules in checkout steps should be also implemented depending on field type/business requirements, e.g. credit card number, format, expiration date, etc


[Node.js]: https://nodejs.org
[Next.js]: https://nextjs.org
[Express.js]: https://expressjs.com
[TypeORM]: https://typeorm.io/
[Docker Compose]: https://docs.docker.com/compose/install/
[http://localhost:4000/products/seed]: http://localhost:4000/products/seed
