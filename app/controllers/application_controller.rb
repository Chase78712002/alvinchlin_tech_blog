class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  helper_method :admin_authenticated?

  private

  def require_admin!
    unless admin_authenticated?
      redirect_to login_path, alert: "Please log in to continue"
    end
  end

  def admin_authenticated?
   session[:admin_authenticated] || false
  end
end
