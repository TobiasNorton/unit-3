require 'sinatra'
require 'sinatra/reloader' if development?
require 'sinatra/json'

JOKES = [
"Why do programmers always mix up Halloween and Christmas?  Because Oct 31 equals Dec 25.",
"How many programmers does it take to change a light bulb?  None – It’s a hardware problem",
"There are only 10 kinds of people in this world: those who know binary and those who don’t.",
"Did you hear about the restaurant on the moon? Great food, no atmosphere.",
"What do you call a fake noodle? An Impasta.",
"How many apples grow on a tree? All of them.",
"Want to hear a joke about paper? Nevermind it's tearable."
]

get ''

get '/' do
  "Hello, World"
end

get '/tacos' do
  "mmmm, tacos"
end  

get '/tuesday' do
  "yup its tuesday"
end