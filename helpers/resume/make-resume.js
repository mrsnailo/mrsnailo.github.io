const markdown = require('markdown-it')({
	html: true,
	linkify: true,
	typographer: true
  });
  const puppeteer = require('puppeteer');
  const fs = require('fs');
  const matter = require('gray-matter');
  
  (async () => {
	const browser = await puppeteer.launch({headless: 'true'});
	const page = await browser.newPage();
	
	const markdownFilePath = 'content/about/index.md'; // Replace this with the path to your Markdown file
	
	try {
	  const fileContent = fs.readFileSync(markdownFilePath, 'utf-8');
	  const { content } = matter(fileContent);
	  
	  const htmlContent = markdown.render(content);
  
	  // Overlay a div with background color
	  const htmlWithStyles = `
		<html>
		<head>
		  <style>
			html {
			  font-size: 80%;
			}
			body{
			  background: #363944;
			  color: white;
			}
			a {
			  text-decoration: none;
			  color: #48b0b5;
			}
			code {
			  color: rgba(#06b0c3,1);
			  font-weight: 600;
			  font-size: .875em;
			  background-color: #77c3c3;
			  padding-top: 3px;
			  padding-bottom: 3px;
			  padding-left: 5px;
			  padding-right: 5px;
			  border-radius: .25rem;
			}
			
		  </style>
		</head>
		<body>
		  <div class="background"></div> <!-- Colored div -->
		  ${htmlContent} <!-- Rendered Markdown content -->
		</body>
		</html>
	  `;
  
	  await page.setContent(htmlWithStyles);
	  await page.pdf({ path: 'static/downloads/resume.pdf', format: 'A4', printBackground: true }); // Ensure printBackground is set to true
	  
	  console.log('PDF generated successfully!');
	} catch (error) {
	  console.error('Error:', error);
	} finally {
	  await browser.close();
	}
  })();
  