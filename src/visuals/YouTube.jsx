import YouTube from "react-youtube";


export default function MyVideo() {
     const options = {
       height: '315',
       width: '560',
       playerVars: {
         autoplay: 1,
         controls: 1,
      }    
    };
 
   const _onReady = (event) => {
     event.target.pauseVideo();
   }
   return (
    <YouTube 
        videoId = "kMxHhB_ULVk" 
        options = { options } 
        onReady = { _onReady } 
        id = "video"/>
    )
};