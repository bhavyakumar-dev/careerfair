import fs from 'fs';

['v2.html', 'public/v2.html'].forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace('"body": ["Inter", "sans-serif"]', '"body": ["Plus Jakarta Sans", "sans-serif"]');
  fs.writeFileSync(f, content, 'utf8');
});

['v4.html', 'public/v4.html'].forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace('"body": ["Inter", "sans-serif"]', '"body": ["Public Sans", "sans-serif"]');
  fs.writeFileSync(f, content, 'utf8');
});

console.log('Fonts updated successfully');
