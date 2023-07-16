const { Client } = require("pg");
const client = new Client({
  user: "admin",
  host: "dpg-ciojm7tph6elhbvclmsg-a.singapore-postgres.render.com",
  database: "lrs",
  password: "hLNyXAdpuD9ZTww8KbkkzpraCZDI3Cnw",
  port: 5432,
  ssl: true
});
client.connect();
/*const query = {
  text: "SELECT * FROM user2",
};
client
  .query(query)
  .then((res) => {
    console.log(res.rows[0]);
    client.end();
  })
  .catch((e) => console.error(e.stack));*/
  client.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  client.end();
});
