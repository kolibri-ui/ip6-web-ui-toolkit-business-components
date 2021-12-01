#!/bin/bash

if [ -d $1 ]; then
  echo 'Please add a projector name'
else
  echo $1
  git clone https://github.com/kolibri-ui/projector-playground.git "$1Projector"
fi

