class UsersController < ApplicationController
  def show
    user = User.find(params[:id])
    @nickname = user.nickname
    @posts = user.posts.order("created_at DESC")
    @kaminari = Post.page(params[:page]).per(9)
  end
end
