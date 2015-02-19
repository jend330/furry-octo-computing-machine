class StaticPagesController < ApplicationController
  def index
     @blogs = Blog.all
  end
  def thank_you
  @name = params[:name]
  @email = params[:email]
  @message = params[:message]
  ActionMailer::Base.mail(:from => @email, 
	  	:to => 'jduvall330@gmail.com', 
	  	:subject => "A new contact form message from #{@name}", 
	  	:body => @message).deliver
end

   
end
