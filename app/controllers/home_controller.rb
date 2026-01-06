class HomeController < ApplicationController
  def index
    @latest_posts = Post.order(created_at: :desc).limit(5)
  end
end
