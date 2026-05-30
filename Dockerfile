FROM node:24-alpine

RUN npm install -g appium

CMD ["sh"]
FROM node:24-alpine

RUN npm install -g appium
RUN npm install -g appium-doctor

RUN apk add --no-cache maven

CMD ["node"]
module.exports = {
  type: "object",
  required: ["id", "name", "email"],

  properties: {
    id: {
      type: "number"
    },

    name: {
      type: "string"
    },

    email: {
      type: "string",
      format: "email"
    }
  }
};
const axios = require("axios");
const Ajv = require("ajv");
const chai = require("chai");

const expect = chai.expect;

const userSchema = require("../schemas/userSchema");

const ajv = new Ajv({
  allErrors: true
});

describe("User API Contract Testing", () => {

  it("should validate user contract", async () => {

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    expect(response.status).to.equal(200);

    const validate = ajv.compile(userSchema);

    const valid = validate(response.data);

    if (!valid) {
      console.log(validate.errors);
    }

    expect(valid).to.equal(true);
  });

});







