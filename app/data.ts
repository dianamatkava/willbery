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

// # Learning Card Structure

// **Card:**

// - **Skill Area:** Cloud Platforms
// - **Description:** Overview of Google Cloud Platform (GCP) and its use cases.
// - **Category:** DevOps
// - **Learning Resources:**

// **Card 1:**

// - **Skill Area:** Cloud Platforms
// - **Description:** Overview of cloud platforms and their use cases.
// - **Domain:** DevOps
// - **Learning Resources:**
//     - **[technology: AWS] AWS SAA-C3 Course**
//         - Material (100% pass)
//         - **Topics Covered:**
//             - Name: **EC2** (100% pass)
//                 - Project / Hands-on (2h spend)
//             - Name: **Route54** (100% pass)
//                 - Project / Hands-on (2h spend)
//         - **Global Projects:**
//             - **Project 1:** topics covered (S3, EC2, CloudFront ...) (10h spend)
//             - **Project 2:** topics covered (SQS, Kinesis, IAM ...) (16h spend)
//     - **[technology: GCP] GCP Associate Cloud Engineer Course**
//         - Material (100% pass)
//         - **Topics Covered:**
//             - Name: **Compute Engine** (100% pass)
//                 - Project / Hands-on (3h spend)
//             - Name: **Cloud Storage** (100% pass)
//                 - Project / Hands-on (2h spend)
//             - Name: **BigQuery** (90% pass)
//                 - Project / Hands-on (4h spend)
//         - **Global Projects:**
//             - **Project 1:** topics covered (Compute Engine, Cloud Storage, Cloud SQL ...) (12h spend)
//             - **Project 2:** topics covered (BigQuery, Dataflow, Pub/Sub ...) (15h spend)

// **Card 2:**

// - **Skill Area:** CI/CD
// - **Description:** (Add a description of CI/CD here)
// - **Domain:** DevOps
// - **Learning Resources:**
//     - **[tag: GitLabCI] GitLab Official Doc**
//         - Material (100% pass)
//         - GitLabCI Projecs (2h spend)
//             - Name: ….
//         - **Topics Covered:**
//             - Name: `dependency`
//             - Project / Hands-on (2h spend)
//     - **[tag: Jenkins] Jenkins Course**
//         - ...
//     - **Global Projects:**
//         - **Write GitLab CI pipelines for my repository 1:**
//         - **Write Jenkins pipelines for my repository 1:**

// **Attributes Breakdown:**

// - **Skill Area:** The specific skill or topic being learned.
// - **Domain:** The broader category or domain of the skill.
// - **Learning Resources:** Includes various materials and projects for learning.
// - **Resource Tag:** Tags for specific technologies or tools relevant to each resource

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
