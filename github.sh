#!/bin/bash

yarn prettier

yarn build

read -p "enter the commit message : " commitMessage
git add .
git commit -m "$commitMessage"
git push