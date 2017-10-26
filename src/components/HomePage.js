import React,{Component} from 'react';
// const socket = io.connect('/api')


class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount(){
        this.openSocket()
    }
     openSocket(){
        let webSocket;
        console.log(webSocket);
        // Ensures only one connection is open at a time
        if(webSocket !== undefined && webSocket.readyState !== WebSocket.CLOSED){
            console.log("WebSocket is already opened.");
            return;
        }
        // Create a new instance of the websocket
       // webSocket = new WebSocket("ws://120.26.207.77/album/echo");
        webSocket = new WebSocket("ws://172.17.3.158:8081/schoolexam/echo");
        /**
         * Binds functions to the listeners for the websocket.
         */
        webSocket.onopen = function(event){
            // send message to server
            webSocket.send(".你小子");
            
            // For reasons I can't determine, onopen gets called twice
            // and the first time event.data is undefined.
            // Leave a comment if you know the answer.
            if(event.data === undefined)
                return;
    
            console.log(event.data);
            
        };
        
    
        webSocket.onmessage = function(event){
            console.log(event);
        };
    
        webSocket.onclose = function(event){
            console.log("Connection closed");
        };
    }
    
    /**
     * Sends the value of the text input to the server
     */

    
    // closeSocket(){
    //     webSocket.close();
    // }
    render() {
        return <div>
                <ul id="messages"></ul>
                <form action="">
                <input id="m" autocomplete="off" /><button>Send</button>
                </form>
        </div>
    }
}

export default HomePage