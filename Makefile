
# Leave as if if you 're just using, customizing or extending the machine
# Change ip to your docker account if you plan to package and release your own docker image
DOCKER_ACCOUNT=objectisadvantag

# Change this if you use DockerToolbox
DOCKER_HOST_IPADDRESS=192.168.99.101


default: dev

dev:
	DEBUG=samples,sparkbot node minimalist.js

run:
	(lt -s sparkbot -p 8080 &)
	node minimalist.js

dimage:
	docker build -t $(DOCKER_ACCOUNT)/sparkbot-samples .

ddev: 
	docker run -it -p 8080:8080 $(DOCKER_ACCOUNT)/sparkbot-samples

drun: 
	(lt -s sparkbot -l $(DOCKER_HOST_IPADDRESS) -p 8080 &)
	docker run -it -p 8080:8080 $(DOCKER_ACCOUNT)/sparkbot-samples
    

