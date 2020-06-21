import { uuid } from 'uuidv4';

class Repository {
  id: string;

  title: string;

  url: string;

  techs: string[];

  constructor({ title, url, techs }: Omit<Repository, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.url = url;
    this.techs = techs;
  }
}

export default Repository;
