import { PostRepository } from "../../repository/post/PostRepository";
import { UserRepository } from "../../repository/user/UserRepository";
import { SalvarPostRepository } from "../../repository/salvarPost/SalvarPostRepository";

interface GetSalvarPostRequest {
  userId: string;
}

class GetSalvarPostService {
  private postRepository: PostRepository;
  private userRepository        :  UserRepository;
  private postSalvarRepository : SalvarPostRepository;
  constructor() {
    this.postRepository = new PostRepository();
    this.userRepository = new UserRepository();
    this.postSalvarRepository = new SalvarPostRepository()
  }

  async execute({userId }: GetSalvarPostRequest) {
    const user = await this.userRepository.findUserById(userId);
    if (!user) {
      throw new Error("Usuário não existe");
    }

    // Chama o repository para criar a postagem
    const post = await this.postSalvarRepository.getPostsSalvoByUser(userId );

    return post;
  }
}

export { GetSalvarPostService };
                                    