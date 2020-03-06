import React ,{Component} from 'react'
import {connect} from 'react-redux'
import './Links.css'

class Links extends Component{
    render(){
        return(
            <div>
                <div id = 'InputField'>
                     <input id = 'Input' placeholder = 'Enter The Link' 
                            value = {this.props.Value} 
                            onInput = {(event) => this.props.insertVideo(event.target.value)}></input>
                     <button className = 'Button' onClick = {this.props.addVideo}>ADD</button>
                </div>
                <div>
                    <h4>Playlist</h4>
                    <div id = "List">
                        {
                            this.props.List.map((video,index) =>{
                                return(
                                    <div key = {index} className='videoId'>
                                        <span>{index+1}.</span><span>Video {index+1}</span>
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapPlayList = state =>{
    return{
        List : state.list,
        Value : state.value
    }
}
const dispatchList = dispatch =>{
    return{
        insertVideo : (term) => dispatch({type : 'INSERT',value: term}),
        addVideo : () => dispatch({type:'EXECUTE'}),
    }
}

export default connect(mapPlayList,dispatchList)(Links)