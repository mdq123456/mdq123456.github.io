import {mockData} from '../mocks/api/data';
import type {Profile, SkillCategories, TimelineItem, Project} from '../types';

export const api = {
  getProfile: async (): Promise<Profile> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return mockData.profile;
  },

  getSkills: async (): Promise<SkillCategories> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return mockData.skillCategories;
  },

  getTimeline: async (): Promise<TimelineItem[]> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return mockData.timeline;
  },

  getProjects: async (): Promise<Project[]> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return mockData.projects;
  },
};
