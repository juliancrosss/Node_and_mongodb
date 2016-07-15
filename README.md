# Node_and_mongodb
installing MongoDB 
cd ~/Donwloads/

wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-amazon-3.2.8.tgz

tar -zxvf mongodb-linux-x86_64-amazon-3.2.8.tgz

echo $PATH

/usr/local/heroku/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games

Creating a symlink

sudo ln -s ~/Donwloads/mongodb-linux-x86_64-amazon-3.2.8/bin/mongod /usr/local/bin/mongod

mongod --version

sudo ln -s ~/Donwloads/mongodb-linux-x86_64-amazon-3.2.8/bin/mongo /usr/local/bin/mongo

mongo --version

dbpath

mongod --dbpath ~/data/db/



