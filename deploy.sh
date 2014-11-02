# quick and dirty deployment script until I bring gulp into this project
rm -rf public/bower
mkdir public/bower
cp -r bower_components/* public/bower
firebase deploy
