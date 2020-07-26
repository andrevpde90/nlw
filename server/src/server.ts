import express from "express";

const app = express();

const users = ["maria", "andre", "jose", "pedro"];

app.get("/users", (req, res) => {
  console.log("list users");
  return res.json();
});

app.get("/users/:id", (req, res) => {
  const { params } = req;
  const { id } = params;
  const user = users[Number(id)];

  return res.json(user);
});

app.post("/users", (req, res) => {
  const users = {
    name: "andré",
    email: "andrevpde90@gmail.com",
  };

  return res.json(users);
});

app.listen(4444);

//video 2 - 19:00
