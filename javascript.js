var VideoAku = document.getElementById("videoku");  
 function tekanPause() {  
  if (VideoAku.paused)  
    VideoAku.play();  
  else  
    VideoAku.pause();  
}  
 function menjadiBig() {  
    VideoAku.width = 560;  
}  
 function menjadiSmall() {  
    VideoAku.width = 320;  
}  
 function menjadiNormal() {  
    VideoAku.width = 430;  
}  

