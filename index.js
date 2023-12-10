const list = [
    { title: 'Ad Creator Wizard',
      description: 'A creative assistant for generating visual concepts for ads',
      url: 'https://chat.openai.com/g/g-CYRU9Asul-ad-creator-wizard'
    },
    { title: 'Ad Visual Creator',
      description: 'Expert in creating images for digital ads',
      url: 'https://chat.openai.com/g/g-HctjmeMnT-ad-visuals-creator'
    },
    { title: 'Landing Page Architect',
      description: 'Assistant in creating landing pages with code and content.',
      url: 'https://chat.openai.com/g/g-AKukSqOWr-landing-page-architect'
    },
    { title: 'Resume Reviewer',
      description: 'Expert in enhancing resumes with detailed, inclusive feedback',
      url: 'https://chat.openai.com/g/g-YRb19XEy4-resume-reviewer'
    },
    { title: "The Hitchhiker's Guide to the Galaxy",
      description: "Douglas Adams-style encyclopedia of 'The Hitchhiker's Guide to the Galaxy.'",
      url: 'https://chat.openai.com/g/g-nWvT4txkO-the-hitchhiker-s-guide-to-the-galaxy'
    },
];

function navigateToLink(link) {
    window.location.href = link;
};

window.onload = function() {
    const container = document.body;
    const ul = document.createElement('ul');
    ul.className = "linkList";
    
    list.forEach(listItem => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        const title = document.createElement('h3');
        const description = document.createElement('p');
        ul.className = 'list';
        li.className = 'list-item';
        link.href = listItem.url;
        link.className = 'item-link';
        title.textContent = listItem.title;
        description.textContent = listItem.description;
        link.appendChild(title);
        link.appendChild(description);
        li.appendChild(link);
        ul.appendChild(li);
    });
    
    container.appendChild(ul);
};
