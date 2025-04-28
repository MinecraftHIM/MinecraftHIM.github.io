---
layout: page
permalink: /stories/index.html
title: stories
---
> Update:  2025.1.7

<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>个人简历</title>
	<style>
		body {
		    font-family: 'Arial', 'PingFang SC', sans-serif;
		    margin: 0;
		    padding: 0;
		    background-color: #f5f7fa;
		    color: #333;
		    line-height: 1.6;
		}
		.container {
		    max-width: 800px;
		    margin: 20px auto;
		    background-color: #fff;
		    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		    border-radius: 8px;
		    overflow: hidden;
		}
		.header {
		    background-color: #e8f0fe;
		    padding: 20px;
		    display: flex;
		    align-items: center;
		    justify-content: space-between;
		}
		.header-left {
		    display: flex;
		    align-items: center;
		}
		.header-left img {
		    width: 94px; /* 1寸照片宽度：2.5cm @ 96dpi */
		    height: 132px; /* 1寸照片高度：3.5cm @ 96dpi */
		    border-radius: 8px; /* 轻微圆角，符合证件照风格 */
		    object-fit: cover;
		    margin-right: 20px;
		    border: 2px solid #fff;
		}
		.header-left h1 {
		    margin: 0;
		    font-size: 28px;
		    color: #1e3a8a;
		}
		.header-right {
		    text-align: right;
		    color: #4b5e8e;
		}
		.header-right p {
		    margin: 5px 0;
		}
		.header-right a {
		    color: #4b5e8e;
		    text-decoration: none;
		}
		.header-right a:hover {
		    text-decoration: underline;
		}
		.content {
		    padding: 20px;
		}
		.section {
		    margin-bottom: 20px;
		}
		.section h2 {
		    font-size: 20px;
		    color: #1e3a8a;
		    border-bottom: 2px solid #e8f0fe;
		    padding-bottom: 5px;
		    margin-bottom: 10px;
		}
		.section ul {
		    list-style: none;
		    padding: 0;
		}
		.section ul li {
		    margin-bottom: 10px;
		}
		.section ul li strong {
		    color: #4b5e8e;
		}
		.skills ul {
		    display: flex;
		    flex-wrap: wrap;
		    gap: 10px;
		}
		.skills ul li {
		    background-color: #e8f0fe;
		    padding: 5px 10px;
		    border-radius: 4px;
		    font-size: 14px;
		}
		@media print {
		    .container {
		        box-shadow: none;
		        margin: 0;
		    }
		    body {
		        background-color: #fff;
		    }
		}
		@media (max-width: 600px) {
		    .header {
		        flex-direction: column;
		        text-align: center;
		    }
		    .header-left {
		        flex-direction: column;
		        margin-bottom: 10px;
		    }
		    .header-left img {
		        margin-right: 0;
		        margin-bottom: 10px;
		    }
		    .header-right {
		        text-align: center;
		    }
		}
	</style>
</head>
<body>
	<div class="container">
		<div class="header">
			<div class="header-left">
				<img src="https://minecrafthim.github.io/shanghai.jpg" alt="个人照片">
				<h1>蒋智宇</h1>
			</div>
			<div class="header-right">
				<p>男 22岁 电气自动化 专科</p>
				<p>155-7738-XXXX | QQ2259744332@Gmail.com</p>
				<p>广西桂林市</p>
				<p><a href="https://github.com/MinecraftHIM">GitHub</a> | <a href="https://linkedin.com/">LinkedIn</a></p>
			</div>
		</div>
		<div class="content">
			<div class="section">
				<h2>教育背景</h2>
				<p>2022.09-2025.06</p>
			</div>
			<div class="section">
				<h2>个人简介</h2>
				<p>熟练掌握Git分布式版本控制系统、MarkDown语言、以及专业知识,有较强自学能力 开发过个人博客网站以及部分应用程序脚本语言开发经历 个人性格沉稳身体健康没有嗜好
                    善于逻辑思考 探究原理并举一反三.</p>
			</div>
			<div class="section">
				<h2>工作经历</h2>
				<ul>
					<li>
						<strong>生计操作员 | 立讯精密有限公司</strong><br> 2023.09 - 2023.12 | 苏洲市<br> 机器报警处理及设备生产速率调配- <br> - 定制win系统的维护根据生产员的情况调节设备运行速度及上料加料。<br> - 与工程师和线组长协作，确保产品数量和质量并按时交付。
					</li>
					<li>
						<strong>初级前端开发 | 某互联网公司</strong><br> 2018.03 - 2020.05 | 北京市<br> - 参与移动端H5页面开发，适配多种设备。<br> - 维护公司CMS系统，修复30+功能性问题。
					</li>
				</ul>
			</div>
			<div class="section">
				<h2>教育背景</h2>
				<ul>
					<li>
						<strong>计算机科学与技术 | 北京大学</strong><br> 学士学位 | 2014.09 - 2018.06<br> - 主修课程：数据结构、算法、Web开发
					</li>
				</ul>
			</div>
			<div class="section skills">
				<h2>技能</h2>
				<ul>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript</li>
					<li>React</li>
					<li>Vue.js</li>
					<li>Git</li>
					<li>Webpack</li>
					<li>Node.js</li>
				</ul>
			</div>
			<div class="section">
				<h2>项目经验</h2>
				<ul>
					<li>
						<strong>企业官网重构</strong><br> 2021.01 - 2021.06<br> - 使用React和TypeScript重构官网，提升SEO排名。<br> - 引入懒加载和代码分割，减少首次加载时间20%。
					</li>
					<li>
						<strong>电商平台H5开发</strong><br> 2020.08 - 2020.12<br> - 开发移动端购物页面，支持多种支付方式。<br> - 优化交互体验，用户留存率提升15%。
					</li>
				</ul>
			</div>
		</div>
	</div>
</body>
</html>