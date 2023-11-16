// Garden Gnome Software - Skin
// Pano2VR 7.0.6/20004
// Filename: drone.ggsk
// Generated 2023-11-16T10:56:23

function pano2vrSkin(player,base) {
	player.addVariable('vis_traffic', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_sidebar', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_menu1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_menu2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_menu3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_menu4', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_menu5', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_menu6', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_menu7', 2, false, { ignoreInState: 0  });
	player.addVariable('popup', 2, false, { ignoreInState: 0 , customProperty: { variableType: 2, propertyType: 1, defaultValue: false } });
	player.addVariable('vis_main1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_main2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_main3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_main4', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobilebg1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobilebg2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobilebg3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobilebg4', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_addmore', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
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
		el=me.__28=document.createElement('div');
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
		hs+='min-width:320px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__28.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__28.logicBlock_visible = function() {
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
			if (me.__28.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__28.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__28.style.transition='';
				if (me.__28.ggCurrentLogicStateVisible == 0) {
					me.__28.style.visibility="hidden";
					me.__28.ggVisible=false;
				}
				else {
					me.__28.style.visibility=(Number(me.__28.style.opacity)>0||!me.__28.style.opacity)?'inherit':'hidden';
					me.__28.ggVisible=true;
				}
			}
		}
		me.__28.logicBlock_visible();
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		el=me.__29=document.createElement('div');
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
		me.__29.ggIsActive=function() {
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
		me.__29.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__29.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__29.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__29.style.transition='background-color 0s';
				if (me.__29.ggCurrentLogicStateBackgroundColor == 0) {
					me.__29.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__29.style.backgroundColor="rgba(0,0,0,0.392157)";
				}
			}
		}
		me.__29.logicBlock_backgroundcolor();
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		el=me.__49=document.createElement('div');
		el.ggId="\ud558\ub2e8 \ub3d9\uadf8\ub77c\ubbf8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='height : 70px;';
		hs+='left : calc(50% - ((70px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__49.ggIsActive=function() {
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
		me.__49.logicBlock_scaling = function() {
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
			if (me.__49.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__49.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__49.style.transition='transform 0s';
				if (me.__49.ggCurrentLogicStateScaling == 0) {
					me.__49.ggParameter.sx = 0.8;
					me.__49.ggParameter.sy = 0.8;
					me.__49.style.transform=parameterToTransform(me.__49.ggParameter);
					skin.updateSize(me.__49);
				}
				else {
					me.__49.ggParameter.sx = 1;
					me.__49.ggParameter.sy = 1;
					me.__49.style.transform=parameterToTransform(me.__49.ggParameter);
					skin.updateSize(me.__49);
				}
			}
		}
		me.__49.logicBlock_scaling();
		me.__49.onclick=function (e) {
			me.__16.ggVisible = !me.__16.ggVisible;
			var flag=me.__16.ggVisible;
			me.__16.style.transition='none';
			me.__16.style.visibility=((flag)&&(Number(me.__16.style.opacity)>0||!me.__16.style.opacity))?'inherit':'hidden';
		}
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		el=me.__51=document.createElement('div');
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
		me.__51.ggIsActive=function() {
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
		me.__51.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width > 460))
				)
			) {
				me.__53.ggVisible = !me.__53.ggVisible;
				var flag=me.__53.ggVisible;
				me.__53.style.transition='none';
				me.__53.style.visibility=((flag)&&(Number(me.__53.style.opacity)>0||!me.__53.style.opacity))?'inherit':'hidden';
			}
			if (
				(
					((player.getViewerSize().width > 460))
				)
			) {
				me.__52.ggVisible = !me.__52.ggVisible;
				var flag=me.__52.ggVisible;
				me.__52.style.transition='none';
				me.__52.style.visibility=((flag)&&(Number(me.__52.style.opacity)>0||!me.__52.style.opacity))?'inherit':'hidden';
			}
		}
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		el=me.__53=document.createElement('div');
		els=me.__53__img=document.createElement('img');
		els.className='ggskin ggskin__53';
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
		me.__53.ggIsActive=function() {
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
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		me.__51.appendChild(me.__53);
		el=me.__52=document.createElement('div');
		els=me.__52__img=document.createElement('img');
		els.className='ggskin ggskin__52';
		hs='data:image/png;base64,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';
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
		me.__52.ggIsActive=function() {
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
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		me.__51.appendChild(me.__52);
		me.__49.appendChild(me.__51);
		me.__29.appendChild(me.__49);
		el=me.__110=document.createElement('div');
		el.ggId="\ud558\ub2e8\uc544\uc774\ucf581";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 3%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__110.ggIsActive=function() {
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
		me.__110.logicBlock_visible = function() {
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
			if (me.__110.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__110.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__110.style.transition='';
				if (me.__110.ggCurrentLogicStateVisible == 0) {
					me.__110.style.visibility="hidden";
					me.__110.ggVisible=false;
				}
				else {
					me.__110.style.visibility=(Number(me.__110.style.opacity)>0||!me.__110.style.opacity)?'inherit':'hidden';
					me.__110.ggVisible=true;
				}
			}
		}
		me.__110.logicBlock_visible();
		me.__110.onclick=function (e) {
			player.openUrl("https:\/\/daewangam.donggu.ulsan.kr\/","");
		}
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		el=me.__48=document.createElement('div');
		el.ggId="\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(121,7,253,0);';
		hs+='border : 0px solid #000000;';
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
		me.__48.ggIsActive=function() {
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
		me.__48.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_mobilebg1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__48.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__48.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__48.style.transition='background-color 0s';
				if (me.__48.ggCurrentLogicStateBackgroundColor == 0) {
					me.__48.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me.__48.style.backgroundColor="rgba(121,7,253,0)";
				}
			}
		}
		me.__48.logicBlock_backgroundcolor();
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		me.__110.appendChild(me.__48);
		el=me.__47=document.createElement('div');
		els=me.__47__img=document.createElement('img');
		els.className='ggskin ggskin__47';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAmtJREFUeF7tm2tuwyAMgPHJtp5s68nWnYwJjUSEgOsHhmZz/lSqSGJ/2MYGB8LCK8b4DgCPhSIEWPHypHgI4SOEkH7TdQeAzxWyTAeQlf9qKLsEwlQAMcY0y2nme9cDAG4zLWEaAILypd63WbFhCoAYYzL5zd83RVPwu+f/W1YxxSVMASD+fjB1xDrMIZgB4CqFjDeNCyYAuMqXzt9xF7OlcjgARAFyYNMA5K4gwwA0kptDsONG9VkQhgCwSm6oQZQ76+V4NYAZM2UZF1QARvg7dfasQIsAjPb3lRDYAGb4JQYEe3+uKlnlNQuAlRlSLaDKF3qFFSt7JAN4JeU3ECNkIgGYGey41qCFgAJY7e9UGJq40AWgJUsVfuQ4icxNAJ'+
			'IHjVRE8yyu7CcAr+zvVDAcCAcA2M4Nt5ihCms1DkvWyn3HHUCHGmtNtVJG89yOXntpjgG4vPJFvlDvSe66/RcAddboALaTKLcAJK/+SzHAXaA6kvMY4DEgH8d7EPQgmAk0UkbVKpBzcU0We7hXU4tgug13AWYfABcQ+Xjtyf6h3SpgDEB0UjzbAlrNENyZ7o2/JIDUBcLaqy+037rJ9oNWSQ/RagsQ+W3SuLHZeUkLcADSJcwt4LejtGyqdBfwICjoJPVV4Nyia5oJ1omQrwK+Cgg/ivBl0JdBzwM8EfJM0FNhrwW8GCp2iLwanFkNpn28b8FuZv0F2NBaQCjTW/XVGqkYEujevGUkgFEyNQHUSceQlwEAqR239TKkA1Qr2xlA3oWN2idX96uO17JMzz635Yp8CKStRsn6C0/uC/bx0jIYsQaxLNuNtUw/2IdBblxr'+
			'ia8AAAAASUVORK5CYII=';
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
		el.ggId="\ud648\ud398\uc774\uc9c0";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 30%;';
		hs+='left : calc(50% - ((35% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30% + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__47.ggIsActive=function() {
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
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -22px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((150% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 150%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud648\ud398\uc774\uc9c0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4.ggUpdateText();
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
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
		me._text_4.ggUpdatePosition=function (useTransition) {
		}
		me.__47.appendChild(me._text_4);
		me.__110.appendChild(me.__47);
		me.__29.appendChild(me.__110);
		el=me.__210=document.createElement('div');
		el.ggId="\ud558\ub2e8\uc544\uc774\ucf582";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 23%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__210.ggIsActive=function() {
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
		me.__210.logicBlock_visible = function() {
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
			if (me.__210.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__210.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__210.style.transition='';
				if (me.__210.ggCurrentLogicStateVisible == 0) {
					me.__210.style.visibility="hidden";
					me.__210.ggVisible=false;
				}
				else {
					me.__210.style.visibility=(Number(me.__210.style.opacity)>0||!me.__210.style.opacity)?'inherit':'hidden';
					me.__210.ggVisible=true;
				}
			}
		}
		me.__210.logicBlock_visible();
		me.__210.onclick=function (e) {
			me.__2.ggVisible = !me.__2.ggVisible;
			var flag=me.__2.ggVisible;
			me.__2.style.transition='none';
			me.__2.style.visibility=((flag)&&(Number(me.__2.style.opacity)>0||!me.__2.style.opacity))?'inherit':'hidden';
			player.setVariableValue('vis_mobilebg2', !player.getVariableValue('vis_mobilebg2'));
			if (me._video_1.ggApiPlayer) {
				if (me._video_1.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_1.ggApiPlayer.getPlayerState() == 1) {
							me._video_1.ggApiPlayer.pauseVideo();
							me._video_1.ggApiPlayer.seekTo(0);
						} else {
							me._video_1.ggApiPlayer.playVideo();
						}
					};
					if (me._video_1.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_1.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_1.ggApiPlayerType == 'vimeo') {
					var promise = me._video_1.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_1.ggApiPlayer.play();
						} else {
							me._video_1.ggApiPlayer.pause();
							me._video_1.ggApiPlayer.setCurrentTime(0);
						}
					});
				}
			} else {
				player.playStopSound("Video 1","1");
			}
		}
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		el=me.__212=document.createElement('div');
		el.ggId="\ubc30\uacbd2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(121,7,253,0);';
		hs+='border : 0px solid #000000;';
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
		me.__212.ggIsActive=function() {
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
		me.__212.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_mobilebg2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__212.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__212.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__212.style.transition='';
				if (me.__212.ggCurrentLogicStateVisible == 0) {
					me.__212.style.visibility="hidden";
					me.__212.ggVisible=false;
				}
				else {
					me.__212.style.visibility=(Number(me.__212.style.opacity)>0||!me.__212.style.opacity)?'inherit':'hidden';
					me.__212.ggVisible=true;
				}
			}
		}
		me.__212.logicBlock_visible();
		me.__212.onclick=function (e) {
				player.stopSound("_background");
		}
		me.__212.ggUpdatePosition=function (useTransition) {
		}
		me.__210.appendChild(me.__212);
		el=me.__211=document.createElement('div');
		el.ggId="\ubc30\uacbd2-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(121,7,253,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__211.ggIsActive=function() {
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
		me.__211.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_mobilebg2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__211.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__211.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__211.style.transition='background-color 0s';
				if (me.__211.ggCurrentLogicStateVisible == 0) {
					me.__211.style.visibility=(Number(me.__211.style.opacity)>0||!me.__211.style.opacity)?'inherit':'hidden';
					me.__211.ggVisible=true;
				}
				else {
					me.__211.style.visibility="hidden";
					me.__211.ggVisible=false;
				}
			}
		}
		me.__211.logicBlock_visible();
		me.__211.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_mobilebg2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__211.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__211.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__211.style.transition='background-color 0s';
				if (me.__211.ggCurrentLogicStateBackgroundColor == 0) {
					me.__211.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me.__211.style.backgroundColor="rgba(121,7,253,0)";
				}
			}
		}
		me.__211.logicBlock_backgroundcolor();
		me.__211.onclick=function (e) {
				player.playSound("_background","5");
		}
		me.__211.ggUpdatePosition=function (useTransition) {
		}
		me.__210.appendChild(me.__211);
		el=me.__39=document.createElement('div');
		els=me.__39__img=document.createElement('img');
		els.className='ggskin ggskin__39';
		hs='data:image/png;base64,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';
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
		el.ggId="\uc601\uc0c1";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35%;';
		hs+='left : calc(50% - ((35% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35% + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__39.ggIsActive=function() {
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
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_5=document.createElement('div');
		els=me._text_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -23px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((156% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 156%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_5.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc601\uc0c1\ubcf4\uae30\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_5.ggUpdateText();
		el.appendChild(els);
		me._text_5.ggIsActive=function() {
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
		me._text_5.ggUpdatePosition=function (useTransition) {
		}
		me.__39.appendChild(me._text_5);
		me.__210.appendChild(me.__39);
		me.__29.appendChild(me.__210);
		el=me.__36=document.createElement('div');
		el.ggId="\ud558\ub2e8\uc544\uc774\ucf583";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 23%;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__36.ggIsActive=function() {
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
		me.__36.logicBlock_visible = function() {
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
			if (me.__36.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__36.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__36.style.transition='';
				if (me.__36.ggCurrentLogicStateVisible == 0) {
					me.__36.style.visibility="hidden";
					me.__36.ggVisible=false;
				}
				else {
					me.__36.style.visibility=(Number(me.__36.style.opacity)>0||!me.__36.style.opacity)?'inherit':'hidden';
					me.__36.ggVisible=true;
				}
			}
		}
		me.__36.logicBlock_visible();
		me.__36.onclick=function (e) {
			player.setVariableValue('vis_mobilebg3', !player.getVariableValue('vis_mobilebg3'));
				player.playPauseSound("_background","5");
			me.__37.ggVisible = !me.__37.ggVisible;
			var flag=me.__37.ggVisible;
			me.__37.style.transition='none';
			me.__37.style.visibility=((flag)&&(Number(me.__37.style.opacity)>0||!me.__37.style.opacity))?'inherit':'hidden';
			me._on.ggVisible = !me._on.ggVisible;
			var flag=me._on.ggVisible;
			me._on.style.transition='none';
			me._on.style.visibility=((flag)&&(Number(me._on.style.opacity)>0||!me._on.style.opacity))?'inherit':'hidden';
		}
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		el=me.__38=document.createElement('div');
		el.ggId="\ubc30\uacbd3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(121,7,253,0);';
		hs+='border : 0px solid #000000;';
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
		me.__38.ggIsActive=function() {
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
		me.__38.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_mobilebg3') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__38.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__38.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__38.style.transition='background-color 0s';
				if (me.__38.ggCurrentLogicStateBackgroundColor == 0) {
					me.__38.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me.__38.style.backgroundColor="rgba(121,7,253,0)";
				}
			}
		}
		me.__38.logicBlock_backgroundcolor();
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		me.__36.appendChild(me.__38);
		el=me.__37=document.createElement('div');
		els=me.__37__img=document.createElement('img');
		els.className='ggskin ggskin__37';
		hs='data:image/png;base64,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';
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
		el.ggId="\ubcfc\ub968";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35%;';
		hs+='left : calc(50% - ((35% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35% + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__37.ggIsActive=function() {
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
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		el=me._text7=document.createElement('div');
		els=me._text7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text7";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -23px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((156% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 156%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text7.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubc30\uacbd\uc74c\uc545\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text7.ggUpdateText();
		el.appendChild(els);
		me._text7.ggIsActive=function() {
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
		me._text7.ggUpdatePosition=function (useTransition) {
		}
		me.__37.appendChild(me._text7);
		me.__36.appendChild(me.__37);
		el=me._on=document.createElement('div');
		els=me._on__img=document.createElement('img');
		els.className='ggskin ggskin_on';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAxtJREFUeF7tmuF2gyAMhcmTbX2ytU+27snYwWmPpXJvEtBOtD83UPIluYSIhIP/5OD2hxPAGQEHJ3CmQE8BEGP8nOwRkbvGtm4iIMZ4DSF8zYy+iUj6G/x1AWDB+MnoC4uEzQGkMGWLYl7L/w8ABBGBNm4KIMb4HUKY8vQuIhersUvjs+fmQ+B7NgEwilPKz4dIjatsAmF8foJb+hX1YHUAbHEsRLURgtJgfMaiHqwKQLEomqNaAGmcJxVWA6AxPi26VQSMAFKKoVR4iYJVABBPPDm1JYARQl4PzN/3ojlNAQCxK0ayBoC1wiMOeIqCZgCY2JUIMACeCo+s5SkKmgDQ5vsSBASgpsLTRkE1gBrjmQjWVHjaKKgCYBE7Twp4tr'+
			'X5e9D8KfJcADxi5wRg3tYyAGj+IIZmAF6x8wDwFjcZhFh49yCGDwDzrQZUX4no/MxtKdQWxyp2gdoomB/AXmoCaRnOHhoMQG0UMCFNAFDl5LHJNEcDYIQAQ7n0UpKylwSg9GCTId7BBgDIUbDzA2y87QkAVXQQBSUd2A+AyjQoC+FeUuAEgBsesLUGhP6+Gw0gZ30vgNALANhZgrXAzjSgtBUeJgJgWQu2wTK4nUWAtxrsHgD8EAr6AvsphMiZ5dgA2HmCnQX+/WmQeN+9A4QQ/hoi7zwSM+8p1sfCv+jg9G5TS6x1O4x1hRXG009rMPxFriYA0z7bohs8PYs5oUb8yAFqiBwXAI1ntA0SBYBiw0YxlzZR3ABaQSBfhlAThF6CQkVe1XeBrO1ctYsovLhU/mqMR+t6zK+KgJkmTO3y/AoMzQQFgPzZ6f5fMgDeA9R4'+
			'fxBhukLDAM92ygBkkJPq0wuQFuFsCsCjC1oABj+kukYtnM0BWCG0BmDxfvMU8IhjSwCKFHwRz1UiwCKOjQGgjzyLO8eqAGYgYD1uyW9H12eYUgK9CQCgC3Q/18Ihna333RRd0IX0p48Qwo/mOrsGADmkQcibRYDGkJoxhQMavYvcEwBXxdgNgExwk+dpxbhqHVATzlvO7S4CrPBOAFZivY0/I6A3j1rt+QXV+knqp72fmAAAAABJRU5ErkJggg==';
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
		el.ggId="\ubcfc\ub968on";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35%;';
		hs+='left : calc(50% - ((35% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35% + 0px) / 2) - 5px);';
		hs+='visibility : hidden;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._on.ggIsActive=function() {
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
		me._on.ggUpdatePosition=function (useTransition) {
		}
		el=me._text8=document.createElement('div');
		els=me._text8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -23px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((156% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 156%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text8.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubc30\uacbd\uc74c\uc545\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text8.ggUpdateText();
		el.appendChild(els);
		me._text8.ggIsActive=function() {
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
		me._text8.ggUpdatePosition=function (useTransition) {
		}
		me._on.appendChild(me._text8);
		me.__36.appendChild(me._on);
		me.__29.appendChild(me.__36);
		el=me.__45=document.createElement('div');
		el.ggId="\ud558\ub2e8\uc544\uc774\ucf584";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 3%;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__45.ggIsActive=function() {
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
		me.__45.logicBlock_visible = function() {
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
			if (me.__45.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__45.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__45.style.transition='';
				if (me.__45.ggCurrentLogicStateVisible == 0) {
					me.__45.style.visibility="hidden";
					me.__45.ggVisible=false;
				}
				else {
					me.__45.style.visibility=(Number(me.__45.style.opacity)>0||!me.__45.style.opacity)?'inherit':'hidden';
					me.__45.ggVisible=true;
				}
			}
		}
		me.__45.logicBlock_visible();
		me.__45.onclick=function (e) {
			player.setVariableValue('vis_mobilebg4', !player.getVariableValue('vis_mobilebg4'));
			me.__1.ggVisible = !me.__1.ggVisible;
			var flag=me.__1.ggVisible;
			me.__1.style.transition='none';
			me.__1.style.visibility=((flag)&&(Number(me.__1.style.opacity)>0||!me.__1.style.opacity))?'inherit':'hidden';
		}
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		el=me.__46=document.createElement('div');
		el.ggId="\ubc30\uacbd4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(121,7,253,0);';
		hs+='border : 0px solid #000000;';
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
		me.__46.ggIsActive=function() {
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
		me.__46.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_mobilebg4') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__46.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__46.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__46.style.transition='background-color 0s';
				if (me.__46.ggCurrentLogicStateBackgroundColor == 0) {
					me.__46.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me.__46.style.backgroundColor="rgba(121,7,253,0)";
				}
			}
		}
		me.__46.logicBlock_backgroundcolor();
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		me.__45.appendChild(me.__46);
		el=me.__35=document.createElement('div');
		els=me.__35__img=document.createElement('img');
		els.className='ggskin ggskin__35';
		hs='data:image/png;base64,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';
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
		el.ggId="\uc548\ub0b4";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 33%;';
		hs+='left : calc(50% - ((35% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((33% + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__35.ggIsActive=function() {
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
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_8=document.createElement('div');
		els=me._text_8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -23px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((156% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 156%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_8.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0ac\uc6a9\uc548\ub0b4\n\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_8.ggUpdateText();
		el.appendChild(els);
		me._text_8.ggIsActive=function() {
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
		me._text_8.ggUpdatePosition=function (useTransition) {
		}
		me.__35.appendChild(me._text_8);
		me.__45.appendChild(me.__35);
		me.__29.appendChild(me.__45);
		me.__28.appendChild(me.__29);
		me.divSkin.appendChild(me.__28);
		el=me.__16=document.createElement('div');
		el.ggId="\uba54\ub274\ubc14";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 6.25%;';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((320px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 320px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__16.logicBlock_position = function() {
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
			if (me.__16.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__16.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__16.style.transition='left 0s, bottom 0s, transform 0s';
				if (me.__16.ggCurrentLogicStatePosition == 0) {
					me.__16.style.left = 'calc(50% - (320px / 2))';
					me.__16.style.bottom='11.5%';
				}
				else {
					me.__16.style.left='calc(50% - ((320px + 0px) / 2) + 0px)';
					me.__16.style.bottom='6.25%';
				}
			}
		}
		me.__16.logicBlock_position();
		me.__16.logicBlock_scaling = function() {
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
			if (me.__16.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__16.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__16.style.transition='left 0s, bottom 0s, transform 0s';
				if (me.__16.ggCurrentLogicStateScaling == 0) {
					me.__16.ggParameter.sx = 0.7;
					me.__16.ggParameter.sy = 0.7;
					me.__16.style.transform=parameterToTransform(me.__16.ggParameter);
					skin.updateSize(me.__16);
				}
				else {
					me.__16.ggParameter.sx = 1;
					me.__16.ggParameter.sy = 1;
					me.__16.style.transform=parameterToTransform(me.__16.ggParameter);
					skin.updateSize(me.__16);
				}
			}
		}
		me.__16.logicBlock_scaling();
		me.__16.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__16.style.transition='left 0s, bottom 0s, transform 0s';
				if (me.__16.ggCurrentLogicStateVisible == 0) {
					me.__16.style.visibility="hidden";
					me.__16.ggVisible=false;
				}
				else {
					me.__16.style.visibility=(Number(me.__16.style.opacity)>0||!me.__16.style.opacity)?'inherit':'hidden';
					me.__16.ggVisible=true;
				}
			}
		}
		me.__16.logicBlock_visible();
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me.__17=document.createElement('div');
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
		me.__17.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getViewerSize().width > 460))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__17.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__17.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__17.style.transition='background-color 0s';
				if (me.__17.ggCurrentLogicStateBackgroundColor == 0) {
					me.__17.style.backgroundColor="rgba(255,255,255,0)";
				}
				else {
					me.__17.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__17.logicBlock_backgroundcolor();
		me.__17.ggUpdatePosition=function (useTransition) {
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
		me._image_3.logicBlock_visible = function() {
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
			if (me._image_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_3.style.transition='';
				if (me._image_3.ggCurrentLogicStateVisible == 0) {
					me._image_3.style.visibility="hidden";
					me._image_3.ggVisible=false;
				}
				else {
					me._image_3.style.visibility=(Number(me._image_3.style.opacity)>0||!me._image_3.style.opacity)?'inherit':'hidden';
					me._image_3.ggVisible=true;
				}
			}
		}
		me._image_3.logicBlock_visible();
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.__17.appendChild(me._image_3);
		el=me.__18=document.createElement('div');
		el.ggId="\uba54\ub274\ubc14\ubc30\uacbd1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__18.onclick=function (e) {
			player.setVariableValue('vis_main1', !player.getVariableValue('vis_main1'));
			player.setDefaultView();
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me.__27=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58\ubc30\uacbd";
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
		me.__27.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_main1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getViewerSize().width > 460))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__27.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__27.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__27.style.transition='background-color 0s';
				if (me.__27.ggCurrentLogicStateBackgroundColor == 0) {
					me.__27.style.backgroundColor="rgba(121,7,253,1)";
				}
				else if (me.__27.ggCurrentLogicStateBackgroundColor == 1) {
					me.__27.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
				else {
					me.__27.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__27.logicBlock_backgroundcolor();
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		me.__18.appendChild(me.__27);
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
				((player.getVariableValue('vis_main1') == true))
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
		el=me.__26=document.createElement('div');
		els=me.__26__text=document.createElement('div');
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
		me.__26.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub300\uc0c1\uc9c0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__26.ggUpdateText();
		el.appendChild(els);
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
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		me._image_4.appendChild(me.__26);
		me.__18.appendChild(me._image_4);
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
				((player.getVariableValue('vis_main1') == true))
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
		el=me.__19=document.createElement('div');
		els=me.__19__text=document.createElement('div');
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
		me.__19.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub300\uc0c1\uc9c0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__19.ggUpdateText();
		el.appendChild(els);
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
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		me._image_41.appendChild(me.__19);
		me.__18.appendChild(me._image_41);
		me.__17.appendChild(me.__18);
		el=me.__23=document.createElement('div');
		el.ggId="\uba54\ub274\ubc14\ubc30\uacbd2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:none;';
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
		me.__23.onclick=function (e) {
			player.setVariableValue('vis_main2', !player.getVariableValue('vis_main2'));
			player.toggleAutorotate();
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		el=me.__25=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58\ubc30\uacbd-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
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
		me.__25.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_main2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__25.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__25.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__25.style.transition='background-color 0s';
				if (me.__25.ggCurrentLogicStateBackgroundColor == 0) {
					me.__25.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me.__25.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		me.__25.logicBlock_backgroundcolor();
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		me.__23.appendChild(me.__25);
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
				((player.getVariableValue('vis_main2') == true))
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
		me.__23.appendChild(me._image_5);
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
				((player.getVariableValue('vis_main2') == true))
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
		el=me.__24=document.createElement('div');
		els=me.__24__text=document.createElement('div');
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
		me.__24.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud68c\uc804\uba48\ucda4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__24.ggUpdateText();
		el.appendChild(els);
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
		me._image_420.appendChild(me.__24);
		me.__23.appendChild(me._image_420);
		me.__17.appendChild(me.__23);
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
			player.setVariableValue('vis_main3', !player.getVariableValue('vis_main3'));
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
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
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
		me.__34.logicBlock_scaling = function() {
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
			if (me.__34.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__34.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__34.style.transition='transform 0s, background-color 0s';
				if (me.__34.ggCurrentLogicStateScaling == 0) {
					me.__34.ggParameter.sx = 0.8;
					me.__34.ggParameter.sy = 0.8;
					me.__34.style.transform=parameterToTransform(me.__34.ggParameter);
					skin.updateSize(me.__34);
				}
				else {
					me.__34.ggParameter.sx = 1;
					me.__34.ggParameter.sy = 1;
					me.__34.style.transform=parameterToTransform(me.__34.ggParameter);
					skin.updateSize(me.__34);
				}
			}
		}
		me.__34.logicBlock_scaling();
		me.__34.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_main3') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__34.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__34.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__34.style.transition='transform 0s, background-color 0s';
				if (me.__34.ggCurrentLogicStateBackgroundColor == 0) {
					me.__34.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me.__34.style.backgroundColor="rgba(255,255,255,0.392157)";
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
				((player.getVariableValue('vis_main3') == true))
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
				((player.getVariableValue('vis_main3') == true))
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
		me.__17.appendChild(me.__31);
		el=me.__41=document.createElement('div');
		el.ggId="\uba54\ub274\ubc14\ubc30\uacbd4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 250px;';
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
			player.setVariableValue('vis_main4', !player.getVariableValue('vis_main4'));
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
				((player.getVariableValue('vis_main4') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getViewerSize().width > 460))
			)
			{
				newLogicStateBackgroundColor = 1;
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
				else if (me.__44.ggCurrentLogicStateBackgroundColor == 1) {
					me.__44.style.backgroundColor="rgba(255,255,255,0.392157)";
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
				((player.getVariableValue('vis_main4') == true))
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
				((player.getVariableValue('vis_main4') == true))
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
		me.__17.appendChild(me.__41);
		me.__16.appendChild(me.__17);
		me.divSkin.appendChild(me.__16);
		el=me.__5=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 75%;';
		hs+='left : 1%;';
		hs+='position : absolute;';
		hs+='top : 13%;';
		hs+='visibility : inherit;';
		hs+='width : 5.5%;';
		hs+='pointer-events:none;';
		hs+='max-width:80px; min-width:60px;';
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
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__5.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__5.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__5.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__5.ggCurrentLogicStatePosition == 0) {
					me.__5.style.left='1%';
					me.__5.style.top='8.5%';
				}
				else {
					me.__5.style.left='1%';
					me.__5.style.top='13%';
				}
			}
		}
		me.__5.logicBlock_position();
		me.__5.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__5.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__5.ggCurrentLogicStateSize = newLogicStateSize;
				me.__5.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__5.ggCurrentLogicStateSize == 0) {
					me.__5.style.width='15%';
					me.__5.style.height='75%';
					skin.updateSize(me.__5);
				}
				else {
					me.__5.style.width='5.5%';
					me.__5.style.height='75%';
					skin.updateSize(me.__5);
				}
			}
		}
		me.__5.logicBlock_size();
		me.__5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__5.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__5.ggCurrentLogicStateScaling == 0) {
					me.__5.ggParameter.sx = 0.8;
					me.__5.ggParameter.sy = 0.8;
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
		hs+='background : rgba(255,255,255,0);';
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
		el=me.__22=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4\ucee8\ud14c\uc774\ub108-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 12%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 42.6%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		el=me._rectangle_555=document.createElement('div');
		el.ggId="Rectangle 555";
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
		me.__22.appendChild(me._rectangle_555);
		el=me.__15=document.createElement('div');
		els=me.__15__img=document.createElement('img');
		els.className='ggskin ggskin__15';
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
		el.ggDy=-7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24.33%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24.33% + 0px) / 2) - 7px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
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
		me.__15.onclick=function (e) {
			player.setMediaVisibility("\uc0dd\ud65c","0",0);
			player.setVariableValue('vis_menu2', true);
		}
		me.__15.ggUpdatePosition=function (useTransition) {
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
		hs+='bottom : -25px;';
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
		hs+='font-size: 14px;';
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
		me.__15.appendChild(me._texton);
		me.__22.appendChild(me.__15);
		el=me._off3=document.createElement('div');
		els=me._off3__img=document.createElement('img');
		els.className='ggskin ggskin_off3';
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
		el.ggDy=-7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24.33%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24.33% + 0px) / 2) - 7px);';
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
				((player.getVariableValue('vis_menu2') == true))
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
			player.setMediaVisibility("\uc0dd\ud65c","1",0);
			player.setVariableValue('vis_menu2', false);
		}
		me._off3.ggUpdatePosition=function (useTransition) {
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
		hs+='bottom : -25px;';
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
		hs+='font-size: 14px;';
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
		me._off3.appendChild(me._textoff0);
		me.__22.appendChild(me._off3);
		me.__6.appendChild(me.__22);
		el=me.__30=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4\ucee8\ud14c\uc774\ub108-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 12%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 56.8%;';
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
		hs+='border-radius : 5px;';
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
		el=me.__14=document.createElement('div');
		els=me.__14__img=document.createElement('img');
		els.className='ggskin ggskin__14';
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
		el.ggDy=-7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 36%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36% + 0px) / 2) - 7px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
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
		me.__14.onclick=function (e) {
			player.setMediaVisibility("\uad50\uc721","0",0);
			player.setVariableValue('vis_menu3', true);
		}
		me.__14.ggUpdatePosition=function (useTransition) {
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
		hs+='bottom : -25px;';
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
		hs+='font-size: 14px;';
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
		me.__14.appendChild(me._text_2on);
		me.__30.appendChild(me.__14);
		el=me._off2=document.createElement('div');
		els=me._off2__img=document.createElement('img');
		els.className='ggskin ggskin_off2';
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
		el.ggDy=-7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 36%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36% + 0px) / 2) - 7px);';
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
				((player.getVariableValue('vis_menu3') == true))
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
			player.setMediaVisibility("\uad50\uc721","1",0);
			player.setVariableValue('vis_menu3', false);
		}
		me._off2.ggUpdatePosition=function (useTransition) {
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
		hs+='bottom : -25px;';
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
		hs+='font-size: 14px;';
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
		me._off2.appendChild(me._textoff);
		me.__30.appendChild(me._off2);
		me.__6.appendChild(me.__30);
		el=me.__40=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4\ucee8\ud14c\uc774\ub108-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 12%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 71%;';
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
		hs+='border-radius : 5px;';
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
		el=me.__13=document.createElement('div');
		els=me.__13__img=document.createElement('img');
		els.className='ggskin ggskin__13';
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
		el.ggDy=-7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24.33%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24.33% + 0px) / 2) - 7px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
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
		me.__13.onclick=function (e) {
			player.setMediaVisibility("\uc790\uc5f0","0",0);
			player.setVariableValue('vis_menu4', true);
		}
		me.__13.ggUpdatePosition=function (useTransition) {
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
		hs+='bottom : -25px;';
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
		hs+='font-size: 14px;';
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
		me.__13.appendChild(me._text_on0);
		me.__40.appendChild(me.__13);
		el=me._off1=document.createElement('div');
		els=me._off1__img=document.createElement('img');
		els.className='ggskin ggskin_off1';
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
		el.ggDy=-7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24.33%;';
		hs+='left : calc(50% - ((45% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24.33% + 0px) / 2) - 7px);';
		hs+='visibility : hidden;';
		hs+='width : 45%;';
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
				((player.getVariableValue('vis_menu4') == true))
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
			player.setMediaVisibility("\uc790\uc5f0","1",0);
			player.setVariableValue('vis_menu4', false);
		}
		me._off1.ggUpdatePosition=function (useTransition) {
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
		hs+='bottom : -25px;';
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
		hs+='font-size: 14px;';
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
		me._off1.appendChild(me._text_off0);
		me.__40.appendChild(me._off1);
		me.__6.appendChild(me.__40);
		el=me.__50=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4\ucee8\ud14c\uc774\ub108-5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 12%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 85%;';
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
		hs+='border-radius : 5px;';
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
		el=me.__12=document.createElement('div');
		els=me.__12__img=document.createElement('img');
		els.className='ggskin ggskin__12';
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
		el.ggDy=-7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24.33%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24.33% + 0px) / 2) - 7px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
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
			player.setMediaVisibility("\ubb38\ud654","0",0);
			player.setVariableValue('vis_menu5', true);
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_on=document.createElement('div');
		els=me._text_on__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text \ubb38\ud654-on";
		el.ggDx=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -25px;';
		hs+='color : rgba(121,7,253,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) - 2px);';
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
		hs+='font-size: 14px;';
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
		me.__12.appendChild(me._text_on);
		me.__50.appendChild(me.__12);
		el=me._off0=document.createElement('div');
		els=me._off0__img=document.createElement('img');
		els.className='ggskin ggskin_off0';
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
		el.ggDy=-7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24.33%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24.33% + 0px) / 2) - 7px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
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
				((player.getVariableValue('vis_menu5') == true))
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
			player.setMediaVisibility("\ubb38\ud654","1",0);
			player.setVariableValue('vis_menu5', false);
		}
		me._off0.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_off=document.createElement('div');
		els=me._text_off__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text \ubb38\ud654-off";
		el.ggDx=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) - 2px);';
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
		hs+='font-size: 14px;';
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
		me._off0.appendChild(me._text_off);
		me.__50.appendChild(me._off0);
		me.__6.appendChild(me.__50);
		el=me.__8=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4\ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 12%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 28.4%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
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
		me.__8.ggUpdatePosition=function (useTransition) {
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
		hs+='border-radius : 5px;';
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
		me.__8.appendChild(me._rectangle_55);
		el=me.__9=document.createElement('div');
		els=me.__9__img=document.createElement('img');
		els.className='ggskin ggskin__9';
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
		el.ggDy=-7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24.33%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24.33% + 0px) / 2) - 7px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
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
			player.setMediaVisibility("\uad50\ud1b5","0",0);
			player.setVariableValue('vis_menu1', true);
		}
		me.__9.ggUpdatePosition=function (useTransition) {
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
		hs+='bottom : -25px;';
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
		hs+='font-size: 14px;';
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
		me.__9.appendChild(me._text_2);
		me.__8.appendChild(me.__9);
		el=me._off=document.createElement('div');
		els=me._off__img=document.createElement('img');
		els.className='ggskin ggskin_off';
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
		el.ggDy=-7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24.33%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24.33% + 0px) / 2) - 7px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
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
				((player.getVariableValue('vis_menu1') == true))
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
			player.setMediaVisibility("\uad50\ud1b5","1",0);
			player.setVariableValue('vis_menu1', false);
		}
		me._off.ggUpdatePosition=function (useTransition) {
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
		hs+='bottom : -25px;';
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
		hs+='font-size: 14px;';
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
		me._off.appendChild(me._text_21);
		me.__8.appendChild(me._off);
		me.__6.appendChild(me.__8);
		el=me.__7=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4\ucee8\ud14c\uc774\ub1087";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 12%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 14.2%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
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
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_554444=document.createElement('div');
		el.ggId="Rectangle 554444";
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
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_554444.ggIsActive=function() {
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
		me._rectangle_554444.logicBlock_backgroundcolor = function() {
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
			if (me._rectangle_554444.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_554444.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_554444.style.transition='background-color 0s';
				if (me._rectangle_554444.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_554444.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me._rectangle_554444.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		me._rectangle_554444.logicBlock_backgroundcolor();
		me._rectangle_554444.ggUpdatePosition=function (useTransition) {
		}
		me.__7.appendChild(me._rectangle_554444);
		el=me.__21=document.createElement('div');
		els=me.__21__img=document.createElement('img');
		els.className='ggskin ggskin__21';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA2lJREFUeF7tms9r1EAUx98k280uFGuLPy6K1YOoiODdv0MEwYsIiuKpB3d7MBc3K+KpIB681aM38eJ/4UERBKF6Uiit9dCdbTNPQk1Iw27mTTIZs2b2mjff997n/Zjssgwa/mENzx8sANsBDSdgR6DhDWCXoB0BOwINJ1BoBHptvBSM2ac6sSsakzKAnhdinHjAXeXzVUArE5NyAmlnXtdZ9LfZdhVJUTV9wHnuid9Fi8LSCVGdFrWjdozJmJIO6HX2bwOyV0WTyztHTTyrURUIBLg35O7LyN/UEeh54gMAXkkHFSWSHQG+G14DYG/Tdle507oOLNQJ0wd0uCcOaSI6NzpjeJcdgQngPgbcvTwpHrsDVKukcwn2AU9G/gfAfq'+
			'jGEduXXoIUx30v3IrtEOBo6swvBhBfi28G3L0j0+t54RoAPJhkhwzXh6PWLalGJwwYwt3IDg/GeCE+wwCSW2nA3UWZFmkEKMuIsugoOlHAurQoOiQAq108LYT4JqH5VfI88nVWVpG/m3kDAWRL9Fye1j44559x9kXmjwQgEqFWT+bQ1HNK9XOvQVN3clVAqgDwEwCOVxWwZt2dgLvJYszTJo+AZAzGANDWnIRMbqpPavWVRmAaAAbwYsDd+8m9fASXOBebsuiLPHeYs/xkxDbis/1O6CPC46yWUQAyZ2WXZxF92Zk0MKURWJnHE3N74tBbG9WZKoiiusIZn3m625Vd2QkDJQCTxoAaqMpVWkZT5azyDsgmoeqsyNxTzhj+RUh8B8BTUWC1A4CwGYzdYxRosY3yCOSJP/JCwXJ+Y1AJLM9WJ3htAFSXXHkY7HPAnYtl'+
			'dbQAMJ/8Qdo6OsECKNtC0663dHWq6pBad4AMQDb4IpBmEoDHnQUf2M60zlMBUWsAkxJEgJUhd5/Lxo4KYeYAUANuPAAfsMU9sSfrFCrQPB2D1yCuBbz1UJZU/JzSBTMGQO3FpdEAKMnP5JsgtWX/WwCUqlGTp2hR9o3BJZgKh8FWMHKX0gGutvGmYOI1JejYhtpRNbkFVFKj2VoAGv6k9W9GgFZgqVVtOmDaV2JpBiUMdCQfudfSAcnbW5tfQOYsl8iLclQM+dx7iiHFRisAisO62VgAdauI6XhsB5gmXjd/tgPqVhHT8dgOME28bv5sB9StIqbj+QPyHI/MKZz9OQAAAABJRU5ErkJggg==';
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
		el.ggId="\uace0\uace0\ub3c4\ud56d\uacf5\ubdf02";
		el.ggDx=0;
		el.ggDy=-7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36% + 0px) / 2) - 7px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
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
			player.openNext("{node2}","$(cur)");
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt0=document.createElement('div');
		els=me._tt0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uace0\uace0\ub3c4\ud56d\uacf5\ubdf0tt";
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
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uace0\uace0\ub3c4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt0.ggUpdateText();
		el.appendChild(els);
		me._tt0.ggIsActive=function() {
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
		me._tt0.ggUpdatePosition=function (useTransition) {
		}
		me.__21.appendChild(me._tt0);
		me.__7.appendChild(me.__21);
		el=me.__11=document.createElement('div');
		els=me.__11__img=document.createElement('img');
		els.className='ggskin ggskin__11';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAxVJREFUeF7tmL2KFEEUhc+RxUhYV/xJFFcDURGfwAcRBBMRFMXIXDMjowUxMNPQTEx8CwNFEAQ1UlhW10xxj/Qw07TNdNe93dU9NTvV0UBX3Xvud3+qpokVf7ji8SMDyBWw4gRyC6x4AeQhmFsgt8CKE+jUApIuknyfEruumtwAJGkWOEn3/iGg9dHkDqDqDMAGyR9DBGW1KekQgF9dk8JaQFa/ndZZK2ZUTbNIJN0A8KxTZIFN1sDrZgYEcZvk08JfYwtIegvgclVUEUi9BQBcAfCqJn6N5N+YMCUdAFC3eRXA63oLzAH3juSleXryDPBmKeYQlHRiUobkN6+OSuv2G4IWx5J2KusOV37/BDA7Fl+SvBmyJ2kLwN2Gdc9JXj'+
			'fYeATg1nRdUcXrlT3lqURyI2TL1AKWYWQZdBY704oI6rLYsmgKOioESToF4EuA5qfQYQDgTCgj0/ef5wy8+tazAVvnSH4M+TMBmEIob4Ahoym8t2S/9Rgc8UwehNcQAL4DODaI2vhGd0lWB2OjB3MLBNrgN4CD8eNotdjo05p9Vwu0AHhC8s5MqqQjALYHgrFJshiQk0fSQwAP6r5GBRByZjmu2mB1sR/aU/XnbYHjAP67tVmdeUH0sHuaZOjILhm4AMxrA6tQz1Hax6Znr3sG1IPwOhtoLhSzoPNXqi4V8BXAyQm99D6JbZM86gHtBtBmXNJe2zcGj7A+g9HjJxoA75DziGxY+4Hkhb52ogBYQPCTuGO0YAbQt4SajrdqdoaqkKQrIASgLr4LpGUFsE5yt6nyPCCSBtAQ4H2Sj0NtZ4WwdACsgjMAaQ3An1ClWIG2'+
			'XqpCTizvjRnbInnPYs/6x2nZALguLhao+xaAJfilvAlaM7ZvAViyZg3eYssybxb1X2CHZPHxtHwkXQPwwiJ6tsZaUamcAp7YTGszgAhfpBbVAqYMhxYlUwHWi0soIM/7GMFPBqnHaWitpPMANkPrer7fI/mmp41ye1QAsUSNaScDGJN2ir5yBaSYlTE15QoYk3aKvnIFpJiVMTXlChiTdoq+/gEX/mNMMDvCgQAAAABJRU5ErkJggg==';
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
		el.ggId="\uace0\uace0\ub3c4\ud56d\uacf5\ubdf01";
		el.ggDx=0;
		el.ggDy=-7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36% + 0px) / 2) - 7px);';
		hs+='visibility : hidden;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
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
		me.__11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.title) == "\uace0\uce35\ubd80"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__11.style.transition='';
				if (me.__11.ggCurrentLogicStateVisible == 0) {
					me.__11.style.visibility=(Number(me.__11.style.opacity)>0||!me.__11.style.opacity)?'inherit':'hidden';
					me.__11.ggVisible=true;
				}
				else {
					me.__11.style.visibility="hidden";
					me.__11.ggVisible=false;
				}
			}
		}
		me.__11.logicBlock_visible();
		me.__11.onclick=function (e) {
			player.openNext("{node2}","$(cur)");
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me._t=document.createElement('div');
		els=me._t__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uace0\uace0\ub3c4\ud56d\uacf5\ubdf0t";
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
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._t.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uace0\uace0\ub3c4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._t.ggUpdateText();
		el.appendChild(els);
		me._t.ggIsActive=function() {
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
		me._t.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me._t);
		me.__7.appendChild(me.__11);
		me.__6.appendChild(me.__7);
		el=me.__60=document.createElement('div');
		el.ggId="\uc8fc\ubcc0\uc815\ubcf4\ucee8\ud14c\uc774\ub1086";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 12.2%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__60.ggIsActive=function() {
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
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_5544444=document.createElement('div');
		el.ggId="Rectangle 5544444";
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
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_5544444.ggIsActive=function() {
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
		me._rectangle_5544444.logicBlock_backgroundcolor = function() {
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
			if (me._rectangle_5544444.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_5544444.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_5544444.style.transition='background-color 0s';
				if (me._rectangle_5544444.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_5544444.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me._rectangle_5544444.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		me._rectangle_5544444.logicBlock_backgroundcolor();
		me._rectangle_5544444.ggUpdatePosition=function (useTransition) {
		}
		me.__60.appendChild(me._rectangle_5544444);
		el=me.__20=document.createElement('div');
		els=me.__20__img=document.createElement('img');
		els.className='ggskin ggskin__20';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA2lJREFUeF7tms9r1EAUx98k280uFGuLPy6K1YOoiODdv0MEwYsIiuKpB3d7MBc3K+KpIB681aM38eJ/4UERBKF6Uiit9dCdbTNPQk1Iw27mTTIZs2b2mjff997n/Zjssgwa/mENzx8sANsBDSdgR6DhDWCXoB0BOwINJ1BoBHptvBSM2ac6sSsakzKAnhdinHjAXeXzVUArE5NyAmlnXtdZ9LfZdhVJUTV9wHnuid9Fi8LSCVGdFrWjdozJmJIO6HX2bwOyV0WTyztHTTyrURUIBLg35O7LyN/UEeh54gMAXkkHFSWSHQG+G14DYG/Tdle507oOLNQJ0wd0uCcOaSI6NzpjeJcdgQngPgbcvTwpHrsDVKukcwn2AU9G/gfAfq'+
			'jGEduXXoIUx30v3IrtEOBo6swvBhBfi28G3L0j0+t54RoAPJhkhwzXh6PWLalGJwwYwt3IDg/GeCE+wwCSW2nA3UWZFmkEKMuIsugoOlHAurQoOiQAq108LYT4JqH5VfI88nVWVpG/m3kDAWRL9Fye1j44559x9kXmjwQgEqFWT+bQ1HNK9XOvQVN3clVAqgDwEwCOVxWwZt2dgLvJYszTJo+AZAzGANDWnIRMbqpPavWVRmAaAAbwYsDd+8m9fASXOBebsuiLPHeYs/xkxDbis/1O6CPC46yWUQAyZ2WXZxF92Zk0MKURWJnHE3N74tBbG9WZKoiiusIZn3m625Vd2QkDJQCTxoAaqMpVWkZT5azyDsgmoeqsyNxTzhj+RUh8B8BTUWC1A4CwGYzdYxRosY3yCOSJP/JCwXJ+Y1AJLM9WJ3htAFSXXHkY7HPAnYtl'+
			'dbQAMJ/8Qdo6OsECKNtC0663dHWq6pBad4AMQDb4IpBmEoDHnQUf2M60zlMBUWsAkxJEgJUhd5/Lxo4KYeYAUANuPAAfsMU9sSfrFCrQPB2D1yCuBbz1UJZU/JzSBTMGQO3FpdEAKMnP5JsgtWX/WwCUqlGTp2hR9o3BJZgKh8FWMHKX0gGutvGmYOI1JejYhtpRNbkFVFKj2VoAGv6k9W9GgFZgqVVtOmDaV2JpBiUMdCQfudfSAcnbW5tfQOYsl8iLclQM+dx7iiHFRisAisO62VgAdauI6XhsB5gmXjd/tgPqVhHT8dgOME28bv5sB9StIqbj+QPyHI/MKZz9OQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc800\uace0\ub3c4\ud56d\uacf5\ubdf02";
		el.ggDx=0;
		el.ggDy=-7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36% + 0px) / 2) - 7px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
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
		me.__20.onclick=function (e) {
			player.openNext("{node4}","$(cur)");
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt=document.createElement('div');
		els=me._tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc800\uace0\ub3c4\ud56d\uacf5\ubdf0tt";
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
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc800\uace0\ub3c4\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt.ggUpdateText();
		el.appendChild(els);
		me._tt.ggIsActive=function() {
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
		me._tt.ggUpdatePosition=function (useTransition) {
		}
		me.__20.appendChild(me._tt);
		me.__60.appendChild(me.__20);
		el=me.__10=document.createElement('div');
		els=me.__10__img=document.createElement('img');
		els.className='ggskin ggskin__10';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAxVJREFUeF7tmL2KFEEUhc+RxUhYV/xJFFcDURGfwAcRBBMRFMXIXDMjowUxMNPQTEx8CwNFEAQ1UlhW10xxj/Qw07TNdNe93dU9NTvV0UBX3Xvud3+qpokVf7ji8SMDyBWw4gRyC6x4AeQhmFsgt8CKE+jUApIuknyfEruumtwAJGkWOEn3/iGg9dHkDqDqDMAGyR9DBGW1KekQgF9dk8JaQFa/ndZZK2ZUTbNIJN0A8KxTZIFN1sDrZgYEcZvk08JfYwtIegvgclVUEUi9BQBcAfCqJn6N5N+YMCUdAFC3eRXA63oLzAH3juSleXryDPBmKeYQlHRiUobkN6+OSuv2G4IWx5J2KusOV37/BDA7Fl+SvBmyJ2kLwN2Gdc9JXj'+
			'fYeATg1nRdUcXrlT3lqURyI2TL1AKWYWQZdBY704oI6rLYsmgKOioESToF4EuA5qfQYQDgTCgj0/ef5wy8+tazAVvnSH4M+TMBmEIob4Ahoym8t2S/9Rgc8UwehNcQAL4DODaI2vhGd0lWB2OjB3MLBNrgN4CD8eNotdjo05p9Vwu0AHhC8s5MqqQjALYHgrFJshiQk0fSQwAP6r5GBRByZjmu2mB1sR/aU/XnbYHjAP67tVmdeUH0sHuaZOjILhm4AMxrA6tQz1Hax6Znr3sG1IPwOhtoLhSzoPNXqi4V8BXAyQm99D6JbZM86gHtBtBmXNJe2zcGj7A+g9HjJxoA75DziGxY+4Hkhb52ogBYQPCTuGO0YAbQt4SajrdqdoaqkKQrIASgLr4LpGUFsE5yt6nyPCCSBtAQ4H2Sj0NtZ4WwdACsgjMAaQ3An1ClWIG2'+
			'XqpCTizvjRnbInnPYs/6x2nZALguLhao+xaAJfilvAlaM7ZvAViyZg3eYssybxb1X2CHZPHxtHwkXQPwwiJ6tsZaUamcAp7YTGszgAhfpBbVAqYMhxYlUwHWi0soIM/7GMFPBqnHaWitpPMANkPrer7fI/mmp41ye1QAsUSNaScDGJN2ir5yBaSYlTE15QoYk3aKvnIFpJiVMTXlChiTdoq+/gEX/mNMMDvCgQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc800\uace0\ub3c4\ud56d\uacf5\ubdf01";
		el.ggDx=0;
		el.ggDy=-7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36% + 0px) / 2) - 7px);';
		hs+='visibility : hidden;';
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
		me.__10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.title) == "\uc800\uce35\ubd80"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__10.style.transition='';
				if (me.__10.ggCurrentLogicStateVisible == 0) {
					me.__10.style.visibility=(Number(me.__10.style.opacity)>0||!me.__10.style.opacity)?'inherit':'hidden';
					me.__10.ggVisible=true;
				}
				else {
					me.__10.style.visibility="hidden";
					me.__10.ggVisible=false;
				}
			}
		}
		me.__10.logicBlock_visible();
		me.__10.onclick=function (e) {
			player.openNext("{node4}","$(cur)");
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__t=document.createElement('div');
		els=me.__t__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc800\uace0\ub3c4\ud56d\uacf5\ubdf0 t";
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
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__t.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc800\uace0\ub3c4\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__t.ggUpdateText();
		el.appendChild(els);
		me.__t.ggIsActive=function() {
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
		me.__t.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me.__t);
		me.__60.appendChild(me.__10);
		me.__6.appendChild(me.__60);
		me.__5.appendChild(me.__6);
		me.divSkin.appendChild(me.__5);
		el=me.__3=document.createElement('div');
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
		me.__3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__3.ggUpdatePosition=function (useTransition) {
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
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
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
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
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
		el=me.__4=document.createElement('div');
		els=me.__4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c \ud604\uc7a5\uba85";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : 5%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 2px) / 2) + 0px);';
		hs+='transform : translate(0px, -50%);;';
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
		me.__4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc6b8\uc0b0\ub300\uc655\uc554\uacf5\uc6d0", params);
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
		me.__4.logicBlock_visible = function() {
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
			if (me.__4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__4.style.transition='';
				if (me.__4.ggCurrentLogicStateVisible == 0) {
					me.__4.style.visibility="hidden";
					me.__4.ggVisible=false;
				}
				else {
					me.__4.style.visibility=(Number(me.__4.style.opacity)>0||!me.__4.style.opacity)?'inherit':'hidden';
					me.__4.ggVisible=true;
				}
			}
		}
		me.__4.logicBlock_visible();
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_2.appendChild(me.__4);
		me.__3.appendChild(me._rectangle_2);
		me.divSkin.appendChild(me.__3);
		el=me._imagepop=document.createElement('div');
		els=me._imagepop__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._imagepop.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._imagepop.ggSubElement.setAttribute('alt', player._(me._imagepop.ggAltText));
			me._imagepop.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._imagepop.ggText_untranslated = img;
			me._imagepop.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._imagepop.ggSubElement.style.width = '0px';
			me._imagepop.ggSubElement.style.height = '0px';
			me._imagepop.ggSubElement.src='';
			me._imagepop.ggSubElement.src=me._imagepop.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._imagepop.ggText != player._(me._imagepop.ggText_untranslated)) {
				me._imagepop.ggText = player._(me._imagepop.ggText_untranslated);
				me._imagepop.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="ImagePop";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 500px;';
		hs+='left : calc(50% - ((400px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((500px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._imagepop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._imagepop.onclick=function (e) {
			me._imagepop.ggSubElement.src='';
			me._imagepop.style.transition='none';
			me._imagepop.style.visibility='hidden';
			me._imagepop.ggVisible=false;
		}
		me._imagepop.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._imagepop.clientWidth;
			var parentHeight = me._imagepop.clientHeight;
			var img = me._imagepop__img;
			var aspectRatioDiv = me._imagepop.clientWidth / me._imagepop.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._imagepop.ggScrollbars || currentWidth < me._imagepop.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._imagepop.scrollLeft=currentWidth / 2 - me._imagepop.clientWidth / 2;
			}
			if (!me._imagepop.ggScrollbars || currentHeight < me._imagepop.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._imagepop.scrollTop=currentHeight / 2 - me._imagepop.clientHeight / 2;
			}
		}
		me.divSkin.appendChild(me._imagepop);
		el=me.__2=document.createElement('div');
		el.ggId="\uc601\uc0c1\ucee8\ud14c\uc774\ub108";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60%;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 60%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__2.logicBlock_size = function() {
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
			if (me.__2.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__2.ggCurrentLogicStateSize = newLogicStateSize;
				me.__2.style.transition='width 0s, height 0s';
				if (me.__2.ggCurrentLogicStateSize == 0) {
					me.__2.style.width='80%';
					me.__2.style.height='60%';
					me.__2.style.left = 'calc(50% - (80% / 2))';
					me.__2.style.top = 'calc(50% - (60% / 2))';
					skin.updateSize(me.__2);
				}
				else {
					me.__2.style.width='60%';
					me.__2.style.height='60%';
					me.__2.style.left = 'calc(50% - (60% / 2))';
					me.__2.style.top = 'calc(50% - (60% / 2))';
					skin.updateSize(me.__2);
				}
			}
		}
		me.__2.logicBlock_size();
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_5=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_5.ggIsActive=function() {
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
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,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';
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
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
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
		me._image_2.onclick=function (e) {
			me.__2.style.transition='none';
			me.__2.style.visibility='hidden';
			me.__2.ggVisible=false;
			if (me._video_1.ggApiPlayer) {
				if (me._video_1.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_1.ggApiPlayer.pauseVideo();
						me._video_1.ggApiPlayer.seekTo(0);
					};
					if (me._video_1.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_1.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_1.ggApiPlayerType == 'vimeo') {
					me._video_1.ggApiPlayer.pause();
					me._video_1.ggApiPlayer.setCurrentTime(0);
				}
			} else {
				player.stopSound("Video 1");
			}
			player.setVariableValue('vis_mobilebg2', false);
				player.playSound("_background","5");
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me._image_2);
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 1.5%;';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 97%;';
		hs+='pointer-events:none;';
		hs+='over-flow:hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2.ggIsActive=function() {
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
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_1=document.createElement('div');
		me._video_1.seekbars = [];
			me._video_1.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._video_1.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_1.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_1.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_1.hasChildNodes()) {
				me._video_1.removeChild(me._video_1.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_1.ggVideoNotLoaded == false && me._video_1.ggDeactivate && player.isPlaying('video_1')) { me._video_1.ggDeactivate(); }
				me._video_1.ggVideoNotLoaded = true;
				return;
			}
			me._video_1.ggVideoNotLoaded = false;
			me._video_1__vid=document.createElement('iframe');
			me._video_1__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=0&amp;controls=0&amp;loop=0&amp;enablejsapi=1&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._video_1__vid.setAttribute('src', ggVideoUrl);
			me._video_1__vid.setAttribute('width', '100%');
			me._video_1__vid.setAttribute('height', '100%');
			me._video_1__vid.setAttribute('allow', 'autoplay');
			me._video_1__vid.setAttribute('allowfullscreen', 'true');
			me._video_1__vid.setAttribute('style', 'border:none; ; ;');
			me._video_1.appendChild(me._video_1__vid);
			me._video_1__vid.id = 'youtube-video';
			me._video_1.ggYoutubeApiReady = function() {
				me._video_1.ggApiPlayerType = 'youtube';
				me._video_1.ggApiPlayerReady = false;
				me._video_1.ggApiPlayer = new YT.Player('youtube-video', {
					events: {
						'onReady': function(event) {
							me._video_1.ggApiPlayerReady = true;
						},
						'onStateChange': function(event) {
							if (event.data == 0 && me._video_1.ggMediaEnded) {
								me._video_1.ggMediaEnded();
							}
							if (event.data == 1 && me._video_1.ggActivate) {
								me._video_1.ggActivate();
							}
							if ((event.data == 0 || event.data == 2) && me._video_1.ggDeactivate) {
								me._video_1.ggDeactivate();
							}
						}
					}
				});
			}
			me._video_1.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._video_1.ggYoutubeApiReady();}
		}
		el.ggId="Video 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_1.ggIsActive=function() {
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
		me._video_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._video_1);
		me._rectangle_5.appendChild(me._container_2);
		el=me._text_6=document.createElement('div');
		els=me._text_6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_6.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud64d\ubcf4\uc601\uc0c1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6.ggUpdateText();
		el.appendChild(els);
		me._text_6.ggIsActive=function() {
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
		me._text_6.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me._text_6);
		me.__2.appendChild(me._rectangle_5);
		me.divSkin.appendChild(me.__2);
		el=me.__1=document.createElement('div');
		el.ggId="\uacf5\uc9c0\uc0ac\ud56d";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60%;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__1.logicBlock_size = function() {
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
			if (me.__1.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__1.ggCurrentLogicStateSize = newLogicStateSize;
				me.__1.style.transition='width 0s, height 0s';
				if (me.__1.ggCurrentLogicStateSize == 0) {
					me.__1.style.width='80%';
					me.__1.style.height='60%';
					me.__1.style.left = 'calc(50% - (80% / 2))';
					me.__1.style.top = 'calc(50% - (60% / 2))';
					skin.updateSize(me.__1);
				}
				else {
					me.__1.style.width='60%';
					me.__1.style.height='60%';
					me.__1.style.left = 'calc(50% - (60% / 2))';
					me.__1.style.top = 'calc(50% - (60% / 2))';
					skin.updateSize(me.__1);
				}
			}
		}
		me.__1.logicBlock_size();
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_6=document.createElement('div');
		el.ggId="Rectangle 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_6.ggIsActive=function() {
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
		me._rectangle_6.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_7=document.createElement('div');
		els=me._text_7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
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
		hs+='font-size: 18px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 20px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_7.ggUpdateText=function() {
			var params = [];
			var hs = player._("VR \uc18c\uac1c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_7.ggUpdateText();
		el.appendChild(els);
		me._text_7.ggIsActive=function() {
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
		me._text_7.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_6.appendChild(me._text_7);
		el=me._text_9=document.createElement('div');
		els=me._text_9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all; line-height:20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 20px 20px 10px 20px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_9.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc548\ub155\ud558\uc138\uc694. \n\uc0ac\uc774\ubc84\ubaa8\ub378\ud558\uc6b0\uc2a4, \uc2e4\uc0ac VR, \ud56d\uacf5 VR \ucee8\ud150\uce20\ub97c \uc81c\uc791\ud558\ub294 \uc5b8\ud53d\uc158\uc785\ub2c8\ub2e4. \n\n\ud574\ub2f9 \ud56d\uacf5 VR\uc740 \uc6b8\uc0b0\uad11\uc5ed\uc2dc \ub3d9\uad6c\uc5d0 \uc704\uce58\ud55c \uc6b8\uc0b0\ub300\uc655\uc554\uacf5\uc6d0\uc744 \ucd2c\uc601\ud55c \uac83\uc785\ub2c8\ub2e4. \n\uc6b8\uc0b0\ub300\uc655\uc554\uacf5\uc6d0\uc758 \uc8fc\ubcc0 \ud658\uacbd\uacfc \uc8fc\ubcc0 \uad00\uad11\uc694\uc18c, \uc0dd\ud65c\uc694\uc18c, \uad50\ud1b5 \uc694\uc18c \ub4f1 \uc790\uc138\ud55c \uc815\ubcf4\ub97c \ud55c \ub208\uc5d0 \uc0b4\ud3b4 \ubcf4\uc2e4 \uc218 \uc788\uc73c\uc2ed\ub2c8\ub2e4. \n\n\ub9c8\uc6b0\uc2a4 \ud639\uc740 \uc190\uac00\ub77d\uc744 \uc774\uc6a9\ud574 \uc88c\uc6b0\ub85c \uc6c0\uc9c1\uc5ec \uc8fc\uc2dc\uba74 360\ub3c4 \ud30c\ub178\ub77c\ub9c8\ub97c \ud655\uc778\ud574 \ubcf4\uc2e4 \uc218 \uc788\uc73c\uc2ed\ub2c8\ub2e4. \n\n\ub300\uc655\uc554\uacf5\uc6d0\uc758 \ud46f\ub9d0\uc744 \ud074\ub9ad\ud574 \uc8fc\uc2dc\uba74 \ub300\uc655\uc554\uacf5\uc6d0\uc5d0 \ub300\ud55c \uac04\ub2e8 \uc815\ubcf4 \ub610\ud55c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc73c\uc2ed\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_9.ggUpdateText();
		el.appendChild(els);
		me._text_9.ggIsActive=function() {
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
		me._text_9.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_6.appendChild(me._text_9);
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
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
		el.ggId="Image 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_6.ggIsActive=function() {
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
		me._image_6.onclick=function (e) {
			me.__1.style.transition='none';
			me.__1.style.visibility='hidden';
			me.__1.ggVisible=false;
			player.setVariableValue('vis_mobilebg4', false);
		}
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_6.appendChild(me._image_6);
		me.__1.appendChild(me._rectangle_6);
		me.divSkin.appendChild(me.__1);
		el=me.__0=document.createElement('div');
		el.ggId="\ub354\ubcf4\uae30";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 30px;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__0.logicBlock_visible = function() {
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
		me.__0.onclick=function (e) {
			player.setVariableValue('vis_addmore', !player.getVariableValue('vis_addmore'));
			me._pc5.ggVisible = !me._pc5.ggVisible;
			var flag=me._pc5.ggVisible;
			me._pc5.style.transition='none';
			me._pc5.style.visibility=((flag)&&(Number(me._pc5.style.opacity)>0||!me._pc5.style.opacity))?'inherit':'hidden';
			me._pc4.ggVisible = !me._pc4.ggVisible;
			var flag=me._pc4.ggVisible;
			me._pc4.style.transition='none';
			me._pc4.style.visibility=((flag)&&(Number(me._pc4.style.opacity)>0||!me._pc4.style.opacity))?'inherit':'hidden';
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_7=document.createElement('div');
		el.ggId="Rectangle 7";
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
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_7.ggIsActive=function() {
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
		me._rectangle_7.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc5=document.createElement('div');
		els=me._pc5__img=document.createElement('img');
		els.className='ggskin ggskin_pc5';
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
		el.ggId="\ub354\ud558\uae30-pc";
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
		me._pc5.ggIsActive=function() {
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
		me._pc5.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_7.appendChild(me._pc5);
		el=me._pc4=document.createElement('div');
		els=me._pc4__img=document.createElement('img');
		els.className='ggskin ggskin_pc4';
		hs='data:image/png;base64,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';
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
		el.ggId="\uc5d1\uc2a4-pc";
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
		me._pc4.ggIsActive=function() {
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
		me._pc4.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_7.appendChild(me._pc4);
		me.__0.appendChild(me._rectangle_7);
		me.divSkin.appendChild(me.__0);
		el=me.__=document.createElement('div');
		el.ggId="\ub354\ubcf4\uae30 \ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -100px;';
		hs+='height : 80px;';
		hs+='position : absolute;';
		hs+='right : 130px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_addmore') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__.style.transition='right 500ms linear 0ms, bottom 500ms linear 0ms';
				if (me.__.ggCurrentLogicStatePosition == 0) {
					me.__.style.right='130px';
					me.__.style.bottom='30px';
				}
				else {
					me.__.style.right='130px';
					me.__.style.bottom='-100px';
				}
			}
		}
		me.__.logicBlock_position();
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_8=document.createElement('div');
		el.ggId="Rectangle 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
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
		me._rectangle_8.ggIsActive=function() {
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
		me._rectangle_8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1pc=document.createElement('div');
		el.ggId="\ud558\ub2e8\uc544\uc774\ucf581-PC";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1pc.ggIsActive=function() {
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
		me.__1pc.onclick=function (e) {
			player.openUrl("https:\/\/daewangam.donggu.ulsan.kr\/","");
		}
		me.__1pc.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc3=document.createElement('div');
		el.ggId="\ubc30\uacbd-PC";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(121,7,253,0);';
		hs+='border : 0px solid #000000;';
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
		me._pc3.ggIsActive=function() {
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
		me._pc3.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_mobilebg1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._pc3.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._pc3.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._pc3.style.transition='background-color 0s';
				if (me._pc3.ggCurrentLogicStateBackgroundColor == 0) {
					me._pc3.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me._pc3.style.backgroundColor="rgba(121,7,253,0)";
				}
			}
		}
		me._pc3.logicBlock_backgroundcolor();
		me._pc3.ggUpdatePosition=function (useTransition) {
		}
		me.__1pc.appendChild(me._pc3);
		el=me._pc2=document.createElement('div');
		els=me._pc2__img=document.createElement('img');
		els.className='ggskin ggskin_pc2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAmtJREFUeF7tm2tuwyAMgPHJtp5s68nWnYwJjUSEgOsHhmZz/lSqSGJ/2MYGB8LCK8b4DgCPhSIEWPHypHgI4SOEkH7TdQeAzxWyTAeQlf9qKLsEwlQAMcY0y2nme9cDAG4zLWEaAILypd63WbFhCoAYYzL5zd83RVPwu+f/W1YxxSVMASD+fjB1xDrMIZgB4CqFjDeNCyYAuMqXzt9xF7OlcjgARAFyYNMA5K4gwwA0kptDsONG9VkQhgCwSm6oQZQ76+V4NYAZM2UZF1QARvg7dfasQIsAjPb3lRDYAGb4JQYEe3+uKlnlNQuAlRlSLaDKF3qFFSt7JAN4JeU3ECNkIgGYGey41qCFgAJY7e9UGJq40AWgJUsVfuQ4icxNAJ'+
			'IHjVRE8yyu7CcAr+zvVDAcCAcA2M4Nt5ihCms1DkvWyn3HHUCHGmtNtVJG89yOXntpjgG4vPJFvlDvSe66/RcAddboALaTKLcAJK/+SzHAXaA6kvMY4DEgH8d7EPQgmAk0UkbVKpBzcU0We7hXU4tgug13AWYfABcQ+Xjtyf6h3SpgDEB0UjzbAlrNENyZ7o2/JIDUBcLaqy+037rJ9oNWSQ/RagsQ+W3SuLHZeUkLcADSJcwt4LejtGyqdBfwICjoJPVV4Nyia5oJ1omQrwK+Cgg/ivBl0JdBzwM8EfJM0FNhrwW8GCp2iLwanFkNpn28b8FuZv0F2NBaQCjTW/XVGqkYEujevGUkgFEyNQHUSceQlwEAqR239TKkA1Qr2xlA3oWN2idX96uO17JMzz635Yp8CKStRsn6C0/uC/bx0jIYsQaxLNuNtUw/2IdBblxr'+
			'ia8AAAAASUVORK5CYII=';
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
		el.ggId="\ud648\ud398\uc774\uc9c0-PC";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 30%;';
		hs+='left : calc(50% - ((35% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30% + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc2.ggIsActive=function() {
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
		me._pc2.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4pc=document.createElement('div');
		els=me._text_4pc__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4-PC";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -22px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((150% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 150%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4pc.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud648\ud398\uc774\uc9c0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4pc.ggUpdateText();
		el.appendChild(els);
		me._text_4pc.ggIsActive=function() {
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
		me._text_4pc.ggUpdatePosition=function (useTransition) {
		}
		me._pc2.appendChild(me._text_4pc);
		me.__1pc.appendChild(me._pc2);
		me._rectangle_8.appendChild(me.__1pc);
		el=me.__2pc=document.createElement('div');
		el.ggId="\ud558\ub2e8\uc544\uc774\ucf582-PC";
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
		me.__2pc.ggIsActive=function() {
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
		me.__2pc.onclick=function (e) {
			me.__2.ggVisible = !me.__2.ggVisible;
			var flag=me.__2.ggVisible;
			me.__2.style.transition='none';
			me.__2.style.visibility=((flag)&&(Number(me.__2.style.opacity)>0||!me.__2.style.opacity))?'inherit':'hidden';
			player.setVariableValue('vis_mobilebg2', !player.getVariableValue('vis_mobilebg2'));
			if (me._video_1.ggApiPlayer) {
				if (me._video_1.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_1.ggApiPlayer.getPlayerState() == 1) {
							me._video_1.ggApiPlayer.pauseVideo();
							me._video_1.ggApiPlayer.seekTo(0);
						} else {
							me._video_1.ggApiPlayer.playVideo();
						}
					};
					if (me._video_1.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_1.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_1.ggApiPlayerType == 'vimeo') {
					var promise = me._video_1.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_1.ggApiPlayer.play();
						} else {
							me._video_1.ggApiPlayer.pause();
							me._video_1.ggApiPlayer.setCurrentTime(0);
						}
					});
				}
			} else {
				player.playStopSound("Video 1","1");
			}
		}
		me.__2pc.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2pc0=document.createElement('div');
		el.ggId="\ubc30\uacbd2-PC";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(121,7,253,0);';
		hs+='border : 0px solid #000000;';
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
		me.__2pc0.ggIsActive=function() {
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
		me.__2pc0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_mobilebg2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2pc0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2pc0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2pc0.style.transition='background-color 0s';
				if (me.__2pc0.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2pc0.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me.__2pc0.style.backgroundColor="rgba(121,7,253,0)";
				}
			}
		}
		me.__2pc0.logicBlock_backgroundcolor();
		me.__2pc0.ggUpdatePosition=function (useTransition) {
		}
		me.__2pc.appendChild(me.__2pc0);
		el=me._pc1=document.createElement('div');
		els=me._pc1__img=document.createElement('img');
		els.className='ggskin ggskin_pc1';
		hs='data:image/png;base64,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';
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
		el.ggId="\uc601\uc0c1-PC";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35%;';
		hs+='left : calc(50% - ((35% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35% + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc1.ggIsActive=function() {
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
		me._pc1.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_5pc=document.createElement('div');
		els=me._text_5pc__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5-PC";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -23px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((156% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 156%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_5pc.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc601\uc0c1\ubcf4\uae30\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_5pc.ggUpdateText();
		el.appendChild(els);
		me._text_5pc.ggIsActive=function() {
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
		me._text_5pc.ggUpdatePosition=function (useTransition) {
		}
		me._pc1.appendChild(me._text_5pc);
		me.__2pc.appendChild(me._pc1);
		me._rectangle_8.appendChild(me.__2pc);
		el=me.__3pc=document.createElement('div');
		el.ggId="\ud558\ub2e8\uc544\uc774\ucf583-PC";
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
		me.__3pc.ggIsActive=function() {
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
		me.__3pc.onclick=function (e) {
			player.setVariableValue('vis_mobilebg3', !player.getVariableValue('vis_mobilebg3'));
				player.playPauseSound("","5");
			me.__37.ggVisible = !me.__37.ggVisible;
			var flag=me.__37.ggVisible;
			me.__37.style.transition='none';
			me.__37.style.visibility=((flag)&&(Number(me.__37.style.opacity)>0||!me.__37.style.opacity))?'inherit':'hidden';
			me._on.ggVisible = !me._on.ggVisible;
			var flag=me._on.ggVisible;
			me._on.style.transition='none';
			me._on.style.visibility=((flag)&&(Number(me._on.style.opacity)>0||!me._on.style.opacity))?'inherit':'hidden';
		}
		me.__3pc.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3pc0=document.createElement('div');
		el.ggId="\ubc30\uacbd3-PC";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(121,7,253,0);';
		hs+='border : 0px solid #000000;';
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
		me.__3pc0.ggIsActive=function() {
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
		me.__3pc0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_mobilebg3') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__3pc0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__3pc0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__3pc0.style.transition='background-color 0s';
				if (me.__3pc0.ggCurrentLogicStateBackgroundColor == 0) {
					me.__3pc0.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me.__3pc0.style.backgroundColor="rgba(121,7,253,0)";
				}
			}
		}
		me.__3pc0.logicBlock_backgroundcolor();
		me.__3pc0.ggUpdatePosition=function (useTransition) {
		}
		me.__3pc.appendChild(me.__3pc0);
		el=me._pc0=document.createElement('div');
		els=me._pc0__img=document.createElement('img');
		els.className='ggskin ggskin_pc0';
		hs='data:image/png;base64,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';
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
		el.ggId="\ubcfc\ub968-PC";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35%;';
		hs+='left : calc(50% - ((35% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35% + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc0.ggIsActive=function() {
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
		me._pc0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_mobilebg3') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pc0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pc0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pc0.style.transition='';
				if (me._pc0.ggCurrentLogicStateVisible == 0) {
					me._pc0.style.visibility="hidden";
					me._pc0.ggVisible=false;
				}
				else {
					me._pc0.style.visibility=(Number(me._pc0.style.opacity)>0||!me._pc0.style.opacity)?'inherit':'hidden';
					me._pc0.ggVisible=true;
				}
			}
		}
		me._pc0.logicBlock_visible();
		me._pc0.ggUpdatePosition=function (useTransition) {
		}
		el=me._text7pc=document.createElement('div');
		els=me._text7pc__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text7-PC";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -23px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((156% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 156%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text7pc.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubc30\uacbd\uc74c\uc545\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text7pc.ggUpdateText();
		el.appendChild(els);
		me._text7pc.ggIsActive=function() {
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
		me._text7pc.ggUpdatePosition=function (useTransition) {
		}
		me._pc0.appendChild(me._text7pc);
		me.__3pc.appendChild(me._pc0);
		el=me._onpc=document.createElement('div');
		els=me._onpc__img=document.createElement('img');
		els.className='ggskin ggskin_onpc';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAxtJREFUeF7tmuF2gyAMhcmTbX2ytU+27snYwWmPpXJvEtBOtD83UPIluYSIhIP/5OD2hxPAGQEHJ3CmQE8BEGP8nOwRkbvGtm4iIMZ4DSF8zYy+iUj6G/x1AWDB+MnoC4uEzQGkMGWLYl7L/w8ABBGBNm4KIMb4HUKY8vQuIhersUvjs+fmQ+B7NgEwilPKz4dIjatsAmF8foJb+hX1YHUAbHEsRLURgtJgfMaiHqwKQLEomqNaAGmcJxVWA6AxPi26VQSMAFKKoVR4iYJVABBPPDm1JYARQl4PzN/3ojlNAQCxK0ayBoC1wiMOeIqCZgCY2JUIMACeCo+s5SkKmgDQ5vsSBASgpsLTRkE1gBrjmQjWVHjaKKgCYBE7Twp4tr'+
			'X5e9D8KfJcADxi5wRg3tYyAGj+IIZmAF6x8wDwFjcZhFh49yCGDwDzrQZUX4no/MxtKdQWxyp2gdoomB/AXmoCaRnOHhoMQG0UMCFNAFDl5LHJNEcDYIQAQ7n0UpKylwSg9GCTId7BBgDIUbDzA2y87QkAVXQQBSUd2A+AyjQoC+FeUuAEgBsesLUGhP6+Gw0gZ30vgNALANhZgrXAzjSgtBUeJgJgWQu2wTK4nUWAtxrsHgD8EAr6AvsphMiZ5dgA2HmCnQX+/WmQeN+9A4QQ/hoi7zwSM+8p1sfCv+jg9G5TS6x1O4x1hRXG009rMPxFriYA0z7bohs8PYs5oUb8yAFqiBwXAI1ntA0SBYBiw0YxlzZR3ABaQSBfhlAThF6CQkVe1XeBrO1ctYsovLhU/mqMR+t6zK+KgJkmTO3y/AoMzQQFgPzZ6f5fMgDeA9R4'+
			'fxBhukLDAM92ygBkkJPq0wuQFuFsCsCjC1oABj+kukYtnM0BWCG0BmDxfvMU8IhjSwCKFHwRz1UiwCKOjQGgjzyLO8eqAGYgYD1uyW9H12eYUgK9CQCgC3Q/18Ihna333RRd0IX0p48Qwo/mOrsGADmkQcibRYDGkJoxhQMavYvcEwBXxdgNgExwk+dpxbhqHVATzlvO7S4CrPBOAFZivY0/I6A3j1rt+QXV+knqp72fmAAAAABJRU5ErkJggg==';
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
		el.ggId="\ubcfc\ub968on-PC";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35%;';
		hs+='left : calc(50% - ((35% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35% + 0px) / 2) - 5px);';
		hs+='visibility : hidden;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._onpc.ggIsActive=function() {
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
		me._onpc.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_mobilebg3') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._onpc.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._onpc.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._onpc.style.transition='';
				if (me._onpc.ggCurrentLogicStateVisible == 0) {
					me._onpc.style.visibility=(Number(me._onpc.style.opacity)>0||!me._onpc.style.opacity)?'inherit':'hidden';
					me._onpc.ggVisible=true;
				}
				else {
					me._onpc.style.visibility="hidden";
					me._onpc.ggVisible=false;
				}
			}
		}
		me._onpc.logicBlock_visible();
		me._onpc.ggUpdatePosition=function (useTransition) {
		}
		el=me._text8pc=document.createElement('div');
		els=me._text8pc__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text8-PC";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -23px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((156% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 156%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text8pc.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubc30\uacbd\uc74c\uc545\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text8pc.ggUpdateText();
		el.appendChild(els);
		me._text8pc.ggIsActive=function() {
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
		me._text8pc.ggUpdatePosition=function (useTransition) {
		}
		me._onpc.appendChild(me._text8pc);
		me.__3pc.appendChild(me._onpc);
		me._rectangle_8.appendChild(me.__3pc);
		el=me.__4pc=document.createElement('div');
		el.ggId="\ud558\ub2e8\uc544\uc774\ucf584-PC";
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
		me.__4pc.ggIsActive=function() {
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
		me.__4pc.onclick=function (e) {
			player.setVariableValue('vis_mobilebg4', !player.getVariableValue('vis_mobilebg4'));
			me.__1.ggVisible = !me.__1.ggVisible;
			var flag=me.__1.ggVisible;
			me.__1.style.transition='none';
			me.__1.style.visibility=((flag)&&(Number(me.__1.style.opacity)>0||!me.__1.style.opacity))?'inherit':'hidden';
		}
		me.__4pc.ggUpdatePosition=function (useTransition) {
		}
		el=me.__4pc0=document.createElement('div');
		el.ggId="\ubc30\uacbd4-PC";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(121,7,253,0);';
		hs+='border : 0px solid #000000;';
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
		me.__4pc0.ggIsActive=function() {
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
		me.__4pc0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_mobilebg4') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__4pc0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__4pc0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__4pc0.style.transition='background-color 0s';
				if (me.__4pc0.ggCurrentLogicStateBackgroundColor == 0) {
					me.__4pc0.style.backgroundColor="rgba(121,7,253,1)";
				}
				else {
					me.__4pc0.style.backgroundColor="rgba(121,7,253,0)";
				}
			}
		}
		me.__4pc0.logicBlock_backgroundcolor();
		me.__4pc0.ggUpdatePosition=function (useTransition) {
		}
		me.__4pc.appendChild(me.__4pc0);
		el=me._pc=document.createElement('div');
		els=me._pc__img=document.createElement('img');
		els.className='ggskin ggskin_pc';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABopJREFUeF7VW1vIZlMYfp5yQSQukFw4JkUOZUI5zLiQwwUlmQsxhqEZjGbCOIzDNCNGZIxMTMYYkwsik3ChZEbkkJwSKTHCXCCHKEo8er9599f616y999r7+/b+Putm/m/vdXifZ72n9a49xBQ1SScCuADAUQDmkfyja/HY9QK580taCGApgCN8zHKSd+eOb9tvaggwAJIeA3CVg/kBwOUkX2kLLmfctBEwD8DGQPBXnYQdOWDa9Jk2Al4HMDsCsprkzW3A5YyZNgKUEPpP14JncgA17TM1BEi6C8CdAYAPAZzgv992Er5oCrCu/zQREKr/VgBr3B/s6yDWkbymDlDT91NBQGL355DcKsk0wjSjaAtIPt4UZFX/aSEgtP2tJO'+
			'd4WLTdt6hwvoP41E3h/XGRMHECyna/ACjpTABPADjYn212Ev4ZBwkTJUCShTyz/aINdz8EJ8kyxAeCZ0tJPvi/JiABHiSTGyJpNzeFSxz0bwC2ALgsJM//XmH+I5eciWmApDjpGTi+MsElzXISjs4EZ0SEDjQ5bCIEJMBnCStpAYD1mQRYt9p5eycg4fSSdl+hCesA2MnR2s/uEF90kzKfckaUTlfO3ysBo4L30Gi1AosKpzgJrzkJ3waRIzavUk3ojYCE2jfa+SgqzHV/sLs/v5/kjVGfMLeYHAGJXTc5W4MPdnk1gJv899+uBU8H72ecLcoiTKcaUAK+1jHlODlJB7kpnOX933MSPnNTiXOMZJTphIAS4FleOQd8sMvnuSns58/Wk7x6YgQEnjg81hbyjmXnY4IkLQewMni+kOSjiUSrWw3oa9cTBOztpnChv/vc'+
			'TAHAO0HfUp8zsglUAXdnl52WNlH/yOOf7qZwmD+3U+MxQZ/SLLMVAQ7a5k+puj03AWaR/KstqKbjJF3vRZR4aKXpNSIgA3i4+DKS9zUF0ra/JMNiCZJVlou2meSlVXNmEZABfMCyJBPA7M/a9wDmk7TSdi9NktUQrYBynC/4kofGn8oEqCQgF3gxuaTjXQD719rLLsCPvTCw83JlPoANwXorSd7RiIDUWT2aoNSuJMWXG6tI3t4XAbaOpLUArvM1rXZgN0wvpGTYRQMqwK+wCXLO2JIeArDYF/zdBXi+LxIk2f2imcKpvuY2l+HrWIYUAbucpHKBB6ZwuAtwmj97wwX4qkcSLnIZ9vQ115BcUklAYvdbZ2+SLDF5EsBevuhakhaqemuS7Hb5Vl/wX9+Ep0IBUhqQdYzMQSFpFYDbgr5mi0ZKL03SAa4F5/iCHzgJnx'+
			'QCpAgwAcNiY2WtrgqJpP1dgHO9n113GQkf98LATod4tucHB/qaG0heuQsBrv6W2cW3s9tJHtpWYEl2XDVSCwE2krRQ1agFB61inJW+ypo5PWtFGn4ygHuCzteSfMR+swJ4OPkmkmGG1VT4ZQDuDQYtJvlw2SQR2LJ0u5EMUefvAMwl+ZYREN/KWl8LeUWBsRg7iins4aZwsU/2pZvCm8XkGUnXKIBTY58dyCCp1OlJ+gXAPj56VFOwIqaZwpE+33OeNt9QcagqBDdVLtR6oNpldwiuPSHgcCNj874lJmDG7UwiLI5KwiIAA9vLbK21LjW/47HbpSv8/Y6UCcwoHkiKo8ISknZ337hV1A4Kh/XNuCJQhX851qOCJWdbBmGw7qZGkqWQhwSTNtqZGuCbzDQKlY5kaZ2IVe2OpJNIvmt9CgLiCqq9G4Jsawo1wIf2XXwP'+
			'kNiMTggIyRkmQnW3NglT2EYydiqDuWuAW4QJr69ikwvPIv0RUGUKFbnCDH9QUx8cniTLKraJ8f0SUEKChaDkTgP4CICdsOx9shQ+sLPENXUUfgefxEQfS3QOfugDQpvIKIZsjxxiyt+YY7OQWXo/Hzm7X4N8YzBf2VVW49BTM6Dsi4xUdmiaMPj6IoOkWgAVcwzXGTfY1Hx1NcHZNV9txKZR+71PpG3xl6G9qH0yCoyD7bovvuI1IjMY+ca4DYassniTieOkqsqWc+/vmqzftG8XBGR9+lYIOmktGDsBJYlQaeo8aS3ohIBUPlFjCslPZZuqc5v+XRKQbQpNnWcboGVjOiOghSlMRAs6JaCJKUxKC/ogoIkp9K4FnRPQxBQmERF6IaChKcz4rzNhsWSczq+Yq08Cskyhj5JYZ2eBuh2qu3ydioJIHYhR36cKsF4is6'+
			'nD02UvJ8PeTCA6BqfqDWGXXsDbghMhIIgM9mdYSuu1GGKL/weI+ykHJeFSggAAAABJRU5ErkJggg==';
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
		el.ggId="\uc548\ub0b4-PC";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 33%;';
		hs+='left : calc(50% - ((35% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((33% + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc.ggIsActive=function() {
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
		me._pc.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_8pc=document.createElement('div');
		els=me._text_8pc__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8-PC";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -23px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((156% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 156%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_8pc.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0ac\uc6a9\uc548\ub0b4\n\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_8pc.ggUpdateText();
		el.appendChild(els);
		me._text_8pc.ggIsActive=function() {
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
		me._text_8pc.ggUpdatePosition=function (useTransition) {
		}
		me._pc.appendChild(me._text_8pc);
		me.__4pc.appendChild(me._pc);
		me._rectangle_8.appendChild(me.__4pc);
		me.__.appendChild(me._rectangle_8);
		me.divSkin.appendChild(me.__);
		me.__28.logicBlock_visible();
		me.__29.logicBlock_backgroundcolor();
		me.__49.logicBlock_scaling();
		me.__110.logicBlock_visible();
		me.__48.logicBlock_backgroundcolor();
		me.__210.logicBlock_visible();
		me.__212.logicBlock_visible();
		me.__211.logicBlock_visible();
		me.__211.logicBlock_backgroundcolor();
		me.__36.logicBlock_visible();
		me.__38.logicBlock_backgroundcolor();
		me.__45.logicBlock_visible();
		me.__46.logicBlock_backgroundcolor();
		me.__16.logicBlock_position();
		me.__16.logicBlock_scaling();
		me.__16.logicBlock_visible();
		me.__17.logicBlock_backgroundcolor();
		me._image_3.logicBlock_visible();
		me.__27.logicBlock_backgroundcolor();
		me._image_4.logicBlock_visible();
		me._image_41.logicBlock_visible();
		me.__25.logicBlock_backgroundcolor();
		me._image_5.logicBlock_visible();
		me._image_420.logicBlock_visible();
		me.__34.logicBlock_scaling();
		me.__34.logicBlock_backgroundcolor();
		me._image_42.logicBlock_visible();
		me._image_43.logicBlock_visible();
		me.__44.logicBlock_backgroundcolor();
		me._image_440.logicBlock_visible();
		me._image_44.logicBlock_visible();
		me.__5.logicBlock_position();
		me.__5.logicBlock_size();
		me.__5.logicBlock_scaling();
		me._rectangle_555.logicBlock_backgroundcolor();
		me._off3.logicBlock_visible();
		me._rectangle_5555.logicBlock_backgroundcolor();
		me._off2.logicBlock_visible();
		me._rectangle_55555.logicBlock_backgroundcolor();
		me._off1.logicBlock_visible();
		me._rectangle_4.logicBlock_backgroundcolor();
		me._off0.logicBlock_visible();
		me._rectangle_55.logicBlock_backgroundcolor();
		me._off.logicBlock_visible();
		me._rectangle_554444.logicBlock_backgroundcolor();
		me.__11.logicBlock_visible();
		me._rectangle_5544444.logicBlock_backgroundcolor();
		me.__10.logicBlock_visible();
		me._container_1.logicBlock_size();
		me._image_1.logicBlock_size();
		me._text_1.logicBlock_visible();
		me.__4.logicBlock_visible();
		me.__2.logicBlock_size();
		me._video_1.ggInitMedia('Tb5NnEZznkM&si=-Z9M3DmkAv-iyj2I');
		if (me._video_1.ggApiPlayer) {
			if (me._video_1.ggApiPlayerType == 'youtube') {
				let youtubeMediaFunction = function() {
					me._video_1.ggApiPlayer.pauseVideo();
					me._video_1.ggApiPlayer.seekTo(0);
				};
				if (me._video_1.ggApiPlayerReady) {
					youtubeMediaFunction();
				} else {
					let youtubeApiInterval = setInterval(function() {
						if (me._video_1.ggApiPlayerReady) {
							clearInterval(youtubeApiInterval);
							youtubeMediaFunction();
						}
					}, 100);
				}
			} else if (me._video_1.ggApiPlayerType == 'vimeo') {
				me._video_1.ggApiPlayer.pause();
				me._video_1.ggApiPlayer.setCurrentTime(0);
			}
		} else {
			player.stopSound("Video 1");
		}
		me.__1.logicBlock_size();
		me.__0.logicBlock_visible();
		me.__.logicBlock_position();
		me._pc3.logicBlock_backgroundcolor();
		me.__2pc0.logicBlock_backgroundcolor();
		me.__3pc0.logicBlock_backgroundcolor();
		me._pc0.logicBlock_visible();
		me._onpc.logicBlock_visible();
		me.__4pc0.logicBlock_backgroundcolor();
		player.addListener('activehotspotchanged', function(event) {
			me._rectangle_554444.logicBlock_backgroundcolor();
			me.__11.logicBlock_visible();
			me._rectangle_5544444.logicBlock_backgroundcolor();
			me.__10.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			me.__48.logicBlock_backgroundcolor();
			me.__212.logicBlock_visible();
			me.__211.logicBlock_visible();
			me.__211.logicBlock_backgroundcolor();
			me.__38.logicBlock_backgroundcolor();
			me.__46.logicBlock_backgroundcolor();
			me.__27.logicBlock_backgroundcolor();
			me._image_4.logicBlock_visible();
			me._image_41.logicBlock_visible();
			me.__25.logicBlock_backgroundcolor();
			me._image_5.logicBlock_visible();
			me._image_420.logicBlock_visible();
			me.__34.logicBlock_backgroundcolor();
			me._image_42.logicBlock_visible();
			me._image_43.logicBlock_visible();
			me.__44.logicBlock_backgroundcolor();
			me._image_440.logicBlock_visible();
			me._image_44.logicBlock_visible();
			me._rectangle_555.logicBlock_backgroundcolor();
			me._off3.logicBlock_visible();
			me._rectangle_5555.logicBlock_backgroundcolor();
			me._off2.logicBlock_visible();
			me._rectangle_55555.logicBlock_backgroundcolor();
			me._off1.logicBlock_visible();
			me._rectangle_4.logicBlock_backgroundcolor();
			me._off0.logicBlock_visible();
			me._rectangle_55.logicBlock_backgroundcolor();
			me._off.logicBlock_visible();
			me._rectangle_554444.logicBlock_backgroundcolor();
			me.__11.logicBlock_visible();
			me._rectangle_5544444.logicBlock_backgroundcolor();
			me.__10.logicBlock_visible();
			me.__.logicBlock_position();
			me._pc3.logicBlock_backgroundcolor();
			me.__2pc0.logicBlock_backgroundcolor();
			me.__3pc0.logicBlock_backgroundcolor();
			me._pc0.logicBlock_visible();
			me._onpc.logicBlock_visible();
			me.__4pc0.logicBlock_backgroundcolor();
		});
		player.addListener('configloaded', function(event) {
			me.__48.logicBlock_backgroundcolor();
			me.__212.logicBlock_visible();
			me.__211.logicBlock_visible();
			me.__211.logicBlock_backgroundcolor();
			me.__38.logicBlock_backgroundcolor();
			me.__46.logicBlock_backgroundcolor();
			me.__27.logicBlock_backgroundcolor();
			me._image_4.logicBlock_visible();
			me._image_41.logicBlock_visible();
			me.__25.logicBlock_backgroundcolor();
			me._image_5.logicBlock_visible();
			me._image_420.logicBlock_visible();
			me.__34.logicBlock_backgroundcolor();
			me._image_42.logicBlock_visible();
			me._image_43.logicBlock_visible();
			me.__44.logicBlock_backgroundcolor();
			me._image_440.logicBlock_visible();
			me._image_44.logicBlock_visible();
			me._rectangle_555.logicBlock_backgroundcolor();
			me._off3.logicBlock_visible();
			me._rectangle_5555.logicBlock_backgroundcolor();
			me._off2.logicBlock_visible();
			me._rectangle_55555.logicBlock_backgroundcolor();
			me._off1.logicBlock_visible();
			me._rectangle_4.logicBlock_backgroundcolor();
			me._off0.logicBlock_visible();
			me._rectangle_55.logicBlock_backgroundcolor();
			me._off.logicBlock_visible();
			me._rectangle_554444.logicBlock_backgroundcolor();
			me.__11.logicBlock_visible();
			me._rectangle_5544444.logicBlock_backgroundcolor();
			me.__10.logicBlock_visible();
			me.__.logicBlock_position();
			me._pc3.logicBlock_backgroundcolor();
			me.__2pc0.logicBlock_backgroundcolor();
			me.__3pc0.logicBlock_backgroundcolor();
			me._pc0.logicBlock_visible();
			me._onpc.logicBlock_visible();
			me.__4pc0.logicBlock_backgroundcolor();
		});
		player.addListener('hsproxyclick', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_hsproxyclick();
				}
			}
		});
		player.addListener('hsproxydblclick', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_hsproxydblclick();
				}
			}
		});
		player.addListener('hsproxyout', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_hsproxyout();
				}
			}
		});
		player.addListener('hsproxyover', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_hsproxyover();
				}
			}
		});
		player.addListener('sizechanged', function(event) {
			me.__28.logicBlock_visible();
			me.__29.logicBlock_backgroundcolor();
			me.__49.logicBlock_scaling();
			me.__110.logicBlock_visible();
			me.__210.logicBlock_visible();
			me.__36.logicBlock_visible();
			me.__45.logicBlock_visible();
			me.__16.logicBlock_position();
			me.__16.logicBlock_scaling();
			me.__16.logicBlock_visible();
			me.__17.logicBlock_backgroundcolor();
			me._image_3.logicBlock_visible();
			me.__27.logicBlock_backgroundcolor();
			me.__34.logicBlock_scaling();
			me.__44.logicBlock_backgroundcolor();
			me.__5.logicBlock_position();
			me.__5.logicBlock_size();
			me.__5.logicBlock_scaling();
			me._container_1.logicBlock_size();
			me._image_1.logicBlock_size();
			me._text_1.logicBlock_visible();
			me.__4.logicBlock_visible();
			me.__2.logicBlock_size();
			me.__1.logicBlock_size();
			me.__0.logicBlock_visible();
		});
		player.addListener('varchanged_vis_addmore', function(event) {
			me.__.logicBlock_position();
		});
		player.addListener('varchanged_vis_main1', function(event) {
			me.__27.logicBlock_backgroundcolor();
			me._image_4.logicBlock_visible();
			me._image_41.logicBlock_visible();
		});
		player.addListener('varchanged_vis_main2', function(event) {
			me.__25.logicBlock_backgroundcolor();
			me._image_5.logicBlock_visible();
			me._image_420.logicBlock_visible();
		});
		player.addListener('varchanged_vis_main3', function(event) {
			me.__34.logicBlock_backgroundcolor();
			me._image_42.logicBlock_visible();
			me._image_43.logicBlock_visible();
		});
		player.addListener('varchanged_vis_main4', function(event) {
			me.__44.logicBlock_backgroundcolor();
			me._image_440.logicBlock_visible();
			me._image_44.logicBlock_visible();
		});
		player.addListener('varchanged_vis_menu1', function(event) {
			me._rectangle_55.logicBlock_backgroundcolor();
			me._off.logicBlock_visible();
		});
		player.addListener('varchanged_vis_menu2', function(event) {
			me._rectangle_555.logicBlock_backgroundcolor();
			me._off3.logicBlock_visible();
		});
		player.addListener('varchanged_vis_menu3', function(event) {
			me._rectangle_5555.logicBlock_backgroundcolor();
			me._off2.logicBlock_visible();
		});
		player.addListener('varchanged_vis_menu4', function(event) {
			me._rectangle_55555.logicBlock_backgroundcolor();
			me._off1.logicBlock_visible();
		});
		player.addListener('varchanged_vis_menu5', function(event) {
			me._rectangle_4.logicBlock_backgroundcolor();
			me._off0.logicBlock_visible();
		});
		player.addListener('varchanged_vis_mobilebg1', function(event) {
			me.__48.logicBlock_backgroundcolor();
			me._pc3.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_vis_mobilebg2', function(event) {
			me.__212.logicBlock_visible();
			me.__211.logicBlock_visible();
			me.__211.logicBlock_backgroundcolor();
			me.__2pc0.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_vis_mobilebg3', function(event) {
			me.__38.logicBlock_backgroundcolor();
			me.__3pc0.logicBlock_backgroundcolor();
			me._pc0.logicBlock_visible();
			me._onpc.logicBlock_visible();
		});
		player.addListener('varchanged_vis_mobilebg4', function(event) {
			me.__46.logicBlock_backgroundcolor();
			me.__4pc0.logicBlock_backgroundcolor();
		});
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 33px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.onclick=function (e) {
			skin._imagepop.ggSetImage(player._(me.hotspot.url));
			skin._imagepop.ggSubElement.src=skin._imagepop.ggText;
			skin._imagepop.style.transition='none';
			skin._imagepop.style.visibility=(Number(skin._imagepop.style.opacity)>0||!skin._imagepop.style.opacity)?'inherit':'hidden';
			skin._imagepop.ggVisible=true;
			skin._imagepop.ggSubElement.src=skin._imagepop.ggText;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_image']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_image']=true;
			}
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_2=document.createElement('div');
		els=me._external_2__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_2.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_2.ggSubElement.setAttribute('alt', player._(me._external_2.ggAltText));
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_2.ggText_untranslated = img;
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_2.ggSubElement.style.width = '0px';
			me._external_2.ggSubElement.style.height = '0px';
			me._external_2.ggSubElement.src='';
			me._external_2.ggSubElement.src=me._external_2.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_2.ggText != player._(me._external_2.ggText_untranslated)) {
				me._external_2.ggText = player._(me._external_2.ggText_untranslated);
				me._external_2.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDy=-20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 20px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_2.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_2.clientWidth;
			var parentHeight = me._external_2.clientHeight;
			var img = me._external_2__img;
			var aspectRatioDiv = me._external_2.clientWidth / me._external_2.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_2.ggScrollbars || currentWidth < me._external_2.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_2.ggScrollbars || currentHeight < me._external_2.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub300\uc655\uc554\uacf5\uc6d0\uc5d0 \ub300\ud574 \ub354 \uc54c\uace0 \uc2f6\ub2e4\uba74?\n\uc544\ub798\uc758 \ud46f\ub9d0\uc744 \ub20c\ub7ec\uc8fc\uc138\uc694!", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me._external_2.appendChild(me._text_3);
		me._ht_image.appendChild(me._external_2);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_2.style.width=hotspot.customimagewidth + 'px';
			me._external_2.style.height=hotspot.customimageheight + 'px';
			let d = -20;
			me._external_2.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='대왕') {
					me._ht_image.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='대왕') {
					me._ht_image.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='대왕') {
					me._ht_image.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='대왕') {
					me._ht_image.onmouseover();
				}
			};
		me.ggUse3d=true;
		me.gg3dDistance=900;
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_image.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 165px;';
		hs+='position : absolute;';
		hs+='top : 74px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_info']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_info']=true;
			}
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_1=document.createElement('div');
		els=me._external_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_1.ggSubElement.setAttribute('alt', player._(me._external_1.ggAltText));
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_1.ggText_untranslated = img;
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_1.ggSubElement.style.width = '0px';
			me._external_1.ggSubElement.style.height = '0px';
			me._external_1.ggSubElement.src='';
			me._external_1.ggSubElement.src=me._external_1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_1.ggText != player._(me._external_1.ggText_untranslated)) {
				me._external_1.ggText = player._(me._external_1.ggText_untranslated);
				me._external_1.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : 57px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var img = me._external_1__img;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			if (!me._external_1.ggScrollbars || currentWidth < me._external_1.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_1.ggScrollbars || currentHeight < me._external_1.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me._ht_info.appendChild(me._external_1);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_info.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_info;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_info') {
				hotspot.skinid = 'ht_info';
				hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_image';
				hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = [];
	}
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
function onYouTubeIframeAPIReady() {
	setTimeout(function(){
		var videoElements = document.querySelectorAll('.ggskin_video');
		for (var i=0; i<videoElements.length; i++) {
			if (videoElements[i].ggYoutubeApiReady) {
				videoElements[i].ggYoutubeApiReady();
			}
		}
	}, 1000);
}