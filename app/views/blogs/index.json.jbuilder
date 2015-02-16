json.array!(@blogs) do |blog|
  json.extract! blog, :id, :description
  json.url blog_url(blog, format: :json)
end
