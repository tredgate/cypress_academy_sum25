import { ProjectsPage } from "../projects_page.js";

export function createSimpleProject(projectName) {
  return new ProjectsPage().clickAddProject().typeName(projectName).clickSave();
}
