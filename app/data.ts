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
// - **Domain:** The broader category or domain of the skill.
// - **Learning Resources:** Includes various materials and projects for learning.
// - **Resource Tag:** Tags for specific technologies or tools relevant to each resource

const learningCards = [
  {
    id: 1,
    skillArea: "Frontend devel...",
    description:
      "Frontend Development is the practice of building user interfaces for web applications.",
    domain: "Frontend",
    progress: 50.25,
    image:
      "https://media.licdn.com/dms/image/D4D12AQHtI0C1YdohQA/article-cover_image-shrink_720_1280/0/1694192663813?e=2147483647&v=beta&t=PzCttA7epMxw1abHI7hk3ig4ZozBvCQ0hratnFnkK9M",
    skills: [
      {
        id: 1,
        name: "React",
        learningResources: [
          {
            id: 1,
            name: "The Complete Guide 2024 (incl Hooks, React Router, Redux)",
            source: "Udemy",
            technology: "React",
            progress: 74,
            units: [
              {
                id: 1,
                name: "Beginner",
                progress: 100,
                status: "Completed",
                topics: [
                  {
                    id: 1,
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
                id: 2,
                name: "Intermediate",
                progress: 74,
                status: "Paused",
                topics: [
                  {
                    id: 3,
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
                id: 3,
                name: "Advanced",
                progress: 0,
                status: "ToDO",
                topics: [],
              },
            ],
          },
          {
            id: 2,
            name: "React Road Map",
            source: "Roadmap.sh",
            technology: "React",
            progress: 16,
            units: [],
          },
        ],
        practice: [
          {
            status: "Completed",
            name: "Splitwise",
            topics: ["React", "useState", "Compoents"],
            timeSpent: 10,
          },
          {
            name: "Willbery",
            status: "In Progress",
            topics: ["Remix", "React", "Tailwind"],
            timeSpent: 16,
          },
        ],
      },
      {
        name: "TypeScript",
        learningResources: [
          {
            id: 2,
            name: "TypeScript Road Map",
            source: "Roadmap.sh",
            technology: "TypeScript",
            progress: 11,
            units: [],
          },
        ],
        practice: [],
      },
      {
        id: 3,
        name: "Next.JS",
        learningResources: [
          {
            id: 3,
            name: "The Complete Guide 2024 (incl Hooks, React Router, Redux)",
            source: "Udemy",
            technology: "Next.JS",
            progress: 0,
            units: [
              {
                id: 1,
                name: "Course",
                progress: 0,
                status: "ToDO",
                topics: [],
              },
            ],
          },
        ],
        practice: [
          {
            id: 1,
            name: "TrustedHub",
            status: "ToDO",
            topics: ["Remix", "React", "Tailwind"],
            timeSpent: 16,
          },
        ],
      },
      {
        name: "Remix",
        learningResources: [],
        practice: [
          {
            id: 1,
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
    id: 2,
    skillArea: "Java Development",
    description:
      "Java Development is the practice of building applications using the Java programming language.",
    domain: "Java",
    progress: 13.5,
    image:
      "https://japan.zdnet.com/storage/2021/09/15/765dc76ff8f55ce268feeb881011003f/t/584/438/d/java-logo_1280x960.jpg",
    skills: [
      {
        id: 1,
        name: "Java",
        learningResources: [
          {
            id: 1,
            name: "Java Spring Boot",
            source: "JetBrains Academy",
            progress: 74,
            units: [
              {
                name: "Java Syntax",
                progress: 17,
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
                name: "Spring Boot",
                progress: 0,
                status: "ToDo",
                topics: [],
              },
            ],
          },
          {
            name: "Java Development",
            source: "MOOC.fi",
            technology: "Java",
            progress: 10,
            units: [],
          },
        ],
        practice: [],
      },
    ],
  },
  {
    skillArea: "Could Developer",
    description:
      "Cloud Development is the practice of building applications using the cloud.",
    domain: "DevOps",
    progress: 89,
    image:
      "https://old.roi4cio.com/fileadmin/user_upload/Amazon_WorkSpaces.png",
    skills: [
      {
        id: 1,
        name: "AWS",
        learningResources: [
          {
            id: 1,
            name: "Could Practitioner",
            source: "AWS Skill Builder",
            progress: 100,
            certificate: false,
            units: [],
          },
          {
            id: 2,
            name: "SAA-C03",
            source: "Udemy | Maarek",
            progress: 79,
            units: [],
          },
        ],
        practice: [],
      },
    ],
  },
  {
    id: 3,
    skillArea: "CI/CD",
    description:
      "CI/CD is the practice of building applications using the cloud.",
    domain: "DevOps",
    progress: 34.5,
    image: "https://mlops-guide.github.io/MLOps/CICDML/ci-cd.png",
    skills: [
      {
        id: 1,
        name: "GitLabCI",
        learningResources: [
          {
            id: 1,
            name: "GitLab Official Documentation",
            source: "GitLab Official Documentation",
            progress: 13,
            certificate: false,
            units: [
              {
                id: 1,
                name: "GitLab YAML syntax",
                progress: 100,
                status: "Completed",
                topics: [
                  {
                    id: 1,
                    name: "depends",
                    practice: {
                      name: "depends",
                      timeSpent: 2,
                    },
                  },
                  {
                    id: 2,
                    name: "needs",
                    practice: {
                      name: "needs",
                      timeSpent: 2,
                    },
                  },
                ],
              },

              {
                id: 2,
                name: "GitLab Documentation",
                progress: 13,
                status: "In Progress",
                topics: [],
              },
            ],
          },
        ],
        practice: [
          {
            id: 1,
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
    id: 4,
    skillArea: "AI",
    description: "AI is the practice of building applications using the cloud.",
    domain: "AI",
    progress: 34.5,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/042/386/484/small/artificial-intelligence-banner-web-icon-illustration-concept-vector.jpg",
    skills: [
      {
        id: 1,
        name: "AI Algorithms",
        learningResources: [
          {
            id: 1,
            name: "CS50AI",
            source: "GitLab Official Documentation",
            progress: 57,
            certificate: false,
            units: [],
          },
          {
            id: 2,
            name: "Regression and Classification",
            source: "CodeSygnal",
            progress: 100,
            certificate: false,
            units: [],
          },
        ],
        practice: [
          {
            id: 1,
            status: "In Progress",
            name: "Hiredity",
            topics: [],
            timeSpent: 4,
          },
          {
            id: 2,
            status: "In Progress",
            name: "Crossword",
            topics: [],
            timeSpent: 4,
          },
          {
            id: 3,
            status: "In Progress",
            name: "Minesweeper",
            topics: [],
            timeSpent: 4,
          },
          {
            id: 4,
            status: "In Progress",
            name: "A* Algorithm",
            topics: [],
            timeSpent: 4,
          },
          {
            id: 5,
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
    id: 5,
    skillArea: "DS&ML",
    description: "AI is the practice of building applications using the cloud.",
    domain: "AI",
    progress: 34.5,
    image: "https://assets.eweek.com/uploads/2021/01/Data.science.png",
    skills: [
      {
        id: 1,
        name: "Machine Learning",
        learningResources: [
          {
            id: 1,
            name: "Kaggle | Intro to Machine Learning",
            source: "Kaggle",
            progress: 100,
            certificate: false,
            units: [],
          },
          {
            id: 2,
            name: "Kaggle | Data Visualization",
            source: "Kaggle",
            progress: 100,
            certificate: false,
            units: [],
          },
          {
            id: 3,
            name: "Kaggle | Statistic and Probability",
            source: "Khan Academy",
            progress: 23,
            certificate: false,
            units: [],
          },
        ],
        practice: [
          {
            id: 1,
            status: "Completed",
            name: "APT",
            topics: [],
            timeSpent: 4,
          },
          {
            id: 2,
            status: "Completed",
            name: "Digit Recognizer",
            topics: [],
            timeSpent: 4,
          },
          {
            id: 3,
            status: "Completed",
            name: "Titanic",
            topics: [],
            timeSpent: 4,
          },
          {
            id: 4,
            status: "Completed",
            name: "House Price Prediction",
            topics: [],
            timeSpent: 4,
          },
          {
            id: 5,
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
    id: 6,
    skillArea: "Math for ML",
    description: " Math for ML",
    domain: "AI",
    progress: 34.5,
    image:
      "https://i.ytimg.com/vi/YCOaV7Ol0MQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBVR7UKvTlvzVliW0Bn-aTwdSXBnA",
    skills: [
      {
        id: 1,
        name: "Linear Algebra",
        learningResources: [
          {
            id: 1,
            name: "Linear Algebra",
            source: "Khan",
            progress: 95,
            certificate: false,
            units: [
              {
                name: "Unit 1",
                progress: 94,
                status: "In Progress",
                topics: [],
              },
              {
                name: "Unit 3",
                progress: 0,
                status: "ToDo",
                topics: [],
              },
              {
                name: "Unit 4",
                progress: 0,
                status: "ToDo",
                topics: [],
              },
            ],
          },
          {
            id: 2,
            name: "18.06SC | Linear Algebra",
            source: "MIT",
            progress: 27,
            certificate: false,
            units: [],
          },
          {
            id: 3,
            name: "Linear Algebra with Yuri",
            source: "Private Lessons",
            progress: 0,
            certificate: false,
            units: [],
          },
        ],
        practice: [],
      },
    ],
  },
  {
    id: 7,
    skillArea: "Orchestartion",
    description:
      "Docker is the practice of building applications using the cloud.",
    domain: "DevOps",
    progress: 34.5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZfE89zqZ2kSsp__u7cPfCKEdUZyZfEGqWQ&s",
    skills: [
      {
        id: 1,
        name: "Docker",
        learningResources: [
          {
            id: 1,
            name: "Docker Roadmap",
            source: "Roadmap.sh",
            progress: 80,
            certificate: false,
            units: [],
          },
          {
            id: 2,
            name: "Docker Syntax Refference",
            source: "Docker Documentation",
            progress: 0,
            certificate: false,
            units: [],
          },
          {
            id: 3,
            name: "Docker Deep Dive",
            source: "Book",
            progress: 60,
            certificate: false,
            units: [],
          },
        ],
        practice: [],
      },
    ],
  },
  {
    id: 8,
    skillArea: "Python",
    description:
      "Python is the practice of building applications using the cloud.",
    domain: "Python",
    progress: 50,
    image:
      "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Ftteuu4xw5tomxb7l0xjx.png",
    skills: [
      {
        id: 1,
        name: "FastAPI",
        learningResources: [
          {
            id: 1,
            name: "FastAPI Documentation",
            source: "FastAPI Documentation",
            progress: 0,
            certificate: false,
            units: [],
          },
        ],
        practice: [],
      },
      {
        id: 2,
        name: "FastAPI",
        learningResources: [
          {
            id: 1,
            name: "Advanced Python",
            source: "Book",
            progress: 70,
            certificate: false,
            units: [],
          },
          {
            id: 2,
            name: "Cosmic Python",
            source: "Book",
            progress: 100,
            certificate: false,
            units: [],
          },
          {
            id: 3,
            name: "Mark Lutz",
            source: "Book",
            progress: 100,
            certificate: false,
            units: [],
          },
        ],
        practice: [],
      },
    ],
  },
  {
    id: 9,
    skillArea: "C#",
    description: "C# is the practice of building applications using the cloud.",
    domain: "C#",
    progress: 50,
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--2XdEnCAM--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://raw.githubusercontent.com/sandeepkumar17/td-dev.to/di-collection-posts/assets/blog-cover/c-sharp.png",
    skills: [
      {
        id: 1,
        name: "C# Syntax",
        learningResources: [
          {
            id: 1,
            name: "Microsoft Learn C# Syntax",
            source: "Microsoft Learn",
            progress: 0,
            certificate: true,
            units: [],
          },
          {
            id: 2,
            name: "Stepik C# Syntax",
            source: "Stepik",
            progress: 0,
            certificate: true,
            units: [],
          },
        ],
        practice: [],
      },
      {
        id: 2,
        name: "Unity",
        learningResources: [
          {
            id: 1,
            name: "Unity 3D",
            source: "Unity Course",
            progress: 5,
            certificate: false,
            units: [],
          },
        ],
        practice: [],
      },
    ],
  },
  {
    id: 10,
    skillArea: "OS",
    description: "OS is the practice of building applications using the cloud.",
    domain: "DevOps",
    progress: 50,
    image:
      "https://lh6.googleusercontent.com/rRMlIyP-oBvqUb3VYRg1-rem09tAueDTOdi7ZfB38ecuaSuMh27DEAdFyPQbei9wi8PLqzvP8T5HCvP5ilxLkqjxigErSgeoKa3G0Thq0VJyPwx-8ef3d7_RnyashRphy4hKWVXDHnvEvE0AIMnUOfY",
    skills: [
      {
        id: 1,
        name: "Linux",
        learningResources: [
          {
            id: 1,
            name: "Linux Journey",
            source: "Linux Journey",
            progress: 50,
            certificate: false,
            units: [
              {
                name: "Unit 1",
                progress: 100,
                status: "In Progress",
                topics: [],
              },
              {
                name: "Unit 2",
                progress: 100,
                status: "In Progress",
                topics: [],
              },
              {
                name: "Unit 3",
                progress: 0,
                status: "In Progress",
                topics: [],
              },
            ],
          },
          {
            id: 2,
            name: "Linux Bandit",
            source: "woirzd",
            progress: 0,
            certificate: false,
            units: [],
          },
        ],
        practice: [],
      },
    ],
  },
];

export { learningCards };

[
  {
    id: 1,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xQcwKitRgXfqdi34DYlocPSEXD2G2zZipg&s",
    first: "Shruti",
    last: "Kapoor",
    twitter: "@shrutikapoor08",
  },
].forEach((activity) => {
  fakeActivities.create({
    ...activity,
    id: `${activity.first.toLowerCase()}-${activity.last.toLocaleLowerCase()}`,
  });
});
