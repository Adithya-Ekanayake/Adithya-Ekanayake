const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '..', 'public', 'resume', 'Adithya_Ekanayake_Resume.pdf');
const document = new PDFDocument({ size: 'A4', margin: 48, bufferPages: true, info: {
  Title: 'Adithya Ekanayake Resume',
  Author: 'Adithya Ekanayake',
  Subject: 'Software Developer Resume'
} });

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
document.pipe(fs.createWriteStream(outputPath));

const colors = {
  ink: '#17202A',
  muted: '#52606D',
  accent: '#0F766E',
  pale: '#E6FFFA',
  rule: '#CBD5E1'
};

const left = document.page.margins.left;
const right = document.page.width - document.page.margins.right;
const contentWidth = right - left;

function heading(text) {
  document.moveDown(0.8);
  document.font('Helvetica-Bold').fontSize(11).fillColor(colors.accent).text(text.toUpperCase(), left, document.y, { characterSpacing: 0.8 });
  document.moveTo(left, document.y + 5).lineTo(right, document.y + 5).strokeColor(colors.rule).lineWidth(0.6).stroke();
  document.moveDown(0.45);
}

function paragraph(text, options = {}) {
  document.font(options.bold ? 'Helvetica-Bold' : 'Helvetica').fontSize(options.size || 9.5).fillColor(options.color || colors.ink).text(text, { lineGap: 2, width: contentWidth });
}

function bullet(text) {
  document.font('Helvetica').fontSize(9.2).fillColor(colors.ink).text(`•  ${text}`, { indent: 10, hanging: 10, lineGap: 2, width: contentWidth - 10 });
}

function role(title, meta, details) {
  document.font('Helvetica-Bold').fontSize(10).fillColor(colors.ink).text(title, { width: contentWidth });
  document.font('Helvetica-Oblique').fontSize(8.6).fillColor(colors.muted).text(meta, { width: contentWidth });
  details.forEach(bullet);
  document.moveDown(0.2);
}

document.rect(0, 0, document.page.width, 112).fill(colors.pale);
document.font('Helvetica-Bold').fontSize(24).fillColor(colors.ink).text('ADITHYA EKANAYAKE', left, 38);
document.font('Helvetica').fontSize(11).fillColor(colors.accent).text('Software Developer | Information Systems Undergraduate', left, 70);
document.font('Helvetica').fontSize(8.7).fillColor(colors.muted).text('adithyaekanayake2@gmail.com  |  github.com/Adithya-Ekanayake  |  linkedin.com/in/adithya-ekanayake-b38267349', left, 91, { width: contentWidth });
document.y = 132;

heading('Professional Profile');
paragraph('Motivated Information Systems undergraduate and aspiring software engineer with hands-on experience building responsive web interfaces, full-stack applications, and practical developer tools. Strong interest in software engineering, business analysis, data, project management, and AI integration. Currently seeking opportunities to contribute to useful products while continuing to grow through real-world development work.');

heading('Education');
document.font('Helvetica-Bold').fontSize(10).fillColor(colors.ink).text('BSc (Hons) in Information Systems (Reading)', { continued: true });
document.font('Helvetica').fontSize(9).fillColor(colors.muted).text('  2024 - Present');
paragraph('Sabaragamuwa University of Sri Lanka, Faculty of Computing | Belihuloya, Sri Lanka');
document.font('Helvetica-Bold').fontSize(10).fillColor(colors.ink).text('GCE A/L (Physical Stream)', { continued: true });
document.font('Helvetica').fontSize(9).fillColor(colors.muted).text('  2020 - 2023');
paragraph("Pushpadana Girls' College Kandy | Combined Mathematics, Physics, Chemistry");

heading('Technical Skills');
paragraph('Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, responsive UI design, Framer Motion');
paragraph('Backend and Data: Node.js, Express.js, Spring Boot, MySQL, database design, REST APIs');
paragraph('Tools and Practices: Git, GitHub, VS Code, Postman, Figma, project management, business analysis');

heading('Featured Projects');
role('EduConnect', 'React.js, Node.js | Peer-to-peer academic skill sharing platform', [
  'Designed a platform that helps university students share skills and connect with peers.',
  'Contributed to full-stack application development and practical feature implementation.'
]);
role('MoodCast', 'JavaScript | AI-powered mood-based daily planner', [
  'Combines journaling, wellness tips, food ordering, and Spotify playlist recommendations in one experience.'
]);
role('Coasty Lanka', 'JavaScript | Sri Lankan coastal travel explorer', [
  'Built an accessible web experience for discovering beaches and coastal destinations across Sri Lanka.'
]);

document.addPage();
document.font('Helvetica-Bold').fontSize(17).fillColor(colors.ink).text('ADITHYA EKANAYAKE');
document.font('Helvetica').fontSize(9).fillColor(colors.muted).text('Software Developer | Full-Stack Development | Information Systems');

heading('Additional Projects');
role('Student Management System', 'JavaScript | Academic administration portal', [
  'Developed a portal concept for university student record tracking and academic administration workflows.'
]);
role('DevPulse Dashboard', 'React.js | Developer activity monitor', [
  'Created a dashboard concept for tracking project tasks and personal developer activity.'
]);

heading('Professional Development');
bullet('Continuing to learn complete full-stack project development and deployment workflows.');
bullet('Exploring practical AI integration in applications and expanding development tools and programming languages.');
bullet('Building knowledge in business analysis, data analysis, advanced databases, and data mining.');
bullet('Open to software engineering internships and collaborative development opportunities.');

heading('Verified Qualifications - 2026');
role('Full-Stack Web Developer', 'LinkedIn Learning | 2026', ['Full-stack web development concepts and practices.']);
role('Database for Node.js Developers', 'LinkedIn Learning | 2026', ['Database concepts and their use in Node.js applications.']);
role('Front-End Development', 'Department of Information Technology, University of Moratuwa through CODL | 2026', ['Front-end development principles and modern web interfaces.']);
role('Introduction to Business Analysis', 'LinkedIn Learning | 2026', ['Business analysis concepts and requirements-focused thinking.']);
role('Foundation of Project Management', 'Department of Information Technology, University of Moratuwa through CODL | 2026', ['Foundational project management concepts and practices.']);

heading('Contact and Links');
paragraph('Email: adithyaekanayake2@gmail.com');
paragraph('GitHub: https://github.com/Adithya-Ekanayake');
paragraph('LinkedIn: https://www.linkedin.com/in/adithya-ekanayake-b38267349/');

document.font('Helvetica-Oblique').fontSize(8).fillColor(colors.muted).text('References and detailed project information available on request.', left, 760, { width: contentWidth, align: 'center' });
document.end();

console.log(`Generated ${outputPath}`);