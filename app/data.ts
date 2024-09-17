////////////////////////////////////////////////////////////////////////////////
// Fake database
////////////////////////////////////////////////////////////////////////////////

import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import invariant from "tiny-invariant";

type ActivityMutation = {
  id?: string;
  first?: string;
  last?: string;
  avatar?: string;
  twitter?: string;
  notes?: string;
  favorite?: boolean;
};

export type ActivityRecord = ActivityMutation & {
  id: string;
  createdAt: string;
};

////////////////////////////////////////////////////////////////////////////////
// This is just a fake DB table.

const fakeActivities = {
  records: {} as Record<string, ActivityRecord>,

  async getAll(): Promise<ActivityRecord[]> {
    return Object.keys(fakeActivities.records)
      .map((key) => fakeActivities.records[key])
      .sort(sortBy("-createdAt", "last"));
  },

  async get(id: string): Promise<ActivityRecord | null> {
    return fakeActivities.records[id] || null;
  },

  async create(values: ActivityMutation): Promise<ActivityRecord> {
    const id = values.id || Math.random().toString(36).substring(2, 9);
    const createdAt = new Date().toISOString();
    const newActivity = { id, createdAt, ...values };
    fakeActivities.records[id] = newActivity;
    return newActivity;
  },

  async set(id: string, values: ActivityMutation): Promise<ActivityRecord> {
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
  let Activities = await fakeActivities.getAll();
  if (query) {
    Activities = matchSorter(Activities, query, {
      keys: ["first", "last"],
    });
  }
  return Activities.sort(sortBy("last", "createdAt"));
}

export async function createEmptyActivity() {
  const activity = await fakeActivities.create({});
  return activity;
}

export async function getActivity(id: string) {
  return fakeActivities.get(id);
}

export async function updateActivity(id: string, updates: ActivityMutation) {
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
    skillArea: "Frontend Development",
    description:
      "Frontend Development is the practice of building user interfaces for web applications.",
    domain: "Frontend",
    progress: 50.25,
    skills: [
      {
        name: "React",
        learningResources: [
          {
            name: "The Complete Guide 2024 (incl Hooks, React Router, Redux)",
            source: "Udemy",
            technology: "React",
            process: 74,
            units: [
              {
                name: "Beginner",
                process: 100,
                status: "Completed",
                topics: [
                  {
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
                name: "Intermediate",
                process: 74,
                status: "Paused",
                topics: [
                  {
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
                name: "Advanced",
                process: 0,
                status: "ToDO",
                topics: [],
              },
            ],
          },
          {
            name: "React Road Map",
            source: "Roadmap.sh",
            technology: "React",
            process: 16,
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
        name: "React",
        learningResources: [
          {
            name: "TypeScript Road Map",
            source: "Roadmap.sh",
            technology: "TypeScript",
            process: 11,
            units: [],
          },
        ],
        practice: [],
      },
      {
        name: "Next.JS",
        learningResources: [
          {
            name: "The Complete Guide 2024 (incl Hooks, React Router, Redux)",
            source: "Udemy",
            technology: "Next.JS",
            process: 0,
            units: [
              {
                name: "Course",
                process: 0,
                status: "ToDO",
                topics: [],
              },
            ],
          },
        ],
        practice: [
          {
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
    skillArea: "Java Development",
    description:
      "Java Development is the practice of building applications using the Java programming language.",
    domain: "Java",
    progress: 13.5,
    skills: [
      {
        name: "React",
        learningResources: [
          {
            name: "Java Spring Boot",
            source: "JetBrains Academy",
            process: 74,
            units: [
              {
                name: "Java Syntax",
                process: 17,
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
                process: 0,
                status: "ToDo",
                topics: [],
              },
            ],
          },
          {
            name: "Java Development",
            source: "MOOC.fi",
            technology: "Java",
            process: 10,
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
    skills: [
      {
        name: "AWS",
        learningResources: [
          {
            name: "Could Practitioner",
            source: "AWS Skill Builder",
            process: 100,
            certificate: false,
            units: [],
          },
          {
            name: "SAA-C03",
            source: "Udemy | Maarek",
            process: 79,
            units: [],
          },
        ],
        practice: [],
      },
    ],
  },
  {
    skillArea: "CI/CD",
    description:
      "CI/CD is the practice of building applications using the cloud.",
    domain: "DevOps",
    progress: 34.5,
    skills: [
      {
        name: "GitLabCI",
        learningResources: [
          {
            name: "GitLab Official Documentation",
            source: "GitLab Official Documentation",
            process: 13,
            certificate: false,
            units: [
              {
                name: "GitLab YAML syntax",
                process: 100,
                status: "Completed",
                topics: [
                  {
                    name: "depends",
                    practice: {
                      name: "depends",
                      timeSpent: 2,
                    },
                  },
                  {
                    name: "needs",
                    practice: {
                      name: "needs",
                      timeSpent: 2,
                    },
                  },
                ],
              },

              {
                name: "GitLab Documentation",
                process: 13,
                status: "In Progress",
                topics: [],
              },
            ],
          },
        ],
        practice: [
          {
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
    skillArea: "AI",
    description: "AI is the practice of building applications using the cloud.",
    domain: "AI",
    progress: 34.5,
    skills: [
      {
        name: "AI Algorithms",
        learningResources: [
          {
            name: "CS50AI",
            source: "GitLab Official Documentation",
            process: 57,
            certificate: false,
            units: [],
          },
          {
            name: "Regression and Classification",
            source: "CodeSygnal",
            process: 100,
            certificate: false,
            units: [],
          },
        ],
        practice: [
          {
            status: "In Progress",
            name: "Hiredity",
            topics: [],
            timeSpent: 4,
          },
          {
            status: "In Progress",
            name: "Crossword",
            topics: [],
            timeSpent: 4,
          },
          {
            status: "In Progress",
            name: "Minesweeper",
            topics: [],
            timeSpent: 4,
          },
          {
            status: "In Progress",
            name: "A* Algorithm",
            topics: [],
            timeSpent: 4,
          },
          {
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
    skillArea: "DS&ML",
    description: "AI is the practice of building applications using the cloud.",
    domain: "AI",
    progress: 34.5,
    skills: [
      {
        name: "Machine Learning",
        learningResources: [
          {
            name: "Intro to Machine Learning",
            source: "Kaggle",
            process: 100,
            certificate: false,
            units: [],
          },
          {
            name: "Data Visualization",
            source: "Kaggle",
            process: 100,
            certificate: false,
            units: [],
          },
          {
            name: "Statistic and Probability",
            source: "Khan Academy",
            process: 23,
            certificate: false,
            units: [],
          },
        ],
        practice: [
          {
            status: "Completed",
            name: "APT",
            topics: [],
            timeSpent: 4,
          },
          {
            status: "Completed",
            name: "Digit Recognizer",
            topics: [],
            timeSpent: 4,
          },
          {
            status: "Completed",
            name: "Titanic",
            topics: [],
            timeSpent: 4,
          },
          {
            status: "Completed",
            name: "House Price Prediction",
            topics: [],
            timeSpent: 4,
          },
          {
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
    skillArea: "Math for ML",
    description: " Math for ML",
    domain: "AI",
    progress: 34.5,
    skills: [
      {
        name: "Linear Algebra",
        learningResources: [
          {
            name: "Linear Algebra",
            source: "Khan",
            process: 95,
            certificate: false,
            units: [
              {
                name: "Unit 1",
                process: 94,
                status: "In Progress",
                topics: [],
              },
              {
                name: "Unit 3",
                process: 0,
                status: "ToDo",
                topics: [],
              },
              {
                name: "Unit 4",
                process: 0,
                status: "ToDo",
                topics: [],
              },
            ],
          },
          {
            name: "18.06SC | Linear Algebra",
            source: "MIT",
            process: 27,
            certificate: false,
            units: [],
          },
          {
            name: "Linear Algebra with Yuri",
            source: "Private Lessons",
            process: 0,
            certificate: false,
            units: [],
          },
        ],
        practice: [],
      },
    ],
  },
  {
    skillArea: "Orchestartion",
    description:
      "Docker is the practice of building applications using the cloud.",
    domain: "DevOps",
    progress: 34.5,
    skills: [
      {
        name: "Docker",
        learningResources: [
          {
            name: "Docker Roadmap",
            source: "Roadmap.sh",
            process: 80,
            certificate: false,
            units: [],
          },
          {
            name: "Docker Syntax Refference",
            source: "Docker Documentation",
            process: 0,
            certificate: false,
            units: [],
          },
          {
            name: "Docker Deep Dive",
            source: "Book",
            process: 60,
            certificate: false,
            units: [],
          },
        ],
        practice: [],
      },
    ],
  },
  {
    skillArea: "Python",
    description:
      "Python is the practice of building applications using the cloud.",
    domain: "Python",
    progress: 50,
    skills: [
      {
        name: "FastAPI",
        learningResources: [
          {
            name: "FastAPI Documentation",
            source: "FastAPI Documentation",
            process: 0,
            certificate: false,
            units: [],
          },
        ],
        practice: [],
      },
      {
        name: "FastAPI",
        learningResources: [
          {
            name: "Advanced Python",
            source: "Book",
            process: 70,
            certificate: false,
            units: [],
          },
          {
            name: "Cosmic Python",
            source: "Book",
            process: 100,
            certificate: false,
            units: [],
          },
          {
            name: "Mark Lutz",
            source: "Book",
            process: 100,
            certificate: false,
            units: [],
          },
        ],
        practice: [],
      },
    ],
  },
  {
    skillArea: "C#",
    description: "C# is the practice of building applications using the cloud.",
    domain: "C#",
    progress: 50,
    skills: [
      {
        name: "C# Syntax",
        learningResources: [
          {
            name: "C# Syntax",
            source: "Microsoft Learn",
            process: 0,
            certificate: true,
            units: [],
          },
          {
            name: "C# Syntax",
            source: "Stepik",
            process: 0,
            certificate: true,
            units: [],
          },
        ],
        practice: [],
      },
      {
        name: "Unity",
        learningResources: [
          {
            name: "Unity 3D",
            source: "Unity Course",
            process: 5,
            certificate: false,
            units: [],
          },
        ],
        practice: [],
      },
    ],
  },
  {
    skillArea: "OS",
    description: "OS is the practice of building applications using the cloud.",
    domain: "DevOps",
    progress: 50,
    skills: [
      {
        name: "Linux",
        learningResources: [
          {
            name: "Linux Journey",
            source: "Linux Journey",
            process: 50,
            certificate: false,
            units: [
              {
                name: "Unit 1",
                process: 100,
                status: "In Progress",
                topics: [],
              },
              {
                name: "Unit 2",
                process: 100,
                status: "In Progress",
                topics: [],
              },
              {
                name: "Unit 3",
                process: 0,
                status: "In Progress",
                topics: [],
              },
            ],
          },
          {
            name: "Linux Bandit",
            source: "woirzd",
            process: 0,
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
