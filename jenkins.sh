#!/bin/bash
su - jenkins <<!
jenkins
docker tag gabemanfroi/ps_website:production gabemanfroi/ps_website:production
docker push gabemanfroi/ps_website:production
microk8s kubectl delete -f /home/gabriel/ps_hosted_websites/proserv_website/deployment.yml
microk8s kubectl apply -f /home/gabriel/ps_hosted_websites/proserv_website/deployment.yml
docker rmi gabemanfroi/ps_website:production
!