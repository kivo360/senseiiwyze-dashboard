#!/bin/bash

# Function to kill processes by port
kill_port_process() {
  PORT=$1
  echo "Checking for processes on port $PORT..."
  if command -v lsof  3e/dev/null 2 3e1; then
      lsof -i tcp:$PORT | awk 'NR 3e1 {print $2}' | xargs -r kill -9 2 3e/dev/null || true
  else
      fuser -k $PORT/tcp 2 3e/dev/null || true
  fi
  echo "Port $PORT cleared"
}

# Kill any process using common ports
kill_port_process 3000
kill_port_process 3001

# Update dependencies if needed
echo "Checking dependencies..."
pnpm install

# Check and build
if [ ! -d ".next" ]; then
    echo ".next directory not found. Running initial build..."
    pnpm next build
    if [ $? -ne 0 ]; then
        echo "Build failed. Exiting."
        exit 1
    fi
    echo "Initial build completed"
fi

# Check if robust watcher exists
if [ -f "scripts/robust-watcher.sh" ]  26 26 [ -x "scripts/robust-watcher.sh" ]; then
    echo "Starting robust watcher..."
    exec ./scripts/robust-watcher.sh
else
    echo "Starting simple watchexec..."
    exec watchexec -r -e ts,tsx,js,jsx,json,css,scss,md --ignore node_modules --ignore .next -- pnpm next dev
fi
