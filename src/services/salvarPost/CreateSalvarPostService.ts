import { TipoPostagem } from "@prisma/client";
import { PostRepository } from "../../repository/post/PostRepository";
import { UserRepository } from "../../repository/user/UserRepository";
import { SalvarPostRepository } from "../../repository/salvarPost/SalvarPostRepository";

interface CreateSalvarPostRequest {
  postId: string;
  userId: string;
}

class CreateSalvarPostService {
  private postRepository: PostRepository;
  private userRepository        :  UserRepository;
  private postSalvarRepository : SalvarPostRepository;
  constructor() {
    this.postRepository = new PostRepository();
    this.userRepository = new UserRepository();
    this.postSalvarRepository = new SalvarPostRepository()
  }

  async execute({postId, userId }: CreateSalvarPostRequest) {
    const postSalvo = await this.postRepository.findPostById(postId);
    if (!postSalvo){
        throw new Error("Post nao existe")
    }
    const user = await this.userRepository.findUserById(userId);
    if (!user) {
      throw new Error("Usuário não existe");
    }

    // Chama o repository para criar a postagem
    const post = await this.postSalvarRepository.createPostSalvo({
      postId,
      userId,
    });

    return post;
  }
}

export { CreateSalvarPostService };
