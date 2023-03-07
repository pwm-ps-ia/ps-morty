#!/bin/bash
sudo docker run --mount type=bind,src=$PWD/,dst=/prj/ --mount type=bind,src=$PWD/.angular/,dst=/prj/.angular/ -p4200:4200 $@
