// Array of topics with associated hints
var topics = [
    {
        topic: "Minimalism",
        hints: ["Focus on essentials, decluttering unnecessary possessions",
                "Embrace simplicity in lifestyle and design",
                "Practice mindful consumption and intentional living",
                "Reduce reliance on material possessions for happiness",
                "Create more space for experiences and relationships"]
    },
    {
        topic: "Sustainable living",
        hints: ["Reduce, reuse, recycle principle",
                "Conserve energy and water in daily activities",
                "Support eco-friendly products and businesses",
                "Adopt practices like composting and gardening",
                "Reduce carbon footprint through transportation choices"]
    },
    {
        topic: "Financial literacy",
        hints: ["Budgeting and tracking expenses",
                "Understanding credit and debt management",
                "Investing in stocks, bonds, and real estate",
                "Planning for retirement and long-term financial goals",
                "Educating oneself on taxes, insurance, and financial planning tools"]
    },
    {
        topic: "Remote work",
        hints: ["Set up a dedicated workspace at home",
                "Establish clear boundaries between work and personal life",
                "Communicate effectively with colleagues using digital tools",
                "Manage time efficiently without direct supervision",
                "Stay connected with team members through virtual meetings"]
    },
    {
        topic: "Mindfulness",
        hints: ["Practice deep breathing exercises to reduce stress",
                "Focus on present moment sensations without judgment",
                "Cultivate gratitude and appreciation for everyday experiences",
                "Engage in mindfulness meditation practices",
                "Incorporate mindfulness into daily activities like eating and walking"]
    },
    {
        topic: "Time management",
        hints: ["Prioritize tasks based on importance and urgency",
                "Break tasks into smaller, manageable chunks",
                "Use tools like to-do lists and calendars to stay organized",
                "Limit distractions by setting specific work hours",
                "Delegate tasks when possible to free up time for important activities"]
    },
    {
        topic: "Meditation",
        hints: ["Practice deep breathing techniques",
                "Focus on mindfulness and being present",
                "Use guided meditation apps or videos",
                "Explore different meditation styles such as mindfulness, loving-kindness, or transcendental meditation",
                "Incorporate meditation into daily routine for consistency and effectiveness"]
    },
    {
        topic: "Healthy eating habits",
        hints: ["Include a variety of fruits and vegetables in meals",
                "Limit processed foods and added sugars",
                "Focus on whole grains and lean proteins",
                "Stay hydrated by drinking plenty of water",
                "Practice mindful eating by paying attention to hunger and fullness cues"]
    },
    {
        topic: "Fitness routines",
        hints: ["Incorporate cardiovascular exercises like running, cycling, or swimming",
                "Include strength training exercises to build muscle mass",
                "Try flexibility exercises such as yoga or Pilates",
                "Set specific fitness goals and track progress",
                "Find activities you enjoy to stay motivated and consistent"]
    },
    {
        topic: "Digital detox",
        hints: ["Set designated times to unplug from devices each day",
                "Engage in outdoor activities or hobbies that don't involve screens",
                "Use apps or tools to limit screen time and notifications",
                "Prioritize face-to-face interactions over virtual ones",
                "Practice mindfulness and being present without digital distractions"]
    },
    {
        topic: "Creative hobbies",
        hints: ["Experiment with different artistic mediums such as painting, drawing, or sculpting",
                "Start a journaling practice to explore thoughts and emotions",
                "Learn a musical instrument or take up singing",
                "Join a creative writing group or attend workshops",
                "Use creative expression as a form of self-care and stress relief"]
    },
    {
        topic: "Personal branding",
        hints: ["Identify your unique strengths, values, and passions",
                "Create a consistent and authentic online presence",
                "Network with professionals in your industry to build connections",
                "Share your expertise through blogging or social media",
                "Seek feedback and adjust your personal brand as needed"]
    },
    {
        topic: "Influencer culture",
        hints: ["Examine the role of influencers in shaping consumer behavior",
                "Critically evaluate sponsored content and endorsements",
                "Consider the impact of influencer marketing on self-esteem and body image",
                "Explore the ethics of influencer partnerships and brand collaborations",
                "Reflect on your own media consumption habits and influences"]
    },
    {
        topic: "Fashion trends",
        hints: ["Follow fashion magazines, blogs, and social media accounts for inspiration",
                "Experiment with mixing and matching different styles and pieces",
                "Invest in classic wardrobe staples that can be mixed with trendier items",
                "Consider the environmental and social impact of fast fashion",
                "Express your personal style and creativity through clothing choices"]
    },
    {
        topic: "Sustainable fashion",
        hints: ["Support ethical and eco-friendly fashion brands",
                "Shop for clothing made from sustainable materials like organic cotton or recycled fabrics",
                "Prioritize quality over quantity when building your wardrobe",
                "Repair and upcycle clothing to extend its lifespan",
                "Educate yourself about the environmental and social issues in the fashion industry"]
    },
    {
        topic: "Circular economy",
        hints: ["Reduce, reuse, recycle principle in production and consumption",
                "Design products with durability and recyclability in mind",
                "Shift from a linear to a circular model of production and consumption",
                "Encourage sharing and leasing instead of owning products",
                "Promote innovation and collaboration to create a closed-loop system"]
    },
    {
        topic: "Financial independence",
        hints: ["Set financial goals and create a budget to achieve them",
                "Increase income through side hustles or investments",
                "Pay off debt and avoid unnecessary expenses",
                "Build an emergency fund for unexpected expenses",
                "Invest in assets that generate passive income streams"]
    },
    {
        topic: "Entrepreneurship",
        hints: ["Identify a market need or problem to solve",
                "Develop a unique value proposition for your business",
                "Create a business plan outlining your goals and strategies",
                "Secure funding through investors, loans, or crowdfunding",
                "Adapt and iterate based on feedback to grow your venture"]
    },
    {
        topic: "Gig economy",
        hints: ["Explore platforms like Uber, Lyft, or TaskRabbit for gig opportunities",
                "Consider freelancing in areas such as writing, graphic design, or web development",
                "Use gig work to supplement income or as a full-time career",
                "Stay organized with finances and taxes as a gig worker",
                "Network with other gig workers for support and opportunities"]
    },
    {
        topic: "Cryptocurrency",
        hints: ["Learn about different types of cryptocurrencies like Bitcoin, Ethereum, and Litecoin",
                "Understand blockchain technology and its role in securing transactions",
                "Research cryptocurrency exchanges for buying, selling, and trading digital assets",
                "Explore the potential risks and rewards of investing in cryptocurrencies",
                "Stay updated on regulatory changes and market trends in the cryptocurrency space"]
    },
    {
        topic: "Artificial intelligence",
        hints: ["Study machine learning algorithms and neural networks",
                "Explore applications of AI in industries like healthcare, finance, and transportation",
                "Experiment with AI development using programming languages like Python",
                "Consider ethical implications of AI development and deployment",
                "Stay informed about advancements and breakthroughs in AI research"]
    },
    {
        topic: "Augmented reality",
        hints: ["Discover AR applications in gaming, education, and retail",
                "Experiment with AR development platforms like Unity or ARKit",
                "Learn about augmented reality hardware like AR glasses and headsets",
                "Consider the impact of AR on user experiences and interactions",
                "Explore opportunities for businesses to leverage AR technology"]
    },
    {
        topic: "Virtual reality",
        hints: ["Experience VR gaming, simulations, and virtual tours",
                "Experiment with VR development using tools like Oculus Rift or HTC Vive",
                "Explore VR content creation for entertainment and education",
                "Consider the potential applications of VR in healthcare, training, and therapy",
                "Stay updated on advancements in VR hardware and software"]
    },
    {
        topic: "Renewable energy",
        hints: ["Learn about different types of renewable energy sources like solar, wind, and hydroelectric",
                "Explore renewable energy technologies for residential and commercial use",
                "Consider the environmental and economic benefits of transitioning to renewable energy",
                "Stay informed about government incentives and policies supporting renewable energy",
                "Support renewable energy initiatives in your community or workplace"]
    },
    {
        topic: "Green technology",
        hints: ["Discover innovations in energy efficiency, waste reduction, and sustainable materials",
                "Explore green technology startups and companies driving environmental impact",
                "Consider the life cycle assessment of products and processes in green technology",
                "Stay informed about green building practices and certifications like LEED",
                "Support initiatives promoting the adoption of green technology"]
    },
    {
        topic: "Urban planning",
        hints: ["Study principles of urban design, zoning, and land use",
                "Consider factors like transportation, housing, and public spaces in urban planning",
                "Explore sustainable urban development practices like mixed-use zoning and green infrastructure",
                "Collaborate with community stakeholders to create inclusive and equitable urban spaces",
                "Stay updated on urban planning trends and best practices worldwide"]
    },
    {
        topic: "Smart cities",
        hints: ["Explore technologies like IoT sensors, data analytics, and automation in urban infrastructure",
                "Consider the benefits of smart transportation, energy, and waste management systems",
                "Collaborate with government agencies, businesses, and citizens to implement smart city initiatives",
                "Address concerns related to data privacy, cybersecurity, and digital equity in smart city development",
                "Stay informed about case studies and success stories of smart city projects around the world"]
    },
    {
        topic: "Personal development",
        hints: ["Set specific goals for self-improvement in areas like career, relationships, and health",
                "Create a personal development plan outlining actionable steps and timelines",
                "Invest in learning and skill development through courses, workshops, and books",
                "Practice self-reflection and mindfulness to cultivate self-awareness and emotional intelligence",
                "Seek feedback from mentors, peers, and trusted advisors to support your personal growth journey"]
    },
    {
        topic: "Entrepreneurship",
        hints: ["Identify market opportunities and develop a business idea",
                "Create a business plan outlining goals and strategies",
                "Secure funding through investors, loans, or bootstrapping",
                "Build a team and establish a company culture",
                "Adapt to challenges and pivot when necessary to grow the business"]
    },
    {
        topic: "Gig economy",
        hints: ["Find freelance work through online platforms like Upwork or Fiverr",
                "Take advantage of short-term contract opportunities",
                "Manage multiple projects simultaneously for flexibility",
                "Develop a personal brand to stand out in the gig economy",
                "Network with other freelancers and potential clients for opportunities"]
    },
    {
        topic: "Cryptocurrency",
        hints: ["Learn about blockchain technology and decentralized networks",
                "Invest in cryptocurrencies like Bitcoin, Ethereum, or Litecoin",
                "Understand the risks and volatility associated with digital assets",
                "Explore alternative uses of blockchain technology beyond currency",
                "Stay informed about regulatory developments and market trends"]
    },
    {
        topic: "Artificial intelligence",
        hints: ["Study machine learning algorithms and neural networks",
                "Explore applications of AI in industries like healthcare, finance, and transportation",
                "Understand ethical considerations and biases in AI development",
                "Experiment with AI tools and platforms for personal projects",
                "Stay updated on advancements in AI research and technology"]
    },
    {
        topic: "Augmented reality",
        hints: ["Experiment with AR applications on smartphones and tablets",
                "Explore AR technology in gaming, retail, and education",
                "Understand the hardware and software components of AR systems",
                "Consider the implications of AR for user experience and interface design",
                "Stay informed about developments in AR hardware and software"]
    },
    {
        topic: "Virtual reality",
        hints: ["Experience VR content through headsets like Oculus Rift or HTC Vive",
                "Explore VR applications in gaming, training, and therapy",
                "Understand the differences between VR, AR, and mixed reality",
                "Consider the ethical and social implications of VR technology",
                "Stay updated on advancements in VR hardware and software"]
    },
    {
        topic: "Renewable energy",
        hints: ["Learn about solar panels, wind turbines, and other renewable energy sources",
                "Understand the environmental benefits of renewable energy",
                "Explore policies and incentives that promote renewable energy adoption",
                "Invest in renewable energy projects or companies",
                "Stay informed about advancements in renewable energy technology"]
    },
    {
        topic: "Green technology",
        hints: ["Research innovations in clean energy, transportation, and waste management",
                "Understand the life cycle of products and their environmental impact",
                "Invest in green technology companies or funds",
                "Support sustainable practices in business and everyday life",
                "Stay updated on developments in green technology and sustainability"]
    },
    {
        topic: "Urban planning",
        hints: ["Study urban design principles and theories",
                "Consider factors like transportation, housing, and public spaces",
                "Engage with community stakeholders and residents in planning processes",
                "Explore innovative approaches to urban development",
                "Stay informed about urban planning trends and best practices"]
    },
    {
        topic: "Smart cities",
        hints: ["Learn about IoT (Internet of Things) and its role in smart city infrastructure",
                "Explore examples of smart city initiatives around the world",
                "Understand the potential benefits and challenges of smart city technology",
                "Consider issues of privacy, security, and data governance in smart city projects",
                "Stay updated on developments in smart city technology and policy"]
    },
    {
        topic: "Personal development",
        hints: ["Identify areas for growth and improvement in your life",
                "Set specific goals and create action plans to achieve them",
                "Invest in learning new skills and acquiring knowledge",
                "Seek feedback and guidance from mentors or coaches",
                "Reflect on your values, strengths, and purpose to guide your personal development journey"]
    },
    {
        topic: "Emotional intelligence",
        hints: ["Practice self-awareness by identifying and understanding your own emotions",
                "Develop empathy by considering the perspectives and feelings of others",
                "Learn to manage stress and regulate emotions in challenging situations",
                "Improve interpersonal relationships through effective communication and conflict resolution",
                "Continuously work on developing emotional intelligence skills through practice and self-reflection"]
    },
    {
        topic: "Goal setting",
        hints: ["Set specific, measurable, achievable, relevant, and time-bound (SMART) goals",
                "Break larger goals into smaller, manageable tasks",
                "Regularly review and adjust goals based on progress and changing priorities",
                "Stay motivated by celebrating achievements and tracking progress",
                "Use visualization techniques to picture yourself achieving your goals"]
    },
    {
        topic: "Positive psychology",
        hints: ["Focus on strengths and virtues rather than weaknesses and deficits",
                "Practice gratitude and appreciation for the positive aspects of life",
                "Cultivate optimism and a positive outlook on the future",
                "Engage in activities that promote flow and a sense of fulfillment",
                "Build resilience by reframing challenges as opportunities for growth"]
    },
    {
        topic: "Resilience",
        hints: ["Develop a growth mindset that sees setbacks as temporary and opportunities for learning",
                "Cultivate self-awareness to recognize and manage stress",
                "Build a support network of friends, family, and mentors",
                "Practice coping strategies like mindfulness, exercise, and relaxation techniques",
                "Learn from past experiences and use them to adapt and thrive in future challenges"]
    },
    {
        topic: "Growth mindset",
        hints: ["View challenges as opportunities for growth and learning",
                "Embrace failure as a natural part of the learning process",
                "Focus on effort and persistence rather than innate ability",
                "Seek out feedback and constructive criticism to improve",
                "Inspire and support others in developing a growth mindset"]
    },
    {
        topic: "Networking",
        hints: ["Attend industry events, conferences, and meetups to meet new people",
                "Join professional organizations or online communities in your field",
                "Offer help and support to others before seeking assistance",
                "Follow up with contacts and maintain relationships over time",
                "Be genuine, authentic, and approachable in your interactions"]
    },
    {
        topic: "Public speaking",
        hints: ["Prepare and practice your speech or presentation in advance",
                "Focus on connecting with your audience and delivering a clear message",
                "Use visual aids like slides or props to enhance your presentation",
                "Manage nervousness by practicing relaxation techniques and deep breathing",
                "Seek feedback and constructive criticism to improve your speaking skills"]
    },
    {
        topic: "Career development",
        hints: ["Identify your strengths, interests, and values to guide career decisions",
                "Set career goals and create a plan for achieving them",
                "Seek out opportunities for learning and skill development",
                "Network with professionals in your industry and seek mentorship",
                "Stay adaptable and open to new experiences and opportunities"]
    },
    {
        topic: "Financial planning",
        hints: ["Assess your current financial situation, including income, expenses, and savings",
                "Set short-term and long-term financial goals based on your needs and priorities",
                "Create a budget to track your spending and savings",
                "Invest in assets like stocks, bonds, or real estate to build wealth over time",
                "Regularly review and adjust your financial plan as your circumstances change"]
    },
    {
        topic: "Self-care",
        hints: ["Prioritize activities that promote physical health, such as exercise and nutrition",
                "Set aside time for relaxation and stress relief, such as meditation or hobbies",
                "Nurture social connections with friends, family, and supportive relationships",
                "Practice self-compassion and kindness towards yourself",
                "Listen to your body and mind's needs and respond with care and attention"]
    },
    {
        topic: "Work-life balance",
        hints: ["Set boundaries between work and personal life, such as designated work hours",
                "Schedule regular breaks and vacations to recharge and prevent burnout",
                "Communicate openly with employers or clients about your availability and needs",
                "Prioritize activities that bring joy and fulfillment outside of work",
                "Regularly reassess and adjust your balance to meet changing circumstances"]
    },
    {
        topic: "Travel experiences",
        hints: ["Explore new destinations and immerse yourself in different cultures",
                "Step outside your comfort zone and try new activities and experiences",
                "Interact with locals and learn about their customs, traditions, and way of life",
                "Document your travels through photos, journals, or blogs to preserve memories",
                "Reflect on the lessons learned and insights gained from your travel experiences"]
    },
    {
        topic: "Volunteering",
        hints: ["Find opportunities to volunteer with local charities or organizations",
                "Support causes you're passionate about through community service",
                "Get involved in activism to advocate for social and environmental change",
                "Volunteer your time, skills, or resources to make a positive impact",
                "Reflect on the personal fulfillment and sense of purpose gained from volunteering"]
    },
    {
        topic: "Mindset shifts",
        hints: ["Challenge limiting beliefs and negative thought patterns",
                "Practice self-awareness and mindfulness to identify areas for growth",
                "Cultivate a growth mindset that embraces learning and resilience",
                "Seek out new experiences and perspectives to broaden your outlook",
                "Embrace change as an opportunity for personal development and growth"]
    },
    {
        topic: "Cultural diversity",
        hints: ["Explore different cultures through travel, food, and traditions",
                "Engage with diverse communities to learn about their customs and beliefs",
                "Challenge stereotypes and prejudices through open-mindedness and empathy",
                "Celebrate the richness and beauty of cultural diversity",
                "Support initiatives that promote inclusion and diversity in society"]
    },
    {
        topic: "Sustainable development",
        hints: ["Promote eco-friendly practices in business, government, and everyday life",
                "Advocate for policies that prioritize environmental protection and conservation",
                "Invest in renewable energy and sustainable infrastructure",
                "Support sustainable agriculture and responsible consumption",
                "Collaborate with local and global partners to achieve sustainable development goals"]
    },
    {
        topic: "Technological disruption",
        hints: ["Explore the impact of technologies like artificial intelligence, automation, and blockchain",
                "Consider how emerging technologies are reshaping industries and societies",
                "Adapt to technological changes by learning new skills and staying informed",
                "Anticipate the potential risks and challenges of technological disruption",
                "Harness the opportunities of technological disruption to drive innovation and progress"]
    },
    {
        topic: "Consumer behavior",
        hints: ["Study psychological factors that influence consumer decisions",
                "Analyze trends and patterns in purchasing behavior across different demographics",
                "Understand the role of marketing and advertising in shaping consumer preferences",
                "Explore ethical considerations and sustainability in consumer choices",
                "Adapt marketing strategies to meet evolving consumer needs and preferences"]
    },
    {
        topic: "Health and wellness trends",
        hints: ["Stay informed about popular diets, exercise routines, and wellness practices",
                "Evaluate health trends based on scientific evidence and expert recommendations",
                "Experiment with different wellness activities to find what works best for you",
                "Prioritize holistic health, including physical, mental, and emotional well-being",
                "Share knowledge and resources to promote health and wellness within your community"]
    },
    {
        topic: "Educational innovations",
        hints: ["Explore new teaching methods and technologies to enhance learning outcomes",
                "Experiment with personalized learning approaches tailored to individual students",
                "Promote collaboration and project-based learning in the classroom",
                "Embrace digital tools and resources for interactive and engaging lessons",
                "Adapt curriculum and assessments to meet the needs of diverse learners"]
    },
    {
        topic: "Social entrepreneurship",
        hints: ["Identify social or environmental problems that need innovative solutions",
                "Develop business models that create both financial and social value",
                "Collaborate with stakeholders and partners to address systemic challenges",
                "Measure and track social impact to ensure accountability and transparency",
                "Inspire and empower others to join the movement for social change"]
    },
    {
        topic: "Globalization",
        hints: ["Examine the interconnectedness of economies, cultures, and societies",
                "Consider the opportunities and challenges of global trade and communication",
                "Explore the impact of globalization on local communities and cultures",
                "Promote cross-cultural understanding and collaboration",
                "Address global issues like climate change, poverty, and inequality through international cooperation"]
    }

];

