const aoijs = require("aoi.js")
const { Util } = require("aoi.js");
const { AoiClient, LoadCommands } = require("aoi.js");
const { parse, createAst } = require('aoi.parser');
const {
  parseFiles,
  parseExtraOptions
} = require('aoi.parser/components');

Util.parsers.ErrorHandler = parse;

Util.parsers.FileParser = (data) => {
  return createAst(data).children.map(parseFiles);
}

Util.parsers.OptionsParser = (data) => {
  return createAst(data).children.map(parseExtraOptions);
}

const bot = new aoijs.AoiClient({
  token: "TOKEN BURAYA",
  prefix: ["$getGuildVar[Prefix]", "$getGuildVar[Prefix] ", "<@!$clientID>", "<@$clientID> "],
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildWebhooks", "GuildInvites", "GuildVoiceStates", "GuildPresences", "GuildMessageReactions", "GuildMessageTyping", "DirectMessages", "DirectMessageReactions", "DirectMessageTyping"],
  events: ["onMessage", "onMessageDelete", "onMessageUpdate", "onMessageDeleteBulk", "onReactionAdd", "onReactionRemove", "onReactionRemoveAll", "onInviteCreate", "onInviteDelete", "onGuildJoin", "onGuildLeave", "onGuildUpdate", "onGuildUnavailable", "onRoleCreate", "onRoleUpdate", "onRoleDelete", "onChannelCreate", "onChannelUpdate", "onChannelDelete", "onChannelPinsUpdate", "onStageInstanceCreate", "onStageInstanceUpdate", "onStageInstanceDelete", "onThreadCreate", "onThreadUpdate", "onThreadDelete", "onThreadListSync", "onThreadMemberUpdate", "onThreadMembersUpdate", "onEmojiCreate", "onEmojiDelete", "onEmojiUpdate", "onStickerCreate", "onStickerDelete", "onStickerUpdate", "onBanAdd", "onBanRemove", "onVoiceStateUpdate", "onJoin", "onLeave", "onMemberUpdate", "onMemberAvailable", "onMembersChunk", "onPresenceUpdate", "onTypingStart", "onUserUpdate", "onInteractionCreate", "onFunctionError", "onApplicationCommandPermissionsUpdate", "onVariableCreate", "onVariableDelete", "onVariableUpdate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
      dbType: "KeyValue"
    }
  }
});

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [] });
client.login("TOKEN BURAYA")

bot.status({
  name: "AlinesDev | Boş Altyapı",
  type: "STREAMING",
  url: "https://www.twitch.tv/ardawn9",
  time: "12",
});

bot.variables(require('./değişkenler.js'));

bot.loadCommands("./komutlar/", true);

try { } catch (error) { console.log(error) }