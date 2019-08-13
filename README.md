# photos-service

## try it out!

- [ ] grab a copy with `git clone`
- [ ] configure keys in `src/config/unsplash.js`
- [ ] run `npm install`
- [ ] run `npm run db-dev` and sign into MySQL database
- [ ] run `npm run dev` to build, serve, and render service
- [ ] click [this](http://localhost:3000/) to open in browser

## requirements

#### a deployed and scaled photos service for Airbnb, which:

- supports at least 100 requests per second on EC2 using a t2.micro instance
- uses performance improvements to support a test load up to 10K requests per second

## API routes

- `post` that creates a new record using `/retrieve/:id`
- `get` that reads all records using `/retrieve`
- `put` that updates an existing record using `/retrieve/:id`
- `delete` that deletes an existing record using `/retrieve/:id`
