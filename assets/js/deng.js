const toggleSwitch = document.getElementById('toggleSwitch'); //  假设你有一个id为'toggleSwitch'的开关按钮

toggleSwitch.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});