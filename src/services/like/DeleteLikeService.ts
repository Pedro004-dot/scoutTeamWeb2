import { LikeRepository } from "../../repository/like/LikeRepository";
import { PostRepository } from "../../repository/post/PostRepository";
import { UserRepository } from "../../repository/user/UserRepository";

interface DeleteLikeRequest {
  postId: string;
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
  async execute({ postId, userId }: DeleteLikeRequest) {
    const user = await this.userRepository.findUserById(userId);
    if (!user) {
      throw new Error("Usuário não existe");
    }
    const post = await this.postRepository.findPostById(postId);
    if (!post) {
      throw new Error("O post não existe");
    }
    
    const likeExists = await this.likeRepository.findLike(postId, userId);
    if (!likeExists) {
      throw new Error("Você não curtiu esta postagem.");
    }

    // Adiciona a curtida
    const like = await this.likeRepository.removeLike(postId, userId);
    return like;
  }
}

export { DeleteLikeService };
