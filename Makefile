db:
	docker-compose up -d mongo mongo-express mysql

stop:
	docker-compose stop
	docker-compose rm

run:
	docker-compose up frontend backend job