import { PostRepository } from "../../repository/post/PostRepository";
import { UserRepository } from "../../repository/user/UserRepository";
import { SalvarPostRepository } from "../../repository/salvarPost/SalvarPostRepository";

interface DeleteSalvarPostRequest {
  postSalvoId: string;
}

class DeleteSalvarPostService {
  private postRepository: PostRepository;
  private userRepository        :  UserRepository;
  private postSalvarRepository : SalvarPostRepository;
  constructor() {
    this.postRepository = new PostRepository();
    this.userRepository = new UserRepository();
    this.postSalvarRepository = new SalvarPostRepository()
  }

  async execute({postSalvoId }: DeleteSalvarPostRequest) {
    const post = await this.postSalvarRepository.getPostsSalvoByPost(postSalvoId);
    if (!post) {
      throw new Error("Usuário não existe");
    }

    // Chama o repository para criar a postagem
    const postSalvoDeletado = await this.postSalvarRepository.deletePostSalvo(postSalvoId);

    return postSalvoDeletado;
  }
}

export { DeleteSalvarPostService };
                                    