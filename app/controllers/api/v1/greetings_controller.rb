class Api::V1::GreetingsController < ApplicationController
  def index
    greetings = Greeting.order('Random()').first
    render json: greetings
  end
end
