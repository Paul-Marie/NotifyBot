module.exports = {
  name: "remove",
  description: "Supprime tout les rappels fait dans un channel",
  options: [{
    name: "channel",
    description: "Le channel ou le rappel se fera",
    type: 7,
    channel_types: 0,
    required: true
  }]
};
