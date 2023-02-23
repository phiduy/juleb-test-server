#!/bin/bash
set -e;
if [ -n "${POSTGRES_USER:-}" ] && [ -n "${POSTGRES_PASSWORD:-}" ]; then
    echo "Initializing Postgres Database:$POSTGRES_DB at $POSTGRES_USER/$POSTGRES_PASSWORD"
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER"  <<-EOSQL
        CREATE DATABASE ${POSTGRES_DB};
        GRANT ALL PRIVILEGES ON DATABASE ${POSTGRES_DB} TO ${POSTGRES_USER};
    EOSQL
else
    echo "SETUP INFO: No Environment variables given!"
fi