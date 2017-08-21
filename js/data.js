

function requestData () {
	// body...
	var className = ['中文','英文','日文','安静'];//声明类别名称
	var data = [
		//第一个类别
		[
			{
				'Name':'给未来的自己',
				'Singer':'杨宗纬',
				'Src':'http://www.web-jackiee.com/templets/blog/music/geiweilaideziji.mp3',
				'Img':'image/singer/1.jpg',
				'Lyric':'[00:00.00]给未来的自己 [00:01.10]歌手:杨宗纬 [00:02.10]给未来的自己 (Live) - 杨宗纬 [00:04.10]词：黄婷 [00:05.10]曲：张正宗 [00:11.11] [00:13.10]站在狂风的天台一望无际 [00:19.58]这一座孤独的城市 [00:24.38] [00:25.65]在天空与高楼交接的尽头 [00:32.19]谁追寻空旷的自由 [00:36.40] [00:39.05]阳光覆满这一刻宁静的我 [00:44.86] [00:45.53]隔绝了喧嚣和冷漠 [00:50.19] [00:51.54]川流不息的人游荡在街头 [00:58.09]谁能听见谁的寂寞 [01:03.35]找一个人惺惺相惜 [01:07.93]找一颗心心心相印 [01:10.96]在这个宇宙我是独一无二 [01:14.66]没人能取代 [01:16.76]不管怎样怎样都会受伤 [01:20.99]伤了又怎样至少我很坚强 [01:26.29]我很坦荡 [01:33.98] [01:40.75]夜幕笼罩灿烂的一片灯海 [01:45.67] [01:47.25]多少人多少种无奈 [01:53.38]在星光里遗忘昨天的伤害 [01:59.76]一觉醒来还有期待 [02:05.01]我不放弃爱的勇气 [02:08.69]我不怀疑会有真心 [02:12.33]我要握住一个最美的梦 [02:16.31]给未来的自己 [02:18.49]一天一天一天推翻一天 [02:22.66]坚持的信仰 [02:25.30]我会记住自己现在的模样 [02:30.76]有一个人惺惺相惜 [02:34.75]留一颗心心心相印 [02:37.56] [02:38.45]抛开过去我想认真去追寻 [02:42.11]未来的自己 [02:44.15]不管怎样怎样都会受伤 [02:48.55]伤了又怎样 [02:51.36]至少我很坚强 [02:53.43]我很坦荡 [03:00.98] [03:23.27]我不放弃爱的勇气 [03:26.74]我不怀疑会有真心 [03:30.38]我要握住一个最美的梦 [03:34.39]给未来的自己 [03:36.41]不管怎样怎样都会受伤 [03:40.43]伤了又怎样至少我很坚强 [03:45.38]我很坦荡 [03:50.87] [03:52.00]未来的你会懂我的疯狂'
			},
			{
				'Name':'会呼吸的痛',
				'Singer':'梁静茹',
				'Src':'http://ok.96x.cn/2015/7yue_2651.cn/%E4%BC%9A%E5%91%BC%E5%90%B8%E7%9A%84%E7%97%9B%20-%20%E6%A2%81%E9%9D%99%E8%8C%B9.mp3',
				'Img':'image/singer/2.jpg',
				'Lyric':'[00:01.49]会呼吸的痛(严改)(CCTV音乐频道)-梁静茹 [00:17.46]在东京铁塔 第一次眺望 [00:27.83]看灯火模仿 坠落的星光 [00:36.43]我终于到达 但却更悲伤 [00:44.95]一个人完成 我们的梦想 [00:51.70]你总说 时间还很多 你可以等我 [01:00.22]以前我不懂得 未必明天 就有以后 [01:08.68]想念是会呼吸的痛 [01:12.84]它活在我身上所有角落 [01:17.40]哼你爱的歌会痛 [01:19.81]看你的信会痛 [01:22.42]连沉默也痛 [01:25.82]遗憾是会呼吸的痛 [01:30.04]它流在血液中来回滚动 [01:34.52]后悔不贴心会痛 [01:36.91]恨不懂你会痛 [01:39.52]想见不能见最痛 [02:04.54]没看你脸上 张扬过哀伤 [02:12.87]那是种多么 寂寞的倔强 [02:21.35]你拆了城墙 让我去流浪 [02:29.87]在原地等我 把自己捆绑 [02:36.67]你没说 你也会软弱 需要依赖我 [02:45.13]我就装不晓得 自由移动 自我地过 [02:53.74]想念是会呼吸的痛 [02:57.81]它活在我身上所有角落 [03:02.30]哼你爱的歌会痛 [03:04.73]看你的信会痛 [03:07.40]连沉默也痛 [03:10.84]遗憾是会呼吸的痛 [03:14.88]它流在血液中来回滚动 [03:19.53]后悔不贴心会痛 [03:22.25]恨不懂你会痛 [03:24.51]想见不能见最痛 [03:32.25]我发誓不再说谎了 [03:36.33]多爱你就会抱你多紧的 [03:40.88]我的微笑都假了 [03:43.26]灵魂像飘浮着 [03:45.93]你在就好了 [03:49.31]我发誓不让你等候 [03:53.49]陪你做想做的无论什么 [03:58.14]我越来越像贝壳 [04:00.48]怕心被人触碰 [04:03.09]你回来那就好了 [04:12.00]能重来那就好了'
			},
			{
				'Name':'帝都',
				'Singer':'萌萌哒天团',
				'Src':'http://www.web-jackiee.com/templets/blog/music/didu.mp3',
				'Img':'image/singer/3.jpg',
				'Lyric':'[00:01.25]帝都 - 萌萌哒天团  [00:20.14]空荡的宫殿 冰冷的庄严  [00:24.97]上弦月弹奏清歌奄奄  [00:29.29]谁看到悲的烟 金杯玉盏  [00:33.89]却无人叹息生锈的剑  [00:38.88]往日故友寻难见 只剩思念  [00:43.72]拂尘掠过空间  [00:48.50]有谁来读孤独感 散不尽留恋  [00:53.26]生死注定烟消云散  [00:58.08]想曾经往日昨天 孤独是晴天  [01:02.97]和曾经诺言的竹签  [01:27.50]空荡的宫殿 冰冷的庄严  [01:31.87]上弦月弹奏清歌奄奄  [01:36.46]谁看到悲的烟 金杯玉盏  [01:41.32]却无人叹息生锈的剑  [01:46.07]往日故友寻难见 只剩思念  [01:50.92]拂尘掠过空间  [01:55.65]有谁来读孤独感 散不尽留恋  [02:00.22]生死注定烟消云散  [02:05.07]想曾经往日昨天 孤独是晴天  [02:09.81]和曾经诺言的竹签  [02:14.85]有谁来读孤独感 散不尽留恋  [02:19.39]生死注定烟消云散  [02:24.47]想曾经往日昨天 孤独是晴天  [02:29.00]和曾经诺言的竹签  [02:34.18]和曾经诺言的竹签'
			},
			{
				'Name':'星月神话',
				'Singer':'金莎',
				'Src':'http://www.web-jackiee.com/templets/blog/music/xingyueshenghua.mp3',
				'Img':'image/singer/4.jpg',
				'Lyric':'[00:00.00] 歌名：星月神话  [00:03.00] 歌手：金莎  [00:09.00] 电视剧《神话》插曲  [00:20.00] Music~  [00:36.00]中文歌词库 www.CnLyric.com  [00:37.48] 我的一生最美好的场景  [00:43.06] 就是遇见你  [00:48.17] 在人海茫茫中静静凝望着你  [00:54.72] 陌生又熟悉  [00:59.25] 啊~啊~啊~  [01:11.38] 尽管呼吸着同一天空的气息  [01:17.79] 却无法拥抱到你  [01:22.89] 如果转换了时空身份和姓名  [01:28.64] 但愿认得你眼睛  [01:33.87]  [01:34.22] 千年之后的你会在哪里  [01:40.18] 身边有怎样风景  [01:46.01] 我们的故事并不算美丽  [01:51.65] 却如此难以忘记  [01:57.44]  [01:58.07] Music~  [02:29.13]  [02:32.20] 尽管呼吸着同一天空的气息  [02:38.64] 却无法拥抱到你  [02:43.75] 如果转换了时空身份和姓名  [02:49.42] 但愿认得你眼睛  [02:54.94]  [02:55.31] 千年之后的你会在哪里  [03:01.04] 身边有怎样风景  [03:06.90] 我们的故事并不算美丽  [03:12.66] 却如此难以忘记  [03:18.15]  [03:18.40] 如果当初勇敢地在一起  [03:24.13] 会不会不同结局  [03:29.90] 你会不会也有千言万语  [03:35.72] 埋在沉默的梦里  [03:41.89]  [04:07.44] The end~'
			},
			{
				'Name':'江南',
				'Singer':'林俊杰',
				'Src':'http://cc.stream.qqmusic.qq.com/C100001oGzem0k192p.m4a?fromtag=52',
				'Img':'image/singer/5.jpg',
				'Lyric':'[00: 01.08]江南 - 林俊杰 [00: 36.73]风到这里就是粘 [00: 40.37]粘住过客的思念 [00: 44.56]雨到了这里缠成线 [00: 48.35]缠着我们留恋人世间 [00: 52.78]你在身边就是缘 [00: 56.21]缘分写在三生石上面 [01: 00.70]爱有万分之一甜 [01: 04.19]宁愿我就葬在这一点 [01: 08.84]圈圈圆圆圈圈 [01: 10.54]天天年年天天的我 [01: 13.36]深深看你的脸 [01: 15.76]生气的温柔 [01: 17.69]埋怨的温柔的脸 [01: 23.81]不懂爱恨情愁煎熬的我们 [01: 27.50]都以为相爱就像风云的善变 [01: 31.74]相信爱一天抵过永远 [01: 36.08]在这一刹那冻结了时间 [01: 39.66]不懂怎么表现温柔的我们 [01: 43.60]还以为殉情只是古老的传言 [01: 47.44]离愁能有多痛痛有多浓 [01: 52.04]当梦被埋在江南烟雨中 [01: 55.29]心碎了才懂 [02: 20.80]圈圈圆圆圈圈 [02: 22.47]天天年年天天的我 [02: 25.29]深深看你的脸 [02: 27.76]生气的温柔 [02: 29.78]埋怨的温柔的脸 [02: 35.94]不懂爱恨情愁煎熬的我们 [02: 39.53]都以为相爱就像风云的善变 [02: 43.57]相信爱一天抵过永远 [02: 47.98]在这一刹那冻结了时间 [02: 51.61]不懂怎么表现温柔的我们 [02: 55.55]还以为殉情只是古老的传言 [02: 59.54]离愁能有多痛痛有多浓 [03: 03.99]当梦被埋在江南烟雨中 [03: 07.22]心碎了才懂 [03: 19.85]相信爱一天抵过永远 [03: 23.99]在这一刹那冻结了时间 [03: 27.58]不懂怎么表现温柔的我们 [03: 31.52]还以为殉情只是古老的传言 [03: 35.36]离愁能有多痛痛有多浓 [03: 40.01]当梦被埋在江南烟雨中 [03: 45.31]心碎了才懂'
			},
			{
				'Name':'我的秘密',
				'Singer':'邓紫棋',
				'Src':'http://www.web-jackiee.com/templets/blog/music/wodemimi.mp3',
				'Img':'image/singer/6.jpg',
				'Lyric':'[00:00.00] 我的秘密 (Live Piano Session) - G.E.M. 邓紫棋  [00:02.00] 词曲：G.E.M.  [00:05.00] 编曲：G.E.M.  [00:06.00] 监制：Lupo Groinig  [00:07.00] 歌词编辑：果果  [00:08.00] QQ:765708831   [00:08.40] 中文歌词库 www.cnLyric.com  [00:09.10] 最近一直很好心情  [00:14.04] 不知道什么原因  [00:18.62] 我现在这一种心情  [00:23.20] 我想要唱给你听  [00:36.99] 看着窗外的小星星  [00:41.46] 心里想着我的秘密  [00:46.01] 算不算爱我不太确定  [00:50.56] 我只知道我在想你  [01:04.07] 我们之间的距离好像忽远又忽近  [01:08.75] 你明明不在我身边我却觉得很亲  [01:13.05] HA~ 有一种感觉我想说明  [01:17.74] 我心里的秘密　是你给的甜蜜  [01:22.77] 我们之间的距离好像一点点靠近  [01:27.45] 是不是你对我也有一种特殊感情  [01:31.92] HA~ 我犹豫要不要告诉你  [01:36.62] 我心里的秘密　是我好像喜欢了你  [01:51.73] 夜里陪着我的声音　就算沙了也动听  [02:00.83] 这一种累了的声音　是最温柔的证明  [02:18.55] 我们之间的距离好像忽远又忽近  [02:23.26] 你明明不在我身边我却觉得很亲  [02:27.67] HA~ 有一种感觉我想说明  [02:31.97] 我心里的秘密　是你给的甜蜜  [02:36.91] 我们之间的距离好像一点点靠近  [02:41.41] 是不是你对我也有一种特殊感情  [02:45.68] HA~ 我犹豫要不要告诉你  [02:50.26] 我心里的秘密　是我好像喜欢了你  [03:03.99] 这模糊的关系　是莫明的美丽  [03:13.86] 我们之间的距离好像一点点靠近  [03:18.57] 你明明不在我身边我却觉得很亲  [03:22.89] HA~ 这一刻我真的想说明  [03:27.63] 我心里的秘密 是你给的甜蜜  [03:32.62] 我们之间的距离每天一点点靠近  [03:37.29] 这是种别人无法理解的特殊感情  [03:41.34] HA~ 我要让全世界都清晰  [03:46.10] 我心里的秘密　是我会一直深爱着你  [03:54.73] 深爱着你'
			},
			{
				'Name':'李白',
				'Singer':'李荣浩',
				'Src':'http://cc.stream.qqmusic.qq.com/C100000rMFLS0ZnngN.m4a?fromtag=52',
				'Img':'image/singer/7.jpg',
				'Lyric':'[00: 00.70]李白 - 李荣浩 [00: 01.71]词：李荣浩曲：李荣浩 [00: 18.15]大部分人要我学习去看世俗的眼光 [00: 26.47]我认真学习了世俗眼光世俗到天亮 [00: 34.31]一部外国电影没听懂一句话 [00: 38.61]看完结局才是笑话 [00: 42.63]你看我多乖多聪明多么听话多奸诈 [00: 51.48]喝了几大碗米酒再离开是为了模仿 [00: 59.83]一出门不小心吐的那幅是谁的书画 [01: 07.66]你一天一口一个亲爱的对方 [01: 11.92]多么不流行的模样 [01: 16.04]都应该练练书法再出门闯荡 [01: 19.67]才会有人热情买帐 [01: 23.50]要是能重来我要选李白 [01: 27.66]几百年前做的好坏没那么多人猜 [01: 31.83]要是能重来我要选李白 [01: 35.72]至少我还能写写诗来澎湃逗逗女孩 [01: 40.18]要是能重来我要选李白 [01: 43.98]创作也能到那么高端被那么多人崇拜 [01: 51.77]要是能重来 [01: 54.17]喝了几大碗米酒再离开是为了模仿 [02: 02.48]一出门不小心吐的那幅是谁的书画 [02: 10.25]你一天一口一个亲爱的对方 [02: 14.46]多么不流行的模样 [02: 18.57]都应该练练书法再出门闯荡 [02: 22.13]才会有人热情买帐 [02: 26.14]要是能重来我要选李白 [02: 30.36]几百年前做的好坏没那么多人猜 [02: 34.65]要是能重来我要选李白 [02: 38.08]至少我还能写写诗来澎湃逗逗女孩 [02: 42.76]要是能重来我要选李白 [02: 46.64]创作也能到那么高端被那么多人崇拜 [02: 54.38]要是能重来 [03: 27.71]要是能重来我要选李白 [03: 32.84]几百年前做的好坏没那么多人猜 [03: 37.01]要是能重来我要选李白 [03: 40.70]至少我还能写写诗来澎湃逗逗女孩 [03: 45.43]要是能重来我要选李白 [03: 49.26]创作也能到那么高端被那么多人崇拜 [03: 56.71]要是能重来'
			},
			{
				'Name':'恋爱达人',
				'Singer':'罗志祥',
				'Src':'http://www.web-jackiee.com/templets/blog/music/lianaidaren.mp3',
				'Img':'image/singer/8.jpg',
				'Lyric':'[00:07.03]中文歌词库 www.CnLyric.com  [00:00.03] 罗志祥 - 恋爱达人  [00:04.03] 作词:严云农  [00:05.89] 作曲:中文  [00:09.80] (合)Hey You 就是你 请靠近我怀里  [00:14.25] 別假裝不在意 你明明动了心  [00:19.06] SO BABY 就是你 请不要再忧郁  [00:24.05] 我们玩个游戏 叫L.O.V.E  [00:30.15] (小S)給你一分种 若还不心动  [00:34.21] 用  [00:38.94] (罗)BABY 你不会懂 我就是要你心急  [00:43.78] 我恋爱能力 可是达人的等級  [00:50.18] (合)HEY YOU 就是你 请靠近我怀里  [00:55.68] 別假裝不在意 你明明动了心  [01:00.56] SO BABY 就是你 請不要再忧郁  [01:05.39] 我們玩个游戏 叫L.O.V.E~~~~  [01:11.83] YEAH ~~~YES I DO~~  [01:20.25] (罗)眼神不能在乎 态度若有似无  [01:25.14] 你自然就会 跟我走 请上钩  [01:30.64] (小S)你到底行不行 竟玩无聊的招数  [01:34.89] 我看过的猪 可是达人的程度E ON  [01:42.36] (合)HEY YOU 就是你 请靠近我怀里  [01:46.53] 別假裝不在意 我可能喜欢你  [01:51.63] SO BABY就是你 请说你很开心  [01:56.31] 我有点喜欢你 有点喜欢你~  [02:01.92] RAP:哈哈 爱是个野东西  [02:03.14] 它让我的心 变成了恋爱的机器  [02:06.00] 谁遇见你 连达人也会认输  [02:08.75] YEAH 为什么是你 我只想问 YEAH 为什么喜欢你  [02:12.63] (罗)为什么喜欢你 我已喜欢你 YEAH~  [02:20.04] (小S)Youre So Cute So Wont Youe To Me  [02:23.57] 猪头才會一直玩游戏 耍心机  [02:29.84] (合)BABY 就是你 请靠近我怀里  [02:35.81] 別假裝不在意 我想我喜欢你  [02:40.41] SO BABY就是你 请说你也愿意  [02:45.26] 我一直喜欢你 一喜欢你~  [02:50.85] (合)BABY 就是你 请靠近我怀里  [02:54.87] 別假裝不在意 我想我喜欢你  [02:59.94] SO BABY就是你 请说你也愿意  [03:04.62] 我非常喜欢你 非常喜欢你~  [03:18.38] (罗)非常喜欢你'
			}
		],
		//第二个类别
		[
			{
				'Name':'Jar of Love',
				'Singer':'曲婉婷',
				'Src':'http://www.web-jackiee.com/templets/blog/music/Jar%20Of%20Love.mp3',
				'Img':'image/singer/b-1.jpg',
				'Lyric':"[00:00.01] Jar of Love [00:00.10] 演唱：曲婉婷[00:00.30] 中文歌词库 www.CnLyric.com [00:00.84] Another sunrise, another sunset[00:04.20] Soon itll all be yesterday[00:07.44] Another good day, another bad day,[00:12.21] What did you do today? [00:14.60]  [00:15.03] Why do we choose to chase what well lose? [00:19.50] What you want isnt what you have. [00:22.42] What you have may not be yours, to keep. [00:28.06]  [00:30.44] If I could find love, [00:34.51] at a stop, in a park with open arms, [00:38.45] I would save all my love, in a jar, [00:43.13] made of sparks, sealed in my beating heart, [00:45.96] Could it be yours to keep, the Jar of Love. [00:50.82]  [00:53.13] Another left turn, another head turns [00:57.59] Could he be someone I deserve? [01:00.75] Another right turn, another lesson learned [01:05.22] Never leave an open flame to burn [01:08.16]  [01:08.56] Why do we choose to chase what well lose? [01:12.90] What you want isnt what you have. [01:15.81] What you have may not be yours, to keep. [01:21.81]  [01:23.58] If I could find love, at a stop, [01:28.80] in a park with open arms, [01:31.62] I would save all my love, in a jar, [01:36.41] made of sparks, sealed in my beating heart, [01:39.24] Could it be yours to keep, the Jar of Love. [01:48.08]  [01:50.93] Could you be my love [01:52.98]  [01:54.57] Could you be my love [01:56.85]  [01:58.43] Could you be my love [02:00.40]  [02:02.14] Could you be my love [02:05.49]  [02:06.19] Could you be her love [02:09.89] Could you be his love [02:13.68] Could you be I love [02:17.54] Could you be my love [02:17.55] Could i be you love [02:21.33] If I could find love, at a stop, [02:25.90] in a park with open arms, [02:28.84] I would save all my love, in a jar, [02:33.54] made of sparks, sealed in my beating heart, [02:36.32] Could it be yours to keep [02:42.17] If I could find love, at a stop, [02:44.82] in a park with open arms, [02:47.85] I would save all my love, in a jar, [02:52.46] made of sparks, sealed in my beating heart, [02:55.43] Could it be yours to keep, [03:00.23] If I could find love, at a stop, [03:03.97] in a park with open arms, [03:06.91] I would save all my love, [03:10.61] in a jar, made of sparks, [03:12.48] sealed in my beating heart, [03:14.44] Could it be yours to keep, [03:18.36] the Jar of Love. [03:19.98]  [03:22.11] Could it be yours to keep, [03:25.95] the Jar of Love. [03:28.57]  [03:29.68] Could it be yours to keep, [03:34.03] the Jar of Love. [03:37.79] "
			},
			{
				'Name':'Right Here Waiting',
				'Singer':'Richard Marx',
				'Src':'http://www.web-jackiee.com/templets/blog/music/Richard%20Marx%20-%20Right%20Here%20Waiting.mp3',
				'Img':'image/singer/b-2.jpg',
				'Lyric':"[00:00.66]Right Here Waiting(此情可待) - Bryan Adams [00:45.00] [00:45.00]Oceans apart day after day [00:50.94]隔海相思，日复一日 [00:50.94]And I slowly go insane [00:55.44]我逐渐陷入疯狂 [00:55.44]I hear your voice on the line [01:01.45]在电话里听着你的声音 [01:01.45]But it doesnt stop the pain [01:06.21]但那不能疗伤止痛 [01:06.21]If I see you next to never [01:11.76]如果永远见不到你 [01:11.76]How can we say forever [01:16.96]我俩还谈什么天长地久 [01:16.96]Wherever you go [01:19.56]不论你去了哪里 [01:19.56]Whatever you do [01:21.86]不管你做了什么 [01:21.86]I will be right here waiting for you [01:27.63]我都会在此为你等候 [01:27.63]Whatever it takes [01:30.24]不管未来如何 [01:30.24]Or how my heart breaks [01:32.68]或我有多么伤心 [01:32.68]I will be right here waiting for you [01:43.94]我都会在此为你等候 [01:43.94]I took for granted all the times [01:50.09]过去我一直视为理所当然 [01:50.09]That I though would last somehow [01:54.64]以为那终究会继续 [01:54.64]I hear the laughted I taste the tears [02:00.51]我听到笑语，尝到泪水 [02:00.51]But I cant get near you now [02:05.32]现在却无法靠近你 [02:05.32]Oh cant you see it baby [02:10.64]宝贝，你难道看不出来 [02:10.64]You've got me goin Crazy [02:16.25]你已经令我疯狂 [02:16.25]Wherever you go [02:18.54]不论你去了哪里 [02:18.54]Whatever you do [02:21.10]不管你做了什么 [02:21.10]I will be right here waiting for you [02:26.66]我都会在此为你等候 [02:26.66]Whatever it takes [02:29.41]不管未来如何 [02:29.41]Or how my heart breaks [02:32.02]或我有多么伤心 [02:32.02]I will be right here waiting for you [02:38.07]我都会在此为你等候 [02:38.07]I wonder how we can survive [02:43.78]我怀疑要怎样才让继续下去 [02:43.78]This romance [02:48.30]这段恋情 [02:48.30]But in the end if Im with you [02:53.44]如果最后我能够和你在一起 [02:53.44]I'll take the chance [03:20.79]我会好好把握机会 [03:20.79]Oh cant you see it baby [03:25.97]宝贝，你难道看不出来 [03:25.97]You've got me goin crazy [03:31.53]你已经令我疯狂 [03:31.53]Wherever you go [03:33.97]不论你去了哪里 [03:33.97]Whatever you do [03:36.53]不管你做了什么 [03:36.53]I will be right here waiting for you [03:41.83]我都会在此为你等候 [03:41.83]Whatever it takes [03:44.68]不管未来如何 [03:44.68]Or how my heart breaks [03:47.37]或我有多么伤心 [03:47.37]I will be right here waiting for you [04:01.02]我都会在此为你等候 [04:01.02]waiting for you [04:02.90]为你等候"
			},
			{
				'Name':'Counting Stars',
				'Singer':'OneRepublic',
				'Src':'http://www.web-jackiee.com/templets/blog/music/OneRepublic%20-%20Counting%20Stars.mp3',
				'Img':'image/singer/b-3.jpg',
				'Lyric':"[00:00.70]Lately I been, I been losing sleep  [00:05.18]最近啊 我总是失眠  [00:05.18]Dreaming 'bout the things that we could be  [00:09.26]织着我们的梦想  [00:09.26]But baby I been, I been prayin' hard  [00:14.05]但是宝贝阿 我总是一直很努力  [00:14.05]Said no more counting dollars  [00:15.83]坐着不再只数着钱  [00:15.83]We'll be counting stars  [00:19.05]我们来数星星   [00:19.05]Yeah, we'll be counting stars  [00:38.02]来数星星吧  [00:38.02]I see this life  [00:39.05]我看人生  [00:39.05]Like a swinging vine  [00:40.35]就像摇摆的藤蔓  [00:40.35]Swing my heart across the line  [00:42.40]动汤我的内心跨过这道线  [00:42.40]In my faces flashing suns  [00:44.16]我的脸就像那闪烁着阳光  [00:44.16]Seek it out and ye shall find  [00:46.21]搜寻 而你找到了  [00:46.21]Old, but I'm not that old  [00:48.16]哦 但我没那么老  [00:48.16]Young, but I'm not that bold  [00:50.10]年轻 但我没那么英勇无谓  [00:50.10]And I don't think the world is sold  [00:52.30]我不认为这是个被出卖的世界  [00:52.30]I'm just doing what we're told  [00:54.45]我只是做上头告诉我们该做的事  [00:54.45]I, feel something so right  [00:58.93]我，感受到某些事是如此地正确  [00:58.93]But doing the worng thing  [01:02.18]做着坏事  [01:02.18]I, feel something so wrong  [01:07.00]我，感觉某些事错得一踏涂地  [01:07.00]But doing the right thing  [01:10.09]做对的事  [01:10.09]I could lie, could lie, could lie  [01:13.91]我可以编造谎言 说谎 说谎  [01:13.91]everything that kills me makes me feel alive  [01:18.05]任何伤害我的一切让我感到真正地活着  [01:18.05]Lately I been, I been losing sleep  [01:21.59]最近啊 我总是失眠  [01:21.59]Dreaming 'bout the things that we could be  [01:25.79]织着我们的梦想  [01:25.79]Baby I been, I been prayin' hard  [01:29.95]宝贝阿 我总是一直很努力  [01:29.95]Said no more counting dollars  [01:31.40]坐着不再只数着钱  [01:31.40]We'll be counting stars  [01:33.25]我们继续来数星星   [01:33.25]Lately I been, I been losing sleep  [01:37.61]最近啊 我总是失眠  [01:37.61]Dreaming 'bout the things that we could be  [01:41.24]织着我们的梦想  [01:41.24]Baby I been, I been prayin' hard  [01:45.41]宝贝阿 我总是一直很努力  [01:45.41]Said no more counting dollars  [01:47.12]坐着不再只数着钱  [01:47.12]We'll be, we'll be counting stars  [01:56.65]我们继续来数星星   [01:56.65]I feel the love  [01:57.98]我感觉到爱  [01:57.98]And I feel it burn  [01:59.14]它在燃烧  [01:59.14]Down this river every turn  [02:00.97]就在这条河 就在河的每个转弯处  [02:00.97]Hope is a four letter word  [02:02.91]希望是两个字  [02:02.91]Make that money  [02:03.82]把它变成金钱   [02:03.82]Watch it burn  [02:04.99]看其燃烧殆尽  [02:04.99]Old, but I'm not that old  [02:07.17]但我没那么老  [02:07.17]Young, but I'm not that bold  [02:08.83]年轻 但我没那么英勇无谓  [02:08.83]And I don't think the world is sold  [02:11.10]我不认为这是个被出卖的世界  [02:11.10]I'm just doing what we're told  [02:13.43]我只是做上头告诉我们该做的事  [02:13.43]I, feel something so wrong  [02:17.80]我，感觉某些事错得一踏涂地  [02:17.80]But doing the right thing  [02:20.90]做对的事  [02:20.90]I could lie, could lie, could lie  [02:24.73]我可以编造谎言 说谎 说谎  [02:24.73]Everything that drowns me makes me wanna fly  [02:28.83]任何打击我的一切使我想要飞得更高  [02:28.83]Lately I been, I been losing sleep  [02:32.30]最近啊 我总是失眠  [02:32.30]Dreaming 'bout the things that we could be  [02:36.73]织着我们的梦想  [02:36.73]Baby I been, I been prayin' hard  [02:40.50]宝贝阿 我总是一直很努力  [02:40.50]Said no more counting dollars  [02:42.22]坐着不再只数着钱  [02:42.22]We'll be counting stars  [02:44.27]我们继续来数星星   [02:44.27]Lately I been, I been losing sleep  [02:48.47]最近啊 我总是失眠  [02:48.47]Dreaming 'bout the things that we could be  [02:52.02]织着我们的梦想  [02:52.02]Baby I been, I been prayin' hard  [02:56.21]宝贝阿 我总是一直很努力  [02:56.21]Said no more counting dollars  [02:57.95]坐着不再只数着钱  [02:57.95]We'll be, we'll be counting stars  [03:04.39]我们继续来数星星   [03:04.39]Take that money  [03:04.83]拿着金钱  [03:04.83]And watch it burn  [03:05.72]看其燃烧  [03:05.72]Sink in the river  [03:06.68]在河中吟唱着  [03:06.68]The lessons I learned  [03:07.72]学到的一课  [03:07.72]Take that money  [03:08.66]拿着金钱  [03:08.66]And watch it burn  [03:09.59]看其燃烧  [03:09.59]Sink in the river  [03:10.56]在河中吟唱着  [03:10.56]The lessons I learned  [03:12.11]学到的一课  [03:12.11]Take that money  [03:12.66]拿着金钱  [03:12.66]And watch it burn  [03:13.57]看其燃烧  [03:13.57]Sink in the river  [03:14.55]在河中吟唱着  [03:14.55]The lessons I learned  [03:15.66]学到的一课  [03:15.66]Take that money  [03:16.51]拿着金钱  [03:16.51]And watch it burn  [03:17.44]看其燃烧  [03:17.44]Sink in the river  [03:18.39]在河中吟唱着  [03:18.39]The lessons I learned  [03:19.66]学到的一课  [03:19.66]Everything that kills me makes me feel alive  [03:26.87]每件事情都杀死我使我感觉我还活着  [03:26.87]Lately I been, I been losing sleep  [03:30.96]最近啊 我总是失眠  [03:30.96]Dreaming 'bout the things that we could be  [03:34.42]织着我们的梦想  [03:34.42]Baby I been, I been prayin' hard  [03:38.51]但是宝贝阿 我总是一直很努力  [03:38.51]Said no more counting dollars  [03:40.15]坐着不再只数着钱  [03:40.15]We'll be counting stars  [03:42.10]我们继续数星星   [03:42.10]Lately I been, I been losing sleep  [03:46.37]最近啊 我总是失眠  [03:46.37]Dreaming 'bout the things that we could be  [03:50.14]织着我们的梦想  [03:50.14]Baby I been, I been prayin' hard  [03:54.32]但是宝贝阿 我总是一直很努力  [03:54.32]Said no more counting dollars  [03:56.44]坐着不再只数着钱  [03:56.44]We'll be, we'll be counting stars  [03:58.17]我们继续数星星   [03:58.17]Take that money  [03:58.91]拿着金钱  [03:58.91]And watch it burn  [03:59.80]看其燃烧  [03:59.80]Sink in the river  [04:00.71]在河中吟唱着  [04:00.71]The lessons I learned  [04:01.89]学到的一课  [04:01.89]Take that money  [04:02.73]拿着金钱  [04:02.73]And watch it burn  [04:03.72]看其燃烧  [04:03.72]Sink in the river  [04:04.79]在河中吟唱着  [04:04.79]The lessons I learned  [04:05.79]学到的一课  [04:05.79]Take that money  [04:06.69]拿着金钱  [04:06.69]And watch it burn  [04:07.96]看其燃烧  [04:07.96]Sink in the river  [04:08.69]在河中吟唱着  [04:08.69]The lessons I learned  [04:09.71]学到的一课  [04:09.71]Take that money  [04:10.63]拿着金钱  [04:10.63]And watch it burn  [04:11.56]看其燃烧  [04:11.56]Sink in the river  [04:12.52]在河中吟唱着  [04:12.52]The lessons I learned  [04:13.41]学到的一课"
			},
			{
				'Name':'Forever Young',
				'Singer':'Youth Group',
				'Src':'http://cc.stream.qqmusic.qq.com/C100002uQH2G3O7A8z.m4a?fromtag=52',
				'Img':'image/singer/b-4.jpg',
				'Lyric':"[00:00.70]Forever, forever[00:03.17]Forever young ----Youth Group[00:19.04]Let's dance in style let's dance for a while,[00:23.63]Heaven can wait we're only watching the skies,[00:27.73]Hoping for the best but expecting the worst,[00:31.63]Are you gonna drop the bomb or not?[00:36.09]Let us die on let us live forever,[00:40.32]Don't have the power but we never say never,[00:44.39]Sitting in the sandpit life is a short trip,[00:49.16]Music's for the sad man[00:52.83]Can you imagine when this race is run,[00:57.03]Turning up our faces into the sun,[01:01.23]Praising our leaders getting in tune,[01:05.08]Music's played by the mad man[01:09.42]Forever young, I want to be forever young,[01:17.49]Do you really want to live forever?[01:21.61]Forever forever,[01:43.56]Some are like water Some are like the heat,[01:46.86]Some are melodies Some are the beat,[01:51.14]Sooner or later they'll all be gone,[01:55.10]Why don't they stay on?[01:59.24]It's hard to get without a cause,[02:03.15]I don't want to perish like a fading voice,[02:07.54]Youth is like diamonds in the sun,[02:11.64]And diamonds are forever,[02:15.19]Forever young, I wanna be forever young[02:23.47]Do you really want to live forever[02:27.44]Forever, forever[02:32.04]Forever young, I wanna be forever young[02:39.75]Do you really want to live forever[02:43.93]Forever, forever[03:21.55]Forever young, I wanna be forever young[03:28.61]Do you really want to live forever[03:33.60]Forever, forever[03:37.38]Forever young, I wanna be forever young[03:45.06]Do you really want to live forever"
			},
			{
				'Name':'My heart will go on',
				'Singer':'céline dion',
				'Src':'http://www.web-jackiee.com/templets/blog/music/C%c3%a9line%20Dion%20-%20My%20Heart%20Will%20Go%20On.mp3',
				'Img':'image/singer/b-5.jpg',
				'Lyric':"[00:00.58]My Heart Will Go On - Celine Dion  [00:21.26]Every night in my dreams  [00:25.51]I see you  [00:27.72]I feel you  [00:30.73]That is how I know you go on  [00:39.53]Far across the distance  [00:44.88]and spaces between us  [00:49.93]You have come to show you go on  [00:59.94]Near far wherever you are  [01:07.83]I believe that the heart does go on  [01:19.24]Once more you open the door  [01:27.44]And you're here in my heart  [01:32.74]And my heart will go on and on  [01:48.06]Love can touch us one time  [01:52.56]and last for a lifetime  [01:57.76]And never let go till we're gone  [02:07.62]Love was when I loved you  [02:11.76]one true time I hold to  [02:17.22]In my life we'll always go on  [02:27.02]Near far wherever you are  [02:35.52]I believe that the heart does go on  [02:46.33]Once more you open the door  [02:54.69]And you're here in my heart  [02:59.25]And my heart will go on and on  [03:25.23]You're here there's nothing I fear  [03:33.39]And I know that my heart will go on  [03:44.69]We'll stay forever this way  [03:52.89]You are safe in my heart  [03:57.10]And my heart will go on and on"
			},
			{
				'Name':'I Look To You',
				'Singer':'Whitney Houston',
				'Src':'http://cc.stream.qqmusic.qq.com/C100003ZxD8w29OCEP.m4a?fromtag=52',
				'Img':'image/singer/b-6.jpg',
				'Lyric':"[00:00.61]I Look To You - Whitney Houston  [00:10.24]As I lay me down [00:14.98]随着我躺下 [00:14.98]heaven hear me now [00:19.65]天堂听到我的呼声 [00:19.65]I am lost without a cause [00:23.90]我已迷失 没有任何理想  [00:23.90]after giving it my all [00:28.87]在我付出所有之后 [00:28.87]Winter storms have come [00:33.77]冬天的风暴已来 [00:33.77]and darkened my sun [00:38.41]灰暗了我的太阳 [00:38.41]After all that I've been through [00:43.17]经历了所有之后  [00:43.17]Who on earth can I turn to [00:46.37]到底我能向谁求助 [00:46.37]I look to you [00:51.24]我指望你  [00:51.24]I look to you [00:57.25]我指望你  [00:57.25]After all my strength is gone [01:02.03]在我所有力气丧失殆尽 [01:02.03]In you I can be strong [01:05.20]靠着你 我会强壮有力 [01:05.20]I look to you [01:10.09]我指望你 [01:10.09]I look to you [01:15.94]我指望你 [01:15.94]And when melodies are gone [01:20.53]当旋律消失 [01:20.53]In you I hear a song [01:23.91]在你这我听到一首歌 [01:23.91]I look to you [01:34.30]我指望你 [01:34.30]After I lose my breath [01:39.33]当我不能呼吸 [01:39.33]there is no more fighting left [01:43.90]没有斗争剩下 [01:43.90]Thinking to rise no more [01:48.71]不再想着起来 [01:48.71]Searching for that open door [01:52.97]寻找那开着的门 [01:52.97]and every road that I've taken [01:57.99]我走过的每一条路 [01:57.99]Led to my regret [02:02.82]导致我的悔恨 [02:02.82]And I don't know if I'm gonna make it [02:07.51]我不知道我是否能搞定 [02:07.51]Nothing to do but lift my head [02:11.33]没事做 只能抬头 [02:11.33]I look to you [02:15.80]我指望你  [02:15.80]I look to you [02:22.00]我指望你  [02:22.00]After all my strength is gone [02:26.70]在我所有力气丧失殆尽 [02:26.70]In you I can be strong [02:29.87]靠着你 我会强壮有力 [02:29.87]I look to you [02:35.10]我指望你 [02:35.10]I look to you [02:40.55]我指望你 [02:40.55]And when melodies are gone [02:45.36]当旋律消失 [02:45.36]In you I hear a song [02:48.42]在你这我听到一首歌 [02:48.42]I look to you [02:51.53]我指望你 [02:51.53]My leaves are broken (oh lord) [02:54.22]我的叶子已碎（哦上帝） [02:54.22]My walls have come(coming down on me) [02:57.04]我的墙已来 (来到我面前) [02:57.04]Tumbling down on me (All the rain is falling) [03:01.27]倒向我 （大雨倾盆） [03:01.27]The rain is falling [03:03.35]雨在下 [03:03.35]Defeat is calling (Set me free) [03:06.14]失败在召唤（保护我） [03:06.14]I need you to set me free [03:10.10]我需要你保护我 [03:10.10]Take me far away from the battle [03:14.12]带我远离战争 [03:14.12]I need you to shine on me [03:19.40]我需要你闪耀 [03:19.40]I look to you [03:24.20]我指望你  [03:24.20]I look to you [03:29.90]我指望你  [03:29.90]After all my strength is gone [03:34.76]在我所有力气丧失殆尽 [03:34.76]In you I can be strong [03:38.14]靠着你 我会强壮有力 [03:38.14]I look to you [03:43.16]我指望你  [03:43.16]I look to you [03:48.99]我指望你  [03:48.99]And when melodies are gone [03:53.85]当旋律消失 [03:53.85]In you I hear a song [03:57.01]在你这我听到一首歌 [03:57.01]I look to you [04:07.57]我指望你 [04:07.57]I look to you ohh [04:14.62]我指望你  哦 [04:14.62]I look to you [04:21.05]我指望你"
			},
			{
				'Name':'Cry On My Shoulder',
				'Singer':'Melissa',
				'Src':'http://cc.stream.qqmusic.qq.com/C1000037PtDP2sJUSO.m4a?fromtag=52',
				'Img':'image/singer/b-7.jpg',
				'Lyric':"[00:01.18]Cry On My Shoulder - Deutschland Sucht Den Superstar [00:26.86]If the hero never comes to you [00:32.85]如果男主角还没有出现，  [00:32.85]If you need someone You're feeling blue [00:38.80]如果你需要有一个人你感觉忧伤  [00:38.80]If you wait for love and you're alone [00:44.51]如果你孤单的等候著你的爱情;  [00:44.51]If you call your friends nobody's home [00:50.16]如果你打电话给你的朋友但是没有人接听  [00:50.16]You can run away but you can't hide [00:56.29]你可以离家，但是不可以躲起来。  [00:56.29]Through a storm and through a lonely night [01:02.38]尽管一场暴风雨贯穿了整个孤独的夜晚  [01:02.38]Then I'll show you there's a destiny [01:06.89]我会告诉你一个人的命运  [01:06.89]The best things in life they are free [01:14.20]人生命中最好的东西是自由  [01:14.20]But if you wanna cry Cry on my shoulder [01:20.56]如果你想哭泣，请靠在我的肩膀上  [01:20.56]If you need someone Who cares for you [01:26.23]如果你需要一个人关心你  [01:26.23]If you're feeling sad your heart gets colder [01:33.70]如果你正感觉很伤心 你的心越来越冷  [01:33.70]Yes I show you what real love can do [01:43.85]我会告诉你真正的爱情有什麼作用  [01:43.85]If your sky is grey oh let me know [01:49.79]如果你的天空是灰色的，请告诉我  [01:49.79]There's a place in heaven where we'll go [01:55.60]我们将去天堂的某一个地方  [01:55.60]If heaven is a million years away [02:00.98]如果去天堂的路有百万年之远  [02:00.98]Oh just call me and I'll make your day [02:07.56]请打电话给我，我会挣得你幸运的一天  [02:07.56]When the nights are getting cold and blue [02:13.53]当夜晚对你来说变得寒冷和忧伤  [02:13.53]When the days are getting hard for you [02:19.28]当白天对你来说变的艰难  [02:19.28]I will always stay here by your side [02:23.71]我将永远站在你的身边  [02:23.71]I promise you I'll never hide [02:31.35]我保证，我绝对不会躲起来  [02:31.35]But if you wanna cry Cry on my shoulder [02:37.19]如果你想哭，请靠在我的肩上  [02:37.19]If you need someone Who cares for you [02:43.09]如果你需要有一个人关心你  [02:43.09]If you're feeling sad Your heart gets colder [02:50.70]如果你感觉很伤心，心也变得越来越冷  [02:50.70]Yes I show you what real love can do [02:55.13]我会告诉你真正的爱情有什麼作用  [02:55.13]But if you wanna cry Cry on my shoulder [03:00.89]如果你想哭泣，请靠在我的肩膀上  [03:00.89]If you need someone Who cares for you [03:07.02]如果你需要一个人关心你  [03:07.02]If you're feeling sad your heart gets colder [03:14.49]如果你正感觉很伤心 你的心越来越冷  [03:14.49]Yes I show you what real love can do what real love can do [03:25.10]我会告诉你真正的爱情有什麼作用 爱情有什麼作用 [03:25.10]what real love can do what love can do [03:36.49]真正的爱情有什麼作用  [03:36.49]what love can do love can do [03:46.20]爱情有什麼作用"
			},
			{
				'Name':'As Long As You Love Me',
				'Singer':'Backstreet Boys',
				'Src':'http://cc.stream.qqmusic.qq.com/C100002k9sY70KAB1t.m4a?fromtag=52',
				'Img':'image/singer/b-8.jpg',
				'Lyric':"[00:01.15]As Lonng As You Love Me - Backstreet Boys [00:07.20]As Lonng As You Love Me [00:07.20]我只要你爱我 [00:19.58]Although loneliness has always been a friend of mine [00:19.58]虽然早已习惯孤独形影相伴 [00:24.24]I'm leaving my life in your hands [00:24.24]我把自己交你掌管 [00:29.91]People say i'm crazy that i am blind [00:29.91]人们说我被感情冲昏了脑袋 [00:34.53]Risking it all in a glance [00:34.53]竟转眼间赌上未来 [00:39.45]How you got my blind is still a mystery [00:39.45]你怎会让我不顾一切还是个谜 [00:44.19]I can't get you out of my head [00:44.19]我就是无法忘了你 [00:49.46]Don't care what is written in your history [00:49.46]我不在乎你有过怎样的经历 [00:53.85]As long as youre here with me [00:53.85]只要你和我在一起 [00:57.35]I don't care who you are [00:57.35]我不管你是谁 [01:01.11]Where youre from [01:01.11]从哪来 [01:03.74]What you did [01:03.74]做过什么 [01:05.81]As long as you love me [01:05.81]我只要你爱我 [01:08.39]Who you are [01:08.39]我不管你是谁 [01:10.96]Where youre from [01:10.96]从哪来 [01:12.90]Don't care what you did [01:12.90]做过什么 [01:15.37]As long as you love me [01:15.37]我只要你爱我 [01:18.62]Every little thing that you have said and done [01:18.62]你说过做过的那些点点滴滴 [01:23.17]Feels like it's deep within me [01:23.17]都深深印在我心里 [01:28.58]Doesn't really matter if youre on the run [01:28.58]即使你行色匆匆也没有关系 [01:32.95]It seems like were meant to be [01:32.95]我们似乎命中注定 [01:36.56]I don't care who you are [01:36.56]我不管你是谁 [01:40.31]Where youre from [01:40.31]从哪来 [01:42.62]What you did [01:42.62]做过什么 [01:44.86]As long as you love me [01:44.86]我只要你爱我 [01:47.45]Who you are [01:47.45]我不管你是谁 [01:49.89]Where youre from [01:49.89]从哪来 [01:51.87]Don't care what you did [01:51.87]做过什么 [01:54.50]As long as you love me [01:54.50]我只要你爱我 [02:04.51]As long as you love me [02:04.51]我只要你爱我 [02:07.76]I've tried to hide it so that no one knows [02:07.76]我设法把感情隐藏起来不让人看透 [02:11.36]But I guess it shows [02:11.36]但恐怕我无法不流露 [02:13.96]When you look in to my eyes [02:13.96]当你凝视着我 [02:17.88]What you did and where youre coming from [02:17.88]你做过什么又从哪里来 [02:21.27]I don't care [02:21.27]我都不在乎 [02:24.06]as long as you love me baby [02:24.06]只要你爱我就好，宝贝 [02:35.55]I don't care who you are [02:35.55]我不管你是谁 [02:38.94]Where youre from [02:38.94]从哪来 [02:41.42]What you did [02:41.42做过什么 [02:43.24]As long as you love me [02:43.24]我只要你爱我 [02:46.14]Who you are [02:46.14]我不管你是谁 [02:48.67]Where youre from [02:48.67]从哪来 [02:50.61]Don't care what you did [02:50.61]做过什么 [02:53.13]As long as you love me [02:53.13]我只要你爱我 [02:57.60]who you are [02:57.60]我不管你是谁 [02:59.71]Where youre from [02:59.71]从哪来 [03:02.12]What you did [03:02.12]做过什么 [03:04.10]As long as you love me [03:04.10]我只要你爱我 [03:06.78]Who you are [03:06.78]我不管你是谁 [03:09.48]Where youre from [03:09.48]从哪来 [03:12.68]As long as you love me [03:12.68]做过什么 [03:15.56]Who you are [03:15.56]我只要你爱我 [03:17.79]As long as you love me [03:17.79]我只要你爱我 [03:20.60]What you did [03:20.60]你做过什么 [03:22.39]I don't care as long as you love me [03:22.39]我都不在乎我只要你爱我"
			}
		],
		//第三个类别
		[
			{
				'Name':'纯白サンクチュアリィ',
				'Singer':'茅园实里',
				'Src':'http://www.web-jackiee.com/templets/blog/music/chunbai.mp3',
				'Img':'image/singer/c-1.jpg',
				'Lyric':'[00:00.00]純白サンクチュアリィ [00:01.20]羽の色　白い言葉　純粋へと戻る  [00:07.89]願いましょう　幸せになれ  [00:11.58]瞳に sweet my sweet my dream  [00:18.09]  [00:43.92]そっと浮かんだ　輝きは愛の実？  [00:51.40]切ない香りが fantastic  [00:57.31]君も一緒に感じて欲しいの  [01:03.51]繋がる奇跡の糸  [01:09.38]  [01:10.45]そうよ同じ日々を　過ごすことができたら  [01:18.00]ずっとね笑顔で for you  [01:23.07]  [01:23.56]見つめ合う時間が好き　伸ばす手が触れるよ  [01:30.49]恋人たち　凍る息が硝子のように光り  [01:36.69]羽の色　白い言葉　純粋へと戻る  [01:44.03]願う胸が気づいたの  [01:47.75]飛んでけ sweet my sweet my dream  [01:54.03]  [02:06.80]不思議揺れてる　私も揺られてる？  [02:14.50]ときめく目と目で Romantic  [02:20.21]君がいるなら大丈夫だから  [02:26.45]優しく見守ってね  [02:32.26]  [02:33.30]宙に浮かぶ paradise　星の誘惑かもね  [02:40.83]虹が階段になり  [02:46.04]  [02:46.49]夢の先甘い香り　包まれた心で  [02:53.51]毎日咲く花のように　綺麗に生きてみたい  [02:59.50]雪の音　月の欠片　静けさを抱きしめ  [03:06.91]願いましょう　幸せが  [03:10.77]瞳へ keep my keep my wish  [03:16.75]  [03:46.80]Ah...heavenly place  [03:53.00]泣いてみたい温かさに届きそう  [04:04.14]  [04:04.33]見つめ合う時間が好き　伸ばす手が触れるよ  [04:11.50]恋人たち　凍る息が硝子のように光り  [04:17.60]羽の色　白い言葉　純粋へと戻る  [04:24.86]願う胸が気づいたの  [04:28.70]飛んでけ sweet my sweet my dream  [04:35.32]  [04:46.56]終わった'

			},
			{
				'Name':'Butter-Fly',
				'Singer':'和田光司',
				'Src':'http://www.web-jackiee.com/templets/blog/music/Butter-Fly.mp3',
				'Img':'image/singer/c-2.jpg',
				'Lyric':'[00:03.54]ButterFly-和田光司  [00:18.01]ゴキゲンな蝶になって  [00:20.80]きらめく风に乘って  [00:23.44]今すぐ　キミに会いに行こう  [00:29.66]余计な事なんて  [00:32.25]忘れた方がマシさ  [00:35.32]これ以上　シャレてる时间はない  [00:41.01]何が　WOW　WOW～  [00:43.70]この空に届くのだろう  [00:46.88]だけど　WOW　WOW～  [00:49.40]明日の予定もわからない  [00:55.87]无限大な梦のあとの  [00:59.67]何もない世の中じゃ  [01:02.38]そうさ爱しい  [01:04.56]想いも负けそうになるけど  [01:07.70]Stayしがちなイメージだらけの  [01:11.39]赖りない翼でも  [01:14.08]きっと飞べるさ  [01:16.31]On My Love  [01:31.20]ウカレタ蝶になって  [01:33.44]一途な风に乘って   [01:36.35]どこまでも  [01:37.79]キミに会いに行こう  [01:42.33]暧昧な言叶って  [01:45.10]意外に便利だって  [01:47.83]叫んでる  [01:49.40]ヒットソング听きながら  [01:53.69]何が　WOW　WOW～  [01:56.37]この街に响くのだろう  [01:59.63]だけど　WOW　WOW～  [02:02.20]期待してても仕方ない  [02:08.89]无限大な梦のあとの  [02:12.55]やるせない世の中じゃ  [02:15.14]そうさ常识  [02:17.38]はずれも恶くないかな   [02:20.46]Stayしそうなイメージを染めた  [02:24.13]ぎこちない翼でも  [02:26.78]きっと飞べるさ  [02:29.11]On My Love  [03:12.49]无限大な梦のあとの  [03:16.69]何もない世の中じゃ  [03:19.19]そうさ爱しい  [03:21.29]想いも负けそうになるけど  [03:24.42]Stayしがちなイメージだらけの  [03:28.27]赖りない翼でも  [03:30.72]きっと飞べるさ  [03:33.11]Oh Yeah～  [03:35.64]无限大な梦のあとの  [03:39.83]やるせない世の中じゃ  [03:42.40]そうさ常识  [03:44.51]はずれも恶くはないかな  [03:47.51]Stayしそうなイメージを染めた  [03:51.35]ぎこちない翼でも  [03:53.91]きっと飞べるさ  [03:56.15]On My Love  [04:04.83]哦 我的爱'
			},
			{
				'Name':'运命のルーレット廻して',
				'Singer':'名侦探柯南',
				'Src':'http://www.web-jackiee.com/templets/blog/music/ZARD.mp3',
				'Img':'image/singer/c-3.jpg',
				'Lyric':'[ti:運命のルーレット廻して] [ar:ZARD] [al:運命のルーレット廻して] [offset:0] [00:00.59]運命のルーレット廻して - ZARD [00:04.57]作詞∶坂井泉水 [00:06.76]作曲∶栗林誠一郎 [00:09.25] [00:17.26]運命のルーレット廻して [00:24.29] [00:24.80]ずっと君を見ていた [00:31.50] [00:44.62]何故なの　こんなに　幸せなのに [00:49.76] [00:50.92]水平線を見ると　哀しくなる [00:56.52] [00:58.31]あの頃の自分を遠くで　見ている [01:07.07]そんな感じ [01:10.09] [01:11.57]運命のルーレット廻して [01:17.13] [01:18.87]アレコレ深く考えるのは　Mystery [01:24.11] [01:24.67]ほら　運命の人はそこにいる [01:31.26]ずっと　君を見ていた [01:37.52] [01:42.85]星空を見上げて　笑顔ひとつで [01:47.56] [01:49.08]この高い所からでも　飛べそうじゃん [01:54.93] [01:56.56]スピード上げ　望遠鏡を　覗いたら [02:03.84]未来が見えるよ [02:08.58] [02:09.92]運命のルーレット廻して [02:15.61] [02:17.17]何処に行けば　想い出に会える？ [02:22.25] [02:23.01]青い地球の　ちっぽけな二人は [02:29.55]今も　進化し続ける [02:35.83] [03:03.06]運命のルーレット廻して [03:08.77] [03:10.32]旅立つ時の翼はbravery [03:15.93]ほら　どんな時も　幸運は待ってる [03:22.80]ずっと　君を見ていた [03:28.74] [03:29.54]ずっと　君を見ていた [03:36.95]'
			},
			{
				'Name':'残酷な天使のテーゼ ',
				'Singer':'米倉千尋',
				'Src':'http://www.web-jackiee.com/templets/blog/music/Okui%20Masami.mp3',
				'Img':'image/singer/c-4.jpg',
				'Lyric':'[00:00.35]残酷天使的行动纲领 - 高橋洋子  [00:01.23]残酷な天使のように  [00:07.11]少年よ 神话になれ  [00:23.03]苍い风がいま 胸のドアを叩いても  [00:29.79]私だけをただ见つめて 微笑んでるあなた  [00:37.40]そっとふれるもの もとめることに梦中で  [00:44.79]运命さえまだ知らない いたいけな瞳  [00:52.47]だけどいつか気付くでしょう その背中には  [01:00.01]遥か未来 めざすための 羽根があること  [01:07.53]残酷な天使のテーゼ 窓辺からやがて飞び立つ  [01:14.97]ほとばしる热いパトスで 思い出を裏切るなら  [01:22.44]この空そらを抱いて辉く  [01:26.16]少年よ 神话になれ  [02:15.39]ずっと眠ってる 私の爱の揺りかご  [02:22.50]あなただけが 梦の使者に 呼ばれる朝がくる  [02:30.63]细い首筋を 月あかりが映してる  [02:37.14]世界中の时を止めて 闭じこめたいけど  [02:44.79]もしもふたり逢えたことに 意味があるなら  [02:52.30]私はそう 自由を知るためのバイブル  [02:59.79]残酷な天使のテーゼ 悲しみがそしてはじまる  [03:07.31]抱きしめた命のかたち その梦に目覚めたとき  [03:14.84]谁よりも光を放つ  [03:18.49]少年よ 神话になれ  [03:22.31]人は爱をつむぎながら 歴史をつくる  [03:29.78]女神なんてなれないまま 私は生きる  [03:37.24]残酷な天使のテーゼ 窓辺からやがて飞び立つ  [03:44.71]ほとばしる热いパトスで 思い出を裏切るなら  [03:52.23]この空そらを抱いて辉く  [03:55.99]少年よ 神话になれ'
			},
			{
				'Name':'梦のしずく',
				'Singer':'松隆子',
				'Src':'http://www.web-jackiee.com/templets/blog/music/mengdediandi.mp3',
				'Img':'image/singer/c-5.jpg',
				'Lyric':'[00:00.00]梦的点滴 [00:11.25]あいよりもこいよりもはやく  [00:16.49]あなたにであったいたずらが　  [00:21.19]わたしのすべてをかえてゆく  [00:27.20]こいにおちてゆく……  [00:31.89]であいわかんたんいまどうしてせつない？、  [00:57.88]わかれくりかえし、ひとわあいをもとめる  [01:07.49]いくつものよるにあふれるなみだかさねて  [01:16.88]せなかあわせのふたりはなれる？よりそう？  [01:29.66]このほしにただよいつずける  [01:36.87]あなたとわたしがめぐりあう  [01:41.89]ゆびさきにあいをかんじたら  [01:47.13]こころほどけてゆく……  [01:52.26]ふきぬけるかぜのようにあなたをつつみたい  [02:11.81]あいされるたびにわたしになってゆくの  [02:32.78]こおりついたこころだきしめとかして  [02:45.23]あどとあわないときめてとき  [02:57.13]このむねわいたむのでしょうか  [02:59.42]てのひらであいをみつめたら  [03:02.48]もっとじゆうになれる  [03:07.17]つたえたいもっとかぎりないおもいを  [03:13.07]もうなにもかもうしなってもいい  [03:18.97]このこいがすべてこのしゅんかんなにかが  [03:24.10]うまれたらきっとそれわ……  [03:28.14]あかいはなびらまいおちてく  [03:39.83]あおいはのあめのしずくたち  [03:44.85]あなたおあいしたゆめのあかし  [03:51.18]あさひにきえてゆく  [03:55.22]あいよりもこいよりもはやく  [04:00.58]あなたにであったいたずらが　  [04:05.71]わたしのすべてをかえてゆく  [04:11.93]こいにおちてゆく……  [04:15.43]つたえたいもっとかぎりないおもいを  [04:19.03]もうなにもかもうしなってもいい  [04:28.42]このこいがすべてこのしゅんかんなにかが  [04:33.34]うまれたらきっとそれわ……'
			},
			{
				'Name':'Wonderful Days',
				'Singer':'奥井亚美',
				'Src':'http://www.web-jackiee.com/templets/blog/music/Wonderful%20Days.mp3',
				'Img':'image/singer/c-6.jpg',
				'Lyric':'[00:00.00]ar:奥井雅美 al:Masami Life [00:00.81]Wonderful Days - 奧井雅美 [00:02.52]詞：奥井雅美 [00:03.92]曲：矢吹俊郎 [00:05.41] [00:19.52]“永遠に子供かも…”くやしさに苦笑い [00:26.50] [00:27.08]逃げたくない問題　乗り越えれず壁に跪いては [00:34.76] [00:35.91]“誰が自分の価値とか　決めるのかな?”きっと [00:42.87] [00:43.51]何かに価値なんて求める壁が一番高い [00:50.46] [00:50.99]泣きたい気持ちでもこらえて笑う [00:59.65] [01:00.60]あの時　歌にした心　思い出して本音で生きよう [01:08.25] [01:10.59]OH NO!今ならOne more chance One more time 飛べるから [01:14.20] [01:15.30]ココで燃えるみんなと [01:17.74] [01:18.57]確かめたい人生のシナリオは　自分で描き続けると [01:26.79] [01:28.01]Never give up!凹んだらSo Jump! イメージをした [01:32.53] [01:52.87]不器用と器用ならどちらがお好きです? [02:00.18]嘘つけない私　何度も人、傷つけて傷ついた [02:07.92] [02:09.16]行く先がイバラでも　そっち向かう習性 [02:15.58] [02:16.79]この一度の人生 今を生きたい!でなきゃきっと [02:23.38] [02:24.48]生まれ変わった未来　前、進めない [02:32.32] [02:33.47]Chance 待ってはくれないし　掴む勇気ない確かには [02:41.68] [02:43.15]OH NO!ちょっと待ってくださいOne more love 恋だって [02:47.17] [02:48.66]人生には必要 [02:50.68] [02:51.51]確かめたい“ドラマティック”その意味は?哀しい涙は酬われる? [02:59.93] [03:01.05]Never give up!転んでもStand up! イメージ力で [03:05.55] [03:30.42]SO HIGH!今ならOne more chance One more time 飛べるから [03:34.80] [03:36.16]さぁ壁に向かって! [03:39.15]確かめよう人生のシナリオは　自分で描ける絶対 [03:47.95]One more chance One more love 恋だって人生には必要 [03:54.89] [03:55.61]確かめよう“ドラマティック”その言葉　哀しい涙を輝かす [04:03.87] [04:05.28]Never give up!これからもSo jump! ねばれよ純情 [04:10.35]'
			},
			{
				'Name':'Realize',
				'Singer':'melody',
				'Src':'http://www.web-jackiee.com/templets/blog/music/Melody%20-%20Realize.mp3',
				'Img':'image/singer/c-7.jpg',
				'Lyric':'[00:00.71]I can　迷わずに　進もう  [00:04.90]我能毫不迷惑的前进  [00:04.90]願いに　近づけるよ  [00:08.92]期望能靠得更近  [00:08.92]I see the light  [00:13.14]我看见光明  [00:13.14]wake up,stand up  [00:14.98]醒来，站起来  [00:14.98]もう一度　明日へ　try  [00:19.98]再一次向着明天努力  [00:19.98]Look at my　小さいこの手で  [00:23.57]看着我，用这双小手  [00:23.57]Hold on tight　つかまえた　my precious  [00:27.83]紧紧抱住，紧紧抓住我的珍宝  [00:27.83]なくしそうな　visions is me  [00:31.66]不要丢失，愿景是我  [00:31.66]見失いたくない　自分のway  [00:36.47]不想丢失我自己的路  [00:36.47]Do you know that I want it all  [00:39.93]你知道我想要全部吗  [00:39.93]心の奥で　輝き続ける  [00:46.12]在心里永远闪耀光辉  [00:46.12]その夢を　忘れないで  [00:51.06]不会在梦中遗忘  [00:51.06]I can　迷わずに　進もう  [00:55.34]我能毫不迷惑的前进  [00:55.34]願いに　近づけるよ  [00:59.36]期望能靠得更近  [00:59.36]いつの日にか  [01:01.86]总有一天  [01:01.86]溢れる光の花を咲かせよう  [01:07.48]满溢光芒的鲜花一定会绽放  [01:07.48]I see the light  [01:11.93]我看见光明  [01:11.93]wake up,stand up  [01:13.49]醒来，站起来  [01:13.49]もう一度　明日へ　try  [01:20.58]再一次向着明天努力  [01:20.58]Here I am　瞳閉じたら  [01:24.18]我在这里，如果闭上双眼  [01:24.18]独りじゃないことに　気づいた  [01:28.26]会发现你不再是一个人  [01:28.26]乾いていた心が  [01:31.64]干枯的心  [01:31.64]嬉しい涙に染まるonce again  [01:37.10]被欢乐的泪水再次浸湿  [01:37.10]I promise　今から  [01:40.42]我承诺从今天开始  [01:40.42]この胸の中で　動き始めた  [01:46.28]在心中开始鼓动  [01:46.28]この鼓動　感じながら  [01:51.45]感受到这份鼓动  [01:51.45]I will　思い切り　つらぬく  [01:55.93]我会尽情的穿越  [01:55.93]このまま　走りたいから  [02:00.13]想要这样奔跑  [02:00.13]いつの日にか　夢見た場所で  [02:04.86]总有一天在那梦中的归处  [02:04.86]a-ha-ha　と笑っているでしょ  [02:12.28]啊哈哈一起大笑  [02:12.28]wake up,stand up  [02:13.99]醒来，站起来  [02:13.99]何度でも　get up and try  [02:21.41]不论多少次，起来努力  [02:21.41]carry on carry on...  [02:33.80]继续继续  [02:33.80]I realize  [02:34.23]我意识到  [02:34.23]I realize  [02:35.07]我意识到  [02:35.07]that we can get there  [02:38.18]我们能到那里  [02:38.18]I can　迷わずに　進もう  [02:42.27]我能毫不迷惑的前进  [02:42.27]願いに　近づけるよ  [02:46.28]期望能靠得更近  [02:46.28]いつの日にか  [02:48.91]总有一天  [02:48.91]溢れる光の花を咲かせよう  [02:54.44]满溢光芒的鲜花一定会绽放  [02:54.44]I will　思い切り　つらぬく  [02:58.45]我会尽情的穿越  [02:58.45]このまま　走りたいから  [03:02.65]想要这样奔跑  [03:02.65]いつの日にか　夢見た場所で  [03:07.45]总有一天在那梦中的归处  [03:07.45]a-ha-ha　と笑っているでしょ  [03:14.88]啊哈哈一起大笑  [03:14.88]wake up,stand up  [03:16.56]醒来，站起来  [03:16.56]何度でも　get up and try  [03:20.07]不论多少次，起来努力'
			}
		],
		//第四个类别
		[
			{
				'Name':'Runnng Away With Me',
				'Singer':'Omar',
				'Src':'http://cc.stream.qqmusic.qq.com/C100003DXJEx1v5xFx.m4a?fromtag=52',
				'Img':'image/singer/d-1.jpg',
				'Lyric':'[00: 08.17]这是我喜欢的一首轻音乐 [00: 27.64] cctv新闻的天气预报就是这首乐曲 [00: 46.46]每当想起这段旋律 [00: 56.30]脑海中总是会不自觉的想到柔和的夕阳 [01: 15.12]以及在夕阳照耀下的沙滩 [01: 26.81]和海面上倒映的落日的余晖 [01: 36.11]落日是太阳一天中最美的时刻 [01: 43.11]少了太阳阳光的刺眼，燥热和盛气凌人 [01: 51.33]更多的是温润，轻柔 [02: 19.11]海边的落日更显傍晚的美丽 [02: 33.33]傍晚时伴着微凉的海风 [02: 46.24]欣赏落日的余晖 [02: 55.20]内心总是会充满宁静与平和 [03: 12.70]少了尘世的浮躁与喧嚣 [03: 25.40]山气日夕佳，飞鸟相与还 [03: 37.97]陶潜的写这句时想必就是这种平和的心境吧 [04: 13.71]每当听到这段旋律 [04: 25.41]总会不禁感到置身大自然的感觉真好'
			},
			{
				'Name':'River Flows In You',
				'Singer':'李闰珉',
				'Src':'http://cc.stream.qqmusic.qq.com/C100003QgpxI3xY5jc.m4a?fromtag=52',
				'Img':'image/singer/d-2.jpg',
				'Lyric':'[00:01.74]纯音乐 [00:07.26]纯音乐就是作曲初衷就不包含填词的音乐 [00:11.87]作为纯音乐，这种音乐模式 [00:16.51]完全以纯粹优美的音乐 [00:21.11]来叙述表达作者的情感 [00:25.82]所以一般简称做纯音乐 [00:30.62]虽然它没有歌词 [00:36.08]但是它完全以自己优美的曲调实现了完美 [00:40.95]正因为如此，纯音乐的作曲要求十分的高 [00:45.98]要作出一曲优秀的纯音乐 [00:51.15]除了必需的大量灵感来支持作曲外 [00:56.04]还需要作者不单在乐理上 [01:01.33]更是在生活体验 [01:06.71]人格和精神上有很深的水准造诣'
			},
			{
				'Name':'卡农',
				'Singer':'卡农',
				'Src':'http://cc.stream.qqmusic.qq.com/C100000Aa8CW2u2bnT.m4a?fromtag=52',
				'Img':'image/singer/d-3.jpg',
				'Lyric':'[00:01.74]纯音乐 [00:07.26]纯音乐就是作曲初衷就不包含填词的音乐 [00:11.87]作为纯音乐，这种音乐模式 [00:16.51]完全以纯粹优美的音乐 [00:21.11]来叙述表达作者的情感 [00:25.82]所以一般简称做纯音乐 [00:30.62]虽然它没有歌词 [00:36.08]但是它完全以自己优美的曲调实现了完美 [00:40.95]正因为如此，纯音乐的作曲要求十分的高 [00:45.98]要作出一曲优秀的纯音乐 [00:51.15]除了必需的大量灵感来支持作曲外 [00:56.04]还需要作者不单在乐理上 [01:01.33]更是在生活体验 [01:06.71]人格和精神上有很深的水准造诣'
			},
			{
				'Name':'Kiss The Rain',
				'Singer':'李闰珉',
				'Src':'http://cc.stream.qqmusic.qq.com/C100003rSoNx4gKSgY.m4a?fromtag=52',
				'Img':'image/singer/d-4.jpg',
				'Lyric':'[00:01.74]纯音乐 [00:07.26]纯音乐就是作曲初衷就不包含填词的音乐 [00:11.87]作为纯音乐，这种音乐模式 [00:16.51]完全以纯粹优美的音乐 [00:21.11]来叙述表达作者的情感 [00:25.82]所以一般简称做纯音乐 [00:30.62]虽然它没有歌词 [00:36.08]但是它完全以自己优美的曲调实现了完美 [00:40.95]正因为如此，纯音乐的作曲要求十分的高 [00:45.98]要作出一曲优秀的纯音乐 [00:51.15]除了必需的大量灵感来支持作曲外 [00:56.04]还需要作者不单在乐理上 [01:01.33]更是在生活体验 [01:06.71]人格和精神上有很深的水准造诣'
			},
			{
				'Name':'Always with me',
				'Singer':'久石让',
				'Src':'http://cc.stream.qqmusic.qq.com/C100000ozixA07JqNb.m4a?fromtag=52',
				'Img':'image/singer/d-5.jpg',
				'Lyric':'[00:07.07]Always With Me - 宫崎骏  [00:19.24]宫崎骏动画千与千寻片尾曲 [00:34.05]宫崎骏（Miyazaki Hayao，1941年1月5日－）， [00:40.18]日本著名动画导演、动画师及漫画家， [00:46.33]出生于东京都文京区，1963年进入东映动画公司， [00:54.50]1985年与高畑勋共同创立吉卜力工作室， [01:01.33]出品的动漫电影以精湛的技术、 [01:05.73]动人的故事和温暖的风格在世界动漫界独树一帜， [01:12.66]能与美国迪士尼、梦工厂的作品相比肩， [01:18.32]受到全世界不分种族、不分国籍、 [01:24.12]不分文化的各类观众的一致好评。 [01:34.02]其动画作品大多涉及人类与自然之间的关系、 [01:40.59]和平主义及女权运动。 [01:45.14]宫崎骏在日本动画界占有超重量级的地位， [01:52.89]更在全球动画界具有无可替代的地位'
			},
			{
				'Name':'the Promise',
				'Singer':'秘密花园',
				'Src':'http://cc.stream.qqmusic.qq.com/C100004ZeNye1lvQgT.m4a?fromtag=52',
				'Img':'image/singer/d-6.jpg',
				'Lyric':'[00:01.74]纯音乐 [00:07.26]纯音乐就是作曲初衷就不包含填词的音乐 [00:11.87]作为纯音乐，这种音乐模式 [00:16.51]完全以纯粹优美的音乐 [00:21.11]来叙述表达作者的情感 [00:25.82]所以一般简称做纯音乐 [00:30.62]虽然它没有歌词 [00:36.08]但是它完全以自己优美的曲调实现了完美 [00:40.95]正因为如此，纯音乐的作曲要求十分的高 [00:45.98]要作出一曲优秀的纯音乐 [00:51.15]除了必需的大量灵感来支持作曲外 [00:56.04]还需要作者不单在乐理上 [01:01.33]更是在生活体验 [01:06.71]人格和精神上有很深的水准造诣'
			},
			{
				'Name':'一个人的雨',
				'Singer':'萤火虫',
				'Src':'http://cc.stream.qqmusic.qq.com/C100001236u40lVTTQ.m4a?fromtag=52',
				'Img':'image/singer/d-7.jpg',
				'Lyric':'[00:04.39]一个人的雨-轻音乐 [00:23.07]《一个人的雨》选自萤火虫的《山居岁月》 [00:56.92]《山居岁月》本专辑入围 [01:00.57]2003年第十四届金曲奖 [01:15.57]「最佳流行音乐演奏专辑奖」 [01:35.57]一个人的雨，一个人的安静。 [01:50.21]“是谁无事种芭蕉，早也萧萧，晚也萧萧。” [02:11.72]这样的夜晚也许最适合的就是 [02:24.08]狠命地思念某人吧 [02:36.39]或者，无关爱情，只关心情。 [02:54.08]只是不知道什么时候 [03:04.08]琴声已停了，而雨却还在下着....'
			},
			
		]
	];
	return [className,data];
}
