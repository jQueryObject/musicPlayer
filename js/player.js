;(function(window,document,$){
	'use strict';

	var plugName = 'player',
		config = {
			'audio' : 'audio',			//播放器盒子
			'auto' : false,				//是否自动
			'active' : 'active',		//相应的class名
			'box' : '.menu-box',		//大盒子模块
			'boxTab' : '.tab-list', 	//大盒子tab按键
			'goMenu' : ['#goMenu-1','#goMenu-2'],  		//去歌单的按键id
			'goLyric' : ['#goLyric-1','#goLyric-2'], 	//去歌词的按键id
			'heart'	: '#heart',			//爱心按键
			'menu' : '#menu',			//歌单id
			'menuList' : '#manu-list',	//歌单列表id
			'lyric' : '#lyric',  		//歌词表单
			'titleShow' : '#title', 	//歌名显示id
			'singerShow' : '#singer',	//歌星显示id
			'recordShow' : '#record',	//歌星光盘显示id
			'bg' : '#bg',				//大背景歌星显示id
			'play' : '#play',			//播放按钮id
			'prev' : '#prev',			//上一首按钮id
			'next' : '#next',			//下首按钮id
			'pause' : '#pause',			//暂停按钮id
			'line' :'#line-ball',		//播放时间长度条
		};

	//音乐盒构造函数
	function Player(ele,option){
		this._ele = ele;
		this._option = $.extend(config,option);
		this._audio = document.getElementById('audio');	 //播放器
		this._playBtn = $(this._option.play,ele);		 //播放按钮
		this._prevBtn = $(this._option.prev,ele);		 //上一首按钮
		this._nextBtn = $(this._option.next,ele);		 //下一首按钮
		this._pauseBtn = $(this._option.pause,ele);		 //下一首按钮
		this._active = this._option.active;				 //响应class名
		this._box = $(this._option.box,ele);			 //大盒子
		this._boxTab = $(this._option.boxTab,ele).children();      		 	//大盒子tab按键
		this._menu = $(this._option.menu,ele).children();		   			//歌单盒子的menu
		this._menuList = $(this._option.menuList,ele).children();  			//歌单盒子的list
		this._lyricWrapper = $(this._option.lyric,ele); 		   			//歌词表单
		this._musicTitle = $(this._option.titleShow,ele);		  			//歌曲名显示
		this._singerShow = $(this._option.singerShow,ele);		   			//歌手显示
		this._recordShow =  $(this._option.recordShow,ele).find('img'); 	//歌星光盘
		this._currentShow  = $(this._option.current,ele);					//当前播放时间显示
		this._durationShow  = $(this._option.duration,ele);					//总时间
		this._pervlyric = $(this._option.pervlyric,ele);					//前置歌词
		this._bg =  $(this._option.bg,ele); 		//显示背景
		this._line =  $(this._option.line,ele);		//音乐进度条
		this._boxIndex = 1;							//大盒子的index
		this._menuIndex = 0; 	 					//歌单盒子的index
		this._lastMenuIndex = 0; 					//上一次歌单的index	
		this._musicIndex = 0; 	 					//歌曲的index
		this._lastMusicIndex = 0;  					//上一首音乐index
		this._lastDis =  null;						//上次歌词
		this._switch  = true;						//菜单开关
		this._random = false;						//随机开关
		this._runTimer;								//用来存放计时器
		this._duration;								//持续时间
		this._data = requestData();					//歌曲数据		
		this._init();								//初始化
	};

	//音乐盒原型
	Player.prototype = {
		//初始化状态加载表单
		_init : function(){
			var This = this;
			this._boxTab.eq(this._boxIndex).addClass(this._active);		
			//添加歌单大类目并注册点击事件
			$.each(this._menu,function(i){
				$(this).find('p').text(This._data[0][i]).parent().on('click',function(ev){
					ev.stopPropagation();
					This._switch&&This._menuMove(i);
				});
			})
			//歌单列表添加
			for (var i = 0;i < this._menuList.length;i++){
				var index = i,
					list = '';
				for (var j = 0;j < this._data[1][i].length;j++){
					list+= '<li><p>'+(j<10?'0'+(j+1):j+1)+'. '+this._data[1][index][j].Name+'</p><span>'+this._data[1][index][j].Singer+'</span>'+'</li>';
				}
				$(this._menuList[i]).append('<ul>'+list+'</ul>');
			};
			this._musicShow();
			this._musicChoose();
			this._boxMove();
			this._show();
			this._play();
		},
		//移动盒子
		_boxMove : function(){
			var This = this,
				goMenu = btns(this._option.goMenu),		
				goLyric = btns(this._option.goLyric);
			//遍历移动大盒子按键
			$.each([[this._boxTab,null],[goMenu,0],[goLyric,2]],function(){
				var bool = $(this)[1]==null?true:false,
					num = $(this)[1],
					obj = $(this)[0];
				$.each(obj,function(i){
					var j = bool?i:num;
					$(this).on('click',function(){
						This._boxIndex = j;
						boxMove(j);
					});
				})
			})
			//大盒子拖拽事件
			this._ele.on('mousedown',function(ev){
				var objX = parseInt(This._box.css('left')),
					startX = ev.clientX,minus;
				$(this).on('mousemove',function(ev){
					var noWX = ev.clientX;
					minus = (noWX-startX)/2;
					This._box.css('left',objX + minus);
					$(window)
				})
				$(window).on('mouseup',function(){
					This._ele.off('mousemove');
					if(Math.abs(minus)>60){
						if(minus>0){
							This._boxIndex = Math.max(--This._boxIndex,0)}
						else{
							This._boxIndex = Math.min(++This._boxIndex,2)};
					};
					boxMove(This._boxIndex);
					$(this).off('mouseup');
				});		
			});	
			//大盒子运动封装
			function boxMove(i){
				This._boxTab.eq(i).addClass(This._active).siblings().removeClass(This._active);
				This._box.stop(true).animate({'left':i*(-100)+'%'},400,'swing');
			}
			//返回运动大盒子按钮集合
			function btns(array){
				var obj = [];
				$.each(array,function(){
					obj.push($($(this),This._ele));
				})
				return obj;
			}
		},
		//表现样式以及功能按键
		_show : function(){
			var $heart = $(this._option.heart,this._ele),
				$download = $(this._option.download,this._ele),
				$random = $(this._option.random,this._ele),
				$order = $(this._option.order,this._ele),
				$lineRange = this._line.parent().parent(),
				$voladd = $(this._option.voladd),
				$volminus = $(this._option.volminus),
				This = this;
			//爱心按钮
			$heart.on('click',function(){
				$(this).toggleClass(This._active);
			});
			//下载按钮
			$download.on('click',function(){
				alert('您暂时还不是老牛音乐的绿钻会员!!请付费后下载~~');
			});
			//随机按钮
			$random.on('click',function(){
				This._random = true;
				$(this).hide();
				$order.show();	
			});
			//顺序按钮
			$order.on('click',function(){
				This._random = false;
				$(this).hide();
				$random.show();	
			});
			$volminus.on('click',function(){
				if(This._audio.volume>0.1)This._audio.volume-= 0.1;
			})
			$voladd.on('click',function(){
				if(This._audio.volume<1)This._audio.volume+= 0.1;
			})
			/*进度条点击事件
			$lineRange.on('click',function(ev){
				console.log(1);
				ev.stopPropagation();
				var prop = ((ev.clientX - $(this).offset().left)/$(this).width()).toFixed(2);
				This._line.addClass(This._active);
				setTimeout(function(){This._line.removeClass(This._active)},500);
				This._audio.currentTime=prop*This._duration;
				This._goRun();
			});*/
			//进度条拖拽事件
			this._line.on('mousedown',function(ev){
				ev.stopPropagation();
				var startWidth = $(this).width(),
					maxWidth = 	$lineRange.width(),
					startX = ev.clientX,
					nowX,
					minus;
				clearInterval(This._runTimer);
				$lineRange.on('mousemove',function(ev){
					nowX = ev.clientX,
					minus = Math.min(nowX - startX + startWidth,maxWidth);
					This._line.css('width',minus);
				});
				$(window).on('mouseup',function(){
					$lineRange.off('mousemove');
					This._audio.currentTime=(minus/maxWidth*This._duration).toFixed(2);
					This._goRun();
				})
			})
		},
		//歌单移动
		_menuMove : function(i){
			var num = !isNaN(i)?i:this._menuIndex,
				This = this;
			this._switch = false;
			this._menuList.eq(this._lastMenuIndex).animate({'left':(-100)+'%'},800,function(){
				This._switch = true;
				setTimeout(function(){
				This._menuList.eq(num).animate({'left':0},500)},200);
			});
			this._lastMenuIndex = num;
			this._menu.eq(this._lastMenuIndex).addClass(this._active).siblings().removeClass(this._active);
		},
		//歌曲切换
		_musicChoose : function(){
			var This = this;
			//歌单按键
			this._musicTab = this._menuList.find('li').on('mousedown',function(ev){
				var downTime = new Date();
				$(this).on('mouseup',function(){
					var upTime = new Date();
					if((upTime-downTime)<150){
						This._musicIndex = $(this).index();
						This._menuIndex = $(this).parent().parent().index();
						This._musicShow(true);
						console.log(1);
						This._ele.off('mousemove');
					}
				})
			});
			//下一首按键
			this._nextBtn.on('click',function(){
				This._musicIndex++;
				if(This._musicIndex>=This._data[1][This._menuIndex].length){
					This._musicIndex=0;
					This._menuIndex++;
					This._menuIndex%=4;
					This._menuMove();
				}
				This._musicShow();
			});
			//上一首按键
			this._prevBtn.on('click',function(){
				This._musicIndex--;
				if(This._musicIndex<0){
					This._menuIndex--;
					if(This._menuIndex<0)This._menuIndex=3;
					This._musicIndex=This._data[1][This._menuIndex].length-1;
					This._menuMove();
				}
				This._musicShow();
			});
		},
		//切换展示
		_musicShow : function(index){
			if(this._random&&!index){
				var menu = Math.floor(Math.random()*4);
				var music = Math.floor(Math.random()*this._data[1][menu].length);
				this._menuIndex = menu;
				this._musicIndex = music;
			};
			var data = this._data[1][this._menuIndex][this._musicIndex];
			this._lastMusicTab&&this._lastMusicTab.removeClass(this._active);
			this._lastMusicTab = this._menuList.eq(this._menuIndex).find('ul li').eq(this._musicIndex).addClass(this._active);
			this._lastMusicIndex = this._musicIndex;
			this._audio.src = data.Src;
			//this._audio.load();
			this._audio.play();
			this._playBtn.hide();
			this._pauseBtn.show();
			this._musicTitle.text(data.Name);
			this._singerShow.text(data.Singer);
			this._recordShow.attr('src',data.Img);
			this._bg.css('background-image','url('+data.Img+')');
			this._lyricWrapper.css('top',0);
			this._pervlyric.text('categroy : '+this._data[0][this._menuIndex]);
			this._doLyric();
			this._goRun();
		},
		//执行分割歌词
		_doLyric : function(){
			var l = this._data[1][this._menuIndex][this._musicIndex].Lyric.split('['),
					cal = [],
					This = this;
			l.shift();
			this._lyric = [];
			this._lyricTime = [];
			$.each(l,function(){
				var m = this.split(']');
				cal.push(m[0].split(':'));
				This._lyric.push(m[1]);
			});
			This._lyricWrapper.text('');
			for(var i =0;i < This._lyric.length;i++){
				This._lyricWrapper.append('<p>'+This._lyric[i]+'</p>');
			};
			$.each(cal,function(){				
				This._lyricTime.push(eval(this[0]*60)+parseInt(this[1]));
			})
		},
		//播放暂停
		_play :function(){
			var This = this;
			this._playBtn.on('click',function(){
				This._audio.play();
				$(this).hide();
				This._pauseBtn.show();
				This._goRun();
			});
			this._pauseBtn.on('click',function(){
				This._audio.pause();
				$(this).hide();
				This._playBtn.show();
				clearInterval(This._runTimer);
			});
		},
		//进度条长度以及歌词计时器
		_goRun : function(){
			var p = this._lyricWrapper.find('p'),
				line = 0,
				prop,
				dis,
				currentTime,
				secords,
				minutes, 
				This = this;
			$(window).off('mouseup');
			this._runTimer&&clearInterval(this._runTimer);
			//总共时间
			this._audio.addEventListener("loadeddata",function(){
				This._duration = This._audio.duration;
				var m = Math.floor(This._duration/60);
				var s = (This._duration - m*60).toFixed(0);
				This._durationShow.text('0'+m+':'+((s<10)?'0'+s:s));
			});
			this._runTimer = setInterval(function(){
				currentTime = This._audio.currentTime.toFixed(0);
				minutes = Math.floor(currentTime/60);
				secords = currentTime - minutes*60;
				prop = ((currentTime/This._duration)*100)+'%';
				//dis = $.inArray(Math.floor(currentTime),This._lyricTime);				//in.Array 在拖拽进度条后会有延迟显示,采用grep
				dis = $.grep(This._lyricTime,function(value){
					return value < currentTime
				}).length-1;
				if(dis && dis!=-1 && dis!=This._lastDis){
					This._lyricWrapper.css('top',-dis*24+'px');
					p.eq(This._lastDis).removeClass(This._active);
					p.eq(dis).addClass(This._active);
					This._pervlyric.text(This._lyric[dis])
					This._lastDis = dis;
				}
				This._currentShow.text('0'+minutes+':'+((secords<10)?'0'+secords:secords));
				This._line.css('width',prop);
				if(This._audio.ended){
					This._musicIndex++;
					if(This._musicIndex>=This._data[1][This._menuIndex].length){
						This._musicIndex=0;
						This._menuIndex++;
						This._menuIndex%=4;
						This._menuMove();
					};
					This._musicShow();
				}
			},200);
			/*ended监听有bug!第一首正常,后面歌曲结束会连着触发3-6次不等
			this._audio.addEventListener("ended",function(){
			},true);*/
		},
	};
	//插件执行
	$.fn[plugName]=function(ele,option){
		if(!$.data($(this),plugName)){
			$.data($(this),'plug_'+plugName,new Player(ele,option));
		};
	};

})(window,document,jQuery);

