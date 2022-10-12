init: 
	npm i -g json-server && docker build . &&  docker run -d -p 8888:80   mindata 

start_server:
	json-server --watch db.json 

run:	
	docker run -d -p 8888:80   mindata  && make start_server


build:
    docker build .







