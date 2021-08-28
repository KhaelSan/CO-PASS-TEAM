const moment = require('moment-timezone');
const menu = (prefix, pushname) => {
	let p = 0
	
	const uptime1 = process.uptime()
            const timestampi = speed();
            const latensip = speed() - timestampi

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat malam'
                                        }
if(time2 < "20:00:00"){
var ucapanWaktu = 'Selamat petang'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat pagi'
                                         }
if(time2 < "03:30:00"){
var ucapanWaktu = 'Selamat malam'
										}
										
ucapanSalam = `${ucapanWaktu} ${pushname}`
	
	return `${ucapanSalam}

┌──「 *CO-PASS BOTZ* 」
│
│ _${p+=1}._ Name : ${pushname}
│ _${p+=1}._ Prefix : Multi-Prefix
└──────────────────

┌──「 *OWNER* 」
│
│ _${p+=1}._ ${prefix}setprefix <query>
│ _${p+=1}._ ${prefix}setlink <query>
│ _${p+=1}._ ${prefix}leave <id>
│ _${p+=1}._ ${prefix}self [Self]
│ _${p+=1}._ ${prefix}public [Public]
│ _${p+=1}._ ${prefix}off <query>
│ _${p+=1}._ ${prefix}on [Online]
│ _${p+=1}._ ${prefix}status [Status]
│ _${p+=1}._ ${prefix}antibug <on/off>
│ _${p+=1}._ ${prefix}antitag <on/off>
│ _${p+=1}._ ${prefix}pvp [Virus]
│ _${p+=1}._ ${prefix}pgp [Virus]
│ _${p+=1}._ ${prefix}psp [Bug]
│ _${p+=1}._ ${prefix}pcp [Virus]
│ _${p+=1}._ ${prefix}plp [Virus]
│ _${p+=1}._ ${prefix}autoread <query>
│ _${p+=1}._ ${prefix}anticall <on/off>
│ _${p+=1}._ ${prefix}antidelete <on/off>
│ _${p+=1}._ ${prefix}join <link>
│ _${p+=1}._ ${prefix}restart [Restart]
└──────────────────

┌──「 *GROUP* 」
│
│ _${p+=1}._ ${prefix}antilink <1/0>
│ _${p+=1}._ ${prefix}setname <query>
│ _${p+=1}._ ${prefix}setdesc <query>
│ _${p+=1}._ ${prefix}groupinfo [Info]
│ _${p+=1}._ ${prefix}revoke [Revoke]
│ _${p+=1}._ ${prefix}linkgc [Link Group]
│ _${p+=1}._ ${prefix}group <open/close>
│ _${p+=1}._ ${prefix}add <62xxxx>
│ _${p+=1}._ ${prefix}kick <reply>
│ _${p+=1}._ ${prefix}sider <reply>
│ _${p+=1}._ ${prefix}promote <reply>
│ _${p+=1}._ ${prefix}demote <reply>
└──────────────────

┌──「 *MAKER* 」
│
│ _${p+=1}._ ${prefix}sticker <image/video>
│ _${p+=1}._ ${prefix}swm <author|packname>
│ _${p+=1}._ ${prefix}take <author|packname>
│ _${p+=1}._ ${prefix}fdeface <reply>
│ _${p+=1}._ ${prefix}emoji <emoji>
└──────────────────

┌──「 *CONVERT* 」
│
│ _${p+=1}._ ${prefix}toimg <reply>
│ _${p+=1}._ ${prefix}tomp3 <reply>
│ _${p+=1}._ ${prefix}tomp4 <reply>
│ _${p+=1}._ ${prefix}slow <reply>
│ _${p+=1}._ ${prefix}fast <reply>
│ _${p+=1}._ ${prefix}reverse <reply>
│ _${p+=1}._ ${prefix}tourl <reply>
└──────────────────

┌──「 *UP STORY* 」
│
│ _${p+=1}._ ${prefix}upswteks <query>
│ _${p+=1}._ ${prefix}upswimage <image>
│ _${p+=1}._ ${prefix}upswvideo <video>
└──────────────────

┌──「 *GAME* 」
│
│ _${p+=1}._ ${prefix}tictactoe <@tag>
│ _${p+=1}._ ${prefix}cekhistory [Status]
│ _${p+=1}._ ${prefix}delsesi <game>
└──────────────────

┌──「 *FUN* 」
│
│ _${p+=1}._ ${prefix}hbd <date>
│ _${p+=1}._ ${prefix}slander <query>
│ _${p+=1}._ ${prefix}slanderpm <query>
│ _${p+=1}._ ${prefix}kontak <62xxxx>
│ _${p+=1}._ ${prefix}styletext <query>
│ _${p+=1}._ ${prefix}phy <query>
└──────────────────

┌──「 *TAG* 」
│
│ _${p+=1}._ ${prefix}tag <62xxxx>
│ _${p+=1}._ ${prefix}tagall <query>
│ _${p+=1}._ ${prefix}hidetag <query>
│ _${p+=1}._ ${prefix}kontag <62xxxx>
│ _${p+=1}._ ${prefix}sticktag <reply>
│ _${p+=1}._ ${prefix}totag <reply>
└──────────────────

┌──「 *DOWNLOAD* 」
│
│ _${p+=1}._ ${prefix}ytsearch <query>
│ _${p+=1}._ ${prefix}playstore <query>
│ _${p+=1}._ ${prefix}igstalk <query>
│ _${p+=1}._ ${prefix}play <query>
│ _${p+=1}._ ${prefix}video <query>
│ _${p+=1}._ ${prefix}ytmp3 <link>
│ _${p+=1}._ ${prefix}ytmp4 <link>
│ _${p+=1}._ ${prefix}ig <link>
│ _${p+=1}._ ${prefix}twmp4 <link>
│ _${p+=1}._ ${prefix}twmp3 <link>
│ _${p+=1}._ ${prefix}ttmp4 <link>
│ _${p+=1}._ ${prefix}ttmp3 <link>
│ _${p+=1}._ ${prefix}fbmp4 <link>
│ _${p+=1}._ ${prefix}fbmp3 <link>
│ _${p+=1}._ ${prefix}brainly <query>
│ _${p+=1}._ ${prefix}image <query>
│ _${p+=1}._ ${prefix}anime [Random]
└──────────────────

┌──「 *SETTING* 」
│
│ _${p+=1}._ ${prefix}setthumb <reply>
│ _${p+=1}._ ${prefix}settarget <62xxxx>
│ _${p+=1}._ ${prefix}setfakeimg <reply>
│ _${p+=1}._ ${prefix}setreply <query>
└──────────────────

┌──「 *TOOLS* 」
│
│ _${p+=1}._ ${prefix}getname <reply>
│ _${p+=1}._ ${prefix}getbio <reply>
│ _${p+=1}._ ${prefix}getpic <query>
│ _${p+=1}._ ${prefix}getp [From]
│ _${p+=1}._ ${prefix}get <link>
│ _${p+=1}._ ${prefix}q [Copy Paste]
│ _${p+=1}._ ${prefix}inspect <link>
│ _${p+=1}._ ${prefix}searchtext <query>
│ _${p+=1}._ ${prefix}searchgc <query>
│ _${p+=1}._ ${prefix}detikvn <query>
│ _${p+=1}._ ${prefix}detikvideo <query>
│ _${p+=1}._ ${prefix}tohuruf <query>
│ _${p+=1}._ ${prefix}fliptext <query>
│ _${p+=1}._ ${prefix}volume <query>
└──────────────────

┌──「 *OTHER* 」
│
│ _${p+=1}._ ${prefix}gci [Group Invite]
│ _${p+=1}._ ${prefix}blocklist [List]
│ _${p+=1}._ ${prefix}setcmd <query>
│ _${p+=1}._ ${prefix}delcmd [Delete]
│ _${p+=1}._ ${prefix}listcmd [List]
│ _${p+=1}._ ${prefix}spam <query>
│ _${p+=1}._ ${prefix}p [Troli]
│ _${p+=1}._ ${prefix}listgroup [List]
│ _${p+=1}._ ${prefix}size <query>
│ _${p+=1}._ ${prefix}ping [Ping]
│ _${p+=1}._ ${prefix}term <code>
│ _${p+=1}._ ${prefix}owner [Owner]
│ _${p+=1}._ ${prefix}deletepc [Clear]
└──────────────────

┌──「 *COMMAND* 」
│
│ _${p+=1}._ => [eval async]
│ _${p+=1}._ > [eval]
│ _${p+=1}._ Menu [List Menu]
│ _${p+=1}._ _>/< [Kudet]
└──────────────────`
}