// Function to generate a random topic and display hints in a popup box
function generateRandomTopic() {
    var randomIndex = Math.floor(Math.random() * topics.length);
    var topic = topics[randomIndex];
    
    // Display the list container
    var topicContainer = document.getElementById("topicContainer");
    topicContainer.style.display = "block";
    
    // Display topic title
    document.getElementById("topicTitle").textContent = topic.topic;
    
    // Display hints
    var hintsList = document.getElementById("hintsList");
    hintsList.innerHTML = ""; // Clear previous hints
    
    // Add two empty lines above the first hint
    var lineSpace1 = document.createElement("li");
    lineSpace1.innerHTML = "&nbsp;";
    hintsList.appendChild(lineSpace1);

    var lineSpace2 = document.createElement("li");
    lineSpace2.innerHTML = "&nbsp;";
    hintsList.appendChild(lineSpace2);
    
    for (var i = 0; i < topic.hints.length; i++) {
        var hintItem = document.createElement("li");
        hintItem.textContent = "Hint " + (i + 1) + ": " + topic.hints[i];
        hintsList.appendChild(hintItem);
        
        // Add line space after each hint except the last one
        if (i < topic.hints.length - 1) {
            var lineSpace = document.createElement("li");
            lineSpace.innerHTML = "&nbsp;"; // Add empty space
            hintsList.appendChild(lineSpace);
        }
    }

    // Add two empty lines after the last hint
    var lineSpace3 = document.createElement("li");
    lineSpace3.innerHTML = "&nbsp;";
    hintsList.appendChild(lineSpace3);

    var lineSpace4 = document.createElement("li");
    lineSpace4.innerHTML = "&nbsp;";
    hintsList.appendChild(lineSpace4);
    
    // Slide up the video call button
    var videoCallButton = document.getElementById("videoCallButton");
    videoCallButton.style.bottom = "20px"; // Change bottom position to slide up
    videoCallButton.style.transition = "bottom 0.5s ease"; // Add transition for smooth animation
}

// Function to handle clicking on the video call button
function handleVideoCall() {
    window.location.href = "video.html"; // Navigate to video.html when clicked
}

// Event listener for button click to generate random topic
document.getElementById("generateButton").addEventListener("click", generateRandomTopic);

// Event listener for clicking on the video call button
document.getElementById("videoCallButton").addEventListener("click", handleVideoCall);
