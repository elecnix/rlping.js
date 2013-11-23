var pg = require('pg');
exports.recent = function(req, res){
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    if(err) {
      console.log(err);
      return res.send(err);
    }
    var query = "SELECT ping_date, wlanmac, ipv4, ipv6 FROM pings WHERE extract(minute from (now() - ping_date)) <= 360 ORDER BY ping_date DESC";
    var params = [];
    client.query(query, params, function(err, result) {
      done();
      if(err) {
        console.log(err);
        return res.send(500, err);
      }
      res.send(result.rows);
    });
  });
};
exports.add = function(req, res){
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    if(err) {
      console.log(err);
      return res.send(err);
    }
    var query = "INSERT INTO pings (ping_date, wlanmac, ipv4, ipv6) VALUES (now(), $1, $2, $3)";
    var params = [req.query.wlanmac, req.query.ipv4, req.query.ipv6];
    client.query(query, params, function(err, result) {
      done();
      if(err) {
        console.log(err);
        return res.send(500, err);
      }
      res.send("pong!");
    });
  });
};

