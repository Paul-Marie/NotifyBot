const Channel = require("../models/channel");

// Add a new reminder message on a channel
module.exports = async (command) => {
  if (!command.memberPermissions.has(['ADMINISTRATOR']))
    return "Permissions insufisante :(";
  const result = await Channel.find({ guild: command.guild.id });
  const content = result.map(c =>
    `🔸 <#${c.identifier}> (${c.type === "world" ? "World" : "Field"} Boss): \`${c.message}\``
  ).join('\n');
  return { content, ephemeral: true };
}