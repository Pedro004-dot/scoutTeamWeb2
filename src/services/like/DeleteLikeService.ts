import { LikeRepository } from "../../repository/like/LikeRepository";
import { PostRepository } from "../../repository/post/PostRepository";
import { UserRepository } from "../../repository/user/UserRepository";

interface DeleteLikeRequest {
  likeId: string;
  userId: string;
}

class DeleteLikeService {
  private likeRepository        :  LikeRepository;
  private userRepository        :  UserRepository;
  private postRepository        :  PostRepository;

  constructor() {
    this.likeRepository = new LikeRepository();
    this.userRepository = new UserRepository();
    this.postRepository = new PostRepository();
  }
  async execute({ likeId, userId }: DeleteLikeRequest) {
    const user = await this.userRepository.findUserById(userId);
    if (!user) {
      throw new Error("Usuário não existe");
    }
    
    const likeExists = await this.likeRepository.findLike(likeId, userId);
    if (!likeExists) {
      throw new Error("Você não curtiu esta postagem.");
    }

    // Remover a curtida
    const like = await this.likeRepository.removeLike(likeId, userId);
    return like;
  }
}

export { DeleteLikeService };
