const tools = [
    {
      name: "Midjourney",
      logo: "https://www.midjourney.com/favicon.ico",
      description: "Generate art from text prompts.",
      category: "Design & Creativity",
      link: "https://www.midjourney.com/"
    },
    {
      name: "Notion AI",
      logo: "https://www.notion.so/images/favicon.ico",
      description: "AI assistant in Notion for writing and organizing.",
      category: "Business & Productivity",
      link: "https://www.notion.so/product/ai"
    },
    {
      name: "ChatGPT",
      logo: "https://chat.openai.com/favicon.ico",
      description: "Conversational AI assistant developed by OpenAI.",
      category: "Chat & Companions",
      link: "https://chat.openai.com/"
    },
    {
      name: "Runway",
      logo: "https://runwayml.com/favicon.ico",
      description: "AI video editing and media tools.",
      category: "Video & Media",
      link: "https://runwayml.com/"
    },
    {
      name: "Copy.ai",
      logo: "https://www.copy.ai/favicon.ico",
      description: "Write marketing copy using AI.",
      category: "Marketing",
      link: "https://www.copy.ai/"
    },
    {
      name: "Tome",
      logo: "https://tome.app/favicon.ico",
      description: "AI-powered storytelling and presentations.",
      category: "Business & Productivity",
      link: "https://tome.app/"
    },
    {
      name: "Fireflies.ai",
      logo: "https://fireflies.ai/favicon.ico",
      description: "AI meeting assistant for transcription and notes.",
      category: "Business & Productivity",
      link: "https://fireflies.ai/"
    },
    {
      name: "Jasper AI",
      logo: "https://www.jasper.ai/favicon.ico",
      description: "Generate high-quality content using AI.",
      category: "Marketing",
      link: "https://www.jasper.ai/"
    },
    {
      name: "Synthesia",
      logo: "https://www.synthesia.io/favicon.ico",
      description: "Create AI videos with digital avatars.",
      category: "Video & Media",
      link: "https://www.synthesia.io/"
    },
    {
      name: "Descript",
      logo: "https://www.descript.com/favicon.ico",
      description: "Audio and video editing made easy with AI.",
      category: "Video & Media",
      link: "https://www.descript.com/"
    }
  ];
  
  const categories = ["All", ...new Set(tools.map(tool => tool.category))];
  
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
  
  function renderTools() {
    const searchText = searchInput.value.toLowerCase();
    toolsGrid.innerHTML = "";
    const filtered = tools.filter(tool =>
      (selectedCategory === "All" || tool.category === selectedCategory) &&
      (tool.name.toLowerCase().includes(searchText) || tool.description.toLowerCase().includes(searchText))
    );
  
    filtered.forEach(tool => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem;">
          <img src="${tool.logo}" alt="${tool.name}" onerror="this.src='https://via.placeholder.com/48'" />
          <h2>${tool.name}</h2>
        </div>
        <p>${tool.description}</p>
        <a href="${tool.link}" target="_blank">Visit Site →</a>
      `;
      toolsGrid.appendChild(card);
    });
  }
  
  searchInput.addEventListener("input", renderTools);
  
  renderTabs();
  renderTools();