const { Client } = require("pg");
const client = new Client({
  user: "admin",
  host: "dpg-ciojm7tph6elhbvclmsg-a.singapore-postgres.render.com",
  //host: "dpg-ciojm7tph6elhbvclmsg-a",
  database: "lrs",
  password: "hLNyXAdpuD9ZTww8KbkkzpraCZDI3Cnw",
  port: 5432,
  ssl: true,
});
client.connect();
client.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  client.end();
});
