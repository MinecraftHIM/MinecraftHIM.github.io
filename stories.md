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
				<p>机械工程师</p>
				<p>138-1234-5678 | zhangwei@email.com</p>
				<p>广西桂林市</p>
				<p><a href="https://github.com/zhangwei">GitHub</a> | <a href="https://linkedin.com/in/zhangwei">LinkedIn</a></p>
			</div>
		</div>
		<div class="content">
			<div class="section">
				<h2>个人简介</h2>
				<p>熟练掌握HTML、CSS、JavaScript及React框架，致力于构建用户友好的Web应用。善于团队协作，注重代码质量和项目效率。</p>
			</div>
			<div class="section">
				<h2>工作经历</h2>
				<ul>
					<li>
						<strong>前端开发工程师 | 某科技公司</strong><br> 2020.06 - 至今 | 北京市<br> - 主导公司官网重构项目，提升页面加载速度30%。<br> - 使用React开发内部管理系统，优化用户操作流程。<br> - 与设计师和后端团队协作，确保项目按时交付。
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