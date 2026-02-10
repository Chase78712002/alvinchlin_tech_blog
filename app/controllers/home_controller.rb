class HomeController < ApplicationController
  def index
    @latest_posts = Post.published.order(updated_at: :desc).limit(5)
  end
end
