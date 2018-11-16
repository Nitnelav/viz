import Project from '@/entities/Project'
import FileAPI from '@/communication/FileAPI'

export interface ProjectsState {
  projects: Project[]
  isFetching: boolean
}

export default class ProjectsStore {
  private state: ProjectsState

  get State() {
    return this.state
  }

  constructor() {
    this.state = this.getInitialState()
  }

  public async fetchProjects() {
    this.state.isFetching = true
    try {
      this.state.projects = await FileAPI.fetchAllPersonalProjects()
    } finally {
      this.state.isFetching = false
    }
  }

  private getInitialState(): ProjectsState {
    return {
      projects: [],
      isFetching: false,
    }
  }
}
