import RepoRepository from '../repositories/RepositoriesRepository';
import Repository from '../models/Repository';

interface Request {
  title: string;
  url: string;
  techs: string[];
}

class CreateRepositoryService {
  private repoRepository: RepoRepository;

  constructor(repoRepository: RepoRepository) {
    this.repoRepository = repoRepository;
  }

  public execute({ title, url, techs }: Request): Repository {
    const repository = this.repoRepository.create({
      title,
      url,
      techs,
    });

    return repository;
  }
}

export default CreateRepositoryService;
