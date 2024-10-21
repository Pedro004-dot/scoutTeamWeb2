import { LikeRepository } from "../../repository/like/LikeRepository";

interface AddLikeRequest {
  postId: string;
  userId: string;
}

class CreateLikeService {
  private likeRepository: LikeRepository;

  constructor() {
    this.likeRepository = new LikeRepository();
  }
  async execute({ postId, userId }: AddLikeRequest) {
    // Verifica se o usuário já curtiu a postagem
    
    const likeExists = await this.likeRepository.findLike(postId, userId);
    if (likeExists) {
      throw new Error("Você já curtiu esta postagem.");
    }

    // Adiciona a curtida
    const like = await this.likeRepository.addLike(postId, userId);
    return like;
  }
}

export { CreateLikeService };
