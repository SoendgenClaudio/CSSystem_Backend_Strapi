#!/bin/bash

echo "### GIT PULL ###"
# Backend pull (Startverzeichnis)
git pull
# Frontend aktualisieren
cd ../CSSystem_Website || exit 1
git pull
# Zurück zum Backend-Verzeichnis
cd ../CSSystem_Backend_Strapi || exit 1   # <--- Name angepasst

echo "### STOP + REMOVE alte Container falls vorhanden ###"
sudo docker compose down

echo "### BUILD + START neue Container ###"
sudo docker compose up -d --build

echo "### FERTIG ###"
