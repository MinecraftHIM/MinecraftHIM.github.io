---
layout: page
permalink: /stories/index.html
title: stories
---
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
				<img src="https://minecrafthim.github.io/images/JZY.jpg" alt="个人照片">
				<h1>蒋智宇</h1>
			</div>
			<div class="header-right">
				<p>男 22岁 电气自动化 专科</p>
				<p>155-7738-8419</p>
				<p> QQ2259744332@Gmail.com</p>
				<p>广西桂林市</p>
				<p><a href="https://github.com/MinecraftHIM">GitHub</a> | <a href="https://linkedin.com/">LinkedIn</a></p>
			</div>
		</div>
		<div class="content">
			<div class="section">
				<h2>教育背景</h2>
                <ul >
                <li><strong>灌阳第二高级中学 | 高中</strong><br>2019.09-2022.06 - 桂林</li>
                <li><strong>广西理工职业技术学院 | 专科</strong><br>
                2022.09-2025.06 - 南宁 
                  <br>-专业:电气自动化技术
                  <br>-主修课程:可编程控制器技术(PLC)、嵌入式系统开发(单片机原理)、供配电、电力电子技术、等
                </li>  
                </ul>
			</div>
		    <div class="section">
				<h2>个人简介</h2>
				<p>熟练掌握专业课程知识并通过自学学会Git分布式版本控制系统、MarkDown语言和网页开发语言工具等。
             <br>有较强自学能力 有过个人博客网站以及应用程序脚本开发经历
             <br>性格沉稳 身体健康 没有嗜好 善于逻辑思考 探究原理并举一反三.</p>
			</div>
			<div class="section">
				<h2>工作经历</h2>
				<ul>
					<li>
						<strong>生产操作员 | 立讯精密有限公司</strong><br> 2023.09 - 2023.12 - 苏州<br>-  机器报警处理及设备传送带、传感器维护维修。<br> - 操作定制化win系统的可视化组态界面 根据实际生产情况调节设备运行速率以及添加物料。<br> - 与线组长协作，确保产品数量质量达到要求并按时交付。
					</li>
					<li>
						<strong>机械装配员 | 上汽通用五菱有限公司</strong><br> 2024.09 - 2024.12 - 柳州<br> - 参与汽车零部件装配，质量问题排查。<br> - 操作生产设备并监控设备运行状态。<br>-负责设备的维护、耗材替换、清洁等。
					</li>
				</ul>
			</div>

			<div class="section skills">
				<h2>专业技能</h2>
				<ul style="list-style-type: none;">
					<li>计算机二级</li>
	                <li>低压电工证</li>
	                <li>PLC编程</li>
	                <li>AutoCAD<li>
	                <li>WinCC</li>
	                <li>Multsim电路设计<li>
					<li>HTML5</li>
					<li>JavaScript</li>
					<li>Git</li>
				</ul>
			</div>
			<div class="section">
				<h2>项目经验</h2>
				<ul>
					<li>
						<strong>XXXXX</strong><br> 2021.01 - 2021.06<br> - 使用React和TypeScript重构官网，提升SEO排名。<br> - 引入懒加载和代码分割，减少首次加载时间20%。
					</li>
					<li>
						<strong>个人网页开发</strong><br> 2022.09 - 2022.09<br> - 开发博客网页，支持基础发文功能。<br> - 添加网页嵌入交互、访问记录功能。
					</li>
				</ul>
			</div>
		</div>
	</div>
</body>
</html>