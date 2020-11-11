export const projectContent = {
  id: "projects",
  title: "Projects",
  content: {
    type: "PROJECTS",
    details: [
      {
        id: 1,
        name: "Soul Hunters Hero Guide",
        img_src: "/assets/images/shhg-thumbnail.png",
        site_url: "https://heroguide.now.sh/",
        gitHub_url: "https://github.com/jessemarek/shhg-react",
        description: {
          tech_stack:
            "React | Recoil | JavaScript | SASS | HTML | Node | Express",
          features: [
            "WordPress site refactored into React",
            "RESTful API that serves data",
            "Dark Mode enabled",
          ],
        },
        // "This is where it all began. This was the first website I built. I taught myself about HTML and CSS and deployed it using Wordpress. In this project I revisited and refactored it using a modern tech stack. This version is built using React and utilizes a Node/Express API to serve up the data.",
      },
      {
        id: 2,
        name: "Story Squad",
        img_src: "/assets/images/storysquad-thumbnail.png",
        site_url: "none",
        gitHub_url: "https://github.com/Lambda-School-Labs/story-squad-fe-c",
        description: {
          tech_stack: "React | Recoil | JavaScript | CSS | HTML | AWS Amplify",
          features: [
            "Co-Authored an image upload component complete with file type checking",
            "Refactored state management into a global state system using Recoil",
            "Reviewed and merged approved PRs into production",
            "Worked on a cross-functional team with 6 other remote developers",
          ],
        },
        //"Story Squad is an interactive educational platform aimed at children ages 8-12, allowing them to read a story and help create the story by uploading handwritten 'side quests' with illustrations. Built during Lambda School's Labs which is the final portion of the school's Full Stack Web Dev course.",
      },
      {
        id: 3,
        name: "Saltiest Hacker News Trolls",
        img_src: "/assets/images/hacker-trolls-thumbnail.png",
        site_url: "https://salty-trolls.now.sh/",
        gitHub_url: "https://github.com/Build-Week-Saltiest-Hacker/front-end",
        description: {
          tech_stack: "React | Redux | JavaScript | CSS | HTML",
          features: [
            "Lambda School Build Week Project",
            "Developed a full range of CRUD operations to communicate with 2 separate APIs",
            "Delegated tasks to 4 other front-end developers to ensure features shipped on time",
            "Collaborated with 6 remote developers on a cross-functional team",
          ],
        },
        //"An app that rates and ranks hacker news commenters by negativity of comment sentiment.",
      },
      {
        id: 4,
        name: "Lambda Dev Desk Queue",
        img_src: "/assets/images/dev-desk-thumbnail.png",
        site_url: "https://dev-desk-queue.now.sh/",
        gitHub_url: "https://github.com/bw-dev-desk-queue-3/fe",
        description: {
          tech_stack: "React | JavaScript | CSS | HTML",
          features: [
            "Lambda School Build Week Project",
            "Assembled the admin dashboard and help ticket components",
            "Merged pull requests and communicated with team to minimize merge conflicts",
            "Collaborated with 3 remote team members",
          ],
        },
        //"An app designed to allow an admin to manage help desk tickets that come in from Lambda School Students.",
      },
      {
        id: 5,
        name: "Conway's Game of Life",
        img_src: "/assets/images/game-of-life-thumbnail.png",
        site_url: "https://marekgameoflife.now.sh/",
        gitHub_url: "https://github.com/jessemarek/CS-build-week",
        description: {
          tech_stack: "React | JavaScript | SASS",
          features: [
            "Lambda School Build Week Project",
            "Developed algorithm that obeys the rules to Conway's Game of Life",
            "Project focused on CS concepts",
          ],
        },
        //"The focus of this project was on creating the algorithm that follows the rules of Conway's Game of Life.",
      },
    ],
    description:
      "These are some of the projects I have worked on as a student at Lambda School as well as some personal projects I built for myself or to learn new skills. Several of these projects were done during Lambda School Build Weeks. What is a Build Week? At Lambda School, a build week is sort of like a test. It is a way to show that you have mastered all of the skills learned during the current unit of instruction. A unit is a one month - or 4 sprints - long block of instruction. It consists of 3 weeks of instruction followed up by a build week. This is where you demonstrate your understanding of all the concepts you learned in a collaborative group project with other students. Each project team is comprised of students at different points along the journey through Lambda School. The Build Week projects were greenfield projects built in one week by a team of student devs.",
  },
};
