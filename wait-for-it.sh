#!/usr/bin/env bash
# Original von: https://github.com/vishnubob/wait-for-it
# Macht einen Container-start abhängig davon, dass ein Service auf einem Port erreichbar ist

set -e

host="$1"
port="$2"
shift 2
cmd="$@"

echo "Waiting for $host:$port..."
while ! nc -z "$host" "$port"; do
  sleep 1
done

echo "$host:$port is available, starting command..."
exec $cmd
