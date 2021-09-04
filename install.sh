#!/bin/bash

cd ./hto-server
echo "installing server dependencies"
npm install

cd ../hto-ui
echo "installing Angular dependencies"
npm install

cd ..
echo "all done"