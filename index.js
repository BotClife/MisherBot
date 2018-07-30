const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require('./config.json');
const prefix = config.prefix

bot.on("ready", () => {
    console.log('[MisherBot] Bot Online!');
    bot.user.setActivity("mb!ajuda",{type:"LISTENING"});
});


bot.login(process.env.BOT_TOKEN);


bot.on('guildMemberAdd', member => {
    member.guild.channels.get('472909089203027978').send('Bem-Vindo, ' + member.user + ' ao nosso servidor :-) :tada: !');
    member.send('Obrigado por entrar!');
})
bot.on('guildMemberRemove', member => {
    member.guild.channels.get('472909089203027978').send('Adeus, ' + member.user.username + '!');
})


bot.on("message", message => {
    const msgs = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = msgs.shift().toLowerCase();

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return message.reply('Você não pode usar comandos aqui!');

    if(message.content.startsWith('mb!ping')) {
        if(comando === 'ping'){
            message.reply('Pong!');
        }
    }
    if(message.content.startsWith('mb!equipe')) {
        if(comando === 'equipe'){
            message.channel.send('**Dono**: <@412656276166672385> \n **Programador**: <@364241967388950531>');
        }
    }
    

    if(message.content.startsWith('mb!anuncio')) {
        if(comando === 'anuncio'){
            let AnuncioCargo = message.member.roles.find('name', 'PermAnuncio');
            if(message.author.id === '412656276166672385') {
                return;
            } else {
                if(message.author.id === '364241967388950531') {
                    return
                } else {
                    if(!AnuncioCargo) return message.reply('Você precisa ter a permissão especifica para utilizar esse comando!');
                }
            }
            if(!msgs[0]) return message.reply('Você precisa adicionar o conteudo do Anuncio!');
            if(!msgs[1]) {
                let AnuncioEmbed0 = new Discord.RichEmbed()
                .setDescription(`**Anuncio**`)
                .setAuthor(`${message.author.name}`)
                .setColor('#fffa00')
                .addField(`**${msgs[0]}**`, '====================')
                .addField(`\:white_check_mark: Sim`, '\:negative_squared_cross_mark: Não');
                message.channel.send(AnuncioEmbed0).then(m => {
                    m.react('❎').then(m.react('✅'))
                })
            }
            if(msgs[1]) {
                if(!msgs[2]) {
                    let AnuncioEmbed1 = new Discord.RichEmbed()
                    .setDescription(`**Anuncio**`)
                    .setTitle(`${message.author.username}`)
                    .setColor('#fffa00')
                    .addField(`**${msgs[0]} ${msgs[1]}**`, '====================')
                    .addField(`\:white_check_mark: Sim`, '\:negative_squared_cross_mark: Não');
                    message.channel.send(AnuncioEmbed1).then(m => {
                        m.react('❎').then(m.react('✅'))
                    })
                }
            }
            if(msgs[2]) {
                if(!msgs[3]) {
                    let AnuncioEmbed2 = new Discord.RichEmbed()
                    .setDescription(`**Anuncio**`)
                    .setTitle(`${message.author.username}`)
                    .setColor('#fffa00')
                    .addField(`**${msgs[0]} ${msgs[1]} ${msgs[2]}**`, '====================')
                    .addField(`\:white_check_mark: Sim`, '\:negative_squared_cross_mark: Não');
                    message.channel.send(AnuncioEmbed2).then(m => {
                        m.react('❎').then(m.react('✅'))
                    })
                }
            }
            if(msgs[3]) {
                if(!msgs[4]) {
                    let AnuncioEmbed3 = new Discord.RichEmbed()
                    .setDescription(`**Anuncio**`)
                    .setTitle(`${message.author.username}`)
                    .setColor('#fffa00')
                    .addField(`**${msgs[0]} ${msgs[1]} ${msgs[2]} ${msgs[3]}**`, '====================')
                    .addField(`\:white_check_mark: Sim`, '\:negative_squared_cross_mark: Não');
                    message.channel.send(AnuncioEmbed3).then(m => {
                        m.react('❎').then(m.react('✅'))
                    })
                }
            }
            if(msgs[4]) {
                if(!msgs[5]) {
                    let AnuncioEmbed4 = new Discord.RichEmbed()
                    .setDescription(`**Anuncio**`)
                    .setTitle(`${message.author.username}`)
                    .setColor('#fffa00')
                    .addField(`**${msgs[0]} ${msgs[1]} ${msgs[2]} ${msgs[3]} ${msgs[4]}**`, '====================')
                    .addField(`\:white_check_mark: Sim`, '\:negative_squared_cross_mark: Não');
                    message.channel.send(AnuncioEmbed4).then(m => {
                        m.react('❎').then(m.react('✅'))
                    })
                }
            }
            if(msgs[5]) {
                if(!msgs[6]) {
                    let AnuncioEmbed5 = new Discord.RichEmbed()
                    .setDescription(`**Anuncio**`)
                    .setTitle(`${message.author.username}`)
                    .setColor('#fffa00')
                    .addField(`**${msgs[0]} ${msgs[1]} ${msgs[2]} ${msgs[3]} ${msgs[4]} ${msgs[5]}**`, '====================')
                    .addField(`\:white_check_mark: Sim`, '\:negative_squared_cross_mark: Não');
                    message.channel.send(AnuncioEmbed5).then(m => {
                        m.react('❎').then(m.react('✅'))
                    })
                }
            }
            if(msgs[6]) {
                if(msgs > 6){
                    message.reply('Você nao pode colocar seu conteudo muito grande! Apenas 6 palavras!');
                } else {
                    message.reply('Você nao pode colocar seu conteudo muito grande! Apenas 6 palavras!');
                }
            }
        }
    }


    if(message.content.startsWith('mb!avisar')) {
        if(comando === 'avisar'){
            
            let APerm = message.member.roles.find('name', 'PermAvisar');
            if(message.author.id === '412656276166672385') {
                return;
            } else {
                if(message.author.id === '364241967388950531') {
                    return
                } else {
                    if(!APerm) return message.reply('Você precisa de uma permissão especifica para utlizar esse comando!');
                }
            }
            if(!msgs[0]) return message.reply('Adicione o conteudo do Aviso!');
            let AAviso = msgs.join(" ").slice(22);
            let AIcon = message.author.displayAvatarURL
            let ACanal = message.guild.channels.find('name', 'avisos');
            if(!ACanal) return message.reply('Eu não consegui encontrar nenhum canal de avisos!');
            message.delete();
            if(msgs[0]) {
                if(!msgs[1]) {
                    let AvisoEmbed0 = new Discord.RichEmbed()
                    .setThumbnail(AIcon)
                    .setDescription('\:bellhop: **AVISO**')
                    .setColor('#21ff00')
                    .addField('Aviso:', '**' + msgs[0] + '**')
                    .addField('Por: ', message.member.user.username);
                    ACanal.send(AvisoEmbed0);
                    message.author.send('O seu aviso foi enviado com sucesso!');
                }
            }
            if(msgs[1]) {
                if(!msgs[2]) {
                    let AvisoEmbed1 = new Discord.RichEmbed()
                    .setThumbnail(AIcon)
                    .setDescription('\:bellhop: **AVISO**')
                    .setColor('#21ff00')
                    .addField('Aviso:', '**' + msgs[0] + ' ' + msgs[1] + '**')
                    .addField('Por: ', message.member.user.username);
                    ACanal.send(AvisoEmbed1);
                    message.author.send('O seu aviso foi enviado com sucesso!');
                }
            }
            if(msgs[2]) {
                if(!msgs[3]) {
                    let AvisoEmbed2 = new Discord.RichEmbed()
                    .setThumbnail(AIcon)
                    .setDescription('\:bellhop: **AVISO**')
                    .setColor('#21ff00')
                    .addField('Aviso:', '**' + msgs[0] + ' ' + msgs[1] + ' ' + msgs[2] + '**')
                    .addField('Por: ', message.member.user.username);
                    ACanal.send(AvisoEmbed2);
                    message.author.send('O seu aviso foi enviado com sucesso!');
                }
            }
            if(msgs[3]) {
                if(!msgs[4]) {
                    let AvisoEmbed3 = new Discord.RichEmbed()
                    .setThumbnail(AIcon)
                    .setDescription('\:bellhop: **AVISO**')
                    .setColor('#21ff00')
                    .addField('Aviso:', '**' + msgs[0] + ' ' + msgs[1] + ' ' + msgs[2] + ' ' + msgs[3] + '**')
                    .addField('Por: ', message.member.user.username);
                    ACanal.send(AvisoEmbed3);
                    message.author.send('O seu aviso foi enviado com sucesso!');
                }
            }
            if(msgs[4]) {
                if(!msgs[5]) {
                    let AvisoEmbed4 = new Discord.RichEmbed()
                    .setThumbnail(AIcon)
                    .setDescription('\:bellhop: **AVISO**')
                    .setColor('#21ff00')
                    .addField('Aviso:', '**' + msgs[0] + ' ' + msgs[1] + ' ' + msgs[2] + ' ' + msgs[3] + ' ' + msgs[4] + '**')
                    .addField('Por: ', message.member.user.username);
                    ACanal.send(AvisoEmbed4);
                    message.author.send('O seu aviso foi enviado com sucesso!');
                }
            }
            if(msgs[5]) {
                if(!msgs[6]) {
                    let AvisoEmbed5 = new Discord.RichEmbed()
                    .setThumbnail(AIcon)
                    .setDescription('\:bellhop: **AVISO**')
                    .setColor('#21ff00')
                    .addField('Aviso:', '**' + msgs[0] + ' ' + msgs[1] + ' ' + msgs[2] + ' ' + msgs[3] + ' ' + msgs[4] + ' ' + msgs[5] + '**')
                    .addField('Por: ', message.member.user.username);
                    ACanal.send(AvisoEmbed5);
                    message.author.send('O seu aviso foi enviado com sucesso!');
                }
            }
            if(msgs[6]) {
                if(!msgs[7]) {
                    let AvisoEmbed6 = new Discord.RichEmbed()
                    .setThumbnail(AIcon)
                    .setDescription('\:bellhop: **AVISO**')
                    .setColor('#21ff00')
                    .addField('Aviso:', '**' + msgs[0] + ' ' + msgs[1] + ' ' + msgs[2] + ' ' + msgs[3] + ' ' + msgs[4] + ' ' + msgs[5] + ' ' + msgs[6] + ' ' + msgs[7] + '**')
                    .addField('Por: ', message.member.user.username);
                    ACanal.send(AvisoEmbed6);
                    message.author.send('O seu aviso foi enviado com sucesso!');
                }
            }
            if(msgs[7]) {
                if(!msgs[8]) {
                    let AvisoEmbed7 = new Discord.RichEmbed()
                    .setThumbnail(AIcon)
                    .setDescription('\:bellhop: **AVISO**')
                    .setColor('#21ff00')
                    .addField('Aviso:', '**' + msgs[0] + ' ' + msgs[1] + ' ' + msgs[2] + ' ' + msgs[3] + ' ' + msgs[4] + ' ' + msgs[5] + ' ' + msgs[6] + ' ' + msgs[7] + '**')
                    .addField('Por: ', message.member.user.username);
                    ACanal.send(AvisoEmbed7);
                    message.author.send('O seu aviso foi enviado com sucesso!');
                }
            }
            if(msgs[8]) {
                if(!msgs[9]) {
                    let AvisoEmbed8 = new Discord.RichEmbed()
                    .setThumbnail(AIcon)
                    .setDescription('\:bellhop: **AVISO**')
                    .setColor('#21ff00')
                    .addField('Aviso:', '**' + msgs[0] + ' ' + msgs[1] + ' ' + msgs[2] + ' ' + msgs[3] + ' ' + msgs[4] + ' ' + msgs[5] + ' ' + msgs[6] + ' ' + msgs[7] + ' ' + msgs[8] + '**')
                    .addField('Por: ', message.member.user.username);
                    ACanal.send(AvisoEmbed8);
                    message.author.send('O seu aviso foi enviado com sucesso!');
                }
            }
            if(msgs[9]) {
                if(!msgs[10]) {
                    let AvisoEmbed9 = new Discord.RichEmbed()
                    .setThumbnail(AIcon)
                    .setDescription('\:bellhop: **AVISO**')
                    .setColor('#21ff00')
                    .addField('Aviso:', '**' + msgs[0] + ' ' + msgs[1] + ' ' + msgs[2] + ' ' + msgs[3] + ' ' + msgs[4] + ' ' + msgs[5] + ' ' + msgs[6] + ' ' + msgs[7] + ' ' + msgs[8] + ' ' + msgs[9] + '**')
                    .addField('Por: ', message.member.user.username);
                    ACanal.send(AvisoEmbed9);
                    message.author.send('O seu aviso foi enviado com sucesso!');
                }
            }
            if(msgs[10]) {
                if(!msgs[11]) {
                    let AvisoEmbed10 = new Discord.RichEmbed()
                    .setThumbnail(AIcon)
                    .setDescription('\:bellhop: **AVISO**')
                    .setColor('#21ff00')
                    .addField('Aviso:', '**' + msgs[0] + ' ' + msgs[1] + ' ' + msgs[2] + ' ' + msgs[3] + ' ' + msgs[4] + ' ' + msgs[5] + ' ' + msgs[6] + ' ' + msgs[7] + ' ' + msgs[8] + ' ' + msgs[9] + ' ' + msgs[10] + '**')
                    .addField('Por: ', message.member.user.username);
                    ACanal.send(AvisoEmbed10);
                    message.author.send('O seu aviso foi enviado com sucesso!');
                }
            }
            if(msgs[11]) {
                if(!msgs[12]) {
                    let AvisoEmbed11 = new Discord.RichEmbed()
                    .setThumbnail(AIcon)
                    .setDescription('\:bellhop: **AVISO**')
                    .setColor('#21ff00')
                    .addField('Aviso:', '**' + msgs[0] + ' ' + msgs[1] + ' ' + msgs[2] + ' ' + msgs[3] + ' ' + msgs[4] + ' ' + msgs[5] + ' ' + msgs[6] + ' ' + msgs[7] + ' ' + msgs[8] + ' ' + msgs[9] + ' ' + msgs[10] + ' ' + msgs[11] + '**')
                    .addField('Por: ', message.member.user.username);
                    ACanal.send(AvisoEmbed11);
                    message.author.send('O seu aviso foi enviado com sucesso!');
                }
            }
            if(msgs[12]) {
                if(!msgs[13]) {
                    let AvisoEmbed12 = new Discord.RichEmbed()
                    .setThumbnail(AIcon)
                    .setDescription('\:bellhop: **AVISO**')
                    .setColor('#21ff00')
                    .addField('Aviso:', '**' + msgs[0] + ' ' + msgs[1] + ' ' + msgs[2] + ' ' + msgs[3] + ' ' + msgs[4] + ' ' + msgs[5] + ' ' + msgs[6] + ' ' + msgs[7] + ' ' + msgs[8] + ' ' + msgs[9] + ' ' + msgs[10] + ' ' + msgs[11] + ' ' + msgs[12] + '**')
                    .addField('Por: ', message.member.user.username);
                    ACanal.send(AvisoEmbed12);
                    message.author.send('O seu aviso foi enviado com sucesso!');
                }
            }
            if(msgs[13]) {
                if(msgs > 13){
                    message.reply('Você nao pode colocar seu conteudo muito grande! Apenas 12 palavras!');
                } else {
                    message.reply('Você nao pode colocar seu conteudo muito grande! Apenas 12 palavras!');
                }
            }


        }
    }


    if(message.content.startsWith('mb!expulsar')) {
        if(comando === "expulsar"){

            //ob!expulsar @carinha reação
            let kIcon = message.author.displayAvatarURL
            let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(msgs[0]));
            let ExpulsarCargo = message.member.roles.find('name', 'PermExpulsar');
            if(message.author.id === '412656276166672385') {
                return;
            } else {
                if(message.author.id === '364241967388950531') {
                    return
                } else {
                    if(!ExpulsarCargo) return message.reply('Você precisa ter a permissão especifica para utilizar esse comando!');
                }
            }
            if(!kUser) return message.reply("Não foi possivel encontrar um usuario!");
            let kReason = msgs.join(" ").slice(22);
            if(kUser.isOwner) return message.reply("Você não pode expulsar essa pessoa!");
            if(kUser.id === "364241967388950531") return message.reply("Você não pode expulsar essa pessoa!");
            if(kUser.id === "412656276166672385") return message.reply("Você não pode expulsar essa pessoa!");

            let kickEmbed = new Discord.RichEmbed()
            .setTitle("**-->> Punição <<--**")
            .setDescription("**Expulsamento**:")
            .setThumbnail(kIcon)
            .setColor("#ff7f00")
            .addField('Usuario Expulsado:', msgs[0])
            .addField('Expusaldo por:', message.author.username)
            .addField('Expulsado em:', message.channel)
            .addField('Horário:', message.createdAt)
            .addField('Motivo:', kReason);

            if(kUser.id === '472901283083321374') return message.reply('Eu não posso me expulsar :/!');
            let kickChannel = message.guild.channels.find('name', "punicao"); //\:closed_book:otaku-punido
            if(!kickChannel) return message.channel.send("Não foi possivel encontrar o chat de punições!")

            message.guild.member(kUser).kick(kReason);
            message.delete();
            message.author.send('**A sua Punição foi efetuada com sucesso!**')
            kickChannel.send(kickEmbed);


            return;
        }
    }


    if(message.content.startsWith('mb!banir')) {
        if(comando === "banir"){

            //mb!banir @carinha reação
            let bIcon = message.author.displayAvatarURL
            let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(msgs[0]));
            let BanirCargo = message.member.roles.find('name', 'PermBanir');
            if(message.author.id === '412656276166672385') {
                return;
            } else {
                if(message.author.id === '364241967388950531') {
                    return;
                } else {
                    if(!BanirCargo) return message.reply('Você precisa ter a permissão especifica para utilizar esse comando!');
                }
            }
            if(!bUser) return message.reply("Não foi possivel encontrar um usuario!");
            let bReason = msgs.join(" ").slice(22);
            if(bUser.isOwner) return message.reply("Você não pode banir essa pessoa!");
            if(bUser.id === "364241967388950531") return message.reply("Você não pode banir essa pessoa!");
            if(bUser.id === "412656276166672385") return message.reply("Você não pode banir essa pessoa!");

            let banEmbed = new Discord.RichEmbed()
            .setTitle("**-->> Punição <<--**")
            .setDescription("**Banimento**:", '⠀')
            .setThumbnail(bIcon)
            .setColor("#ff0000")
            .addField('Usuario Banido:', msgs[0])
            .addField('Banido por:', message.author.username)
            .addField('Banido em:', message.channel)
            .addField('Horário:', message.createdAt)
            .addField('Motivo:', bReason);

            if(bUser.id === '472901283083321374') return message.reply('Eu não posso me expulsar :/!');
            let banChannel = message.guild.channels.find('name', "punicao"); //\:closed_book:otaku-punido
            if(!banChannel) return message.reply("Não foi possivel encontrar o chat de punições!")

            message.guild.member(bUser).ban(bReason);
            message.delete();
            message.author.send('**A sua Punição foi efetuada com sucesso!**')
            banChannel.send(banEmbed);


            return;
        }
    }
    
    if(message.content.startsWith('mb!ajuda')) {
        if(comando === 'ajuda'){
            let AjudaImagem = message.author.displayAvatarURL;
            let AjudaEmbed = new Discord.RichEmbed()
            .setColor('#007fff')
            .setTitle('**Ajuda Do Misher Bot**')
            .setDescription('**Comandos**:', '⠀')
            .setThumbnail(AjudaImagem)
            .addField('**' + prefix + 'anuncio (conteudo)**:', 'Um comando para anunciar e votar em **Sim** ou **Não** !')
            .addField('**' + prefix + 'avisar (aviso)**:', 'Um comando para notificar os membros de seu servidor')
            .addField('**' + prefix + 'banir (membro) (motivo)**:', 'Um comando bem poderoso para barrar membros de seu servidor!')
            .addField('**' + prefix + 'equipe**:', 'Um comando para mostrar a minha equipe!')
            .addField('**' + prefix + 'expulsar (membro) (motivo)**: ', 'Um comando administrativo, para expulsar algum membro de seu servidor!')
            .addField('**' + prefix + 'ping**:', 'Seu ping');

            message.reply('Enviarei ajuda no seu Privado! \:star2:');
            message.author.send(AjudaEmbed);
        }
    }

});
