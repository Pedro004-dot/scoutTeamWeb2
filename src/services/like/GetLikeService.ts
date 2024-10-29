import { LikeRepository } from "../../repository/like/LikeRepository";
import { PostRepository } from "../../repository/post/PostRepository";
import { UserRepository } from "../../repository/user/UserRepository";

interface GetLikeRequest {
  postId: string;
  userId: string;
}

class GetLikeService {
  private likeRepository        :  LikeRepository;
  private userRepository        :  UserRepository;
  private postRepository        :  PostRepository;

  constructor() {
    this.likeRepository = new LikeRepository();
    this.userRepository = new UserRepository();
    this.postRepository = new PostRepository();
  }
  async execute({ postId,userId }: GetLikeRequest) {
    const user = await this.userRepository.findUserById(userId);
    if (!user) {
      throw new Error("Usuário não existe");
    }
    const post = await this.postRepository.findPostById(postId);
    if (!post) {
      throw new Error("O post não existe");
    }
    
    const likeExists = await this.likeRepository.findLikeByPost(postId);
    if (!likeExists) {
      throw new Error("Essa imagem não teve curtidas.");
    }
    return likeExists
  }
}

export { GetLikeService };
