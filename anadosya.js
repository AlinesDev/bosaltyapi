const { Util, AoiClient, LoadCommands } = require("aoi.js");

const bot = new AoiClient({
token: "TOKEN BURAYA",
prefix: ["$getGuildVar[Prefix]", "$getGuildVar[Prefix] ", "<@!$clientID>", "<@$clientID> "],
intents: ["MessageContent", "GuildMessages", "Guilds", "GuildMembers"],
events: ["onMessage", "onInteractionCreate"],
suppressAllErrors: false, //Hata mesajını engeller.
errorMessage: "", //Hata olduğunda bu mesaj döndürülür.
disableFunctions: ["$clientToken"],
database: {
type: "aoi.db",
db: require("@akarui/aoi.db"),
tables: ["main"],
securityKey: "32-karakterli-bir-sifre-olusturr",
}
});

bot.status({
name: "Alines Development | Canlı Destek",
type: "STREAMING",
url: "https://www.twitch.tv/ardawn9",
time: "12",
});

bot.variables(require('./değişkenler.js'));

bot.loadCommands("./komutlar/", true);

try { } catch (error) { console.log(error) }