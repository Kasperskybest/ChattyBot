const Discord = require("discord.js")
const fetch = require("node-fetch")
const keepAlive = require("./server")
const Database = require("@replit/database")

const db = new Database()
const client = new Discord.Client()

client.on('ready', () =>
{
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg =>
{
  if (msg.content === 'Good morning, how are you?')
  {
    msg.reply('I am doing well, how about you?')
  }

  if (msg.content === 'Im also good.')
  {
    msg.reply('Thats good to hear.')
  }
})

client.login(process.env.TOKEN)