// sounds
const kevin_lee=new Audio('sounds/kevin_lee.mp3');
const sick=new Audio('sounds/sick.mp3');
const tito=new Audio('sounds/tito.mp3')

const sounds=[kevin_lee,sick,tito];

const pauseAudio= ()=>{

	sounds.map(sound=>{
		sound.pause();
		sound.currentTime=0;
	})
}

// 
const button1=document.querySelector('.one');
button1.addEventListener('click',()=>{
	
pauseAudio();
	kevin_lee.play();
})
// 
const button2=document.querySelector('.two');
button2.addEventListener('click',()=>{
pauseAudio();
	sick.play();
})

// 
const button3= document.querySelector('.three');
button3.addEventListener('click',()=>{
	pauseAudio();
	tito.play();
})


