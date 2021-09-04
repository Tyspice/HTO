#!/bin/bash

WORKING_DIRECTORY=$(pwd)
cd "$(dirname "$0")"

cd ./hto-server
echo "installing server dependencies"
npm install

cd ../hto-ui
echo "installing Angular dependencies"
npm install

cd ..
echo "all done"