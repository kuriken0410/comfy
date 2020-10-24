class UsersController < ApplicationController
  def show
    user = User.find(params[:id])
    @nickname = user.nickname
    @posts = user.posts
    @kaminari = Post.page(params[:page]).per(9)
    # @tweets = user.tweets.order("created_at DESC")
  end
end
