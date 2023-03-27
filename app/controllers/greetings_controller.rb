class GreetingsController < ApplicationController
  def index
    id = rand(1..Greeting.count)
    @greetings = Greeting.find(id)
  end
end
