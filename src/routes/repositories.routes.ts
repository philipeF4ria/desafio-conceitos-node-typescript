import { Router } from 'express';

import RepoRepository from '../repositories/RepositoriesRepository';

import CreateRepositoryService from '../services/CreateRepositoryService';
import DeleteRepositoryService from '../services/DeleteRepositoryService';
import EditRepositoryService from '../services/EditRepositoryService';

const repositoriesRouter = Router();

const repoRepository = new RepoRepository();

repositoriesRouter.get('/', (request, response) => {
  try {
    const repositories = repoRepository.listRepositories();

    return response.json(repositories);
  } catch (err) {
    return response.status(400).json({ message: err });
  }
});

repositoriesRouter.post('/', (request, response) => {
  try {
    const { title, url, techs } = request.body;

    const createRepository = new CreateRepositoryService(repoRepository);

    const repository = createRepository.execute({
      title,
      url,
      techs,
    });

    return response.json(repository);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

repositoriesRouter.delete('/:id', (request, response) => {
  try {
    const { id } = request.params;

    const deleteRepository = new DeleteRepositoryService(repoRepository);

    deleteRepository.execute(id);

    return response.json({ message: 'Repository has been deleted' });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

repositoriesRouter.put('/:id', (request, response) => {
  try {
    const { id } = request.params;
    const { title, url, techs } = request.body;

    const editRepository = new EditRepositoryService(repoRepository);

    const repositories = editRepository.execute({ title, url, techs }, id);

    return response.json(repositories);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default repositoriesRouter;
