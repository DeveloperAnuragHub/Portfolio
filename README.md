# Portfolio (MERN)

This folder contains a MERN portfolio project.

Folders:
- `server` - Express API and MongoDB models
- `client` - Vite + React frontend

Quick start (Windows PowerShell):

Server

```powershell
cd server; npm install; Copy-Item .env.example .env -Force; npm run dev
```

Seed the database (after MongoDB is running locally):

```powershell
cd server; npm run seed
```

Client

```powershell
cd client; npm install; npm run dev
```

Notes:
- The client expects the API at http://localhost:5000
- Ensure MongoDB is running locally or set `MONGO_URI` in `server/.env`.

Docker (quick start)

Make sure Docker is running, then from the `Portfolio` folder:

```powershell
docker compose up --build
```

This will start MongoDB, the server and the client. The API will be reachable at `http://localhost:5000`.

Project structure

```
Portfolio/
	server/        # Express API, Mongoose models, seed script, Dockerfile
	client/        # Vite + React app, Dockerfile
	docker-compose.yml
	README.md
	.gitignore
```



### Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

Note: All changes must be approved by the repository owner before they can be merged.
