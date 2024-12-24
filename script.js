// Kullanıcı bilgilerini yönet
const loginForm = document.getElementById('loginForm');
const userList = document.getElementById('userList');

// Kullanıcı Paneli: Giriş işlemi
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kullanıcı bilgilerini kaydet
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    // Başarı sayfasına yönlendir
    window.location.href = 'success.html';
  });
}

// Admin Paneli: Kullanıcı verilerini görüntüle
if (userList) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.forEach((user) => {
    const li = document.createElement('li');
    li.textContent = `Kullanıcı: ${user.username}, Şifre: ${user.password}`;
    userList.appendChild(li);
  });
}
