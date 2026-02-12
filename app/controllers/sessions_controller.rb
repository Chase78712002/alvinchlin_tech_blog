class SessionsController < ApplicationController
  def new
  end

  def create
    if valid_credentials?
      session[:admin_authenticated] = true
      redirect_to root_path, notice: "Logged In Successfully"
    else
      redirect_to login_path, alert: "Incorrect Password, check again"
    end
  end

  def destroy
    reset_session
    redirect_to root_path, notice: "You Logged Out Successfully!"
  end

  private

  def valid_credentials?
    username = params[:username]
    password = params[:password]

    return false if username.blank? || password.blank?
    ActiveSupport::SecurityUtils.secure_compare(username, Rails.application.credentials.admin_user) &
    ActiveSupport::SecurityUtils.secure_compare(password, Rails.application.credentials.admin_password)
  end
end
