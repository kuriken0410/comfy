class CommentsController < ApplicationController
  def create
    @comment = Comment.create(comment_params)
    respond_to do |format|
      format.html { redirect_to post_path(params[:post_id]) }
      format.json
    end
    # comment = Comment.create(comment_params)
    # redirect_to "/tweets/#{comment.tweet.id}"  
    # コメントと結びつくツイートの詳細画面に遷移する
    # 上記「redirect_to」の記述は、redirect_to /tweets/1とか2になる。このURIパターンがshowのビューと紐付く。このURIパターンは、rails routesで確認する。 
  end

  private
  def comment_params
    params.require(:comment).permit(:text).merge(user_id: current_user.id, post_id: params[:post_id])
    # params.require(:tweet).permit(:image, :text).merge(user_id: current_user.id, created_at: current_user.id) マイページ順序の実装
  end
end
