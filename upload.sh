#!/bin/sh

npm run build

lftp -u remote@m200u.mly.at,C0XBig00vQsF ftp://35.207.112.194 -e "set ssl:verify-certificate no; mirror -R --parallel=8 --only-newer ./build .; bye"

