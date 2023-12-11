const gpts = [
    {
        title: 'Ad Creator Wizard',
        description: 'A creative assistant for generating visual concepts for ads',
        url: 'https://chat.openai.com/g/g-CYRU9Asul-ad-creator-wizard',
        categories: ['Marketing', 'Advertising'],
    },
    {
        title: 'Ad Visual Creator',
        description: 'Expert in creating images for digital ads',
        url: 'https://chat.openai.com/g/g-HctjmeMnT-ad-visuals-creator',
        categories: ['Marketing', 'Advertising'],
    },
    {
        title: 'Landing Page Architect',
        description: 'Assistant in creating landing pages with code and content',
        url: 'https://chat.openai.com/g/g-AKukSqOWr-landing-page-architect',
        categories: ['Marketing', 'Websites'],
    },
    {
        title: 'Resume Reviewer',
        description: 'Expert in enhancing resumes with detailed, inclusive feedback',
        url: 'https://chat.openai.com/g/g-YRb19XEy4-resume-reviewer',
        categories: ['Job Hunt'],
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        description: "Douglas Adams-style encyclopedia of 'The Hitchhiker's Guide to the Galaxy'",
        url: 'https://chat.openai.com/g/g-nWvT4txkO-the-hitchhiker-s-guide-to-the-galaxy',
        categories: ['Science Fiction'],
    },
    {
        title: "Yoda",
        description: "Yoda from Star Wars, imparting wisdom and life advice in his unique style",
        url: 'https://chat.openai.com/g/g-fTAARSUab-yoda',
        categories: ['Science Fiction', 'Star Wars'],
    },
    {
        title: "Brick Set Creator",
        description: "Generate images of LEGO sets based on your input",
        url: 'https://chat.openai.com/g/g-ev2Awvawl-brick-set-creator',
        categories: ['Fun'],
    },
    {
        title: "GPT Creation Advisor",
        description: "Expert on GPT Creation & Development",
        url: 'https://chat.openai.com/g/g-lMINILrvK-gpt-creation-advisor',
        categories: ['Productivity'],
    },
    {
        title: "Gift Guru",
        description: "A personalized and engaging guide for finding the perfect gift",
        url: 'https://chat.openai.com/g/g-Tm20DPXA9-gift-guru',
        categories: ['Shopping'],
    },
    {
        title: "The Astrologist",
        description: "Mystical and enigmatic astrologist offering deep cosmic insights",
        url: 'https://chat.openai.com/g/g-Ca8UiuiBT-the-astrologist',
        categories: ['Self-Improvement'],
    },
];

function navigateToLink(link) {
    window.location.href = link;
};

const createGPTList = () => {
    const container = document.body;
    const ul = document.createElement('ul');
    ul.className = "linkList";

    gpts.forEach(gpt => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        const title = document.createElement('h3');
        const description = document.createElement('p');
        ul.className = 'list';
        li.className = 'list-item';
        link.href = gpt.url;
        link.className = 'item-link';
        title.textContent = gpt.title;
        description.textContent = gpt.description;
        link.appendChild(title);
        link.appendChild(description);
        li.appendChild(link);
        ul.appendChild(li);
    });

    container.appendChild(ul);
};

const extractCategories = () => {
    const categories = [];
    gpts.forEach(gpt => {
        gpt.categories.forEach(category => {
            if (!categories.includes(category)) {
                categories.push(category);
            }
        });
    });
    categories.sort(); // Sort the categories alphabetically
    
    return categories;
}

window.onload = () => {
    createGPTList();
    extractCategories();
};