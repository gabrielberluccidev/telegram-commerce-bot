import { Bot } from "grammy";

// Create a file.ts and import the variables from file.ts
import {
  botToken,
  botStartMessage,
  botOfferMessage,
  seeValuesInlineKeyboard,
  valuesInlineKeyboard,
} from "./messagesAndToken";

const bot = new Bot(botToken);

bot.command(
  "start",
  async (ctx) =>
    await ctx.reply(`${botStartMessage}`, {
      reply_markup: seeValuesInlineKeyboard,
    })
);

bot.on("message", async (ctx) => {
  const message = ctx.message;

  const chatId = message.chat.id;
  await bot.api.sendMessage(chatId, `${botOfferMessage}`, {
    reply_markup: valuesInlineKeyboard,
  });
});

bot.start();
