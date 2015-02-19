class Blog < ActiveRecord::Base
	validates :description, length: { maximum: 500 }
	include ActionView::Helpers::DateHelper
end
