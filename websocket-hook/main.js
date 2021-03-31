token = '';

function connectSocket() {
    const socket = io('https://arvia.chat', {
      transportOptions: {
        polling: {
          extraHeaders: {
            'DashboardUser': true,
            'Authorization': 'Bearer ' + token
          }
        }
      }
    });
    socket.on('Got_Active_Rooms', params => {
      clearRoomList();
      for(let p of params) {
        addRoom(p.name);
      }
    });
    socket.on("connect", () => {
      setStatus('Connected');
      socket.emit('Get_Active_Rooms');
    });
}

function addRoom(name) {
  const table = document.querySelector('tbody');
  const td = document.createElement('td');
  td.textContent = name;  
  const tr = document.createElement('tr');
  tr.appendChild(td);
  table.appendChild(tr);
}

function clearRoomList() {
  const table = document.querySelector('tbody');
  table.innerHTML = '';
}

function setStatus(text) {
  const status = document.querySelector('#status');
  status.textContent = text;
}

function init() {
  setStatus('No init');
  connectSocket();
}

document.addEventListener('DOMContentLoaded', init);

