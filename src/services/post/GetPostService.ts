import { PostRepository } from "../../repository/post/PostRepository";

class GetPostsService {
  private postRepository: PostRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  async execute(userId: string) {
    // Chama o repository para obter as postagens de um usuário
    const posts = await this.postRepository.getPostsByUser(userId);
    return posts;
  }
}

export { GetPostsService };
