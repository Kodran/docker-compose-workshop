## Docker compose workshop

# Main files

- docker-compose
- Makefile

# Commands
```sh
- make db (run mongodb, mongo express dashboard, mysql)
- make run (run react frontend, nodejs backend api, netcore 3.1 job)
- make stop (stop running containers and delete database volumes )

# Tips

Always run `make db` before run `make run`, it creates dbs schema
Remember data bases are running in backgrond, if you want to stop them or remove the data, just type: `make stop`

# Sites

Frontend:
- http://localhost:3000

Backend:
- http://localhost:9000

Mongo express:
- http://localhost:8081
