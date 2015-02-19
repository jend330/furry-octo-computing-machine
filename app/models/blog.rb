class Blog < ActiveRecord::Base
	validates :description, length: { maximum: 500 }
	include ActionView::Helpers::DateHelper
	has_many :comments
end
