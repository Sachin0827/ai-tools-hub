const tools = [
  // Productivity
  { name: "Notion AI", logo: "https://www.notion.so/images/favicon.ico", description: "AI assistant for writing, organizing, and planning.", category: "Productivity", link: "https://www.notion.so/product/ai" },
  { name: "Taskade", logo: "https://www.taskade.com/favicon.ico", description: "Collaborative AI-powered task lists and mind maps.", category: "Productivity", link: "https://www.taskade.com/" },
  { name: "Bardeen AI", logo: "https://bardeen.ai/favicon.ico", description: "Automate repetitive tasks with AI.", category: "Productivity", link: "https://bardeen.ai/" },
  { name: "ClickUp AI", logo: "https://clickup.com/favicon.ico", description: "All-in-one AI productivity platform.", category: "Productivity", link: "https://clickup.com/ai" },
  { name: "Motion", logo: "https://www.usemotion.com/favicon.ico", description: "AI schedules your meetings and tasks.", category: "Productivity", link: "https://www.usemotion.com/" },

  // Design
  { name: "Canva", logo: "https://www.canva.com/favicon.ico", description: "AI-powered design and brand templates.", category: "Design", link: "https://www.canva.com/" },
  { name: "Figma AI", logo: "https://www.figma.com/favicon.ico", description: "Collaborative AI design platform.", category: "Design", link: "https://www.figma.com/" },
  { name: "Khroma", logo: "https://www.khroma.co/favicon.ico", description: "AI color palette generator.", category: "Design", link: "https://www.khroma.co/" },
  { name: "Remove.bg", logo: "https://www.remove.bg/favicon.ico", description: "Remove image backgrounds instantly with AI.", category: "Design", link: "https://www.remove.bg/" },
  { name: "Looka", logo: "https://looka.com/favicon.ico", description: "AI logo maker and brand kit.", category: "Design", link: "https://looka.com/" },
  { name: "Uizard", logo: "https://uizard.io/favicon.ico", description: "AI wireframe and UI design tool.", category: "Design", link: "https://uizard.io/" },

  // Content Writing
  { name: "Copy.ai", logo: "https://www.copy.ai/favicon.ico", description: "AI copywriting for blogs, ads, and more.", category: "Content Writing", link: "https://www.copy.ai/" },
  { name: "Writesonic", logo: "https://writesonic.com/favicon.ico", description: "AI-powered content creation platform.", category: "Content Writing", link: "https://writesonic.com/" },
  { name: "Rytr", logo: "https://rytr.me/favicon.ico", description: "AI writing assistant for all content.", category: "Content Writing", link: "https://rytr.me/" },
  { name: "Anyword", logo: "https://anyword.com/favicon.ico", description: "AI copy generator for marketers.", category: "Content Writing", link: "https://anyword.com/" },
  { name: "Sudowrite", logo: "https://sudowrite.com/favicon.ico", description: "AI creative writing assistant.", category: "Content Writing", link: "https://sudowrite.com/" },
  { name: "Grammarly", logo: "https://www.grammarly.com/favicon.ico", description: "Grammar, spell, and style checker with AI.", category: "Content Writing", link: "https://www.grammarly.com/" },

  // AI Chatbots
  { name: "ChatGPT", logo: "https://chat.openai.com/favicon.ico", description: "Conversational AI by OpenAI.", category: "AI Chatbots", link: "https://chat.openai.com/" },
  { name: "Google Gemini", logo: "https://gemini.google.com/favicon.ico", description: "Google's advanced AI chatbot.", category: "AI Chatbots", link: "https://gemini.google.com/" },
  { name: "Claude", logo: "https://claude.ai/favicon.ico", description: "Anthropic's safe conversational AI.", category: "AI Chatbots", link: "https://claude.ai/" },
  { name: "Perplexity AI", logo: "https://www.perplexity.ai/favicon.ico", description: "AI-powered answer engine.", category: "AI Chatbots", link: "https://www.perplexity.ai/" },
  { name: "Pi AI", logo: "https://pi.ai/favicon.ico", description: "Personal AI assistant.", category: "AI Chatbots", link: "https://pi.ai/" },

  // Video Editing
  { name: "Animoto", logo: "https://animoto.com/favicon.ico", description: "Create videos from photos and clips.", category: "Video Editing", link: "https://animoto.com/" },
  { name: "Wave.video", logo: "https://wave.video/favicon.ico", description: "Online video maker and editor.", category: "Video Editing", link: "https://wave.video/" },
  { name: "Synthesia", logo: "https://www.synthesia.io/favicon.ico", description: "Create AI videos with digital avatars.", category: "Video Editing", link: "https://www.synthesia.io/" },
  { name: "InVideo", logo: "https://invideo.io/favicon.ico", description: "AI-powered video editor.", category: "Video Editing", link: "https://invideo.io/" },
  { name: "Magisto", logo: "https://www.magisto.com/favicon.ico", description: "Smart video editing with AI.", category: "Video Editing", link: "https://www.magisto.com/" },

  // SEO
  { name: "MarketMuse", logo: "https://marketmuse.com/favicon.ico", description: "Content research and optimization.", category: "SEO", link: "https://marketmuse.com/" },
  { name: "Jasper", logo: "https://www.jasper.ai/favicon.ico", description: "AI content and SEO assistant.", category: "SEO", link: "https://www.jasper.ai/" },
  { name: "SEMRush", logo: "https://www.semrush.com/favicon.ico", description: "All-in-one SEO toolkit.", category: "SEO", link: "https://www.semrush.com/" },
  { name: "Surfer SEO", logo: "https://surferseo.com/favicon.ico", description: "AI-powered SEO content optimization.", category: "SEO", link: "https://surferseo.com/" },
  { name: "Ahrefs", logo: "https://ahrefs.com/favicon.ico", description: "SEO analysis and backlink checker.", category: "SEO", link: "https://ahrefs.com/" },
];

const categories = ["All", ...Array.from(new Set(tools.map(t => t.category)))];

const searchInput = document.getElementById("search");
const toolsGrid = document.getElementById("toolsGrid");
const tabs = document.getElementById("tabs");
let selectedCategory = "All";

function renderTabs() {
  tabs.innerHTML = "";
  categories.forEach(category => {
    const btn = document.createElement("button");
    btn.textContent = category;
    btn.className = selectedCategory === category ? "active" : "";
    btn.onclick = () => {
      selectedCategory = category;
      renderTabs();
      renderTools();
    };
    tabs.appendChild(btn);
  });
}

function animateCards() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, i) => {
    card.classList.remove('visible');
    setTimeout(() => card.classList.add('visible'), 70 * i);
  });
}

function renderTools() {
  const searchText = searchInput.value.toLowerCase();
  toolsGrid.innerHTML = "";
  const filtered = tools.filter(tool =>
    (selectedCategory === "All" || tool.category === selectedCategory) &&
    (tool.name.toLowerCase().includes(searchText) || tool.description.toLowerCase().includes(searchText))
  );
  if (filtered.length === 0) {
    toolsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; color:#64748b;">No tools found.</div>`;
    return;
  }
  filtered.forEach(tool => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${tool.logo}" alt="${tool.name} logo" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(tool.name)}&background=3b82f6&color=fff&rounded=true'"/>
      <span class="category">${tool.category}</span>
      <h2>${tool.name}</h2>
      <p>${tool.description}</p>
      <a href="${tool.link}" target="_blank" rel="noopener">Visit Site →</a>
    `;
    toolsGrid.appendChild(card);
  });
  animateCards();
}

searchInput.addEventListener("input", renderTools);

renderTabs();
renderTools();
