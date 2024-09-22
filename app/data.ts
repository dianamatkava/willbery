////////////////////////////////////////////////////////////////////////////////
// Fake database
////////////////////////////////////////////////////////////////////////////////

import { matchSorter } from "match-sorter";
// import sortBy from "sort-by";
import invariant from "tiny-invariant";

////////////////////////////////////////////////////////////////////////////////
// This is just a fake DB table.

const fakeActivities = {
  records: {} as Record<string, object>,

  async getAll(): Promise<object[]> {
    return Object.keys(fakeActivities.records).map(
      (key) => fakeActivities.records[key]
    );
  },

  async get(id: string): Promise<object | null> {
    return fakeActivities.records[id] || null;
  },

  async create(values: object): Promise<object> {
    const id = Math.random().toString(36).substring(2, 9);
    const createdAt = new Date().toISOString();
    const newActivity = { id, createdAt, ...values };
    fakeActivities.records[id] = newActivity;
    return newActivity;
  },

  async set(id: string, values: object): Promise<object> {
    const activity = await fakeActivities.get(id);
    invariant(activity, `No activity found for ${id}`);
    const updatedActivity = { ...activity, ...values };
    fakeActivities.records[id] = updatedActivity;
    return updatedActivity;
  },

  destroy(id: string): null {
    delete fakeActivities.records[id];
    return null;
  },
};

////////////////////////////////////////////////////////////////////////////////
// Handful of helper functions to be called from route loaders and actions
export async function getActivities(query?: string | null) {
  let Activities = learningCards;
  if (query) {
    Activities = matchSorter(Activities, query, {
      keys: ["first", "last"],
    });
  }
  return Activities;
}

export async function createEmptyActivity() {
  const activity = await fakeActivities.create({});
  return activity;
}

export async function getActivity(id: string) {
  return fakeActivities.get(id);
}

export async function updateActivity(id: string, updates: object) {
  const activity = await fakeActivities.get(id);
  if (!activity) {
    throw new Error(`No activity found for ${id}`);
  }
  await fakeActivities.set(id, { ...activity, ...updates });
  return activity;
}

export async function deleteActivity(id: string) {
  fakeActivities.destroy(id);
}

// - **Skill Area:** The specific skill or topic being learned.
// - **tag:** The broader category or domain of the skill.
// - **Learning Resources:** Includes various materials and projects for learning.
// - **Resource Tag:** Tags for specific technologies or tools relevant to each resource

