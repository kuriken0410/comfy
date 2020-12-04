json.array! @posts do |post|
  json.id post.id
  json.text post.text
  json.image post.image
  json.user_id post.user_id
  json.nickname post.user.nickname
  json.user_sign_in current_user
end

[{
 id: 1,
 image: "https://~.jpg",
 nickname: "やべ",
 text: "プログラミングの勉強中",
 user_id: 1,
 user_sign_in:
    {created_at: "2019-10-08T01:47:37.000Z",
    email: "aaa@gmail.com",
    id: 1,
    nickname: "やべ",
    updated_at: "2019-10-08T01:47:37.000Z"}
}]
