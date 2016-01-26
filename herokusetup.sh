#!/bin/bash
heroku config:set NODE_ENV=production
heroku config:set NODE_PATH=./src
heroku config:set NPM_CONFIG_PRODUCTION=false
