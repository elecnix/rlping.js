var pg = require('pg');
exports.recent = function(req, res){
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    if(err) {
      console.log(err);
      return res.send(err);
    }
    var query = "SELECT ping_date, wlanmac, ipv4, ipv6 FROM pings";
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

