(() =>{
  const socket = io();

  let messageList = document.querySelector('ul'),
      chatFrom = document.querySelector('form'),
      nameInput = document.querySelector('.nickname'),
      chatMessage = chatFrom.querySelector('.message'),
      nickName = null;


      function setNickname(){
        //debugger;
        nickName = this.value;
      }

      function appendMessage(msg) {
        //debugger
        let newMsg = `<li>${msg.message}</li>`;
        messageList.innerHTML += newMsg;

      }

      function appendDiscMessage(msg) {
        //debugger
        let newMsg = `<li>${msg}</li>`;
        messageList.innerHTML += newMsg;

      }


      function handleSendMessage(e) {
        e.preventDefault();//block default behaviour (page reftesh)
        nickName = (nickName && nickName.length > 0) ? nickName : 'CUSTOMER';

        msg = `${nickName} says:    ${chatMessage.value}`;

        socket.emit('chat message', msg)
        chatMessage.valus = '';
        return false;
      }

  nameInput.addEventListener('change', setNickname, false);
  chatFrom.addEventListener('submit', handleSendMessage, false);
  socket.addEventListener('chat message', appendMessage, false);
  socket.addEventListener('disconnect message', appendDiscMessage, false);

})();
