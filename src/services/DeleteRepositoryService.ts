import RepoRepository from '../repositories/RepositoriesRepository';
import Repository from '../models/Repository';

class DeleteRepositoryService {
  private repoRepository: RepoRepository;

  constructor(repoRepository: RepoRepository) {
    this.repoRepository = repoRepository;
  }

  public execute(id: string): Repository[] {
    const findRepository = this.repoRepository
      .listRepositories()
      .findIndex(index => index.id === id);

    if (findRepository < 0) {
      throw new Error('Repository not found');
    }

    this.repoRepository.listRepositories().splice(findRepository, 1);

    return this.repoRepository.listRepositories();
  }
}

export default DeleteRepositoryService;
