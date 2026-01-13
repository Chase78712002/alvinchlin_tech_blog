class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  private

  def require_admin!
    return unless Rails.env.production?


    authenticate_or_request_with_http_basic do |user, password|
      ActiveSupport::SecurityUtils.secure_compare(user, ENV.fetch("ADMIN_USER")) &
      ActiveSupport::SecurityUtils.secure_compare(password, ENV.fetch("ADMIN_PASSWORD"))
    end
  end
end
