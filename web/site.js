/* Presentation layer for the published page only.
   Turns bare URLs into links, lists logo files as tiles, shows icon names as icon tiles,
   puts swatches next to hex codes, and adds copy buttons. Runs in the browser; SKILL.md stays plain text for AI agents.
   Links to references/*.md open the human viewer (ref/); AI agents do not run this script and keep the raw Markdown URLs. */
(function () {
  var BASE = 'https://wealthpark-design-team.github.io/design-kit/';
  var URL_RE = /https?:\/\/[^\s<>"'()（）、。」』]+/g;
  var IMG_RE = /\.(?:svg|png|jpe?g|webp)$/i;
  var REF_RE = /^https:\/\/wealthpark-design-team\.github\.io\/design-kit\/(references\/[a-z-]+\.md)$/;
  // Human-readable names for the reference files (shown instead of the file path)
  var DOCS = {
    'references/logo.md': 'ロゴの詳細', 'references/visuals.md': 'ビジュアル素材の使い方',
    'references/icons.md': 'アイコンの使い方', 'references/colors.md': 'カラーの詳細',
    'references/typography.md': 'タイポグラフィの詳細', 'references/charts.md': 'グラフの配色',
    'references/tone.md': '表記の一覧', 'references/company.md': '会社情報の詳細',
    'references/skills.md': 'デザインスキルの使い方'
  };
  function viewerUrl(path) { return BASE + 'ref/?f=' + encodeURIComponent(path); }

  function ready(fn) { if (document.readyState !== 'loading') { fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
  function skip(el) { return el.closest && el.closest('a, code, pre, script, style, button, .dk-tiles'); }
  function textNodes(root, test) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), out = [], n;
    while ((n = walker.nextNode())) { if (!skip(n.parentNode) && test(n.nodeValue)) { out.push(n); } }
    return out;
  }
  function fileName(url) { return url.replace(/[?#].*$/, '').split('/').pop(); }
  function label(url, inTable) {
    // Kit files show as short paths (references/logo.md); image files in tables show only the file name
    if (url.indexOf(BASE) === 0 && url !== BASE) { return inTable && IMG_RE.test(url) ? fileName(url) : url.slice(BASE.length); }
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

  function enhance(main) {
    // Asset base for images on this page (the published site, or local files in the preview)
    var logo = document.querySelector('.dk-header__brand img');
    var ASSETS = logo ? logo.src.replace(/logo\/[^\/]+$/, '') : BASE + 'assets/';

    // 1. Bare URLs -> links (kramdown leaves them as text)
    textNodes(main, function (t) { return URL_RE.test(t); }).forEach(function (node) {
      var text = node.nodeValue, frag = document.createDocumentFragment(), last = 0, m;
      var inTable = !!node.parentNode.closest('td');
      URL_RE.lastIndex = 0;
      while ((m = URL_RE.exec(text))) {
        frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        if (/[{}]/.test(m[0])) {
          // URL template such as .../icons/filled/{名前}.svg: show it, but not as a broken link
          var code = document.createElement('code'); code.textContent = m[0]; frag.appendChild(code);
        } else {
          var a = document.createElement('a'), ref = REF_RE.exec(m[0]);
          if (ref) {
            // Reference file: open the readable viewer instead of the raw Markdown
            a.href = viewerUrl(ref[1]); a.textContent = DOCS[ref[1]] || ref[1]; a.title = m[0];
          } else {
            a.href = m[0]; a.textContent = label(m[0], inTable); a.title = m[0];
            if (m[0] !== a.textContent) { a.className = 'dk-path'; }
          }
          frag.appendChild(a);
        }
        last = m.index + m[0].length;
      }
      frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });

    // 2. Tables: visuals become a card grid; logo/file links become tiles + file rows
    function buildCards(table) {
      var grid = document.createElement('div'); grid.className = 'dk-cards';
      table.querySelectorAll('tbody tr').forEach(function (tr) {
        var tds = tr.querySelectorAll('td'); if (tds.length < 2) { return; }
        var a = tds[0].querySelector('a'); if (!a) { return; }
        var url = a.href;
        var card = document.createElement('article'); card.className = 'dk-card';
        var fig = document.createElement('a');
        fig.className = 'dk-card__img' + (/\/texture-/.test(url) ? ' dk-card__img--cover' : '');
        fig.href = url; fig.target = '_blank'; fig.rel = 'noopener';
        var img = document.createElement('img'); img.src = url; img.alt = '';
        fig.appendChild(img);
        var body = document.createElement('div'); body.className = 'dk-card__body';
        var row = document.createElement('div'); row.className = 'dk-file';
        var name = document.createElement('a'); name.href = url; name.title = url; name.textContent = fileName(url);
        row.appendChild(name); row.appendChild(copyButton(url, 'URL をコピー', 'コピーしました'));
        var desc = document.createElement('p'); desc.className = 'dk-card__desc'; desc.textContent = tds[1].textContent.trim();
        body.appendChild(row); body.appendChild(desc);
        card.appendChild(fig); card.appendChild(body); grid.appendChild(card);
      });
      return grid;
    }

    main.querySelectorAll('table').forEach(function (table) {
      var wrap = document.createElement('div'); wrap.className = 'dk-table-wrap';
      table.parentNode.insertBefore(wrap, table); wrap.appendChild(table);

      // Icon table: each name becomes a tile with the filled SVG
      var head = table.querySelector('thead');
      if (head && /アイコン名/.test(head.textContent)) {
        table.classList.add('dk-icons');
        table.querySelectorAll('tbody tr').forEach(function (tr) {
          var td = tr.querySelectorAll('td')[1]; if (!td) { return; }
          var list = document.createElement('div'); list.className = 'dk-icon-list';
          td.textContent.split(/[,、\s]+/).filter(Boolean).forEach(function (name) {
            var tile = document.createElement('a');
            tile.className = 'dk-icon'; tile.href = BASE + 'assets/icons/filled/' + name + '.svg';
            tile.target = '_blank'; tile.rel = 'noopener'; tile.title = tile.href;
            var img = document.createElement('img'); img.src = ASSETS + 'icons/filled/' + name + '.svg'; img.alt = '';
            var label = document.createElement('span'); label.textContent = name;
            tile.appendChild(img); tile.appendChild(label); list.appendChild(tile);
          });
          td.textContent = ''; td.appendChild(list);
        });
        return;
      }

      if (/\/assets\/visuals\//.test(table.innerHTML)) {
        var grid = buildCards(table);
        wrap.classList.add('dk-hidden');
        wrap.parentNode.insertBefore(grid, wrap.nextSibling);
        return;
      }

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
          tile.className = 'dk-tile' + (/inverse/.test(url) ? ' dk-tile--dark' : '');
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
  }

  window.dkEnhance = enhance;
  ready(function () {
    var main = document.querySelector('.dk-main');
    // The reference viewer fills .dk-main later and calls dkEnhance itself
    if (main && !main.querySelector('[data-dk-defer]')) { enhance(main); }
  });
})();
