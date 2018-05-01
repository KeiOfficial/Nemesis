const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Kullanıcı Komutları**", `n!avatar = Avatarınınızı Gösterir. \nn!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nn!sunucuresmi = BOT Sunucunun Resmini Atar. \nn!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nn!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir.`)
  .addField("**Yetkili Komutları**", `n!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nn!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nn!unban = İstediğiniz Kişinin Yasağını Açar. \nn!sustur = İstediğiniz Kişiyi Susturur. \nn!oylama = Oylama Açar. \nn!kilit = Kanalı Belirtilen Süre Boyunca Kilitler.`)
  .addField("**Ana Komutlar**", "n!yardım = BOT Komutlarını Gösterir. \nn!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nn!ping = BOT Ping Değerini Gösterir. \nn!davet = BOT Davet Linkini Atar. \nn!istatistik = BOT İstatistiklerini Gösterir.")
  .addField("**Yapımcı**", " **Kei#0001** ")
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
