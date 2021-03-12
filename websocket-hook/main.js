token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjA3OGQ5M2EyMGE5NzAwMzkxZGRhN2QiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MTU0OTA2MDksImV4cCI6MTYxNTU3NzAwOX0.FFn3JfhlX5eqg7jier2MCFiELf3ZxTJY_LDaw8CUlWg';

function connectSocket() {
    const socket = io('https://arvia.ch:4343', {
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

