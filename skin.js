// Garden Gnome Software - Skin
// Pano2VR 7.0.6/20004
// Filename: drone.ggsk
// Generated 2023-11-14T16:43:45

function pano2vrSkin(player,base) {
	player.addVariable('vis_traffic', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_sidebar', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_menu1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_menu2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_menu3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_menu4', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_menu5', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__13=document.createElement('div');
		el.ggId="\ud558\ub2e8\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__13.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__13.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__13.ggCurrentLogicStateSize = newLogicStateSize;
				me.__13.style.transition='width 0s, height 0s';
				if (me.__13.ggCurrentLogicStateSize == 0) {
					me.__13.style.width='100%';
					me.__13.style.height='50px';
					skin.updateSize(me.__13);
				}
				else {
					me.__13.style.width='100%';
					me.__13.style.height='60px';
					skin.updateSize(me.__13);
				}
			}
		}
		me.__13.logicBlock_size();
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me.__24=document.createElement('div');
		el.ggId="\ud558\ub2e8\ubc30\uacbd\uc0c9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		el=me.__25=document.createElement('div');
		el.ggId="\ud558\ub2e8 \ub3d9\uadf8\ub77c\ubbf8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70px;';
		hs+='left : calc(50% - ((70px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__25.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__25.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__25.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__25.style.transition='transform 0s';
				if (me.__25.ggCurrentLogicStateScaling == 0) {
					me.__25.ggParameter.sx = 0.85;
					me.__25.ggParameter.sy = 0.85;
					me.__25.style.transform=parameterToTransform(me.__25.ggParameter);
					skin.updateSize(me.__25);
				}
				else {
					me.__25.ggParameter.sx = 1;
					me.__25.ggParameter.sy = 1;
					me.__25.style.transform=parameterToTransform(me.__25.ggParameter);
					skin.updateSize(me.__25);
				}
			}
		}
		me.__25.logicBlock_scaling();
		me.__25.onclick=function (e) {
			me.__14.ggVisible = !me.__14.ggVisible;
			var flag=me.__14.ggVisible;
			me.__14.style.transition='none';
			me.__14.style.visibility=((flag)&&(Number(me.__14.style.opacity)>0||!me.__14.style.opacity))?'inherit':'hidden';
		}
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		el=me.__26=document.createElement('div');
		el.ggId="\ub3d9\uadf8\ub77c\ubbf8\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__26.onclick=function (e) {
			me.__28.ggVisible = !me.__28.ggVisible;
			var flag=me.__28.ggVisible;
			me.__28.style.transition='none';
			me.__28.style.visibility=((flag)&&(Number(me.__28.style.opacity)>0||!me.__28.style.opacity))?'inherit':'hidden';
			me.__27.ggVisible = !me.__27.ggVisible;
			var flag=me.__27.ggVisible;
			me.__27.style.transition='none';
			me.__27.style.visibility=((flag)&&(Number(me.__27.style.opacity)>0||!me.__27.style.opacity))?'inherit':'hidden';
		}
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		el=me.__28=document.createElement('div');
		els=me.__28__img=document.createElement('img');
		els.className='ggskin ggskin__28';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAShJREFUeF7tm0sOwjAMRCc3g5MBJwNOBnJEolClYtUJkp933dTN5PcyboqSR1nY/qukyyf/TVI822OVAGPjW6OXiLBKgNdOV9u/x55Q0knSHQHmCtg7xJ6QEcAUYA1gEWQXYBuEAwAhSBASnCpgJ1N7QlAYFAaFQWFQGBQGhUFhUBgUBoVnCtjRfEw4K1fZa3WmhL0M1wTI1PivWmQTYK9WZ+qQJWkeks6ZBQjVC1NgGHyZ1oE6/OsQmMy+OK4eGfH+9mfINk/9qIMjGt/Dvu9iiWGJYYlhiWGJYYlhiWGJYYlhiWGJ/Z0ldvAZpL8eEAKEACFACBAChAAhQAgQmihgN2ntCXGFcYXrwE99cTIECBDaVqBSXZ0NEVotMkpVz2'+
			'yXp11H75953ki2SUFfxOTRAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub354\ud558\uae30";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		me.__26.appendChild(me.__28);
		el=me.__27=document.createElement('div');
		els=me.__27__img=document.createElement('img');
		els.className='ggskin ggskin__27';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABiVJREFUeF7tmmWobVUQx38PEwMDEwPFwA4UFRQxscDuwsTEwBYDEwsLuzAxMTAxPhhggt2KYmB8ULET5cebC4frWbHP2fu+97h34Hw6a0/816yZWTNrEuOcJo1z+5kAYMIDxjkCE0dgnDvARBAc5AhMB/wzFXrOSsD3wNzA67X6NQFgY2B2YFbgOeCTWiFjsO4YYNvQ70XgCeCOGrm1ABwMnALMCPwB/AVsBbxaI6TjNYcDF/fI+A34EdgjgMiKrwFg5RCw3ihO3wQIIj6l6CDgij7CPQoHAneVFKsBYBHgUWD5Psx+CBCeKQnq4P99gOsTfH8GrgJOAP7Oya4BwOByNbBWgtGvAcKTHRiZYrk7cEtG3pfABsAHJZ1qAJDHic'+
			'BZGWaibEx4pCSwhf93BO7M8NH9DYq3Ab+X5NUCsAxwCHBogaGR+L6S0CH+F+T7M9/r+sfGkf20Rk4tAK5bEdgLOLLAeOfCDtXo1W/NZgUPMztp/INNUnQtACMKrRDpRUE52rNwRpuCsGHs6gyJDy3Mjgvv+LgJ86YAyHs5YLeICzlZ+wPXNVEmsXYd4LEowFLsjgfuBT5sKm8QAJSxLLATcGpBoHGjX56u1XON2HnL2xSdHPm+GPH7MRgUAHkZGLcDzixYY8zordRqjV8ljF8g88HpwO3Ae7VMR68bBgB5LQ1sHSly+owSns/zGijpMbP4WjTzzdnArcC7Dfj+b+mwAMhwSWDLAGHmjDLeJc6oUHaJMH6pzNoLgBuBtyv4ZZe0AYACVHrzAMEbY4oEQCBSlCu7R77xON0AvDms8X7fFgDyWhzYJEDIBa1zAaP2aJo/'+
			'dn7VjGGXA9cAb7RhfNsAyG8xYKMAYb6Mku5ib0E1Zxifum/IyvuIFxybHf9OrQCol4Fr/cgOC2cUNT2aJmcJ49fNrNXlL4udb7Ub1eYR6NVfwzXIC5RekSINEzC9JkXe+i4J423EtEpdAaCSCwFrhyfkInrOIHP8hWH8n61aHsy6BEARC0YfwWLJ3N6E7gHOD+OL19omjHvXdg2AsqzkVo/jYHOlhh4Azgnjbbh0RmMBgMqbEUxvxoTVCtZYAVovmOp+6czyMToCvfrPA9wMeK/P0SvAFsC3XRsv/7HyAGVZxNheryGbrHZ/bLp2SmMFwEXAEQ0teSEuWrbfO6OxAMBg5m1wEHLwoid8PsjHNd90DYD3dRsWKbJ95RQnV/974xOERq2uGuO7jgEaLgApMsr7v9WdQw6NTJGtLvsO79QaVruuKw+waeqtL0Ua4rF4KV'+
			'KdHeejgO0z33wWIL1Wa1zNui4AMNgZ9HK7qfHPA1/HIi9Edpz9dpfMt67XUwSuFWobANOc6S5FDis0/lngq1GL7CYJwmHRek/x+C5AcEQ/NLUJwH7AtRmNvgjjnwac3fUjx+8eB4E0LqTIClFPeGpYBNoCwFm8VV6KrOqMCyosEDly+KEnHBC/1NqRNwqWzgNTGwA4H8i9xtBldfvHAQNZDfkMR0/Qq2ya5Mjs4OVpIBoWgG1iIpMS/lPsvJOdqmFlD6OReeTeFVWkm1B8DNFPyWEAsAv8cAZ27/C6/UNNhpV9+OkJzhqPLmyxx9A5QSMaFABbWJ691DDE9wK6va7ZRgXn65RdK+aR+0bLvBqEQQCw16fx5u4UabzDyo+qNSkvdB7p6D03V5CLGeTKMrvJK5oCsGZMam1jp+gk4O6a5ym1Svascx5ptViaMFlQ2Ugt'+
			'UhMAvLC48w4wUnRaZISBh5VFjSfPIw2+dpfMFiky/thTzFItAE59LGAcXaWolWFlSeH43y7zyDxypsQ39hOsJbJTpBoARNkA5HQ3Nar2v5u6uK1lAHEeaetMT5itzzqv0bbfsr2EGgDk7eMnX3vM1UeQFx8HHG9V7l6by/TMTQOEXt18LepM4dLSu+FaAHwn7IRm9Pl3XGX939qwcgB0nDz5hsj4M0f0FxyiGAiL74VrAVAv08sOwLyAFZ6vsUx177c5rBwAAD/xJumIzXdJL8ercR9MF6kJADLz3bC1ve42JXc9ZZiFWfZp7OgPmwJQRHRaWzABwLS2Y23rO+EBbSM6rfGb8IBpbcfa1nfce8B/lFEGUCopZLkAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5d1\uc2a4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		me.__26.appendChild(me.__27);
		me.__25.appendChild(me.__26);
		me.__24.appendChild(me.__25);
		me.__13.appendChild(me.__24);
		el=me.__14=document.createElement('div');
		el.ggId="\uba54\ub274\ubc14";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((320px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -149px;';
		hs+='visibility : hidden;';
		hs+='width : 320px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__14.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__14.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__14.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__14.style.transition='left 0s, top 0s, transform 0s';
				if (me.__14.ggCurrentLogicStatePosition == 0) {
					me.__14.style.left = 'calc(50% - (320px / 2))';
					me.__14.style.top='-130px';
				}
				else {
					me.__14.style.left='calc(50% - ((320px + 0px) / 2) + 0px)';
					me.__14.style.top='-149px';
				}
			}
		}
		me.__14.logicBlock_position();
		me.__14.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__14.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__14.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__14.style.transition='left 0s, top 0s, transform 0s';
				if (me.__14.ggCurrentLogicStateScaling == 0) {
					me.__14.ggParameter.sx = 0.8;
					me.__14.ggParameter.sy = 0.8;
					me.__14.style.transform=parameterToTransform(me.__14.ggParameter);
					skin.updateSize(me.__14);
				}
				else {
					me.__14.ggParameter.sx = 1;
					me.__14.ggParameter.sy = 1;
					me.__14.style.transform=parameterToTransform(me.__14.ggParameter);
					skin.updateSize(me.__14);
				}
			}
		}
		me.__14.logicBlock_scaling();
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15=document.createElement('div');
		el.ggId="\uba54\ub274\ubc14\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px 15px 15px 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAjtJREFUeF7tm2tSwzAMhKOT0Z4MOBm5mZhkmozrKH7q4Uf7F4aS3dV+sguwTP6CyZ9/+QgwfQIQ8WdiEVZ4CfA9qQjPvQMmFWEFgFOAx7Isf5Ol4AkA60mByVKwu78Z/oZBRMQZUgAA53P7AmxEGL0QfwHgJN9lERo8BWf0j6RTAoycgr343DEnV+FBC/Hi/qUEXWUGHIWL+zEBRhqFt+KLjsDxDaOkwMWej/ngcXiQLiCjf0sBXyFE3FbkbVXu8UUWX/IIDHBQCrofLEGPCD0WYtT9ZAFeSejtnBB1P1eAnlJwi70sChCF2EMKkqKfTIEOuyAp+kUCdECFLPezOsDZDlu+Pstyv0iAhlOQ7X6xAC1iMbTvh1bY4o/GGjsnJG'+
			'OvCoONYrEo+sUUaBCL2cWXdRiKHQGNR6HK/aoS9JJgtSFWuc8pgMU5obj4WEfAWZBUU1CKPVYKGBZidfRZKEBgUeP6rLr4REZAcUVmc5+tBBVHgdV9EQGEzwms7ksKIIFFFuyJUUD4nMAefREKCHYBe/TFBWCkgpj7Yh3gbIcc12di7osLwJACUfdVBKjBIte+HzrSF1+Jxe4JGApRBHtqGKzEonj0VShQkQLR4hM7DMXGIvH6TM19tRL0khC7OFFz30qA0DlBpfjMRsBZkMgUaGDPjAIJhagafXUKEFh0r89Ui898BIgV2cR9kxIkRuHr+O+NGEYlvq6yCod+cUR8+H/CLvGgdz/TXADNh6Xe6yOAtQPW7z99Av4BNvUOymgfMjYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -14px;';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.__15.appendChild(me._image_3);
		el=me.__16=document.createElement('div');
		el.ggId="\uba54\ub274\ubc14\ubc30\uacbd1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__16.onclick=function (e) {
			player.setVariableValue('vis_menu1', !player.getVariableValue('vis_menu1'));
			player.setDefaultView();
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me.__19=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px 0px 0px 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__19.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_menu1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__19.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__19.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__19.style.transition='background-color 0s';
				if (me.__19.ggCurrentLogicStateBackgroundColor == 0) {
					me.__19.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me.__19.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__19.logicBlock_backgroundcolor();
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		me.__16.appendChild(me.__19);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA1tJREFUeF7lm01SwzAMheOyKLcCbgVsgA1wK8KtygLMuMETNz/Ok57kdoYugKGNLX16khXHDd0/f4WW/t9fx9sQ49M4Z7wd/g798WeIn+n36+HquZVd7gBGp7OzmGshdC8tYLgB0Do+xZNA/HS7/v0wqMT65QLg8fr7OcaukDpvdgLhkRrmADycz/g8IJgC8HR+1FDo3752d7ym/sqv1UBtnP8z2jAdTBTQ0nnrdDAB8LD/jlZKkozz9nVF208PII9+6GMIxzW+XNrSOOl/stWDrwc0ADz6g+Nb67kUaAy7u60xa6qiAKDGapavh/3PR9ch3SOnAgoAaqQ2VzF1nRXAdvHTRD9LdminkxLqLyYN1ArA5M9FJ7mNqOxiATDRzz'+
			'FHADDzuCqAMUySBsw8agBIZBhpSgCkDRXt/cHFA0BqzVkU4G1YVoD3PGoFYEuUXpoXXwSHJWq7D2DrADKHttFKPqgVgK7RTIFC5M+MTwPA0iBtd8v38zDndWOXfSWlADQNjqQFEFDn07iM/GkF4GlQ7OhVQEi30iVQ1+4maAWgaTA3IPTpSVCM4WZ4D7n1PR3lIgBoVLB1d4e+z8rfJAXSIHoVoK4u6EdQU2qz0CkgaVj07s6vtIi+mQLSQJLKzYKwyP1sg5kCWtYCq+ibKqBVLbCMvjmAFiqwjL4LAM8VwTr6LgA8VWAdfTcAHirwiL4bAGsVeDnvCsBSBR7Sd+kDpg2ORXPkGX1XBYwt8va2Wa0z9Ix+EwBMKnhHvwkAbUFs4XwzABoVsLvJ6A2Xyc1QzcGcw5KCWEZ/bVvcCpAJgNre/akz2KkPFJpFgaQBnD4k'+
			'XT7Pm88GIamQgc1PlpeiHk+Zax+KmvQBpazRolV7qoyOoZl3rSaoFXCa07JngGspI5F0CRIFtwRBBWAqZYnhaxsnUiemNmiLogpAGUGp4WOHOBZE7RhsIFR9gJX0SuOlCiqlzKSiGIBl8UmT5+Ox7BchGLvgFGBJo52Z9nNaZUIALHJN6xh6nbYoQgAsih7qCPM5TaA2AWilxTjCXCtN1SoAprgwTrDXSuxeBSAlyRptfT2q3EUA01zK3+K0NtJzvOHgxXjoYq1TXASAHE3zNN5r7CUIMwDIGWAvA/3Hnd+0ba4C/kadd4Zfoj2pX+W7qkQAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 43.3333%;';
		hs+='left : calc(50% - ((46% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((43.3333% + 0px) / 2) - 8px);';
		hs+='visibility : inherit;';
		hs+='width : 46%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_menu1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_4.style.transition='';
				if (me._image_4.ggCurrentLogicStateVisible == 0) {
					me._image_4.style.visibility="hidden";
					me._image_4.ggVisible=false;
				}
				else {
					me._image_4.style.visibility=(Number(me._image_4.style.opacity)>0||!me._image_4.style.opacity)?'inherit':'hidden';
					me._image_4.ggVisible=true;
				}
			}
		}
		me._image_4.logicBlock_visible();
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18=document.createElement('div');
		els=me.__18__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uba85\uce6d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -25px;';
		hs+='color : rgba(121,7,253,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__18.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub300\uc0c1\uc9c0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18.ggUpdateText();
		el.appendChild(els);
		me.__18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		me._image_4.appendChild(me.__18);
		me.__16.appendChild(me._image_4);
		el=me._image_41=document.createElement('div');
		els=me._image_41__img=document.createElement('img');
		els.className='ggskin ggskin_image_41';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAzlJREFUeF7lm2FuwyAMhcPJtp1s68nWnYyJKFQeTeDZzyap1j/T1ITYn5+NITQt//yTZvqfc35fluVTPLP8Xz737e9P+ZtS+pplVzgA4XR1FvXtNgNGGADC8RZQAXFPKVWVoACh60IA5JyLhKXUIWMGF90iUsMdQJDzlY07BFcAwc5XCCUdPjwktdYYr4EmOe+uBBcAk513heAFIHspSTNOSom2nx7AEP0yndU5/jG1beMU/zWzB10PPACg0V8dH83nBqAfozF7qqIAKIxVT1855+9lWZDukVIBCwAy0pqrOWdEXacCQAxUR79KdmunC+TRx5wGZgWA8qeiU7wGU+GyAMzRFypA0sz8nGgFmA1TpoH5OQwAJDJmaSoBmFPtFQ'+
			'AgS+tTFBBqmFBA6HMYBZQmZTRFmaV5+SK4TVFIH0DVAaQZsjZa9H4AOEebVTCj1zCnwKYAJA3KpeoiBTpvGlu2lRQARRqoDFU4X94hUD5QNytaVQn9UA2GrXS1stpFhQcANA3aZ5f9gfIm6G37Aln6tmOcD8CogtHqDvqelT89CyjbVcgpxUV09N0AnKECj+h7A0BaVkWAu5e6RN8VwEwVeEU/AoB1RtAowy367gBmqMAz+lEAIlXgGv0QAJEq8I5+JIAIFbhHPwxAgApCnI8G4KaCCOnXaYdeDPXmL82ytjNOWPRDFSDWCci22aH/kdGfBYBJhdDoTwFAFMRw52cCsKiA2k1Ge2uXIth7jV1zWFkQH9HvbIu7APIC0Ct00hnkfeJjo3MEzaNA0gCadwNH53nXs0HggYcV2M7Jcqnqxylz9tAkBaCJEFS0Bi9T0DHk'+
			'5gt0z1FNMANonFe9/TnKa42kG5BmCCYArZQ1hm/T4t6soHJiJ51MRdEKQBY9leGiQ5QF0TrGH5DaQJj6AC/pyQhaDBcgZT1QpaIagKXoAYsl+jdCjF1wCjBFD+3KmOusyoQAsEWPcQy911oUUQB00UMdYa6zBGoIwCotxhHmXm2qdgEwxYVxgr1XY/chAC1J1mjv+1Hl7gLYKSjrLzxe7FMOXshDF7ud4hEAah/vwqCeIDwBAI++XdjHrmlPneJwFnhVT1G7fwE9UfZQX5yfmQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4-1";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 43.3333%;';
		hs+='left : calc(50% - ((46% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((43.3333% + 0px) / 2) - 8px);';
		hs+='visibility : hidden;';
		hs+='width : 46%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_41.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_menu1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_41.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_41.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_41.style.transition='';
				if (me._image_41.ggCurrentLogicStateVisible == 0) {
					me._image_41.style.visibility=(Number(me._image_41.style.opacity)>0||!me._image_41.style.opacity)?'inherit':'hidden';
					me._image_41.ggVisible=true;
				}
				else {
					me._image_41.style.visibility="hidden";
					me._image_41.ggVisible=false;
				}
			}
		}
		me._image_41.logicBlock_visible();
		me._image_41.ggUpdatePosition=function (useTransition) {
		}
		el=me.__17=document.createElement('div');
		els=me.__17__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uba85\uce6d-1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__17.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub300\uc0c1\uc9c0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__17.ggUpdateText();
		el.appendChild(els);
		me.__17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		me._image_41.appendChild(me.__17);
		me.__16.appendChild(me._image_41);
		me.__15.appendChild(me.__16);
		el=me.__21=document.createElement('div');
		el.ggId="\uba54\ub274\ubc14\ubc30\uacbd2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 25%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21.onclick=function (e) {
			player.setVariableValue('vis_menu2', !player.getVariableValue('vis_menu2'));
			player.toggleAutorotate();
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		el=me.__23=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58\ubc30\uacbd-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__23.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_menu2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__23.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__23.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__23.style.transition='background-color 0s';
				if (me.__23.ggCurrentLogicStateBackgroundColor == 0) {
					me.__23.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me.__23.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__23.logicBlock_backgroundcolor();
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		me.__21.appendChild(me.__23);
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABSZJREFUeF7lmzuPHEUQx6tmLY+RiJzaoSUivgCJjQS2hEFAQkhshOXEku09At/JYtcgISHx8DeAgMA4MJKFxC0xkYXkwHJopyQE3CDvFOqZ69ue2X5Ud9fM7olL7vZ2+vH/dT36NQj/8x8cQ//OqeWu2Q4Rnm8/04X2Ny7094j0u/q7hmJx92D1/6H6ORgALZoIbud1HheEuKfqGAKIKAA50S5kLQxJECIAhhfeByIHIhuAEp9v5qlOkg8iGcBmhXeBIcLe7GDSCbRcpEkAtkn8Sigu5lXxpv586xRdQKr3mxzjARQNYFqqSnX64nI+SnILneZ0qlO/C6ibdLieHmPrByBsIWjxuoZ5NbFqZQMwicZ0S9FXz8eaaNse3U6H3e'+
			'1lFoAU8Tl+2QcsAcPVn6AFxIqXFC4JIhkA1+eHFN4Hwe1TL1d0guRRVPL5M7ehMcXr/qZkIlsccLoAtwEVdSWnpjEBlttHXyawAuD6/SbFc/toArVZqhUAx/SPm3jXhGgNAIfsJnzeHEnOANldqTtbbKDERthNi1f9jfV9U2M/EHYAcEbfNaOKCV4Sz6ZagRdAqNJN+r0L2mqW2KwmDrfY3Ij7FtyxgGm5JE9R60RCYjSl6uDAcAIImf82jr4PnAtGX8eRBYTMf1t8P8VaFAy95O6vSg0Ax9v8U8AcpcExzf9WSecKqC8B4nkieAOAzgDAUwB8gkC/vSyK+1/+g89TBcWWaywglFelzH+npLcJ6DoAXfIE2/0a6q++qE48jBWT8jwDwPrsKaWhz07S+0us7yDA68HyiH/UVO9JQGgHtz2JUttx6sRJ/a0XcA0AfwDM'+
			'B7ALdLoq6Qf/yPex4P6ywI9z3MHn2jodBgFITH13yuWnBPBtcOR7DyDAtVk1+Sa2nH6e49qjAJiW9UMAeideCP48r4oP48u1JSIAuFOgxARoWtbPD6N9rJan82ryWmwh/Xwou6ngfmgBQwPwzTH88nIykAgAiRgwLZd/A8Cr8SOJL+ZVcTa+HMcF2uAetAAZAPV9APogVggi/jQ7KD6KLccLggYAX7CQiQHLTwDg+1ghCHB1Vk2+iy2nn+ek97UNEbVoMCcOsUdats7eeIXOTurlPQB8ly8GHxHg1bsVPuOX6T7pA9CZB6Q2EFPuZvnycgH4NQCcC5UjgD8LKK7PKvw19Kzve9/+xugAVEdbCHDFbwn4qCC89/m/+CBHfCgDaNcOng3mdMLtDvV7AHgRgN5qswO+AIDHCPTLyar4cRfwr9x2ufsbawD0fZ+xrqnlCn'+
			'WV527vBXaF23t60jezhhLNnQGama0DwD93Pj4wuOavgEUAMMdte2GEgp+6lWreJbKcDKXM2/P3DKTcwu/77R0i8zRbCID/JpaUuFA9oeVvf/TXXED9I+Q/7k5s1grC4tdH3wqAU5ENgsSaITTCru/Dft9I5V2RSQGw/eLto2+1gNYN+IFQYrk87Mgn3BSNAdBQzLirmyqeb6n+2JR8RWa94+MFQSnxThfgN9DHkH993WcRsf3ixCarBcQ2ZLMGyfVDSn844p0WEBsI/X6cZhU5b6FwxUcBWF1Dz7nB3a4hzDfD1Gd9dt+sPJtzvPBVFzv0+Djk3BDRNyz0gaI5f04xydRozy2XmomSd4S2CUKqeK8LcMhL3OPntON6Jke4rjPZAsxOjQ0i9S0UG0gRALrioUFIChe1ABtZKRhDiDb7K2oBLl81r6mt3gxrkl7n5Wnz'+
			'jTL1rcSpVCjGjAIg1IlNfv8f9XJqbm97KaMAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 43.3333%;';
		hs+='left : calc(50% - ((46% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((43.3333% + 0px) / 2) - 8px);';
		hs+='visibility : inherit;';
		hs+='width : 46%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_menu2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_5.style.transition='';
				if (me._image_5.ggCurrentLogicStateVisible == 0) {
					me._image_5.style.visibility="hidden";
					me._image_5.ggVisible=false;
				}
				else {
					me._image_5.style.visibility=(Number(me._image_5.style.opacity)>0||!me._image_5.style.opacity)?'inherit':'hidden';
					me._image_5.ggVisible=true;
				}
			}
		}
		me._image_5.logicBlock_visible();
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__220=document.createElement('div');
		els=me.__220__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uba85\uce6d-22";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -25px;';
		hs+='color : rgba(121,7,253,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__220.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\ub3d9\ud68c\uc804", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__220.ggUpdateText();
		el.appendChild(els);
		me.__220.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__220.ggUpdatePosition=function (useTransition) {
		}
		me._image_5.appendChild(me.__220);
		me.__21.appendChild(me._image_5);
		el=me._image_420=document.createElement('div');
		els=me._image_420__img=document.createElement('img');
		els.className='ggskin ggskin_image_420';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABLdJREFUeF7lm7uKFEEUhv+TG5lqKBj5Aia64AW8oCaGxopi4gOoGAuCl30DDQxWAwURdI2NRDBYDN3UxAc4cpqusaamLqdO1XTP4iTLzlRV1//VuXV1NeE//9AU+pn5QXCdU+P/p8e/u97vX9x3ROR/v5aprg2AJ/p+48wFwkMZYx1AugLoKDrFbIDRE0QXABMID4F0A9EMYBTfauZWL2kGYQYws/AQmLhFGGhVUE0ANky8E7pLRFvuH2aWDPN5/D8JqBoAM8ugLn2pKHuNxGRdmpOvXZpz44XpsXZ8ae8gOPHDGEQU1aoGEBCtmZhLYVUmOl5PYosV9tIcmwAYxZv9MqTbCUZ0PkULMIjvJrwzCDMArc+vTXgEhHZOftelIO'+
			'l+yFpARcCbTLwX5SWmVNUfsTiQBFCR6rZ6lqY10bVijslMEAVQ4fdzivfzvJbbiqWmAGh87KCJF0hlAMrVn9zn/SWuiE0rN1F+tTgUSIYIO6t4mW+t7/saw0C4BECz+qmKSuuEvdpZraAEoOT7s/l9CpxXJUoTTdm8ZMGhBXBmhaKFRK8V7TGOEkYcgML8N271c9AyMJZ0LCyg5FOb4vsWSxlhDO4Rbpz4AA60+VvALNLglObPzMcAnAcgmx8nARwBsAfgB4BPAHaI6JdVUG2/wQJKebWX+TPzWQD3RgCpuUomekxE72rFWNprAHSJ/sx8BcAjACcUE/06lq3NEMbFdVttsh03bMO5GzgHIJf/mwEw82EALwsrH3KROd1ocYeCaw/pUAOgufRl5tsAnilWPmxyl4ieGvoNXTSuPRUAMeULBiFviOiaoV81gFwKbC6A'+
			'mFmiukT72s8eER2v7eTal7KbBHdnAesGkBs/q68lA/UC0CMG/AFwyLCS+0R01NBP4wJDcNdYQA8AOwCuGoS8JqLrhn7VAHI7rD1iwC0ALwxC7hDRc0M/B6CY3mMbInLTsCgcrE9d/Ukzs5jxNoBLFWI+ABAAPyv6LDUt3OD9qwOsF6jpx8wXATwBIPcCpc93KZmJ6GOpYe53Zs4F32kBjIWJQLhZsARZ+W0ietsovrRtPrh28dlgyyRifUd3uAzgHIAzY3bYB/ANwHsAr4jod+t1tfsbsV1h9xhb0sTaj6m1Ck31L5j/4v6mtCvsAHQ9mbUu0doKUA5RLN0Neh1z6fDAwNCav+gOLUD7xHVjYZTKX9kP8J8OxWKApW5v3jPo5RYF35fLxHeFPTewAJDuzSVzK4TS/X+4+isuMObq0tOh1DxntQKF+JXVTwHQxoEQRP'+
			'M9g9UCFH4vQ+uOyChJHjTx0dWPWsDoBjVxYDbfV658Nj6lTojUAJglAFZYajY2tRyRCd1gsiDYS3zOBayBsPn4ei4QVgh3wxQDc8oCrADchbuCMAhPBr0QcO6cYG0cSNYHltdcGt9CKa68m2wNAHcMveUEt7uHWLwZNk7EP9oi23Gaoy4x4NVxKAdAJiFihweK/t6A0SStdY62nykdm3eENgyCSXwyC2iRdzrHr71crJ1ZeDEG1MxqBhCmt1BimswuEBtsAhDdhHe1gDXD6C7an29XC0i5jX9MzXvqJM3Dl6f9N8pWjrTVuKW27SQAtJOZo91fRPFlX5XlsNgAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4-2";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 43.3333%;';
		hs+='left : calc(50% - ((46% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((43.3333% + 0px) / 2) - 8px);';
		hs+='visibility : hidden;';
		hs+='width : 46%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_420.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_420.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_menu2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_420.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_420.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_420.style.transition='';
				if (me._image_420.ggCurrentLogicStateVisible == 0) {
					me._image_420.style.visibility=(Number(me._image_420.style.opacity)>0||!me._image_420.style.opacity)?'inherit':'hidden';
					me._image_420.ggVisible=true;
				}
				else {
					me._image_420.style.visibility="hidden";
					me._image_420.ggVisible=false;
				}
			}
		}
		me._image_420.logicBlock_visible();
		me._image_420.ggUpdatePosition=function (useTransition) {
		}
		el=me.__22=document.createElement('div');
		els=me.__22__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uba85\uce6d-2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__22.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud68c\uc804\uba48\ucda4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__22.ggUpdateText();
		el.appendChild(els);
		me.__22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		me._image_420.appendChild(me.__22);
		me.__21.appendChild(me._image_420);
		me.__15.appendChild(me.__21);
		el=me.__31=document.createElement('div');
		el.ggId="\uba54\ub274\ubc14\ubc30\uacbd3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 50%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__31.onclick=function (e) {
			player.setVariableValue('vis_menu3', !player.getVariableValue('vis_menu3'));
			me.__5.ggVisible = !me.__5.ggVisible;
			var flag=me.__5.ggVisible;
			me.__5.style.transition='none';
			me.__5.style.visibility=((flag)&&(Number(me.__5.style.opacity)>0||!me.__5.style.opacity))?'inherit':'hidden';
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		el=me.__34=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58\ubc30\uacbd3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__34.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_menu3') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__34.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__34.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__34.style.transition='background-color 0s';
				if (me.__34.ggCurrentLogicStateBackgroundColor == 0) {
					me.__34.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me.__34.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__34.logicBlock_backgroundcolor();
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		me.__31.appendChild(me.__34);
		el=me._image_42=document.createElement('div');
		els=me._image_42__img=document.createElement('img');
		els.className='ggskin ggskin_image_42';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA8VJREFUeF7tm01W4zAMx+2ygFsBtxpmA2yGudV0bgUL6nmOcZMm+rbs9pXpgtdHW9v66S8pip0YvvkrjrD/x1162IXDQ54rpXg/z5mm/4UQ99PfmP4u1/Pr/eal9/q6AchGx5SeQ6hG2kyJMbzmX/aC4QrAy2gMVQ8YLgB6G74G4gmiCcBowyEQraFhBvDz7vMlpfBsi+w58W0Ton7ErAgrCBOAp9vDH3lyKxk+xfj6+728514ZbqkYcsBWCCoAOsnHvcZoDEotoTIY+jnFAIrx2fP0y+oJbtz8uTTsNGsQAZBNrKcvMRr6jmQ9Ke4eJSHHApB4XjqZ1eCeEFgAdMIb53UIAp+T4v7tY/dIgScB0FLjB/f0ODVWyzpRANSgmi'+
			'RDZffSK5QmyFrH6/iUUqn1ogCebj8TvPh2z8OL7TVusQLLUyAAyvutCa/n2HTChgFvAPSWfku8SnIKBQFynhiAR9xnA6yxKjGezwdbFZwAoLzz9nHDlkzJIikPeUHWqEAEwGthFRAEesQcZf5TFZwAwDK/l/eXCpk7vnjv0TRB6pPYcwSAyd/bM5Iw8foOlm+WyZAF0Fr2vIyxjIPngjkMjgAkcrEs4ty/wVRQw3oCcI3y50piVfbVA8DCoOY2EkCP7A9VgkPY7SU3L6zhBIX3WQFAXukJG85vJRFOCuAShZU89jtovp7l1gigvT3VAFhfoXlCp9rvLwVAvf+1Awghh91/AHgOuHYFXFgS7JsD8BC/mCowGsBZrwN63RTFq85WASIAvTrBkQC4PmcKAUnbOKoue84jafSYdrhPJRipAK7NXwCADz30CINRALhOcLpD'+
			'WCU3MgxGAeDi/wRAuSCCt8O8O7VRACT2rO4Kw2Hg3amNACDx/kYBmg2Flmw9AgDm/bUzN7s9+NaVX0XoDUDq/Y0C6GsCfItZq4aeALSbu+B+H7WB6VEW4UW2K8yy7wgCsOyza1QAje8BlnIcVslMR2Q8Ord6wKk+I9B6REYr/eowcst7xF6+Rjm6e4zl21wJZ/f8v/UxOa4qHGXUcFrbqgCvA5ysAi4NAn84UiZ9UQ5YekdyPlcSc1aPU739ekxNRREp4LRjlD0IlZOPx56f1ONfflcf0VcBqCCkaljmiPxeWupmo/OvpE+d2S6kTAA0csQlv356RGrodkSu1FFhZwZgVUNLDgBMV0t+PUYzgKqGSayKZ3zaQPgd03cBsFRDXxB+hqvLoNZjlie/4Dn8jV7O46oADFKFUT+fH6A+fXi6XEeUB6g9SqjEaUMASBZyru'+
			'/8A0LOzm61aVoKAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 42";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 43.3333%;';
		hs+='left : calc(50% - ((46% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((43.3333% + 0px) / 2) - 8px);';
		hs+='visibility : inherit;';
		hs+='width : 46%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_42.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_menu3') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_42.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_42.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_42.style.transition='';
				if (me._image_42.ggCurrentLogicStateVisible == 0) {
					me._image_42.style.visibility="hidden";
					me._image_42.ggVisible=false;
				}
				else {
					me._image_42.style.visibility=(Number(me._image_42.style.opacity)>0||!me._image_42.style.opacity)?'inherit':'hidden';
					me._image_42.ggVisible=true;
				}
			}
		}
		me._image_42.logicBlock_visible();
		me._image_42.ggUpdatePosition=function (useTransition) {
		}
		el=me.__33=document.createElement('div');
		els=me.__33__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uba85\uce6d3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -25px;';
		hs+='color : rgba(121,7,253,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__33.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\ubcc0\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__33.ggUpdateText();
		el.appendChild(els);
		me.__33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		me._image_42.appendChild(me.__33);
		me.__31.appendChild(me._image_42);
		el=me._image_43=document.createElement('div');
		els=me._image_43__img=document.createElement('img');
		els.className='ggskin ggskin_image_43';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA5lJREFUeF7tm1lywjAMQOOTtZys5WSFk7mjTJwxjrVacig0M/wAsaWnzWta3vxJM/TPOX8uywIfeD6qPst3t+27ey1PSuk7Wr4wAJvSX5XiVl2u8GIUDFcAjkpjsNxhuACYoHgLxA3EEIATFD+AGA0NM4CcMyQoiHHrUxJfeb8kREt7VysIE4Cc848iuRVFQchW6a6yG1z4TQPYBEEFQOnyoKxYaczsVQmVwFD3KQawCQKW5x6TJbhG4XdF2IllEAEQdqymL1G69x+hPBdJyLEAhJYXdWZVOBKCBACV8KZZHYEAlYMabd5SShcKPAmAcTW2cU+LU22NyIkCYBoVJxkmu5fMfrfW8dI+U5pReSkAGRF+2PKIsFHtFjW6eaoLgL'+
			'H+UMILbhtyAlaqu4APACa4PjWE9vACCsLBeBoAw3G/DWaoqhLdxwHwAwDK+ikltmRKsj4zrvACIPYCKQAXwaqM3QuDGX2ACA9e0ALoZn4v69ceUs34YI1weNKEDJRYfXYAhPu7WkYSJl7/IcYGezKUABgqe17KWNoh8s0eBjUA1l0sQpz9DuYFJaxXAK/o/oIh8urZ7wAAK4lrbiMBRGR/pBJATIrWCy0hlXPuhfd5AHrJKRI2AmBNhMUDusPTKKGQxBRWbq0AhicmxFpAD/gp/RUP6MXIKQJZYpx7hyqF/wCIKeqre8DTJcFI4GiIP1MVmA3g1HHA7CpgGwgtyxIyE4xaFVbuID14ADZeDnHLpwOwVYJpY4HJAMhpfr0egK3WuofBLADEgsg+7K4BTAuDiQCwPYgjACIM4Iyey5I4s0jhnm+QSdCDPu2qMBYGrjO1'+
			'GR4gXeVqAYg3FLgJCLOdHT4OwKy/LcHvR3B7W2OYF7i5aLQHSK0PRuoBCPeCSADazV1se5zawBwui4iQwx5m2XfEAKj32TU5ARHUAyxqOKySWY/IeFkLjsisdwQcjshQ5w70R2Rm7eVrPEe5xlj+TpZwdoDDHD567WNymxdQ+UBE2cPKbRteBzhZD3g2CIoD26LRqwgAs4HaGkfUscUrhGeEoWlxRREDqDxBehEKrrUM7/kpLA4iqnOSCkA1m9PeFlHd8amUhi6lN0lMpdkEQBkSmLf/3SsztUaKuLSEPfeO2uXbBs0e0IEAX0mutXBKSX4fVrx04gKgyQ2RINwUDwEQ5BXuStdyunoAMVZvL0GXC9Tt5WloolygHi6hkliaAkAiyFn/+QWCN8pfDENywAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4-3";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 43.3333%;';
		hs+='left : calc(50% - ((46% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((43.3333% + 0px) / 2) - 8px);';
		hs+='visibility : hidden;';
		hs+='width : 46%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_43.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_43.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_menu3') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_43.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_43.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_43.style.transition='';
				if (me._image_43.ggCurrentLogicStateVisible == 0) {
					me._image_43.style.visibility=(Number(me._image_43.style.opacity)>0||!me._image_43.style.opacity)?'inherit':'hidden';
					me._image_43.ggVisible=true;
				}
				else {
					me._image_43.style.visibility="hidden";
					me._image_43.ggVisible=false;
				}
			}
		}
		me._image_43.logicBlock_visible();
		me._image_43.ggUpdatePosition=function (useTransition) {
		}
		el=me.__32=document.createElement('div');
		els=me.__32__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uba85\uce6d-3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__32.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\ubcc0\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__32.ggUpdateText();
		el.appendChild(els);
		me.__32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		me._image_43.appendChild(me.__32);
		me.__31.appendChild(me._image_43);
		me.__15.appendChild(me.__31);
		el=me.__41=document.createElement('div');
		el.ggId="\uba54\ub274\ubc14\ubc30\uacbd4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 75%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__41.onclick=function (e) {
			player.setVariableValue('vis_menu4', !player.getVariableValue('vis_menu4'));
			player.toggleFullscreen();
		}
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		el=me.__44=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58\ubc30\uacbd4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 15px 15px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__44.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_menu4') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__44.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__44.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__44.style.transition='background-color 0s';
				if (me.__44.ggCurrentLogicStateBackgroundColor == 0) {
					me.__44.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me.__44.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__44.logicBlock_backgroundcolor();
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		me.__41.appendChild(me.__44);
		el=me._image_440=document.createElement('div');
		els=me._image_440__img=document.createElement('img');
		els.className='ggskin ggskin_image_440';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA8FJREFUeF7tW8tW5CAQhXahf2X7V+NsRjfj/NVk/koXNnMIYhKoJySBtLrynAbCvfWgqiis+eJ/lsL/486drXO/whh3psZaa55/v948QWOmdeg14ly/1sWchj+vdoDWe7y9/OX2Y4wdrHX//HxsX/43kADthucbhz72ePvu9Ipmh5e300M67+fd+5Nz5kMo8lUxAWUElH4gbCXfdCDTS0z/5+zpIdUCmfThb0EkLAioA28MxnLZpmENqCF0FFFiqp8E8OBhe4xcO2ufMZv1Y8L69l6qB9R6/Fq0r5lr1icBmJ1Szk0KptU4XKiTdo0EYAMhG2wFpvS7mMlEbCgBR5a87OQIWjASADmpl7cbMkYolUirebmJLwjIz+keCfDqTB'+
			'FIOWFMyB8akBIAH0GtpIdpKbQfzVHshXwIAvgjekkFpL2H1gBtICWNIA+jAdro7+oIiAruTcH/zyVDV0uA1BleLQFSX1BAwLLA0GMUKAU/mgiQRqd+JGJMskF7z2V1LWIBHHyo+qQ+ActhYhbp58TCTffhLgXex/LQCaFJ4romgAMftTGN8zVhfLcESMF7ErwWnMzl7AsuWhPukgAN+FqfxJbFaz5AZWfYuluD99oy31dGQGlJHAOkOVK3BL/EZYdoKqtWhTESJF55S/BQBInEAfoLB4mJcFqwNXiq6sVWhSUAuTHUsbQHeJYAqnzsJ8c7Ng5o+jt1v0cnNutXpMiCCEQAp7ZaMtLxe0l+CpbyC1WiIGKMJprSkrE3eNYEsJKxFphkfAvw3RDQCnwXBLQE35yA1uCbEtAD+M0ImMfXUF9PL+A9AflRT94NygIRbNGa'+
			'ICfm9lRjk+S0gcbMBbK4Hi89BqGmCh8/lEp+uZ5MCFoywHR4TQJ8oxTcwkYDgqJRSRapJSAdX3U5Km9/46V5xQTw4GEnBdf3ayW+swbIwF8xAYFvSWa5hwnEYzu7GFnXCWJK2tYJbhIHyJ1gIIVKsbfWgE06RDQXlpwZHJIAzHnlRjCVoTEDOSwBax1L3wQA7wDWjAQ38QFrSX+POOCbAOCZTVdtctv7ALgduCoZOpYJwO3AX4IA6uIHbZdf0wNLNAUrrkjmUmOwLtPF7TAc0ckzudpNYneTtbdTVJN1XHvUALoXl34sVQseewApe4hJfR1/WzBfe3Y9LnmNWQ9XugImfW3rfFYAwZ7NaTuypUBKxlHS1yRgHPixVpEOqvlACdh0Dud8yzQAT8bALrGpLd0/dJQ9eC4HH3zMvErDrSUjIazL9Q122SfIEbDm7/8Bxh'+
			'dwffjeKAgAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 44";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 43.3333%;';
		hs+='left : calc(50% - ((46% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((43.3333% + 0px) / 2) - 8px);';
		hs+='visibility : inherit;';
		hs+='width : 46%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_440.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_440.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_menu4') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_440.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_440.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_440.style.transition='';
				if (me._image_440.ggCurrentLogicStateVisible == 0) {
					me._image_440.style.visibility="hidden";
					me._image_440.ggVisible=false;
				}
				else {
					me._image_440.style.visibility=(Number(me._image_440.style.opacity)>0||!me._image_440.style.opacity)?'inherit':'hidden';
					me._image_440.ggVisible=true;
				}
			}
		}
		me._image_440.logicBlock_visible();
		me._image_440.ggUpdatePosition=function (useTransition) {
		}
		el=me.__43=document.createElement('div');
		els=me.__43__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uba85\uce6d4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -25px;';
		hs+='color : rgba(121,7,253,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__43.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uccb4\ud654\uba74", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__43.ggUpdateText();
		el.appendChild(els);
		me.__43.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		me._image_440.appendChild(me.__43);
		me.__41.appendChild(me._image_440);
		el=me._image_44=document.createElement('div');
		els=me._image_44__img=document.createElement('img');
		els.className='ggskin ggskin_image_44';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA69JREFUeF7tWwly3SAMhZO1OVmakzU5GRl5wMFYK4vBzv8znWlrDLwnoQ3Zu1/+8xz+EMJf59x7HAN/534f3vt/2IBsHmmO9PqHc+7Te/9JzPffOSfNBe9+wfvUvrZnnTa8bxxbLIQQKhQNCHgr3wshAMlJKJZpUQGdCGhYADZz2nSUPkis5vdWakEIQSN9aq0TCQcCGsHDoijLlZumNABUv5bQ0x53AhTg0fOYUQ3gyTFx/j8GNSDnU8wl2Ydds3ICqHNKGjcDmClDGaHu2rURwAw8ncEpSBoWZWzQho0j4LaSV3qOTQsSASfL6r1nY4QGoUx5FXHFBwJO539FAqI6kwQKRhgVctKAkgDUBU0RXVzU4ErVrhiEfAsCFC76IB'+
			'tMezEC70SANfpTRZB3IsAa/T2LgKTf8SjAP6Vk6JkExKBNcxyeSYDBE5gJKFldLgo0gAdFwQgo7ciGscwGIVtjs7oZsQADPlV9SpuA5jBZFvmVCjfLh7sceIjliWRHncQtTYAEPvMOh0jWEsYvS4AWfPQMcL7hj/kIL0mABXyrTdKUxavX4LIzatLR4MFm5PvCqsLpLkCqq2mJUbvUkeCLuwnwHpu3610VpkgRrfJI8EQEicYBUoytlXo5jtWC0eCpEHrPBuOAmtsbFSGcW7oCvEgAVz6OCLc7toofeb8nJDbdK1JSQQS7b1MbrwpioBRPZXXdwWs04NKi6NXgawgYIoWr1T7XTOkIXFIVniH5LF+YWxafCX76EZgNfioBK4AfRkARX5/6elYBHwkoXT17N6jyAkgAtb9XCz6SChkb2nBVE3MQhvBwPV7lBbDmJwh7'+
			'G8Dn+1AJwUoImg5TV8fS5ET3F6SaWCrNAiLCcTGLlPYoPW+6HDW0v4nSfDIBInjCSMF/314DVOCfTEA6gmJmecURyNz28WKksxGk7M5UI0i57KuM4EaKUBnCahLdbMCQbNB4YSnVBe9HAGO8ymOwl6Gp8zHaBgzRACnIsDx/EYB/B7C2DbBIWBr70oCXBqCfwvQ8AmjluykOkNTa8vyCI4Cm/L+CAILcn8tRIqDppn4aTaCKK5p3uTHMBxMiAepMrsMm0U/hLL0+2B64Jus0dzoCXC+u9LFUK36qEUPzISa3Ntfgsc+d9wlqWlBbwarfp6RvbZ1HFjwQmxNg7chWg6kYyEm/RVD8h5MxuWlZoALr6RXW+FZqAJmMUd8Op5o89N31apYiCyXxwV6lkVhUkpBsF9v6u2SfoERAz+ffZDNybuBVgbAAAAAASUVORK5CYI'+
			'I=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4-4";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 43.3333%;';
		hs+='left : calc(50% - ((46% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((43.3333% + 0px) / 2) - 8px);';
		hs+='visibility : hidden;';
		hs+='width : 46%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_44.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_menu4') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_44.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_44.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_44.style.transition='';
				if (me._image_44.ggCurrentLogicStateVisible == 0) {
					me._image_44.style.visibility=(Number(me._image_44.style.opacity)>0||!me._image_44.style.opacity)?'inherit':'hidden';
					me._image_44.ggVisible=true;
				}
				else {
					me._image_44.style.visibility="hidden";
					me._image_44.ggVisible=false;
				}
			}
		}
		me._image_44.logicBlock_visible();
		me._image_44.ggUpdatePosition=function (useTransition) {
		}
		el=me.__42=document.createElement('div');
		els=me.__42__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uba85\uce6d-4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__42.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud654\uba74\ubcf5\uc6d0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__42.ggUpdateText();
		el.appendChild(els);
		me.__42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		me._image_44.appendChild(me.__42);
		me.__41.appendChild(me._image_44);
		me.__15.appendChild(me.__41);
		me.__14.appendChild(me.__15);
		me.__13.appendChild(me.__14);
		me.divSkin.appendChild(me.__13);
		el=me.__5=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 300px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__5.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__5.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__5.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__5.style.transition='right 0s, top 0s, transform 0s';
				if (me.__5.ggCurrentLogicStatePosition == 0) {
					me.__5.style.right='15px';
					me.__5.style.top = 'calc(50% - (300px / 2))';
				}
				else {
					me.__5.style.right='30px';
					me.__5.style.top='calc(50% - ((300px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__5.logicBlock_position();
		me.__5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__5.style.transition='right 0s, top 0s, transform 0s';
				if (me.__5.ggCurrentLogicStateScaling == 0) {
					me.__5.ggParameter.sx = 0.9;
					me.__5.ggParameter.sy = 0.9;
					me.__5.style.transform=parameterToTransform(me.__5.ggParameter);
					skin.updateSize(me.__5);
				}
				else {
					me.__5.ggParameter.sx = 1;
					me.__5.ggParameter.sy = 1;
					me.__5.style.transform=parameterToTransform(me.__5.ggParameter);
					skin.updateSize(me.__5);
				}
			}
		}
		me.__5.logicBlock_scaling();
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__6=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4\ubc30\uacbd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__11=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4\ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_55=document.createElement('div');
		el.ggId="Rectangle 55";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px 5px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_55.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_55.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_menu1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_55.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_55.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_55.style.transition='background-color 0s';
				if (me._rectangle_55.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_55.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me._rectangle_55.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		me._rectangle_55.logicBlock_backgroundcolor();
		me._rectangle_55.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me._rectangle_55);
		el=me.__12=document.createElement('div');
		els=me.__12__img=document.createElement('img');
		els.className='ggskin ggskin__12';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABD5JREFUeF7lW0FW3DAMtYcF3Aq4FXRD2UBv1XArWDDuU/KUKB5bkmUbZ16zapnYlr++fiTF8e4/v3yr/f+6+/4Nc4Xg750LD63m3c/jp3kN71//fC7/rr2aAACbD8G91BpTNt5P71+nx7Ixl3dXA/B8e/7bz+Py9t6/bqr2UDV4jOejoPDu9e3zZg4/y2UG4OkuPPgA3h9/1bDADMBo6lPYfQULmgJQY4iWRwvzwsted+yCaAIgRf/gT4+tHk0SGKn1rWHQBICf3DyCEwuwlX0mAOL4t6IveVr6/fn2O+A9AwGwx5+0Qen3Fo4oZkAcf1bkpc1pfo/DwMLEagBGxD+C08IZxQC0oJ3Gu9p7anWgEoBx8Y8A7R1Sbs8OAKDUyZ'+
			'3nUhbK2lS1RRF3rnxBrWe192l0YLnH33sfPs7uNNF8ZQUgVdjEAhfH3Mj4z+UDsU3pmsVP2FOYAcjl9TEAMUhHAEASQq5ihaeG526IATiaAG46kE+IpP15rqq7BGBb6AjxnxZC52g+wPcs/OT3opZvNkhU04pWj/s4IZTKdjYEwFhE84gCKCVEctPGT8k8gA5EAI4a/5IOIMNzgp1NhPDZibnAJZXatKXbhQRtxW/5yWI3MDndQWYzQRi8AUAFsJ3ZvWZC5oIjuaapKhWWY6nXNuzzaqtUFQCSktrN7DeyMQDXRX+EVdMfEBlwjfQvaZOJAFwj/WlgSSxgAbhm72tZID4G6QsIEBaop2Hyy5cT/QRNMzPaFtsliaEAAN925uoIjdFt7rlsymiaJCtDckbs6Z/u/Bzh7XAuxaW2cSzIMoCKH9f4GM0CTuTQNiMASH++'+
			'7zeWBbxt1Dk5oMRqUGp8jARAEjhqmxmAkkXaiJp+lhLbisphKoDSIiMTJck2yoCOAIytE3gR3A5wmQGgbbGYnEfIFDkWUBGsAiC3yEj6S6mutofJ5AF7ascIatUfwNPL2v7O5dQpXPzJ05SD4vyk6CkAS6YTHD/B+7XZJOFkqCRQJaDomMbbZgCg5gRo+5emWsalgc3bI3SFLed/228eN6VjQgqCHwRAakCUUD91r6X24GqZLANsj7h+3q9hgQmAvBDyPqRNk1pvx+Ph8IYkvqk1OVayDZE64Wm9fet8PCubA9CTAQBB6Ql16RCHoitclutLC1r9COMsuiSJsghAeRj0E8Lyx6BsSwcAZqLOh5BqvE3HLuJX/jGWho0iAGBIOQtabd0+D03FIXRyR/nZTJC+Vr4mEOLNA4Nyr8jVByQ2EYKvNeQKze4768ilGIo3Cr'+
			'qR+juuItYCXFUH1IKJthjFaXt9OLnoC1ak8L/45CeFD0XT1BbfU347WVniHwQoNQaP5NLf8LUb/ZvlM5ztK9almGsAwEqYVd0thpWAZ7k33vhqNfNVmRgCKUM0jxfLBmrGcCJtLoZykx4RAAAvlShJnSlVHlDjmaOP/QcRaqljGcvUtQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uad50\ud1b5";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24.33%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24.33% + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__12.onclick=function (e) {
			player.setMediaVisibility("\uad50\ud1b5","0",0);
			player.setVariableValue('vis_menu1', true);
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(121,7,253,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uad50\ud1b5", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me.__12.appendChild(me._text_2);
		me.__11.appendChild(me.__12);
		el=me._off3=document.createElement('div');
		els=me._off3__img=document.createElement('img');
		els.className='ggskin ggskin_off3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABB1JREFUeF7lW1ty5CAMNCdLcrJNTrbJydiSAy5Zgx5I8uCp9deUB4NoWqIl7LL951fJmH+t9bP187Zt23tGn4M+vtu9r1JK/x0eKgxAm/yfsCVzHXyXUj7mHhm3DgFQa/174Yqr8yulhOyHAdwdLFp5Cgq4Q3c/FbBRAxcAtVbwc1j95VeUBV4AllKfoB5iQSYAIUMsVGrMg4CLd5pQQJwGgKH/R+bWJIExGj/iBhkAPG3yHZhBAHazzwPAyf8j6Ftoz7WptVb03zIAQv4XBCBlIaYYMPA/N/KRycOz1A28TIwC8HT/R3GAahHXYswCkEK76OojEMJxIALAMv9HAOAFcdlzAND8uwuMt1G2RSKva8Cs1bfGgRYrIE3/2bYNbD'+
			'6l0jsATGJz8qlBAFzm/4IeONnEiDYA4KgpFCGlpQBA1oXz/jsAIAZCKWPtuwYAgAMJZigF4FYB0BIIlZR9n98MABio5f7PBMIN6wEFgH0OJgDuJIBoEJUEkVaxArAkAA407xgANUFkKNr8MmCA6BFYOp0okl7ZmbkF4r64xAjdZwP2UAj1vbNrgQGV0srSSaAMCyTNbmAyW0FmlSA8jADgdook+3O7Qcz91IqmqhQ2+FKu9Tm9mRMjCwB3KoBa4UkF4KXo3xGyBmqRAS9K/46BiQUaAK9I/8NNLCyQdoHbnP5YHX/QTmWBuA2SA4gvyKfbIPRwImBjyqPdNmpXCACx3CRkkSkzMnbykJTNFks5JYjpP8z8bnI6PJS4xDaRBRwAOPixOno1C6Qgh2xzAdDpL+b9i1mg2Xa4sASUmA22IiKbSCwGQFxZbFsEAPMgxqCV'+
			'2WzGNns6TNSfNshKoaTZhou4lwGwNE9QgqApkGsx4FRkJFWYOyhFlgVkh3IzAOY8HEQrOGY6u9AXZxtdHDsA7aSIUpueuNBDEs5GkKjeC46z4NLePH0AgeqTqV2AAQBuQx4A52twaW+GqhrcioqRaaJtHgAi0T390CSoN0R7pKqwtsqjRUyffB/EyIRpm1IBsBQgrNQftXPmHuIhriUbtNp82eoHWTAPgBAINTBw0URrO/s/7AbTbqmxUqoIWbe62Yk8s73KymwArmQAADf7hrr6EodWFZ7V+uqA3uX3lOg1+oMtGgCzbqBSLgDArDYx2ZINQFeMEQlMMYLg5/kYy8RGy9ngLAu8i5z53CHFwXWkV/lZIYSPlYNSNHNilr5Ok4dkSjoiN70g0XQB3oe1DM1iaGabPRmiE23y+eE+HliTwlLBoYPQfbT3eyU4OOvb4w'+
			'1Hb5Q7uMri2O9Pb1Zal61tW1zzEUgPr914PsNBX7F21RgGoE9iB2LfOxM/XbUCqrUbTLw/kgZA79C0vWgGZ/6vBGl3MsRtf7cDoAXpkVBSK1OqDshcqTv29Q88mq1fL+sXegAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uad50\ud1b5-off";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24.33%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24.33% + 0px) / 2) - 5px);';
		hs+='visibility : hidden;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._off3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_menu1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off3.style.transition='';
				if (me._off3.ggCurrentLogicStateVisible == 0) {
					me._off3.style.visibility=(Number(me._off3.style.opacity)>0||!me._off3.style.opacity)?'inherit':'hidden';
					me._off3.ggVisible=true;
				}
				else {
					me._off3.style.visibility="hidden";
					me._off3.ggVisible=false;
				}
			}
		}
		me._off3.logicBlock_visible();
		me._off3.onclick=function (e) {
			player.setMediaVisibility("\uad50\ud1b5","1",0);
			player.setVariableValue('vis_menu1', false);
		}
		me._off3.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_21=document.createElement('div');
		els=me._text_21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_21.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uad50\ud1b5", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_21.ggUpdateText();
		el.appendChild(els);
		me._text_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_21.ggUpdatePosition=function (useTransition) {
		}
		me._off3.appendChild(me._text_21);
		me.__11.appendChild(me._off3);
		me.__6.appendChild(me.__11);
		el=me.__20=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4\ucee8\ud14c\uc774\ub108-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 20%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_555=document.createElement('div');
		el.ggId="Rectangle 555";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_555.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_555.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_menu2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_555.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_555.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_555.style.transition='background-color 0s';
				if (me._rectangle_555.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_555.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me._rectangle_555.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		me._rectangle_555.logicBlock_backgroundcolor();
		me._rectangle_555.ggUpdatePosition=function (useTransition) {
		}
		me.__20.appendChild(me._rectangle_555);
		el=me.__10=document.createElement('div');
		els=me.__10__img=document.createElement('img');
		els.className='ggskin ggskin__10';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA9ZJREFUeF7tW8t2GyEMBWeR/FWTv2q6Sbxp+led/lWyiOnBVOUxEpJmAI/H8crHgBAXPS4CW3PjH9tq/T8ePl+dMy+lPGcPT7/e7eR/f74//TbGPfrv1prjz/e7V/9dMraVnqWcGQDfH4KC1AcWU7Y/3386bMwaAIyxk7P2CHLTuVM9qd+xcSQA1C5gi0p3D9r7AJDObqe3j8MTNt/bx93/jUytLB2d9smk1kywZgnpzgbz5i2gtC7YORn46wAo9YW1nZGjUKv7Ha1QOo6aOO2zAQDw3eMCT256uAzMXUq5SwCgdKM282IWABGfUtg5+w0yg8biaAB4V2wSA8qdpWIAZ0Wads6aapZUtQB9HMj9vxYENQuU9Q2cAv/QKZwFIG'+
			'YDb5LlJwqmdmGEBcgAIqBJCNnMBTjBeWCZ7/5YC+C07QCAz9/WeRp7DmkZIYHpvP8tU23MKKDd5Wzis0Bq4pLcPmZZ62dRABAPMjcJQJ5i8kPK+n0YIwE7yIktII8DYxTuMUuZxcQAhEgf3aCHcuNkxkB+owDEgowKgL24QZrOVQBcA+HRuJE/zS4AYF9xQA3AXtwAssHNAgDFHDUA158OA4kDUjQIADtZ6/5g9wYQkemqED+2LvvfDNYcT+YwlWxwEQCaOJAyL4xIQTslE0wVa+dkpxlBVBDRpBBpAYS6GIG56oXVyNg4ALjCagcAZOlwtwBI3eALAOJy9OpdQJoOd2sBXwAYYyRxYNcWIDkd3gAA9XTIAZC3l/d6kQfgeZ5rj8ymOQ8A0bwbBCrraWi8W4iKeTbn2w7m9IhRZWi3zr1gdDm2w70FTueqDyQ0DLDs'+
			'ywOwRnq7sd0AkGaDdkvRS6rdKi86DJUqbLlazF2pNwFgq27ALd5vZBMA5umwdoevN2HtCAi61JO+VF5DANJ0iN8gaxcyon8zAEo3oKLuiEVp5mgGAOYGae1No9TIvk0B4KoyIxeW+XnyLrnUoSkAW+YE3agwtqtbtISuTJAy7fJtcMrngcOvcQupvFo6bO4CtQVR/xdYCkJqaRLSg80zDACurK0FIcjLT4hLQOgOAKZovlg9aaqfPXTyugMgu0CRKy07eMnldQVAkw0kT+808qTu0BUA2e6DQ/C7Jtv96GASOj4UgPwyc/6un1MYAxQsBwOHk9f0OFxGcS7qaxXGaw71oqjErbpZQE1h7iqcSolzCwgAUJnmohYwPx1ymX6HMaB11NaU3jaRBaSnQ6myUnnUfxouRoVbMje/iLpl5Y+gWMfjOrRqh3+UhNufUDRdUz'+
			'HK5Z0TWvb6S6p3tywgVeDS/f4CTCsNfSFPzgMAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc0dd\ud65c";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24.33%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24.33% + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10.onclick=function (e) {
			player.setMediaVisibility("\uc0dd\ud65c","0",0);
			player.setVariableValue('vis_menu2', true);
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me._texton=document.createElement('div');
		els=me._texton__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc0dd\ud65ctext-on";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(121,7,253,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._texton.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0dd\ud65c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._texton.ggUpdateText();
		el.appendChild(els);
		me._texton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texton.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me._texton);
		me.__20.appendChild(me.__10);
		el=me._off2=document.createElement('div');
		els=me._off2__img=document.createElement('img');
		els.className='ggskin ggskin_off2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA+JJREFUeF7tW31yHSEIX0/W5mRtTtb0ZHYw6rAuCLhgpvvy/knmqQg/+daXjhf/JC/5c86/j+P4RdB7Syl9wPc55z/Hcfysc95TSrAGvhfXevE50rkAkHNuDJJ7NmHGwZxzZpi8AwAA997o4r0xn9z31DoWgMkpUHL102uDQQDgvT9SSm/UfimlfpCDlvX1eA4mWhYahW/r+8lWGhoNOGkXMg3OBNwAOI7jxG/XDsI2tebGnshAgNwYz1EewC0NkADgTm8KxqB6HI2LuRD+w6wBHGOcCUgAYO/srQFArzsygvgPFBlme580YAKAaIpePuB0shMnqAVUM2+qTYIp8T5gwQ9cTmMTAMBqySmYzyyEzwFA0QBUcvxgwuQpbARAoy'+
			'nUHBkApWMhbfHpAIAGgKMsKogTkgZatb/V0wlf19LucSN1LTCcsBjbwyVy2sACAA6VLwkATlZORYrTYYSToQo5iwZgPxDObOAGpyimBmAhVwiU4Tbp7shfFQBAsGiCFYCnmEEP5yYAqhksVY63lTaAAFSzKwCsVI4B7N8mWfzACgBPMQO7D6gm8AgAmvabNeAB4bAkcS0p2gUAbPqXuTcoHnnSFdKsndFuzgK6UmD3p37CKgAWM8AXIJQDLeO1z98qzu7hmqoy4xJt7CnX+wGUvzXU/9zFSCErNFZ7xqYAQGqsugOgDYePBUBrBt8AMJej/7cJGMLhMzXgG4DPS1WNH3iuBiirw8cDIIXDKQD40pLILXAeQMV5aTwuEWqUFWbQUln4e8n06sVpS4WpJzYlha1pNHX11cYp2peMckzqllJhTEQBwO3C3YPA9IXI3Q0m'+
			'd/J3SXutZ2+Vb2uAIRx6CWOlM71S9wJAEw6tjHvMF1+nuABAhMPZHb6HYBIN6A9can9qkScAOByqnrNIUuwY9wTgZAYrHecdAruHwSEk4juDU+/tK4TT7OmmAdUPSF0ZDU8Rc2LD4KAFUmocIaCGpm9LbLaj8uWnhmm3OaGZIMcl8fIccv3+XF548qYRXkWPe+EOG7j6AIlj7vcC0roJwNjniElPaB4gCSG1taX143ilhzUApphBCNcAhlEsjzlpEoovE70dAGjeE6iZVlaeanqhABijgfj0zkhPZQ7RAGhOv5mDeGrK0+/mpUnHdwOALzMv4EgMM/eRRXMocCR6oWFQ8vpWhhl6UlNUNKswDZgxLF2FT+L+qDUFAC7SfKkG1OLo5X2ApToUvbaxAy3SC/UBTY2VnlvFbNUqTbUpRpTGX5gPMJTIamYRqDPNMjVitg'+
			'CAmiXwL+TvrWnaX2st1ALlh9fo4ZVJ8K0aYBVu5/x/MnkBbmKIf+gAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc0dd\ud65c-off";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24.33%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24.33% + 0px) / 2) - 5px);';
		hs+='visibility : hidden;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._off2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_menu2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off2.style.transition='';
				if (me._off2.ggCurrentLogicStateVisible == 0) {
					me._off2.style.visibility=(Number(me._off2.style.opacity)>0||!me._off2.style.opacity)?'inherit':'hidden';
					me._off2.ggVisible=true;
				}
				else {
					me._off2.style.visibility="hidden";
					me._off2.ggVisible=false;
				}
			}
		}
		me._off2.logicBlock_visible();
		me._off2.onclick=function (e) {
			player.setMediaVisibility("\uc0dd\ud65c","1",0);
			player.setVariableValue('vis_menu2', false);
		}
		me._off2.ggUpdatePosition=function (useTransition) {
		}
		el=me._textoff0=document.createElement('div');
		els=me._textoff0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc0dd\ud65ctext-off";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._textoff0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0dd\ud65c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._textoff0.ggUpdateText();
		el.appendChild(els);
		me._textoff0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._textoff0.ggUpdatePosition=function (useTransition) {
		}
		me._off2.appendChild(me._textoff0);
		me.__20.appendChild(me._off2);
		me.__6.appendChild(me.__20);
		el=me.__30=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4\ucee8\ud14c\uc774\ub108-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 40%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_5555=document.createElement('div');
		el.ggId="Rectangle 5555";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_5555.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_5555.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_menu3') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_5555.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_5555.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_5555.style.transition='background-color 0s';
				if (me._rectangle_5555.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_5555.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me._rectangle_5555.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		me._rectangle_5555.logicBlock_backgroundcolor();
		me._rectangle_5555.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me._rectangle_5555);
		el=me.__9=document.createElement('div');
		els=me.__9__img=document.createElement('img');
		els.className='ggskin ggskin__9';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAxRJREFUeF7tm0t6wiAUhcEOdFe1u6qdqJO2u6rLqgOlH0lRQngcLpfEB52akMPPfQKV4sn/5Fzzf1+ptVRqK4Ra52iQUuw/f192Oe/Enp0NwMfqtFNKbCkTUXLx9v0rD5R33XdmA7BZnn9yV9+I57SCBoDDjChjNAtoLtBiQAuC1CzwkGlQpzYkmJ7F4sBVA+jv3UgalIev4+INAcD9TAPATRQdb1gHNAtoLvBUMcDXCXI2OKgbzpIFYm3wHBAmzQLIHsDUECYDgEy+Rr+fcocLAL1FtRDnrO0p3+C+7aqcyacg6LFSk0J+Nzo7ABSBvo/4avSSsX3u0O8l6k6y9K+vPToAm+VJlQ7HPfmYJXBB+Dq+SBYAtSZfGwILgNqTrw'+
			'mhGMBUk68F4QKAEll9fTke8Po9fSXl3mQe9IwgFBgpGUxnArY6AJ18rNDhGCM3mLMA4BTOORYCoxgAKliL0T6HiELPDDjKZpY0iEzKFWsfjrrBFAWAfDf2THEWyBHgAhgWX8MdIa5CJ6VvUgCpVbbdI8etUpO8GQsQIrTK8qDTob3V/RQAYivD0ZsgljGpC3TbT8DtjqlW32QlKAsY4SFxxr8R8aWFEKcW2ALsAOWmqHh0DxuiOQrTJXV/V6grjpMbMnla4ifQIIBh8HJXeQyAfuyd9lteLQ0AtiHCSz29yrEneLWwWICb38NlbO61Nl88iAPAtfSQQQC6b7/eyxvn6KEoXw6nXmjwwSzVYtsXDMDkcKXkqz9S26s7XDkk94eMPtQT6DHDWjq1/5co41klCwDVd6mrr79XuymaBUBq+80+WHlIAKk63y50bgyA9quY'+
			'T/l/H7fB8UMYDABNi+vGsAvYgcy3gka0b8W4AZRoIQJw09yw1E2VwrwAyrSwAMjtBWoCyNXSADgEwBhQVn8/vAWM6+9hlJ8SQLVewAS6UF42WcC3I8QL4LqtRtFCjAHmNVru5QaAleQprZndIPZR/1PzAMAUg0EQGyz0VAPg/I/fHfcCNEtoFnAfFlBvK/suLKBm332bAK4HstCNDZr338dbf1XPdH2KUY/pAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uad50\uc721";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24.33%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24.33% + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__9.onclick=function (e) {
			player.setMediaVisibility("\uad50\uc721","0",0);
			player.setVariableValue('vis_menu3', true);
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2on=document.createElement('div');
		els=me._text_2on__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-\uad50\uc721-on";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(121,7,253,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2on.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uad50\uc721", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2on.ggUpdateText();
		el.appendChild(els);
		me._text_2on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2on.ggUpdatePosition=function (useTransition) {
		}
		me.__9.appendChild(me._text_2on);
		me.__30.appendChild(me.__9);
		el=me._off1=document.createElement('div');
		els=me._off1__img=document.createElement('img');
		els.className='ggskin ggskin_off1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAvpJREFUeF7tmlmSgyAQhuFkMznZTE42uRlTbYmFCPQKmogvedBA89HLz+LdzR9/1vhDCN/OuR/nHPxynqf3/pfzh9a3ZwKAQQAAyfPw3r8kf8z/cyaAP8HsR/vNvGACsHAjSRshhOkBMwT4FWDmgJXA7ZPgR5bBJzGZvqw0APR3lTIIg3oQAZh+NgGY4mQ0lumA6QEzBO6UA0IIpZWgWW1nROL4KlAZvLnCo0IYWgWQwZ8CYRgA4uCHQ9gArFtU3O2pg6eVtquYg29CWNuienj1u2jnAkBoYKnxg0ZXtn1IjOtEwV6C9lm0RwQQtK0556wHX/UEKwgentUDtAB6Db4rBCsAvQffDYIFgFGD7wIhBSA5aDisyxkJL+7pwx5ArD'+
			'zUM4JaYmRXMKgEZjqAMfiq5LVog5vMTQBYGm7ZFgWGGgDDYBerDmYY48xAvYCyKoPYmOD9ztjscHSXTBkAKP221KCZDqAYkgNItcduR8hK6GBGWZRBrI/0fXOW0/DghBXHgPzb0QBqswwlEbxjO+6+BYDWzIUQtNKc5BijPeCQCEtWjpp96JsDYElgDeOW+CYarxVCZraQAWQJKj/Xb2X3livGozCI/SiDUTnLtKV5B4EKIE9e+Y5uDkBz8QGLXVNbJgDihogpdWyKkfemtlh5QG5ULQS419pK+QADQLVl4UwFAN9uKq5Qo/NOSzVcdKGhsibQ2rI5GQfAUsOdc1+Vi03p7OYzJ16xNdYELVvA1mhPs6pwAUjDVzT70FnvRdEpALCDjfRg5VMBNHV+JnTAhS0OQYrey/UAiKtWTNXe58tgCwBSW3YgOAC2RFZaqSV6'+
			'ojRj1gA0togAYLUVk8KWALS2mADgrgV6AuDaMgGkBKg5AJOfZ4bAJTwAk8IjQwDLEaIQ2LayasIkqQKl21+WALS2iAFEfX0VHYDJckwnsFeDWIet99YeoLFF5QHSjieA7NDDQgpLJ2N6gEQHaGm/RQj03Mp+CwA9191XBLAdyKpviGjj4+z//wOLIG9u4rn7EgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uad50\uc721-off";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24.33%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24.33% + 0px) / 2) - 5px);';
		hs+='visibility : hidden;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._off1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_menu3') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off1.style.transition='';
				if (me._off1.ggCurrentLogicStateVisible == 0) {
					me._off1.style.visibility=(Number(me._off1.style.opacity)>0||!me._off1.style.opacity)?'inherit':'hidden';
					me._off1.ggVisible=true;
				}
				else {
					me._off1.style.visibility="hidden";
					me._off1.ggVisible=false;
				}
			}
		}
		me._off1.logicBlock_visible();
		me._off1.onclick=function (e) {
			player.setMediaVisibility("\uad50\uc721","1",0);
			player.setVariableValue('vis_menu3', false);
		}
		me._off1.ggUpdatePosition=function (useTransition) {
		}
		el=me._textoff=document.createElement('div');
		els=me._textoff__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text-\uad50\uc721-off";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._textoff.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uad50\uc721\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._textoff.ggUpdateText();
		el.appendChild(els);
		me._textoff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._textoff.ggUpdatePosition=function (useTransition) {
		}
		me._off1.appendChild(me._textoff);
		me.__30.appendChild(me._off1);
		me.__6.appendChild(me.__30);
		el=me.__40=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4\ucee8\ud14c\uc774\ub108-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 60%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_55555=document.createElement('div');
		el.ggId="Rectangle 55555";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_55555.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_55555.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_menu4') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_55555.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_55555.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_55555.style.transition='background-color 0s';
				if (me._rectangle_55555.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_55555.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me._rectangle_55555.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		me._rectangle_55555.logicBlock_backgroundcolor();
		me._rectangle_55555.ggUpdatePosition=function (useTransition) {
		}
		me.__40.appendChild(me._rectangle_55555);
		el=me.__8=document.createElement('div');
		els=me.__8__img=document.createElement('img');
		els.className='ggskin ggskin__8';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAArlJREFUeF7tm81ywiAQx0EP+lbVt6q9qJfat6p9Kz0oHaREkiayyy7JJiQHZ5xJhP399wswWhV+6cLtVzOANg/4WN8Oxug3pcxmGh6iz9aO03WxbdpT8wBnuNpPw+h2K4xebL8uDoi9KgDva7PR5v49ZeMro7U6fl6WhxqA3epmSjDe23i6Lh/iPz5KcP1/sf/nBQ8Au5V1/akkPKgf67NNin8AynL/MAxmAC4EZg8oqgKMJgS0Vkc/WdeZ2osvWdtSKDIHWMN9o9LM6ZwlWySAV8Z7GFxdqzgAEOM9BA5PEAbANSbQNoajg50BSEqCGPfnygWiPGAG8KL0deUFajUQ5QFK4ZMgdRUrDIBSmDCgqm+9ShwAPylIKaSqLxaADQ'+
			'Wj9THcuAyBOOXNnmNNINIDnsY6EP77Qt0fW/Scu9YZAeiz1uaHe8KQ0MDckw2A33HlaFcxBmHvzQKgLZNzLFywxkHuzwIgVD+chEQI7ABidVza3iMzgHgnx9G8QFwbeg8rgOahY9ckJIUCI4C4+hLzARsAqPohBI5WFurqXfcxAcCpz7WZQTWebS2Qoj7nxiYFBIMHpKkvJR+QAVDUl5APiADo6tchQA5o3SLLnhpxLItJALjUh+eDduCU7pIAgFf9OITu8SiNVTIAbvVfJ8U47FQIiQDiE6KUJvusjW+/A9R1StwcI6WxSgKQU30KuJSFVgKA/OpTIGBDAQ1AqvqpjRUSgGz18T0F8mBkDOrHy2k9wBAeMB71MRDAAMakPiYUwAC6dnopGbuPZ2NVAQwgttvbhzEpY8R6AzAAN/jzuCtlMkM8EztHDAAU/nf5WKwM'+
			'oV7uMX1YV+8MUdbVuSeb4/d9Yq8AlOQFYVmvvTYXy5o5lOj7N5sVrfXNUbe2thffX9P7NrQ+3nMvsTmP+dXZYZUZfvTiPeAXw/FEX1fh06EAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc790\uc5f0";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24.33%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24.33% + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__8.onclick=function (e) {
			player.setMediaVisibility("\uc790\uc5f0","0",0);
			player.setVariableValue('vis_menu4', true);
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_on0=document.createElement('div');
		els=me._text_on0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text -\uc790\uc5f0-on";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(121,7,253,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_on0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\uc5f0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_on0.ggUpdateText();
		el.appendChild(els);
		me._text_on0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_on0.ggUpdatePosition=function (useTransition) {
		}
		me.__8.appendChild(me._text_on0);
		me.__40.appendChild(me.__8);
		el=me._off0=document.createElement('div');
		els=me._off0__img=document.createElement('img');
		els.className='ggskin ggskin_off0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAqtJREFUeF7tm+1WwyAMhuHKdFemuzLnlcUThEpxHflizUr3w+NZ25U8bxJCaGOY/BMntz+cAO55AAB8hhDeQgjvB/GQG9oRY7y09qw8IBv+cRCjt8y4xBgTkASl/AMAqPbXwY0v5l1jjOjlKwAwifG/yseYxE9/JnH9Vt/kBQUAuv5REh7VkW+YFAuAqdx/SYAlDgDgBED1myOdhw5whkCeBbyGwLXyOKxM8WOWrD17wFKotCFnOWV7BbBpvHXV6hFA1/gKApayqnWLNwCpMOHMMtpwOAE4mwbJ7m+VC7x5wAmgrNGpeUDbw/DmAZIkqFrFegOAwpPDQKt+aYq4WwuUxNwLAwBQqe8WQAgBG5boCUvjsoaRlccCSL0m8BgCta'+
			'0JRPVFMVhV/dU3GAkAB/+db2Y24F5YcI8PA1DHsbZc5RrFOX8UgH+Z3CuEIQC2srhHCCMAPJzHvTVfrQF0KzmL4oUT471zrQGsNh23bu4pFCwBdNVvihl1N6enLuW4JQCS+g0EdSlLMfLROVYAWOpbNTO0xluuBdjqWzY2NSAsPECkvpd8YAFArL6HfKAFoFa/gUDZnkuLLGydWSyLtQBM1Gfkg7vANdWlBoCp+gQIm/fTFFYaAKbqd5JiF7YUghRAd0CaqQmvzfGdOkDUVrmkRygFMEx9DTjJQksCYLj6SgisNYYEgEv1pYUVF4Br9QU1RXpalLMx4l59wnS6ijAOgJdRnwOBA+Bl1OeEAhkAdb9Ok8FHXNsrkMgAOLu2IwyR/mavNuAAwDHU213SMT37uofbcjWA3ftzzyaDgtaPy7MqqB0GO+KWfy9M5AUIpSEx'+
			'YiC7/GZJ7PVLUzN5wTKtt6/NzfDm2Gr/8u6bo3ltja6pfgxlF//+f9Oll9geOl+ddaLQbsOY3gN+ADcKzlDUdeM9AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc790\uc5f0-off";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24.33%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24.33% + 0px) / 2) - 5px);';
		hs+='visibility : hidden;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._off0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_menu4') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off0.style.transition='';
				if (me._off0.ggCurrentLogicStateVisible == 0) {
					me._off0.style.visibility=(Number(me._off0.style.opacity)>0||!me._off0.style.opacity)?'inherit':'hidden';
					me._off0.ggVisible=true;
				}
				else {
					me._off0.style.visibility="hidden";
					me._off0.ggVisible=false;
				}
			}
		}
		me._off0.logicBlock_visible();
		me._off0.onclick=function (e) {
			player.setMediaVisibility("\uc790\uc5f0","1",0);
			player.setVariableValue('vis_menu4', false);
		}
		me._off0.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_off0=document.createElement('div');
		els=me._text_off0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text -\uc790\uc5f0-off";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_off0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\uc5f0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_off0.ggUpdateText();
		el.appendChild(els);
		me._text_off0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_off0.ggUpdatePosition=function (useTransition) {
		}
		me._off0.appendChild(me._text_off0);
		me.__40.appendChild(me._off0);
		me.__6.appendChild(me.__40);
		el=me.__50=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4\ucee8\ud14c\uc774\ub108-5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 5px 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_menu5') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_4.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_4.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_4.style.transition='background-color 0s';
				if (me._rectangle_4.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_4.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me._rectangle_4.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		me._rectangle_4.logicBlock_backgroundcolor();
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		me.__50.appendChild(me._rectangle_4);
		el=me.__7=document.createElement('div');
		els=me.__7__img=document.createElement('img');
		els.className='ggskin ggskin__7';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAqlJREFUeF7tWst5wjAMluAAW5RNKFuVXgqX0q0Km9At4ADup6QOiXFiKThuSJRr/JB+/XrYMsLIPxy5/qAAKANGjoC6wMgJoEFQXeBRF3ibm9evE+7brENzaV7b+W32dOe0YgAJjsZ8AOQK2A8Rtp+n6SYk2Pv8sjEGPqrjcI9oDpz5ofUl/8UA+IWvwLDfnSerOiHWs+u3C1wbECVKNo0VARBWvuCCFwTufIOTVSq3EAGwnl0MF3lXidxtyPqcDxtZxFmBO6YzANx4wLW+FTwVC9gAyCxIalStGPJ912JPD4DLgKcHgCwkiQEuAFIG7c5TNju5/u4bJ9pE4sc+BbgAcuuJRxQv8pV0EQ6V6xTgsiCV9bNIJQWAxtczAfcGcd'+
			'uUw5tZFJ7fRt6HCiGy2gSulZKXFjQACwCzAIMv2QYIBwQ4cgU0toym+Wh+APDom3+FSXbO6Kow8jJA4utchWOM6yI13gHQV+VvAMatEisA9F/5HIaYWaIAgBuhY1A5xhqxQCgA4KS3GILHWmP0ALhnjRCw5N5Z9jK4LKfqEgP4R93QZqn+hwomm8Ld26cyewYJACeYW/AGA0CuNC6brtvKzBwEAFQYUZV6f8EadsJBAECBkGtxFxIF4O++4aljgDJAXUBjgAZBzQJOgzZcAeQjNA1qGsz7DloHWJ/hNi24PpZiHB1r25wDBhMDKJBJT4HWMIMIguULkbpnO3VMHBwAZUU5YHgAaH67k8KnpXuErsRoPT8Yt95CkQU410hSAbsdL2+Q2DvC8ku0UQHgM0ilM/RMqTBWn1BbYy4t+h4LYnWErN7e9jgnjXQb4O5XJ8Xp'+
			'rUDsdwKsFyL2UXNqpWm/2Aq7OrAA+A/FU+2pAKRCuq/7KAP6aplUcikDUiHd132UAX21TCq5fgFXV7lQ5JLZKwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubb38\ud654";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24.33%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24.33% + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7.onclick=function (e) {
			player.setMediaVisibility("\ubb38\ud654","0",0);
			player.setVariableValue('vis_menu5', true);
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_on=document.createElement('div');
		els=me._text_on__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text \ubb38\ud654-on";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(121,7,253,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_on.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubb38\ud654", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_on.ggUpdateText();
		el.appendChild(els);
		me._text_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_on.ggUpdatePosition=function (useTransition) {
		}
		me.__7.appendChild(me._text_on);
		me.__50.appendChild(me.__7);
		el=me._off=document.createElement('div');
		els=me._off__img=document.createElement('img');
		els.className='ggskin ggskin_off';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAolJREFUeF7tmtFxwyAMhsUk7SZtJmszWZNN2kmUUwo+TGQjAc4FkO/yFIT5PyQhy3Yw+eUm1w8GwDxgcgIWApM7gCVBC4HaEEDET+fcpWQesiW7UvuSe6Y2RR7gF/4FAHcB0XV2zn3nFoaINIbs44sgXiX2ufk1/6sBbCx+JcQ5d9paBCL+MODUEDUi98aqAAjEh3tdOAgK+9OzwkILABXkVyJ82NDuSy4WoMRQO+ZIAKt8oNj9oOEpXiAGoNxBErHaRUHsp5vXPYDUA3LJ77UB0OoQUZMDUgB0ZEpzANUGYu/Uxn08XnUTTRxzAhQARfVEjfBgqwLgvUDiyqwAaR551u6THjUAD4Gr5O6JDwBI/GZpnPGirH2LXVeFgN+1tO'+
			'SlOd79781PeAWAX8UCw5xk/+dtOfs7zKMKI9YDNLGuENxiaPOj8QHAC4vfLbNL6a4AdCA+6Gx2SiwApBm6lPQBdk0gxAAkx9sBOoqnnB6A6onRhzfR/oiP6tgDNGVu8ba1NMwVTNERnnafFu8ZEoAkmQd4wwDwosm9uaLtwfGGAAAA1HskwamLZyNtFABUJot2PCViAHy/oesc4J8+zQOyAc8MsBCwEPjvOVoOCOGhaFiWhNxRNnYMWh1ghdDcleC55DnAd5n7PwWomNE+BYZsPEQhFDdEdj7bYU+g4QDEKiUwOAC9NUVFb5A3YCz9xLgS3Hrfd1QRUzuvqilKNws9wvhLtKkAcMTTN0M9dYabvCe0V2OpW0hayrXBW2nf5I3QUg9wi5EcI5UiSsyp6qPEV/Rd8tYNRV+IhI+aS1Zda9Na8EN3uHaBvduLPKB3kXvr'+
			'NwAj765Em3mAhNLIY8wDRt5dibbpPeAGvKRFUP4bxkoAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubb38\ud654-off";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24.33%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24.33% + 0px) / 2) - 5px);';
		hs+='visibility : hidden;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_menu5') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off.style.transition='';
				if (me._off.ggCurrentLogicStateVisible == 0) {
					me._off.style.visibility=(Number(me._off.style.opacity)>0||!me._off.style.opacity)?'inherit':'hidden';
					me._off.ggVisible=true;
				}
				else {
					me._off.style.visibility="hidden";
					me._off.ggVisible=false;
				}
			}
		}
		me._off.logicBlock_visible();
		me._off.onclick=function (e) {
			player.setMediaVisibility("\ubb38\ud654","0",0);
			player.setVariableValue('vis_menu5', false);
		}
		me._off.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_off=document.createElement('div');
		els=me._text_off__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text \ubb38\ud654-off";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_off.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubb38\ud654", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_off.ggUpdateText();
		el.appendChild(els);
		me._text_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_off.ggUpdatePosition=function (useTransition) {
		}
		me._off.appendChild(me._text_off);
		me.__50.appendChild(me._off);
		me.__6.appendChild(me.__50);
		me.__5.appendChild(me.__6);
		me.divSkin.appendChild(me.__5);
		el=me.__1=document.createElement('div');
		el.ggId="\ud604\uc7a5\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2=document.createElement('div');
		el.ggId="\uce35\uc218";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -82px;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__2.style.transition='left 0s, bottom 0s, transform 0s';
				if (me.__2.ggCurrentLogicStatePosition == 0) {
					me.__2.style.left='15px';
					me.__2.style.bottom='-82px';
				}
				else {
					me.__2.style.left='0px';
					me.__2.style.bottom='-82px';
				}
			}
		}
		me.__2.logicBlock_position();
		me.__2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__2.style.transition='left 0s, bottom 0s, transform 0s';
				if (me.__2.ggCurrentLogicStateScaling == 0) {
					me.__2.ggParameter.sx = 0.8;
					me.__2.ggParameter.sy = 0.8;
					me.__2.style.transform=parameterToTransform(me.__2.ggParameter);
					skin.updateSize(me.__2);
				}
				else {
					me.__2.ggParameter.sx = 1;
					me.__2.ggParameter.sy = 1;
					me.__2.style.transform=parameterToTransform(me.__2.ggParameter);
					skin.updateSize(me.__2);
				}
			}
		}
		me.__2.logicBlock_scaling();
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__4=document.createElement('div');
		els=me.__4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uace0\uce35\ubd80";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		hs+='text-shadow:2px 2px 2px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uace0\uce35\ubd80", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__4.ggUpdateText();
		el.appendChild(els);
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4.onclick=function (e) {
			if (
				(
					((player.hotspot.title != "\uace0\uce35\ubd80"))
				)
			) {
				player.openNext("{node2}","$(cur)");
			}
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : 60%;';
		hs+='top : calc(50% - ((15px + 2px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uace0\uce35\ubd80"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_1.style.transition='background-color 0s, border-color 0s';
				if (me._rectangle_1.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_1.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me._rectangle_1.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._rectangle_1.logicBlock_backgroundcolor();
		me._rectangle_1.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player._(me.ggUserdata.title) == "\uace0\uce35\ubd80"))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_1.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_1.style.transition='background-color 0s, border-color 0s';
				if (me._rectangle_1.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_1.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._rectangle_1.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me._rectangle_1.logicBlock_bordercolor();
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me.__4.appendChild(me._rectangle_1);
		me.__2.appendChild(me.__4);
		el=me.__3=document.createElement('div');
		els=me.__3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc800\uce35\ubd80";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		hs+='text-shadow:2px 2px 2px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc800\uce35\ubd80", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__3.ggUpdateText();
		el.appendChild(els);
		me.__3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3.onclick=function (e) {
			player.openNext("{node4}","$(cur)");
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : 60%;';
		hs+='top : calc(50% - ((15px + 2px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uc800\uce35\ubd80"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_3.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_3.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_3.style.transition='background-color 0s, border-color 0s';
				if (me._rectangle_3.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_3.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me._rectangle_3.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._rectangle_3.logicBlock_backgroundcolor();
		me._rectangle_3.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player._(me.ggUserdata.title) == "\uc800\uce35\ubd80"))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_3.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_3.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_3.style.transition='background-color 0s, border-color 0s';
				if (me._rectangle_3.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_3.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._rectangle_3.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me._rectangle_3.logicBlock_bordercolor();
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		me.__3.appendChild(me._rectangle_3);
		me.__2.appendChild(me.__3);
		me.__1.appendChild(me.__2);
		me.divSkin.appendChild(me.__1);
		el=me.__=document.createElement('div');
		el.ggId="\uc0c1\ub2e8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 55px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width == 420))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._container_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._container_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._container_1.style.transition='width 0s, height 0s';
				if (me._container_1.ggCurrentLogicStateSize == 0) {
					me._container_1.style.width='100px';
					me._container_1.style.height='100%';
					skin.updateSize(me._container_1);
				}
				else {
					me._container_1.style.width='200px';
					me._container_1.style.height='100%';
					skin.updateSize(me._container_1);
				}
			}
		}
		me._container_1.logicBlock_size();
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAATCAYAAADVoUJyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAElElEQVRoge2bTWhcVRTHf82MQdRA/ShUqhEpGuMionbhUmi1MVaIUDGuFBXR2IJEWitC1K6qYq3Y2qJWuquSaisWmoWFgCIqIqJgtKjV1I82jSK0EY2px8WZwfHO6bx377vzMmPmB1m8M+/8zznce9979yNINXeJCAF/nzo6uxLuXyEie0TkmJHD6ZgSkX0i0pcinwUislZEDnnop2Gh1K57S0JeN4rImyJy3CPm8ZLPygTtLSEFpSRr3X2ibTflEfOYaB9ZkaBd+dcuIoMi8q6InEwZZ1ZEDovIdhG5rFIP4+Z6D5CzRGR3ysRrsVdEOmrksy1CDIvQjnK2iIxEiD9S0mqWAdIh2lZZ2S3ad2r1wS4RGc8YZ1'+
			'ZEhsqabeRLAXgdGIig1Q/sBYrGb9cCgxFixKIA7AFWR9BaXdIqRNCqN0W0jfojaA2gfed0dV8EjAFXZIxTAJ4FHgZyHyB3A6si6i0H1hj2vogxYnA/0BtRrxd4IKJevViDtlEsVqF9yGI7sDhirKeALuvpW082GLbPgJeAHxN8FwP3AMsc+3rgeUAqbOcb/o8BX6RLsybTAT7rDdsnwE7gpwTfC4F7gWsc+zpgq2PbiT5FazEA3F5xvQn4MMEH/OtegF33x2ieRxP8lwD3AT2OfQPwsmPrxn7wjgBvAydqxCkAVwJrgUWOfSjPOchSI9aY6KQqbYyiiIwaOj3Ofe63+HhgTSF1u9/i3Ua+73jW3S4iBw2d7oB8n3A0+utUd4+R76hoG/rUPWboLHXuGzLuedSznk6pXjiZyPMT61LD9jgw46ExCwwb9osT/P70iBGb'+
			'SwzbMH51z2DXbWk3ClabDKNtmJYZtI+4uH2p07n+FXjGIw7ABPCiY1uS5yfWOYbt+wCdQ4btjACdvDjTsH0VoPMB1R1jMkAnL6w2sdouCauPuH1poXN9BL+BWOawc92W9xxkrugEdkXSGgR+z6hxKtDnu4xxW3gyXwbIucCdkbQeIvsAadEk5L3M26JFUzFf3iCNRsgmX4Hqie8krbdZXSkCf/PfN4m12pRGx2283wJzqgfT6Pp7DHwnf38Yti7gfU+d64D3HNtNwKinTl78ZdguBz7y1LFW6k76pxNGEd2gq+zcg+hGzoSHzjrgPMfm419vvgaun6PY1irMRnS3P+1Sb3vJJ412o3DEsG0EbsEePBbtwJOG3V1tqhtF4AC6Y1nmAvRp+wK681xrxaUDLfg247cDkXJsdsbRh0XlWv1ydNn2FcJ30idK2o3K58DPaP'+
			'5lVqJvziw76d8C30TKMZEisBk9wlH5XbwI+4mVlv00duPlzdNUHwu5GtiWQdN3IyxvBK37Oce+jOrjQj5syuDrTRu6afVIRM2jNMdBujzZQdy5wih6OK/R2QocjKi3H3g1ol4i5cl5+XhvyAZWJV+i3/o/ZNT5v3GKf4+pZ6V8bD5rW+XBLHArsC+C1mvoIctc665cvdqMnorcge7Ypk1kGl1deRC4irBjFPOBaXSu1ov+j8SUh+9Uyae3pBFyoniuOIEOkpuBt4BfPHwngTeAG4A7mIMl7X8ALKTcJaArnS0AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 11px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((11px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._image_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._image_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._image_1.style.transition='width 0s, height 0s';
				if (me._image_1.ggCurrentLogicStateSize == 0) {
					me._image_1.style.width='80px';
					me._image_1.style.height='7px';
					me._image_1.style.top = 'calc(50% - (7px / 2))';
					skin.updateSize(me._image_1);
				}
				else {
					me._image_1.style.width='120px';
					me._image_1.style.height='11px';
					me._image_1.style.top = 'calc(50% - (11px / 2))';
					skin.updateSize(me._image_1);
				}
			}
		}
		me._image_1.logicBlock_size();
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._image_1);
		me._rectangle_2.appendChild(me._container_1);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 28px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc6b8\uc0b0\ub300\uc655\uc554\uacf5\uc6d0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1.style.transition='';
				if (me._text_1.ggCurrentLogicStateVisible == 0) {
					me._text_1.style.visibility="hidden";
					me._text_1.ggVisible=false;
				}
				else {
					me._text_1.style.visibility=(Number(me._text_1.style.opacity)>0||!me._text_1.style.opacity)?'inherit':'hidden';
					me._text_1.ggVisible=true;
				}
			}
		}
		me._text_1.logicBlock_visible();
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_2.appendChild(me._text_1);
		el=me.__0=document.createElement('div');
		els=me.__0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c \ud604\uc7a5\uba85";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 2px) / 2) + 0px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 22px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc6b8\uc0b0\ub300\uc655\uc554\uacf5\uc6d0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__0.ggUpdateText();
		el.appendChild(els);
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width > 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__0.style.transition='';
				if (me.__0.ggCurrentLogicStateVisible == 0) {
					me.__0.style.visibility="hidden";
					me.__0.ggVisible=false;
				}
				else {
					me.__0.style.visibility=(Number(me.__0.style.opacity)>0||!me.__0.style.opacity)?'inherit':'hidden';
					me.__0.ggVisible=true;
				}
			}
		}
		me.__0.logicBlock_visible();
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_2.appendChild(me.__0);
		me.__.appendChild(me._rectangle_2);
		me.divSkin.appendChild(me.__);
		me.__13.logicBlock_size();
		me.__25.logicBlock_scaling();
		me.__14.logicBlock_position();
		me.__14.logicBlock_scaling();
		me.__19.logicBlock_backgroundcolor();
		me._image_4.logicBlock_visible();
		me._image_41.logicBlock_visible();
		me.__23.logicBlock_backgroundcolor();
		me._image_5.logicBlock_visible();
		me._image_420.logicBlock_visible();
		me.__34.logicBlock_backgroundcolor();
		me._image_42.logicBlock_visible();
		me._image_43.logicBlock_visible();
		me.__44.logicBlock_backgroundcolor();
		me._image_440.logicBlock_visible();
		me._image_44.logicBlock_visible();
		me.__5.logicBlock_position();
		me.__5.logicBlock_scaling();
		me._rectangle_55.logicBlock_backgroundcolor();
		me._off3.logicBlock_visible();
		me._rectangle_555.logicBlock_backgroundcolor();
		me._off2.logicBlock_visible();
		me._rectangle_5555.logicBlock_backgroundcolor();
		me._off1.logicBlock_visible();
		me._rectangle_55555.logicBlock_backgroundcolor();
		me._off0.logicBlock_visible();
		me._rectangle_4.logicBlock_backgroundcolor();
		me._off.logicBlock_visible();
		me.__2.logicBlock_position();
		me.__2.logicBlock_scaling();
		me._rectangle_1.logicBlock_backgroundcolor();
		me._rectangle_1.logicBlock_bordercolor();
		me._rectangle_3.logicBlock_backgroundcolor();
		me._rectangle_3.logicBlock_bordercolor();
		me._container_1.logicBlock_size();
		me._image_1.logicBlock_size();
		me._text_1.logicBlock_visible();
		me.__0.logicBlock_visible();
		player.addListener('activehotspotchanged', function(event) {
			me._rectangle_1.logicBlock_backgroundcolor();
			me._rectangle_1.logicBlock_bordercolor();
			me._rectangle_3.logicBlock_backgroundcolor();
			me._rectangle_3.logicBlock_bordercolor();
		});
		player.addListener('changenode', function(event) {
			me.__19.logicBlock_backgroundcolor();
			me._image_4.logicBlock_visible();
			me._image_41.logicBlock_visible();
			me.__23.logicBlock_backgroundcolor();
			me._image_5.logicBlock_visible();
			me._image_420.logicBlock_visible();
			me.__34.logicBlock_backgroundcolor();
			me._image_42.logicBlock_visible();
			me._image_43.logicBlock_visible();
			me.__44.logicBlock_backgroundcolor();
			me._image_440.logicBlock_visible();
			me._image_44.logicBlock_visible();
			me._rectangle_55.logicBlock_backgroundcolor();
			me._off3.logicBlock_visible();
			me._rectangle_555.logicBlock_backgroundcolor();
			me._off2.logicBlock_visible();
			me._rectangle_5555.logicBlock_backgroundcolor();
			me._off1.logicBlock_visible();
			me._rectangle_55555.logicBlock_backgroundcolor();
			me._off0.logicBlock_visible();
			me._rectangle_4.logicBlock_backgroundcolor();
			me._off.logicBlock_visible();
			me._rectangle_1.logicBlock_backgroundcolor();
			me._rectangle_1.logicBlock_bordercolor();
			me._rectangle_3.logicBlock_backgroundcolor();
			me._rectangle_3.logicBlock_bordercolor();
		});
		player.addListener('configloaded', function(event) {
			me.__19.logicBlock_backgroundcolor();
			me._image_4.logicBlock_visible();
			me._image_41.logicBlock_visible();
			me.__23.logicBlock_backgroundcolor();
			me._image_5.logicBlock_visible();
			me._image_420.logicBlock_visible();
			me.__34.logicBlock_backgroundcolor();
			me._image_42.logicBlock_visible();
			me._image_43.logicBlock_visible();
			me.__44.logicBlock_backgroundcolor();
			me._image_440.logicBlock_visible();
			me._image_44.logicBlock_visible();
			me._rectangle_55.logicBlock_backgroundcolor();
			me._off3.logicBlock_visible();
			me._rectangle_555.logicBlock_backgroundcolor();
			me._off2.logicBlock_visible();
			me._rectangle_5555.logicBlock_backgroundcolor();
			me._off1.logicBlock_visible();
			me._rectangle_55555.logicBlock_backgroundcolor();
			me._off0.logicBlock_visible();
			me._rectangle_4.logicBlock_backgroundcolor();
			me._off.logicBlock_visible();
			me._rectangle_1.logicBlock_backgroundcolor();
			me._rectangle_1.logicBlock_bordercolor();
			me._rectangle_3.logicBlock_backgroundcolor();
			me._rectangle_3.logicBlock_bordercolor();
		});
		player.addListener('sizechanged', function(event) {
			me.__13.logicBlock_size();
			me.__25.logicBlock_scaling();
			me.__14.logicBlock_position();
			me.__14.logicBlock_scaling();
			me.__5.logicBlock_position();
			me.__5.logicBlock_scaling();
			me.__2.logicBlock_position();
			me.__2.logicBlock_scaling();
			me._container_1.logicBlock_size();
			me._image_1.logicBlock_size();
			me._text_1.logicBlock_visible();
			me.__0.logicBlock_visible();
		});
		player.addListener('varchanged_vis_menu1', function(event) {
			me.__19.logicBlock_backgroundcolor();
			me._image_4.logicBlock_visible();
			me._image_41.logicBlock_visible();
			me._rectangle_55.logicBlock_backgroundcolor();
			me._off3.logicBlock_visible();
		});
		player.addListener('varchanged_vis_menu2', function(event) {
			me.__23.logicBlock_backgroundcolor();
			me._image_5.logicBlock_visible();
			me._image_420.logicBlock_visible();
			me._rectangle_555.logicBlock_backgroundcolor();
			me._off2.logicBlock_visible();
		});
		player.addListener('varchanged_vis_menu3', function(event) {
			me.__34.logicBlock_backgroundcolor();
			me._image_42.logicBlock_visible();
			me._image_43.logicBlock_visible();
			me._rectangle_5555.logicBlock_backgroundcolor();
			me._off1.logicBlock_visible();
		});
		player.addListener('varchanged_vis_menu4', function(event) {
			me.__44.logicBlock_backgroundcolor();
			me._image_440.logicBlock_visible();
			me._image_44.logicBlock_visible();
			me._rectangle_55555.logicBlock_backgroundcolor();
			me._off0.logicBlock_visible();
		});
		player.addListener('varchanged_vis_menu5', function(event) {
			me._rectangle_4.logicBlock_backgroundcolor();
			me._off.logicBlock_visible();
		});
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};