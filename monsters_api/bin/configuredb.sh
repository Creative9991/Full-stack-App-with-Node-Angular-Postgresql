#!/bin/bash
# export PGPASSWORD = 'mukesh_password'

database="monstersdb"

echo "Configuring database: $database"

dropdb -U mukesh monstersdb
createdb -U mukesh monstersdb

psql -U mukesh monstersdb < ./bin/sql/monsters.sql

echo "$database configured"