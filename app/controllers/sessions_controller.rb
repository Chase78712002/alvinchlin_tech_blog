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
    redirect_to root_path, flash: "You Logged Out Successfully!"
  end

  private

  def valid_credentials?
    username = params[:username]
    password = params[:password]

    false if username.blank? || password.blank?
  end
end