const learningCards = [
  {
    id: "1",
    name: "Frontend development",
    description:
      "Frontend Development is the practice of building user interfaces for web applications.",
    tag: "Frontend",
    progress: 50,
    image:
      "https://media.licdn.com/dms/image/D4D12AQHtI0C1YdohQA/article-cover_image-shrink_720_1280/0/1694192663813?e=2147483647&v=beta&t=PzCttA7epMxw1abHI7hk3ig4ZozBvCQ0hratnFnkK9M",
    groups: [
      {
        id: "1-1",
        name: "React",
        progress: 50,
        nodes: [
          {
            id: "1-1-1",
            name: "The Complete Guide 2024 (incl Hooks, React Router, Redux)",
            source: "Udemy",
            technology: "React",
            tag: "Book",
            progress: 74,
            leafs: [
              {
                id: "1-1-1-1",
                name: "Beginner",
                status: "Completed",
                tag: "Book",

                progress: {
                  progressPercent: 100,
                  progressSpent: 74,
                  progressTotal: 183,
                  duration: 60,
                },
                topics: [
                  {
                    id: "1-1-1-1-1",
                    name: "Components",
                    project: { name: "Hands-on", timeSpent: 2 },
                  },
                  {
                    name: "Composition",
                    project: { name: "Hands-on", timeSpent: 2 },
                  },
                ],
              },
              {
                id: "1-1-1-2",
                name: "Intermediate",
                progress: {
                  progressPercent: 100,
                  progressSpent: 74,
                  progressTotal: 183,
                  duration: 60,
                },
                status: "Paused",
                tag: "Book",
                topics: [
                  {
                    id: "1-1-1-2-1",
                    name: "useState",
                    project: { name: "Hands-on", timeSpent: 2 },
                  },
                  {
                    name: "useHooks",
                    project: { name: "Hands-on", timeSpent: 2 },
                  },
                ],
              },
              {
                id: "1-1-1-3",
                name: "Advanced",
                tag: "Book",
                progress: {
                  progressPercent: 100,
                  progressSpent: 74,
                  progressTotal: 183,
                  duration: 60,
                },
                status: "ToDO",
              },
            ],
          },
          {
            id: "1-1-2",
            name: "React Road Map",
            source: "Roadmap.sh",
            tag: "Roadmap",
            technology: "React",
            progress: 16,
          },
        ],
        practice: [
          {
            id: "1-1-p1",
            status: "Completed",
            name: "Splitwise",
            topics: ["React", "useState", "Compoents"],
            timeSpent: 10,
          },
          {
            id: "1-1-p2",
            name: "Willbery",
            status: "In Progress",
            progress: 20,
            topics: ["Remix", "React", "Tailwind"],
            timeSpent: 16,
          },
        ],
      },
      {
        id: "1-2",
        name: "TypeScript",
        progress: 50,
        nodes: [
          {
            id: "1-2-1",
            name: "TypeScript Road Map",
            source: "Roadmap.sh",
            tag: "Roadmap",
            technology: "TypeScript",
            progress: 11,
            leafs: [],
          },
        ],
        practice: [],
      },
      {
        id: "1-3",
        name: "Next.JS",
        progress: 50,
        nodes: [
          {
            id: "1-3-1",
            name: "The Complete Guide 2024 (incl Hooks, React Router, Redux)",
            source: "Udemy",
            technology: "Next.JS",
            tag: "Course",
            progress: 0,
          },
        ],
        practice: [
          {
            id: "1-3-p1",
            name: "TrustedHub",
            status: "ToDO",
            topics: ["Remix", "React", "Tailwind"],
            timeSpent: 16,
          },
        ],
      },
      {
        id: "1-4",
        name: "Remix",
        nodes: [],
        practice: [
          {
            id: "1-4-p1",
            name: "Willbery",
            status: "ToDO",
            topics: ["Remix", "React", "Tailwind"],
            timeSpent: 16,
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Java Development",
    description:
      "Java Development is the practice of building applications using the Java programming language.",
    tag: "Java",
    progress: 13.5,
    image:
      "https://japan.zdnet.com/storage/2021/09/15/765dc76ff8f55ce268feeb881011003f/t/584/438/d/java-logo_1280x960.jpg",
    groups: [
      {
        progress: 50,
        id: "2-1",
        name: "Java",
        nodes: [
          {
            id: "2-1-1",
            name: "Java Spring Boot",
            source: "JetBrains Academy",
            tag: "Course",
            progress: 74,
            leafs: [
              {
                id: "2-1-1-1",
                name: "Java Syntax",
                progress: {
                  progressPercent: 100,
                  progressSpent: 74,
                  progressTotal: 183,
                  duration: 60,
                },
                tag: "Course",
                status: "In Progress",
                topics: [
                  {
                    name: "Loops",
                    project: {},
                  },
                  {
                    name: "Classes",
                    project: {},
                  },
                ],
              },
              {
                id: "2-1-1-2",
                name: "Spring Boot",
                tag: "Course",
                progress: {
                  progressPercent: 100,
                  progressSpent: 74,
                  progressTotal: 183,
                  duration: 60,
                },
                status: "ToDo",
                topics: [],
              },
            ],
          },
          {
            id: "2-1-2",
            progress: 50,
            name: "Java Development",
            source: "MOOC.fi",
            tag: "Course",
            technology: "Java",
            leafs: [],
          },
        ],
        practice: [],
      },
    ],
  },
  {
    id: "3",
    name: "Could Developer",
    description:
      "Cloud Development is the practice of building applications using the cloud.",
    tag: "DevOps",
    progress: 89,
    image:
      "https://old.roi4cio.com/fileadmin/user_upload/Amazon_WorkSpaces.png",
    groups: [
      {
        progress: 50,
        id: "3-1",
        name: "AWS",
        nodes: [
          {
            id: "3-1-1",
            name: "Could Practitioner",
            source: "AWS Skill Builder",
            tag: "Course",
            progress: 100,
            certificate: false,
            leafs: [],
          },
          {
            id: "3-1-2",
            name: "SAA-C03",
            source: "Udemy | Maarek",
            tag: "Course",
            progress: 79,
            leafs: [],
          },
        ],
        practice: [],
      },
    ],
  },
  {
    id: "4",
    name: "CI/CD",
    description:
      "CI/CD is the practice of building applications using the cloud.",
    tag: "DevOps",
    progress: 34.5,
    image: "https://mlops-guide.github.io/MLOps/CICDML/ci-cd.png",
    groups: [
      {
        id: "4-1",
        name: "GitLabCI",
        nodes: [
          {
            id: "4-1-1",
            name: "GitLab Official Documentation",
            source: "GitLab Official Documentation",
            tag: "Doc",
            progress: 13,
            certificate: false,
            leafs: [
              {
                id: "4-1-1-1",
                name: "GitLab YAML syntax",
                progress: {
                  progressPercent: 100,
                  progressSpent: 74,
                  progressTotal: 183,
                  duration: 60,
                },
                tag: "Doc",
                status: "Completed",
                topics: [
                  {
                    id: "4-1-1-1-1",
                    name: "depends",
                    practice: {
                      name: "depends",
                      timeSpent: 2,
                    },
                  },
                  {
                    id: "4-1-1-1-2",
                    name: "needs",
                    practice: {
                      name: "needs",
                      timeSpent: 2,
                    },
                  },
                ],
              },

              {
                id: "4-1-1-2",
                name: "GitLab Documentation",
                tag: "Doc",
                progress: 13,
                status: "In Progress",
                topics: [],
              },
            ],
          },
        ],
        practice: [
          {
            id: "4-1-p1",
            status: "In Progress",
            name: "Add Pipelines to 6 repos",
            topics: ["GitLabCI", "GitLab"],
            timeSpent: 10,
          },
        ],
      },
    ],
  },
  {
    id: "5",
    name: "AI",
    description: "AI is the practice of building applications using the cloud.",
    tag: "AI",
    progress: 34.5,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/042/386/484/small/artificial-intelligence-banner-web-icon-illustration-concept-vector.jpg",
    groups: [
      {
        id: "5-1",
        name: "AI Algorithms",
        nodes: [
          {
            id: "5-1-1",
            name: "CS50AI",
            tag: "Course",
            source: "GitLab Official Documentation",
            progress: 57,
            certificate: false,
            leafs: [],
          },
          {
            id: "5-1-2",
            name: "Regression and Classification",
            source: "CodeSygnal",
            tag: "Course",
            progress: 100,
            certificate: false,
            leafs: [],
          },
        ],
        practice: [
          {
            id: "5-1-p1",
            status: "In Progress",
            name: "Hiredity",
            topics: [],
            timeSpent: 4,
          },
          {
            id: "5-1-p2",
            status: "In Progress",
            name: "Crossword",
            topics: [],
            timeSpent: 4,
          },
          {
            id: "5-1-p3",
            status: "In Progress",
            name: "Minesweeper",
            topics: [],
            timeSpent: 4,
          },
          {
            id: "5-1-p4",
            status: "In Progress",
            name: "A* Algorithm",
            topics: [],
            timeSpent: 4,
          },
          {
            id: "5-1-p5",
            status: "In Progress",
            name: "Knowledge Distillation",
            topics: [],
            timeSpent: 4,
          },
        ],
      },
    ],
  },
  {
    id: "6",
    name: "DS&ML",
    description: "AI is the practice of building applications using the cloud.",
    tag: "AI",
    progress: 34.5,
    image: "https://assets.eweek.com/uploads/2021/01/Data.science.png",
    groups: [
      {
        id: "6-1",
        name: "Machine Learning",
        nodes: [
          {
            id: "6-1-1",
            tag: "Course",
            name: "Kaggle | Intro to Machine Learning",
            source: "Kaggle",
            progress: 100,
            certificate: false,
            leafs: [],
          },
          {
            id: "6-1-2",
            tag: "Course",
            name: "Kaggle | Data Visualization",
            source: "Kaggle",
            progress: 100,
            certificate: false,
            leafs: [],
          },
          {
            id: "6-1-3",
            tag: "Course",
            name: "Kaggle | Statistic and Probability",
            source: "Khan Academy",
            progress: 23,
            certificate: false,
            leafs: [],
          },
        ],
        practice: [
          {
            id: "6-1-p1",
            status: "Completed",
            name: "APT",
            topics: [],
            timeSpent: 4,
          },
          {
            id: "6-1-p2",
            status: "Completed",
            name: "Digit Recognizer",
            topics: [],
            timeSpent: 4,
          },
          {
            id: "6-1-p3",
            status: "Completed",
            name: "Titanic",
            topics: [],
            timeSpent: 4,
          },
          {
            id: "6-1-p4",
            status: "Completed",
            name: "House Price Prediction",
            topics: [],
            timeSpent: 4,
          },
          {
            id: "6-1-p5",
            status: "In Progress",
            name: "CAPPA",
            topics: [],
            timeSpent: 4,
          },
        ],
      },
    ],
  },
  {
    id: "7",
    name: "Math for ML",
    description: " Math for ML",
    tag: "AI",
    progress: 34.5,
    image:
      "https://i.ytimg.com/vi/YCOaV7Ol0MQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBVR7UKvTlvzVliW0Bn-aTwdSXBnA",
    groups: [
      {
        id: "7-1",
        name: "Linear Algebra",
        nodes: [
          {
            id: "7-1-1",
            name: "Linear Algebra",
            source: "Khan",
            progress: 95,
            certificate: false,
            tag: "Course",
            leafs: [
              {
                name: "Unit 1",
                progress: {
                  progressPercent: 100,
                  progressSpent: 74,
                  progressTotal: 183,
                  duration: 60,
                },
                status: "In Progress",
                topics: [],
                tag: "Course",
              },
              {
                name: "Unit 3",
                progress: {
                  progressPercent: 100,
                  progressSpent: 74,
                  progressTotal: 183,
                  duration: 60,
                },
                status: "ToDo",
                tag: "Course",
              },
              {
                name: "Unit 4",
                progress: {
                  progressPercent: 100,
                  progressSpent: 74,
                  progressTotal: 183,
                  duration: 60,
                },
                status: "ToDo",
                tag: "Course",
              },
            ],
          },
          {
            id: "7-1-2",
            name: "18.06SC | Linear Algebra",
            source: "MIT",
            progress: 27,
            certificate: false,
            leafs: [],
            tag: "Course",
          },
          {
            id: "7-1-3",
            name: "Linear Algebra with Yuri",
            source: "Private Lessons",
            progress: 0,
            certificate: false,
            leafs: [],
            tag: "Private Lessons",
          },
        ],
        practice: [],
      },
    ],
  },
  {
    id: "8",
    name: "Orchestartion",
    description:
      "Docker is the practice of building applications using the cloud.",
    tag: "DevOps",
    progress: 34.5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZfE89zqZ2kSsp__u7cPfCKEdUZyZfEGqWQ&s",
    groups: [
      {
        id: "8-1",
        name: "Docker",
        tag: "Course",
        nodes: [
          {
            id: "8-1-1",
            name: "Docker Roadmap",
            source: "Roadmap.sh",
            progress: 80,
            certificate: false,
            leafs: [],
            tag: "Roadmap.sh",
          },
          {
            id: "8-1-2",
            name: "Docker Syntax Refference",
            source: "Docker Documentation",
            progress: 0,
            certificate: false,
            leafs: [],
            tag: "Documentation",
          },
          {
            id: "8-1-3",
            name: "Docker Deep Dive",
            source: "Book",
            progress: 60,
            certificate: false,
            leafs: [],
            tag: "Book",
          },
        ],
        practice: [],
      },
    ],
  },
  {
    id: "9",
    name: "Python",
    description:
      "Python is the practice of building applications using the cloud.",
    tag: "Python",
    progress: 50,
    image:
      "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Ftteuu4xw5tomxb7l0xjx.png",
    groups: [
      {
        id: "9-1",
        name: "FastAPI",
        tag: "Course",
        nodes: [
          {
            id: "9-1-1",
            name: "FastAPI Documentation",
            source: "FastAPI Documentation",
            progress: 0,
            certificate: false,
            leafs: [],
            tag: "Documentation",
          },
        ],
        practice: [],
      },
      {
        id: "9-2",
        name: "Python",
        tag: "Course",
        nodes: [
          {
            id: "9-2-1",
            name: "Advanced Python",
            source: "Book",
            progress: 70,
            certificate: false,
            leafs: [],
            tag: "Book",
          },
          {
            id: "9-2-2",
            name: "Cosmic Python",
            source: "Book",
            progress: 100,
            certificate: false,
            leafs: [],
            tag: "Book",
          },
          {
            id: "9-2-3",
            name: "Mark Lutz",
            source: "Book",
            progress: 100,
            certificate: false,
            leafs: [],
            tag: "Book",
          },
        ],
        practice: [],
      },
    ],
  },
  {
    id: "10",
    name: "C#",
    description: "C# is the practice of building applications using the cloud.",
    tag: "C#",
    progress: 50,
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--2XdEnCAM--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://raw.githubusercontent.com/sandeepkumar17/td-dev.to/di-collection-posts/assets/blog-cover/c-sharp.png",
    groups: [
      {
        id: "10-1",
        name: "C# Syntax",
        tag: "Course",
        nodes: [
          {
            id: "10-1-1",
            name: "Microsoft Learn C# Syntax",
            source: "Microsoft Learn",
            progress: 0,
            certificate: true,
            leafs: [],
            tag: "Course",
          },
          {
            id: "10-1-2",
            name: "Stepik C# Syntax",
            source: "Stepik",
            progress: 0,
            certificate: true,
            leafs: [],
            tag: "Course",
          },
        ],
        practice: [],
      },
      {
        id: "10-2",
        name: "Unity",
        tag: "Course",
        nodes: [
          {
            id: "10-2-1",
            name: "Unity 3D",
            source: "Unity Course",
            progress: 5,
            certificate: false,
            leafs: [],
            tag: "Course",
          },
        ],
        practice: [],
      },
    ],
  },
  {
    id: "11",
    name: "OS",
    description: "OS is the practice of building applications using the cloud.",
    tag: "DevOps",
    progress: 50,
    image:
      "https://lh6.googleusercontent.com/rRMlIyP-oBvqUb3VYRg1-rem09tAueDTOdi7ZfB38ecuaSuMh27DEAdFyPQbei9wi8PLqzvP8T5HCvP5ilxLkqjxigErSgeoKa3G0Thq0VJyPwx-8ef3d7_RnyashRphy4hKWVXDHnvEvE0AIMnUOfY",
    groups: [
      {
        id: "11-1",
        name: "Linux",
        tag: "Course",
        nodes: [
          {
            id: "11-1-1",
            name: "Linux Journey",
            source: "Linux Journey",
            progress: 50,
            certificate: false,
            tag: "Course",
            leafs: [
              {
                name: "Unit 1",
                progress: {
                  progressPercent: 100,
                  progressSpent: 74,
                  progressTotal: 183,
                  duration: 60,
                },
                status: "In Progress",
                topics: [],
                tag: "Course",
              },
              {
                name: "Unit 2",
                progress: {
                  progressPercent: 100,
                  progressSpent: 74,
                  progressTotal: 183,
                  duration: 60,
                },
                status: "In Progress",
                topics: [],
                tag: "Course",
              },
              {
                name: "Unit 3",
                progress: {
                  progressPercent: 100,
                  progressSpent: 74,
                  progressTotal: 183,
                  duration: 60,
                },
                status: "In Progress",
                topics: [],
                tag: "Course",
              },
            ],
          },
          {
            id: "11-1-2",
            name: "Linux Bandit",
            source: "woirzd",
            progress: 0,
            certificate: false,
            leafs: [],
            tag: "Practice",
          },
        ],
        practice: [],
      },
    ],
  },
];

export { learningCards };
