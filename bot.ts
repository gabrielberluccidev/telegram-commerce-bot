import { Bot } from "grammy";

// Create a file.ts and import the variables from file.ts
import {
  botToken,
  botStartMessage,
  botOfferMessage,
  seeVipValues,
  vipValues,
  monthlyValue,
  monthlySelected,
  quarterSelected,
  quarterValue,
  semesterSelected,
  semesterValue,
} from "./messagesAndToken";

const bot = new Bot(botToken);

bot.command(
  "start",
  async (ctx) =>
    await ctx.reply(`${botStartMessage}`, {
      reply_markup: seeVipValues,
    })
);

bot.on("message", async (ctx) => {
  const message = ctx.message;

  const chatId = message.chat.id;
  await bot.api.sendMessage(chatId, `${botOfferMessage}`, {
    reply_markup: vipValues,
  });
});

bot.callbackQuery("values", async (ctx) => {
  await ctx.reply(`${botOfferMessage}`, { reply_markup: vipValues });
});

bot.callbackQuery("monthly", async (ctx) => {
  await ctx.reply(`${monthlySelected}`, { reply_markup: monthlyValue });
});

bot.callbackQuery("quarter", async (ctx) => {
  await ctx.reply(`${quarterSelected}`, { reply_markup: quarterValue });
});

bot.callbackQuery("semester", async (ctx) => {
  await ctx.reply(`${semesterSelected}`, { reply_markup: semesterValue });
});

bot.start();
