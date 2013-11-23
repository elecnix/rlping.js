# rlping.js

node.js application to receive and display web-pings from nodes in the Réseau Libre mesh network when they boot for the first time.

# 1. Create table of pings

    $ sudo su - postgres
    $ psql
    postgres=# CREATE DATABASE rlping OWNER=your_login_name;
    postgres=# \q
    $ exit
    $ psql -d rlping
    rlping=# CREATE TABLE pings (id SERIAL, ping_date timestamp with time zone, wlanmac varchar(100), ipv4 varchar(20), ipv6 varchar(50));
    rlping=# \q

## 2. Install node modules, assuming NPM is already installed:

    npm install

## 3. Run!

    DATABASE_URL=postgres://user:pass@localhost/rlping node app

Or push to Heroku:

    heroku create
    heroku addons:add heroku-postgresql:dev
    git push heroku master
    heroku open

## 4. Test!

Access the 'ping' URL:

    http://localhost:5000/ping?wlanmac=00:00:00:00:00:00&ipv4=0.0.0.0&ipv6=fe80::1111:2222:3333:4444

Then a new entry should appear in the list at:

    http://localhost:5000/

