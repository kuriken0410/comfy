$(function() {

  let search_list = $(".row.d-flex.justify-content-center");
  function appendPost(post) {
    if(post.user_sign_in && post.user_sign_in.id == post.user_id){
      let html = `<div class="col-md-4 col-lg-3 mb-5">
                    <div class="card shadow-sm mx-2">
                      <img class="card-img-top" src="${post.image}" width="100%" height="280" alt="画像">
                      <div class="card-body">
                        <h6 class="card-title">
                          <a class="btn btn-outline-dark btn-sm font-weight-bold" data-method="get" href="/users/${post.user_id}">
                            ${post.nickname}
                          </a>
                        </h6>
                        <p class="card-text h6">
                          ${post.text}
                        </p>
                      </div>
                      <div class="btn-group">
                        <a class="btn btn-outline-secondary btn-sm" data-method="get" href="/posts/${post.id}">詳細</a>
                        <a class="btn btn-outline-secondary btn-sm" data-method="get" href="/posts/${post.id}">編集</a>
                        <a class="btn btn-outline-secondary btn-sm" data-method="delete" data-confirm="削除しますか？" href="/posts/${post.id}">削除</a>
                      </div>
                    </div>
                  </div>`
    search_list.append(html);
    } else {
      let html = `<div class="col-md-4 col-lg-3 mb-5">
                    <div class="card shadow-sm mx-2">
                      <img class="card-img-top" src="${post.image}" width="100%" height="280" alt="画像">
                      <div class="card-body">
                        <h6 class="card-title">
                          <a class="btn btn-outline-dark btn-sm font-weight-bold" data-method="get" href="/users/${post.user_id}">
                            ${post.nickname}
                          </a>
                        </h6>
                        <p class="card-text h6">
                          ${post.text}
                        </p>
                      </div>
                      <div class="btn-group">
                        <a class="btn btn-outline-secondary btn-sm" data-method="get" href="/posts/${post.id}">詳細</a>
                      </div>
                    </div>
                  </div>`
    search_list.append(html);
    }
  }

  function appendErrMsgToHTML(msg) {
    let html = `<div class='name'>${ msg }</div>`
    search_list.append(html);
  }
  $(".form-control.form-control-lg.pr-5.mr-3").on("keyup", function() {
    let input = $(".form-control.form-control-lg.pr-5.mr-3").val();
    $.ajax({
      type: 'GET',
      url: '/posts/search',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(posts) {
      search_list.empty();
      if (posts.length !== 0) {
        posts.forEach(function(post){
          appendPost(post);
        });
      }
      else {
        appendErrMsgToHTML("一致する投稿がありません");
      }
    })
    .fail(function() {
      alert('投稿の検索に失敗しました');
    });
  });
});
