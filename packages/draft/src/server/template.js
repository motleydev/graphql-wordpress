import draftCSS from 'public/Draft.css';

export default ({
  root = '',
  ids = [],
  css = '',
  manifestJSBundle,
  vendorJSBundle,
  mainJSBundle,
}) => `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="${draftCSS}" />
${css ? `<style>${css}</style>` : ''}
<script>window.__emotion = ${JSON.stringify(ids)}</script>
</head>
<body>
  <main id="main">${root}</main>
${manifestJSBundle ? `<script defer src="${manifestJSBundle}"></script>` : ''}
${vendorJSBundle ? `<script defer src="${vendorJSBundle}"></script>` : ''}
${mainJSBundle ? `<script defer src="${mainJSBundle}"></script>` : ''}
</body>
</html>`;
