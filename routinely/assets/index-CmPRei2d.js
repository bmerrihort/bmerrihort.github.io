var e=Object.defineProperty,t=(t,i,n)=>((t,i,n)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n)(t,"symbol"!=typeof i?i+"":i,n);import{p as i}from"./phaser-CwoquCe3.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();class n extends i.Scene{constructor(){super("Boot")}preload(){this.load.image("background","assets/mountains.png"),this.load.image("done_button","assets/done_button.png"),this.load.spritesheet("smart_boy","assets/smart_boy.png",{frameWidth:113,frameHeight:176,startFrame:0,endFrame:42})}create(){this.scene.start("Preloader")}}class s extends i.Scene{constructor(){super("Game"),t(this,"camera"),t(this,"background"),t(this,"msg_text")}create(){this.camera=this.cameras.main,this.camera.setBackgroundColor(65280),this.background=this.add.image(512,384,"background"),this.background.setAlpha(.5),this.msg_text=this.add.text(512,384,"Make something fun!\nand share it with us:\nsupport@phaser.io",{fontFamily:"Arial Black",fontSize:38,color:"#ffffff",stroke:"#000000",strokeThickness:8,align:"center"}),this.msg_text.setOrigin(.5),this.input.once("pointerdown",(()=>{this.scene.start("GameOver")}))}}class r extends i.Scene{constructor(){super("GameOver"),t(this,"camera"),t(this,"background"),t(this,"gameover_text")}create(){this.camera=this.cameras.main,this.camera.setBackgroundColor(16711680),this.background=this.add.image(512,384,"background"),this.background.setAlpha(.5),this.gameover_text=this.add.text(512,384,"Game Over",{fontFamily:"Arial Black",fontSize:64,color:"#ffffff",stroke:"#000000",strokeThickness:8,align:"center"}),this.gameover_text.setOrigin(.5),this.input.once("pointerdown",(()=>{this.scene.start("MainMenu")}))}}function a(e,t,i){const n=new Date(e.getTime());return n.setHours(t),n.setMinutes(i),n.setSeconds(0),n.setMilliseconds(0),n}class o extends i.Scene{constructor(){super("MainMenu"),t(this,"background"),t(this,"logo"),t(this,"title"),t(this,"timeLeftText"),t(this,"remainingText"),t(this,"levelNameText"),t(this,"levelDescriptionText"),t(this,"doneText"),t(this,"clockFormat"),t(this,"levels"),t(this,"currentLevelIndex")}create(){this.background=this.add.tileSprite(180,400,360,800,"background");const e=this.add.sprite(180,714,"smart_boy",0);e.anims.create({key:"run",frames:"smart_boy",frameRate:30,repeat:-1}),e.anims.startAnimation("run"),this.title=this.add.text(70,30,"Main Menu",{fontFamily:"Quantico",fontSize:38,color:"#ffffff",align:"center"}).setOrigin(.5),this.levelNameText=this.add.text(180,140,"Main Menu",{fontFamily:"Quantico",fontSize:52,color:"#ffffff",align:"center",fontStyle:"bold"}).setOrigin(.5),this.levelDescriptionText=this.add.text(180,200,"Main Menu",{fontFamily:"Quantico",fontSize:38,color:"#ffffff",align:"center"}).setOrigin(.5),this.timeLeftText=this.add.text(180,300,"Main Menu",{fontFamily:"Quantico",fontSize:64,color:"#ffffff",align:"center"}).setOrigin(.5),this.remainingText=this.add.text(180,350,"remaining",{fontFamily:"Quantico",fontSize:38,color:"#ffffff",align:"center"}).setOrigin(.5);const t=this.add.sprite(180,420,"done_button");t.setInteractive(),t.on("pointerdown",(()=>{this.currentLevelIndex=Math.min(this.levels.length-1,this.currentLevelIndex+1)})),this.doneText=this.add.text(180,420,"DONE",{fontFamily:"Quantico",fontSize:54,color:"#ffffff",align:"center"}).setOrigin(.5),this.clockFormat=new Intl.DateTimeFormat(void 0,{timeStyle:"short"}),this.levels=[{name:"Level 1",description:"Morning Wee",finishBy:a(new Date,8,0)},{name:"Level 2",description:"Breakfast",finishBy:a(new Date,8,15)},{name:"Level 3",description:"Get Dressed",finishBy:a(new Date,8,23)},{name:"Level 4",description:"Shoes On",finishBy:a(new Date,8,28)},{name:"Level 5",description:"Get In Car",finishBy:a(new Date,8,30)}],this.currentLevelIndex=0}update(e,t){this.background.tilePositionX+=t/10;const i=new Date,n=this.clockFormat.format(i.getTime());this.title.text=n;const s=this.levels[this.currentLevelIndex],r=Math.max(0,Math.round((s.finishBy.getTime()-i.getTime())/1e3)),a=Math.floor(r/60).toString().padStart(2,"0"),o=(r%60).toString().padStart(2,"0");this.timeLeftText.text=`${a}:${o}`,this.levelNameText.text=s.name,this.levelDescriptionText.text=s.description}}class c extends i.Scene{constructor(){super("Preloader")}init(){this.add.image(0,0,"background"),this.add.rectangle(512,384,468,32).setStrokeStyle(1,16777215);const e=this.add.rectangle(282,384,4,28,16777215);this.load.on("progress",(t=>{e.width=4+460*t}))}preload(){this.load.setPath("assets")}create(){this.scene.start("MainMenu")}}const l={type:Phaser.AUTO,width:360,height:800,parent:"game-container",backgroundColor:"#028af8",scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},scene:[n,c,o,s,r]};new i.Game(l);
