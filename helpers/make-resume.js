 
const fs = require('fs');
const { mdToPdf } = require('md-to-pdf');

(async () => {
	const pdf = await mdToPdf({ path: 'content/about/index.md' }, { dest: 'static/downloads/resume.pdf' }).catch(console.error);

	if (pdf) {
		fs.writeFileSync(pdf.filename, pdf.content);
	}
	process.exit();
})();