/* Presentation layer for the published page only.
   Turns bare URLs into links, lists logo files as tiles, puts swatches next to hex codes,
   and adds copy buttons. Runs in the browser; SKILL.md stays plain text for AI agents. */
(function () {
  var BASE = 'https://wealthpark-design-team.github.io/design-kit/';
  var URL_RE = /https?:\/\/[^\s<>"'()（）、。」』]+/g;
  var IMG_RE = /\.(?:svg|png|jpe?g|webp)$/i;

  function ready(fn) { if (document.readyState !== 'loading') { fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
  function skip(el) { return el.closest && el.closest('a, code, pre, script, style, button, .dk-tiles'); }
  function textNodes(root, test) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), out = [], n;
    while ((n = walker.nextNode())) { if (!skip(n.parentNode) && test(n.nodeValue)) { out.push(n); } }
    return out;
  }
  function fileName(url) { return url.replace(/[?#].*$/, '').split('/').pop(); }
  function label(url, inTable) {
    if (inTable && url.indexOf(BASE) === 0 && url !== BASE) { return IMG_RE.test(url) ? fileName(url) : url.slice(BASE.length); }
    return url;
  }
  function copyButton(text, idle, done) {
    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'dk-btn dk-btn--ghost'; btn.textContent = idle;
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = done; setTimeout(function () { btn.textContent = idle; }, 1500);
      });
    });
    return btn;
  }

  ready(function () {
    var main = document.querySelector('.dk-main');
    if (!main) { return; }

    // 1. Bare URLs -> links (kramdown leaves them as text)
    textNodes(main, function (t) { return URL_RE.test(t); }).forEach(function (node) {
      var text = node.nodeValue, frag = document.createDocumentFragment(), last = 0, m;
      var inTable = !!node.parentNode.closest('td');
      URL_RE.lastIndex = 0;
      while ((m = URL_RE.exec(text))) {
        frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        var a = document.createElement('a');
        a.href = m[0]; a.textContent = label(m[0], inTable); a.title = m[0];
        if (inTable && m[0] !== a.textContent) { a.className = 'dk-path'; }
        frag.appendChild(a);
        last = m.index + m[0].length;
      }
      frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });

    // 2. Inside tables: image links become tiles + file rows; classify tables for layout
    main.querySelectorAll('table').forEach(function (table) {
      var wrap = document.createElement('div'); wrap.className = 'dk-table-wrap';
      table.parentNode.insertBefore(wrap, table); wrap.appendChild(table);
      var hasImages = false, hasHex = /#[0-9A-Fa-f]{6}\b/.test(table.textContent), hasRefs = false;

      table.querySelectorAll('td').forEach(function (td) {
        var links = Array.prototype.slice.call(td.querySelectorAll('a'));
        var images = links.filter(function (a) { return IMG_RE.test(a.href); });
        if (links.length && !images.length) { hasRefs = true; }
        if (!images.length) { return; }
        hasImages = true;
        var tiles = document.createElement('div'); tiles.className = 'dk-tiles';
        images.forEach(function (a) {
          var url = a.href;
          var tile = document.createElement('a');
          tile.href = url; tile.target = '_blank'; tile.rel = 'noopener'; tile.title = fileName(url);
          tile.className = 'dk-tile' + (/inverse/.test(url) ? ' dk-tile--dark' : '') + (/\/screenshots\//.test(url) ? ' dk-tile--shot' : '');
          var img = document.createElement('img'); img.src = url; img.alt = '';
          tile.appendChild(img); tiles.appendChild(tile);

          var row = document.createElement('span'); row.className = 'dk-file';
          a.parentNode.insertBefore(row, a); row.appendChild(a);
          a.textContent = fileName(url); a.className = '';
          row.appendChild(copyButton(url, 'URL をコピー', 'コピーしました'));
        });
        td.insertBefore(tiles, td.firstChild);
      });

      if (hasImages) { table.classList.add('dk-logos'); }
      if (hasHex) { table.classList.add('dk-colors'); }
      if (hasRefs && !hasImages && !hasHex) { table.classList.add('dk-refs'); }
    });

    // 3. Color swatches in front of hex codes
    textNodes(main, function (t) { return /#[0-9A-Fa-f]{6}\b/.test(t); }).forEach(function (node) {
      var text = node.nodeValue, re = /#[0-9A-Fa-f]{6}\b/g, last = 0, m;
      var frag = document.createDocumentFragment();
      while ((m = re.exec(text))) {
        frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        var sw = document.createElement('span'); sw.className = 'dk-swatch'; sw.style.background = m[0]; sw.setAttribute('aria-hidden', 'true');
        var hex = document.createElement('span'); hex.className = 'dk-hex'; hex.textContent = m[0];
        frag.appendChild(sw); frag.appendChild(hex);
        last = m.index + m[0].length;
      }
      frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });

    // 4. Copy button on the prompt card
    var quote = main.querySelector('blockquote');
    if (quote && navigator.clipboard) {
      var p = quote.querySelector('p');
      quote.appendChild(copyButton((p || quote).textContent.trim(), 'この文をコピー', 'コピーしました')).classList.remove('dk-btn--ghost');
    }
  });
})();
