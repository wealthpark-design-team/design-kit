/* Presentation layer for the published page only: image thumbnails, color swatches, copy button.
   Runs in the browser; the page source (SKILL.md) stays plain text for AI agents. */
(function () {
  function ready(fn) { if (document.readyState !== 'loading') { fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
  ready(function () {
    var body = document.querySelector('.markdown-body');
    if (!body) { return; }

    // 1. Thumbnails for image URLs listed in table cells
    body.querySelectorAll('td').forEach(function (td) {
      var urls = td.textContent.match(/https?:\/\/[^\s<>"']+?\.(?:svg|png|jpe?g|webp)/g);
      if (!urls) { return; }
      var seen = {};
      var strip = document.createElement('div');
      strip.className = 'dk-thumbs';
      urls.forEach(function (u) {
        if (seen[u]) { return; }
        seen[u] = true;
        var a = document.createElement('a');
        a.href = u; a.target = '_blank'; a.rel = 'noopener';
        a.className = 'dk-thumb' + (/inverse/.test(u) ? ' dk-thumb--dark' : '') + (/\/screenshots\//.test(u) ? ' dk-thumb--shot' : '');
        var img = document.createElement('img');
        img.src = u; img.alt = '';
        a.appendChild(img);
        strip.appendChild(a);
      });
      td.insertBefore(strip, td.firstChild);
    });

    // 2. Color swatches in front of hex codes
    var walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, null);
    var nodes = [], n;
    while ((n = walker.nextNode())) { if (/#[0-9A-Fa-f]{6}\b/.test(n.nodeValue)) { nodes.push(n); } }
    nodes.forEach(function (node) {
      var parent = node.parentNode;
      if (!parent || (parent.closest && parent.closest('a, code, pre, script, style, .dk-thumbs'))) { return; }
      var text = node.nodeValue, re = /#[0-9A-Fa-f]{6}\b/g, last = 0, m;
      var frag = document.createDocumentFragment();
      while ((m = re.exec(text))) {
        frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        var sw = document.createElement('span');
        sw.className = 'dk-swatch'; sw.style.background = m[0]; sw.setAttribute('aria-hidden', 'true');
        frag.appendChild(sw);
        frag.appendChild(document.createTextNode(m[0]));
        last = m.index + m[0].length;
      }
      frag.appendChild(document.createTextNode(text.slice(last)));
      parent.replaceChild(frag, node);
    });

    // 3. Copy button on the "how to use" quote
    var quote = body.querySelector('blockquote');
    if (quote && navigator.clipboard) {
      var label = 'この文をコピー';
      var btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'dk-copy'; btn.textContent = label;
      btn.addEventListener('click', function () {
        navigator.clipboard.writeText(quote.textContent.replace(label, '').trim()).then(function () {
          btn.textContent = 'コピーしました';
          setTimeout(function () { btn.textContent = label; }, 2000);
        });
      });
      quote.appendChild(btn);
    }
  });
})();
