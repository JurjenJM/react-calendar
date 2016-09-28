module Api
  class MeetingsController < ApplicationController
    def index
      render json: Event.all
    end
  end
end
