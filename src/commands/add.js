module.exports = {
  name: "add",
  description: "Ajoute un rappel dans un channel",
  options: [{
    name: "channel",
    description: "Le channel ou le rappel se fera",
    type: 7,
    channel_types: 0,
    required: true
  }, {
    name: "type",
    description: "le type de boss à alerter",
    required: true,
    type: 3,
    choices: [{
      name: "Field Boss",
      value: "field"
    }, {
      name: "World Boss",
      value: "world"
    }]
  }, {
    name: "message",
    description: "Message à transmetre lors du rappel dans le channel",
    type: 3,
    required: false
  }]
};
