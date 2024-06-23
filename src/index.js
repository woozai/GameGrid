import express from "express";

const app = express();
const port = 3000;
let server = express;

app.get("/", (req, res) => {
  const response = `{
    "person": {
        "firstName": "John",
        "lastName": "Doe",
        "age": 30,
        "address": {
            "street": "123 Main St",
            "city": "Anytown",
            "state": "CA",
            "postalCode": "12345"
        },
        "phoneNumbers": [
            {
                "type": "home",
                "number": "555-555-5555"
            },
            {
                "type": "work",
                "number": "555-555-1234"
            }
        ],
        "email": "john.doe@example.com",
        "isEmployed": true,
        "job": {
            "title": "Software Engineer",
            "department": "Engineering",
            "startDate": "2020-01-15"
        }
    }
}
`;
  res.send(response);
});
app.get("/person", (req, res) => {
  const response = `{text:"hello from server"}`;
  res.send(response);
});
app.listen(port, () => {
  console.log(`Kobi gay: ${port}`);
});
