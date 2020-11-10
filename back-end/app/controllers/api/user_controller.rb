class Api::UserController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render "api/users/show"
        else
            renser json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
    end

    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :phone_number, :password)
    end
end
