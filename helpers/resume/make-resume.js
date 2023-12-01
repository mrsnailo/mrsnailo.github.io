const markdown = require('markdown-it')({
	html: true,
	linkify: true,
	typographer: true
  });
  const puppeteer = require('puppeteer');
  const fs = require('fs');
  const matter = require('gray-matter');
  
  (async () => {
	const browser = await puppeteer.launch({headless: "new"});
	const page = await browser.newPage();
	
	const markdownFilePath = 'content/about/index.md'; // Replace this with the path to your Markdown file
	
	try {
	  const fileContent = fs.readFileSync(markdownFilePath, 'utf-8');
	  const { content } = matter(fileContent);
	  
	  fs.writeFileSync("static/downloads/resume.html", markdown.render(content), 'utf-8');
	  await page.setContent(markdown.render(content));
	  await page.pdf({ path: 'static/downloads/output.pdf', format: 'A4' });
	  
	  console.log('PDF generated successfully!');
	} catch (error) {
	  console.error('Error:', error);
	} finally {
	  await browser.close();
	}
  })();
  