export const projectContent = {
  id: "projects",
  title: "Projects",
  description:
    "These are some of the projects I have worked on as a student at Lambda School as well as some personal projects I built for myself or to learn new skills. Several of these projects were done during Lambda School Build Weeks. What is a Build Week? At Lambda School, a build week is sort of like a test. It is a way to show that you have mastered all of the skills learned during the current unit of instruction. A unit is a one month - or 4 sprints - long block of instruction. It consists of 3 weeks of instruction followed up by a build week. This is where you demonstrate your understanding of all the concepts you learned in a collaborative group project with other students. Each project team is comprised of students at different points along the journey through Lambda School. The Build Week projects were greenfield projects built in one week by a team of student devs.",
  projects: [
    {
      id: 1,
      name: "Soul Hunters Hero Guide",
      img_src: "/assets/images/shhg-thumbnail.png",
      site_url: "https://heroguide.now.sh/",
      gitHub_url: "https://github.com/jessemarek/shhg-react",
      description:
        "This is where it all began. This was the first website I built. I taught myself about HTML and CSS and deployed it using Wordpress. In this project I revisited and refactored it using a modern tech stack. This version is built using React and utilizes a Node/Express API to serve up the data.",
    },
    {
      id: 2,
      name: "Story Squad",
      img_src: "/assets/images/storysquad-thumbnail.png",
      site_url: "none",
      gitHub_url: "https://github.com/Lambda-School-Labs/story-squad-fe-c",
      description:
        "Story Squad is an interactive educational platform aimed at children ages 8-12, allowing them to read a story and help create the story by uploading handwritten 'side quests' with illustrations. Built during Lambda School's Labs which is the final portion of the school's Full Stack Web Dev course.",
    },
    {
      id: 3,
      name: "Portfolio Website",
      img_src: "/assets/images/portfolio-thumbnail.png",
      site_url: "none",
      gitHub_url: "https://github.com/jessemarek/my-portfolio",
      description:
        "The Portfolio Site you are currently on. Still a WiP and it may never actually ever be 'done' as I always enjoy tweaking things. For this project I decided to take a stab a TypeScript and I am absolutely loving it!",
    },
    {
      id: 4,
      name: "Saltiest Hacker News Trolls",
      img_src: "/assets/images/hacker-trolls-thumbnail.png",
      site_url: "https://salty-trolls.now.sh/",
      gitHub_url: "https://github.com/Build-Week-Saltiest-Hacker/front-end",
      description:
        "An app that rates and ranks hacker news commenters by negativity of comment sentiment.",
      build_week: true,
    },
    {
      id: 5,
      name: "Lambda Dev Desk Queue",
      img_src: "/assets/images/dev-desk-thumbnail.png",
      site_url: "https://dev-desk-queue.now.sh/",
      gitHub_url: "https://github.com/bw-dev-desk-queue-3/fe",
      description:
        "An app designed to allow an admin to manage help desk tickets that come in from Lambda School Students.",
      build_week: true,
    },
    {
      id: 6,
      name: "Conway's Game of Life",
      img_src: "/assets/images/game-of-life-thumbnail.png",
      site_url: "https://marekgameoflife.now.sh/",
      gitHub_url: "https://github.com/jessemarek/CS-build-week",
      description:
        "The focus of this project was on creating the algorithm that follows the rules of Conway's Game of Life.",
      build_week: true,
    },
  ],
};
