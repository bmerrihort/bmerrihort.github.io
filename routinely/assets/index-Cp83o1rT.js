var e=Object.defineProperty,t=(t,i,s)=>((t,i,s)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s)(t,"symbol"!=typeof i?i+"":i,s);import{p as i}from"./phaser-CwoquCe3.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();class s extends i.Scene{constructor(){super("Boot")}preload(){this.load.image("background","assets/mountains.png"),this.load.image("done_button","assets/done_button.png"),this.load.image("character_select_arrow","assets/character_select_arrow.png"),this.load.spritesheet("smart_boy","assets/smart_boy.png",{frameWidth:113,frameHeight:176,startFrame:0,endFrame:42}),this.load.spritesheet("coin","assets/coin.png",{frameWidth:16,frameHeight:16,startFrame:0,endFrame:7})}create(){this.scene.start("Preloader")}}class a extends i.Scene{constructor(){super("Game"),t(this,"camera"),t(this,"background"),t(this,"msg_text")}create(){this.camera=this.cameras.main,this.camera.setBackgroundColor(65280),this.background=this.add.image(512,384,"background"),this.background.setAlpha(.5),this.msg_text=this.add.text(512,384,"Make something fun!\nand share it with us:\nsupport@phaser.io",{fontFamily:"Arial Black",fontSize:38,color:"#ffffff",stroke:"#000000",strokeThickness:8,align:"center"}),this.msg_text.setOrigin(.5),this.input.once("pointerdown",(()=>{this.scene.start("GameOver")}))}}class n extends i.Scene{constructor(){super("GameOver"),t(this,"camera"),t(this,"background"),t(this,"gameover_text")}create(){this.camera=this.cameras.main,this.camera.setBackgroundColor(16711680),this.background=this.add.image(512,384,"background"),this.background.setAlpha(.5),this.gameover_text=this.add.text(512,384,"Game Over",{fontFamily:"Arial Black",fontSize:64,color:"#ffffff",stroke:"#000000",strokeThickness:8,align:"center"}),this.gameover_text.setOrigin(.5),this.input.once("pointerdown",(()=>{this.scene.start("MainMenu")}))}}function r(e,t,i){const s=new Date(e.getTime());return s.setHours(t),s.setMinutes(i),s.setSeconds(0),s.setMilliseconds(0),s}class o extends i.Scene{constructor(){super("MainMenu"),t(this,"background"),t(this,"logo"),t(this,"title"),t(this,"timeLeftText"),t(this,"remainingText"),t(this,"levelNameText"),t(this,"levelDescriptionText"),t(this,"coinsText"),t(this,"doneButton"),t(this,"doneCoin1"),t(this,"doneCoin2"),t(this,"doneText"),t(this,"clockFormat"),t(this,"levels"),t(this,"currentLevelIndex"),t(this,"coins"),t(this,"state"),t(this,"totalSecondsLeft"),t(this,"levelStartTime")}init(e){this.background=this.add.tileSprite(180,400,360,800,"background");const t=this.add.sprite(180,714,"smart_boy",0);t.anims.create({key:"run",frames:e.character.key,frameRate:e.character.frameRate,repeat:-1}),t.scale=e.character.scale,t.anims.startAnimation("run");const i=this.add.sprite(335,30,"coin",0);i.anims.create({key:"spin",frames:"coin",frameRate:15,repeat:-1}),i.anims.startAnimation("spin"),i.scale=2}create(){this.title=this.add.text(70,30,"Main Menu",{fontFamily:"Quantico",fontSize:38,color:"#ffffff",align:"center"}).setOrigin(.5),this.levelNameText=this.add.text(180,140,"Main Menu",{fontFamily:"Quantico",fontSize:52,color:"#ffffff",align:"center",fontStyle:"bold"}).setOrigin(.5),this.levelDescriptionText=this.add.text(180,200,"Main Menu",{fontFamily:"Quantico",fontSize:38,color:"#ffffff",align:"center"}).setOrigin(.5),this.timeLeftText=this.add.text(180,300,"Main Menu",{fontFamily:"Quantico",fontSize:64,color:"#ffffff",align:"center"}).setOrigin(.5),this.remainingText=this.add.text(180,350,"remaining",{fontFamily:"Quantico",fontSize:38,color:"#ffffff",align:"center"}).setOrigin(.5),this.coinsText=this.add.text(260,30,"0",{fontFamily:"Quantico",fontSize:38,color:"#ffffff",align:"right",fixedWidth:100}).setOrigin(.5),this.doneButton=this.add.sprite(180,420,"done_button"),this.doneButton.setInteractive(),this.doneButton.on("pointerdown",(()=>{this.state=1})),this.doneText=this.add.text(180,420,"DONE",{fontFamily:"Quantico",fontSize:54,color:"#ffffff",align:"center"}).setOrigin(.5),this.doneCoin1=this.add.sprite(110,420,"coin",0),this.doneCoin2=this.add.sprite(250,420,"coin",0);for(const e of[this.doneCoin1,this.doneCoin2])e.anims.create({key:"spin",frames:"coin",frameRate:15,repeat:-1}),e.anims.startAnimation("spin"),e.scale=2;this.clockFormat=new Intl.DateTimeFormat(void 0,{timeStyle:"short"}),this.levels=[{name:"Level 1",description:"Morning Wee",finishBy:r(new Date,7,20)},{name:"Level 2",description:"Breakfast",finishBy:r(new Date,7,40)},{name:"Level 3",description:"Get Toothbrush\nReady",finishBy:r(new Date,7,45)},{name:"Pause",description:"Brush Teeth &\nWash Face",fixedTimeSeconds:150,fixedReward:100},{name:"Level 4",description:"Get Dressed",finishBy:r(new Date,8,0)},{name:"Level 5",description:"Start Sit",finishBy:r(new Date,8,3)},{name:"Pause",description:"Sit",fixedTimeSeconds:720,fixedReward:500},{name:"Pause",description:"Wipe &\nWash Hands",fixedTimeSeconds:120,fixedReward:100},{name:"Level 6",description:"Shoes and Coat",finishBy:r(new Date,8,25)},{name:"Finished",description:"Have a great day!",finishBy:r(new Date,7,0)}],this.setLevel(0),this.coins=0}update(e,t){this.background.tilePositionX+=t/10;const i=new Date,s=this.clockFormat.format(i.getTime());this.title.text=s;const a=this.levels[this.currentLevelIndex];0===this.state?a.finishBy?this.totalSecondsLeft=Math.max(0,Math.round((a.finishBy.getTime()-i.getTime())/1e3)):a.fixedTimeSeconds&&(this.totalSecondsLeft=Math.max(0,Math.round(a.fixedTimeSeconds-(i.getTime()-this.levelStartTime)/1e3)),0===this.totalSecondsLeft&&(this.doneButton.visible=!0,this.doneText.visible=!0,this.doneCoin1.visible=!0,this.doneCoin2.visible=!0)):1===this.state&&(this.totalSecondsLeft-=1,this.totalSecondsLeft<=0?(this.coins+=this.levels[this.currentLevelIndex].fixedReward??0,this.setLevel(Math.min(this.levels.length-1,this.currentLevelIndex+1))):this.coins++);const n=Math.floor(this.totalSecondsLeft/60).toString().padStart(2,"0"),r=(this.totalSecondsLeft%60).toString().padStart(2,"0");this.timeLeftText.text=`${n}:${r}`,this.levelNameText.text=a.name,this.levelDescriptionText.text=a.description,this.coinsText.text=this.coins.toString()}setLevel(e){var t;this.currentLevelIndex=e;const i=this.levels[e],s=new Date;this.levelStartTime=s.getTime(),this.state=0;const a=!!i.fixedReward;this.doneText.text=(null==(t=i.fixedReward)?void 0:t.toString())??"DONE",this.doneButton.visible=!a,this.doneText.visible=!a,this.doneCoin1.visible=!1,this.doneCoin2.visible=!1}}class c extends i.Scene{constructor(){super("Preloader")}init(){this.add.image(0,0,"background"),this.add.rectangle(512,384,468,32).setStrokeStyle(1,16777215);const e=this.add.rectangle(282,384,4,28,16777215);this.load.on("progress",(t=>{e.width=4+460*t}))}preload(){this.load.setPath("assets"),this.load.spritesheet("smart_boy_red","smart_boy_red.png",{frameWidth:113,frameHeight:176,startFrame:0,endFrame:42}),this.load.spritesheet("countess","countess.png",{frameWidth:128,frameHeight:78,startFrame:0,endFrame:5}),this.load.spritesheet("cute_girl","girl_run.png",{frameWidth:416,frameHeight:454,startFrame:0,endFrame:19})}create(){this.scene.start("CharacterSelect")}}class h extends i.Scene{constructor(){super("CharacterSelect"),t(this,"background"),t(this,"nextButton"),t(this,"prevButton"),t(this,"title"),t(this,"timeLeftText"),t(this,"remainingText"),t(this,"levelNameText"),t(this,"levelDescriptionText"),t(this,"doneText"),t(this,"characters"),t(this,"currentCharacterIndex")}create(){this.background=this.add.tileSprite(180,400,360,800,"background"),this.characters=[{key:"smart_boy",frameRate:30,scale:1},{key:"smart_boy_red",frameRate:30,scale:1},{key:"cute_girl",frameRate:25,scale:.4},{key:"countess",frameRate:10,scale:2}];const e=this.add.sprite(180,350,"smart_boy",0);for(const i of this.characters)e.anims.create({key:i.key,frames:i.key,frameRate:i.frameRate,repeat:-1});this.currentCharacterIndex=0,e.scale=this.characters[this.currentCharacterIndex].scale,e.anims.startAnimation(this.characters[this.currentCharacterIndex].key),this.title=this.add.text(180,150,"Character\nSelect",{fontFamily:"Quantico",fontSize:60,color:"#ffffff",align:"center"}).setOrigin(.5);const t=this.add.sprite(180,500,"done_button");t.setInteractive(),t.on("pointerdown",(()=>{this.scene.start("MainMenu",{character:this.characters[this.currentCharacterIndex]})})),this.doneText=this.add.text(180,500,"GO!",{fontFamily:"Quantico",fontSize:54,color:"#ffffff",align:"center"}).setOrigin(.5),this.nextButton=this.add.sprite(300,350,"character_select_arrow",0),this.nextButton.setInteractive(),this.nextButton.on("pointerdown",(()=>{this.currentCharacterIndex=(this.currentCharacterIndex+1)%this.characters.length,e.anims.startAnimation(this.characters[this.currentCharacterIndex].key),e.scale=this.characters[this.currentCharacterIndex].scale})),this.prevButton=this.add.sprite(60,350,"character_select_arrow",0),this.prevButton.on("pointerdown",(()=>{this.currentCharacterIndex=this.currentCharacterIndex-1,-1===this.currentCharacterIndex&&(this.currentCharacterIndex=this.characters.length-1),e.anims.startAnimation(this.characters[this.currentCharacterIndex].key),e.scale=this.characters[this.currentCharacterIndex].scale})),this.prevButton.setRotation(Math.PI),this.prevButton.setInteractive()}update(e,t){}}const d={type:Phaser.AUTO,width:360,height:800,parent:"game-container",backgroundColor:"#028af8",scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},scene:[s,c,h,o,a,n]};new i.Game(d);
