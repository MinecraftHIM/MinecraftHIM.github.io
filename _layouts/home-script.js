// 获取切换按钮元素
const toggleButton = document.getElementById('toggleButton');

// 为切换按钮添加点击事件处理函数
toggleButton.addEventListener('click', function() {
  // 获取 body 元素
  const body = document.body;
  // 切换黑暗模式类
  body.classList.toggle('dark-mode');
});