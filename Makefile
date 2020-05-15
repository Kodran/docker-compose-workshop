db:
	docker-compose up -d mongo mongo-express mysql

stop:
	docker-compose stop
	docker-compose rm

rebuild-run:
	docker-compose up --build frontend backend job

run:
	docker-compose up frontend backend job