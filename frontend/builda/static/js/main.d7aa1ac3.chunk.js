(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(8),c=n.n(o),r=(n(15),n(2)),i=n(1),l=n(4),u=n(3),m=(n(16),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).usernameChangeHandler=function(e){a.setState({username:e.target.value})},a.state={username:""},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"login"},s.a.createElement("form",{onSubmit:function(t){return e.props.handleLogin(t,e.state.username)},className:"form"},s.a.createElement("input",{type:"text",onChange:this.usernameChangeHandler,value:this.state.username,placeholder:"Username",required:!0}),s.a.createElement("button",{className:"submit",type:"submit"},"Let's Chat!")))}}]),n}(a.Component)),h=n(9),g=n(5),f=(n(17),n(6)),d="ws://localhost:8000/ws/chat",v=function(){function e(){Object(r.a)(this,e),this.callbacks={},this.socketRef=null}return Object(i.a)(e,null,[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),Object(i.a)(e,[{key:"connect",value:function(){var e=this,t=d;this.socketRef=new WebSocket(t),this.socketRef.onmessage=function(t){e.socketNewMessage(t.data)},this.socketRef.onopen=function(){console.log("WebSocket open")},this.socketRef.onerror=function(e){console.log(e.message)},this.socketRef.onclose=function(){console.log("WebSocket closed, restarting.."),e.connect()}}},{key:"socketNewMessage",value:function(e){var t=JSON.parse(e),n=t.command;0!==Object.keys(this.callbacks).length&&("messages"===n&&this.callbacks[n](t.messages),"new_message"===n&&(console.log("okay so this was called"),this.callbacks[n](t.message)))}},{key:"initChatUser",value:function(e){this.sendMessage({command:"init_chat",username:e})}},{key:"fetchMessages",value:function(e){this.sendMessage({command:"fetch_messages",username:e})}},{key:"newChatMessage",value:function(e){this.sendMessage({command:"new_message",from:e.from,text:e.text})}},{key:"addCallbacks",value:function(e,t){this.callbacks.messages=e,this.callbacks.new_message=t}},{key:"sendMessage",value:function(e){try{console.log(Object(f.a)({},e)),this.socketRef.send(JSON.stringify(Object(f.a)({},e)))}catch(t){console.log(t.message)}}},{key:"state",value:function(){return this.socketRef.readyState}},{key:"waitForSocketConnection",value:function(e){var t=this.socketRef,n=this.waitForSocketConnection;setTimeout((function(){if(1===t.readyState)return console.log("Connection is made"),void(null!=e&&e());console.log("Wait for connection.."),n(e)}),1)}}]),e}();v.instance=null;var k=v.getInstance(),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).scrollToBottom=function(){var e=a.messagesEnd,t=e.scrollHeight-e.clientHeight;e.scrollTop=t>0?t:0},a.messageChangeHandler=function(e){a.setState({message:e.target.value})},a.sendMessageHandler=function(e,t){var n={from:a.props.currentUser,text:t};k.newChatMessage(n),a.setState({message:""}),e.preventDefault()},a.renderMessages=function(e){var t=a.props.currentUser;return e.map((function(e,n){return s.a.createElement("li",{key:e.id,className:e.author===t?"me":"her"},s.a.createElement("h4",{className:"author"},e.author),s.a.createElement("p",null,e.content))}))},a.state={message:"",messages:[]},a.waitForSocketConnection((function(){k.initChatUser(a.props.currentUser),k.addCallbacks(a.setMessages.bind(Object(g.a)(a)),a.addMessage.bind(Object(g.a)(a))),k.fetchMessages(a.props.currentUser)})),a}return Object(i.a)(n,[{key:"waitForSocketConnection",value:function(e){var t=this;setTimeout((function(){if(1===k.state())return console.log("Connection is made"),void e();console.log("Waiting for connection.."),t.waitForSocketConnection(e)}),100)}},{key:"addMessage",value:function(e){this.setState({messages:[].concat(Object(h.a)(this.state.messages),[e])})}},{key:"setMessages",value:function(e){this.setState({messages:e.reverse()}),console.log("This was called")}},{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this,t=this.state.messages,n=this.props.currentUser;return s.a.createElement("div",{className:"chat"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"Chatting as ",n),s.a.createElement("h3",null,"Displaying only the recent 50 messages"),s.a.createElement("ul",{ref:function(t){e.messagesEnd=t}},t&&this.renderMessages(t))),s.a.createElement("div",{className:"container message-form"},s.a.createElement("form",{onSubmit:function(t){return e.sendMessageHandler(t,e.state.message)},className:"form"},s.a.createElement("input",{type:"text",onChange:this.messageChangeHandler,value:this.state.message,placeholder:"Start Typing",required:!0}),s.a.createElement("button",{type:"submit",className:"submit",value:"Submit"},"Send"))))}}]),n}(a.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).handleLogin=function(e,t){e.preventDefault(),a.setState({loggedIn:!0,username:t}),k.connect(),console.log(a.state)},a.state={username:"",loggedIn:!1},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.loggedIn;return s.a.createElement("div",{className:"App"},n?s.a.createElement(b,{currentUser:t}):s.a.createElement(m,{handleLogin:this.handleLogin}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.d7aa1ac3.chunk.js.map