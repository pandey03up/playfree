import React ,{useState} from 'react'
import YouTube from 'react-youtube';

function Streaming(props) {
    
  const [index,setIndex] = useState(0)

    function _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.playVideo();
    }
    function afterEnd(event){
      setIndex(index+1)
    }
        const opts = {
            height: '500',
            width: '80%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 1
            }
          };

        return(
            <div>
                <YouTube videoId = {props.id[index]}
                    opts={opts}
                    onReady={_onReady} 
                    onEnd = {afterEnd}
                    />
            </div>
        )
    }

export default Streaming