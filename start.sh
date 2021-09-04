#!/bin/bash

WORKING_DIRECTORY=$(pwd)
cd "$(dirname "$0")"

echo "STARTING APP IN DEVELOPEMENT MODE!"
cd ./hto-server
npm run dev
echo "app succesfully started"