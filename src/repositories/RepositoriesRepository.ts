import Repository from '../models/Repository';

interface CreateRepoDTO {
  title: string;
  url: string;
  techs: string[];
}

class RepoRepository {
  private repositories: Repository[];

  constructor() {
    this.repositories = [];
  }

  public create({ title, url, techs }: CreateRepoDTO): Repository {
    const repo = new Repository({
      title,
      url,
      techs,
    });

    this.repositories.push(repo);

    return repo;
  }

  public listRepositories(): Repository[] {
    return this.repositories;
  }

  public editRepository(
    { title, url, techs }: CreateRepoDTO,
    index: number,
  ): Repository[] {
    this.repositories[index].title = title;
    this.repositories[index].url = url;
    this.repositories[index].techs = techs;

    return this.repositories;
  }

  public deleteRepository(index: number): Repository[] {
    this.repositories.splice(index, 1);

    return this.repositories;
  }
}

export default RepoRepository;
