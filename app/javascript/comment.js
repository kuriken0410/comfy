$(function(){
  function buildHTML(comment){
    let html = `<p class="px-5">
                  <strong>
                    <a class="btn btn-outline-primary btn-sm" href=/users/${comment.user_id}>${comment.user_name}</a> ：
                  </strong>
                  ${comment.text}
                </p>`
    return html;
  }
  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.comments.px-5').append(html);
      $('.form-control').val('');
      $('.btn btn-primary px-5').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
    })
  })
})
