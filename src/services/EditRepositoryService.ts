import RepoRepository from '../repositories/RepositoriesRepository';
import Repository from '../models/Repository';

interface Request {
  title: string;
  url: string;
  techs: string[];
}

class EditRepositoryService {
  private repoRepository: RepoRepository;

  constructor(repoRepository: RepoRepository) {
    this.repoRepository = repoRepository;
  }

  public execute({ title, url, techs }: Request, id: string): Repository[] {
    const findRepository = this.repoRepository
      .listRepositories()
      .findIndex(index => index.id === id);

    if (findRepository < 0) {
      throw new Error('Repository not found');
    }

    this.repoRepository.editRepository({ title, url, techs }, findRepository);

    return this.repoRepository.listRepositories();
  }
}

export default EditRepositoryService;
