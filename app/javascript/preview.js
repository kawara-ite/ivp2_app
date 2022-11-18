$(document).ready(function () {
  var view_box = $('#equipment-view_box');
   
  $("#equipment-image").on('change', function(){
     var fileprop = $(this).prop('files')[0],
         find_img = $(this).next('img'),
         fileRdr = new FileReader();
     
     if(find_img.length){
        find_img.nextAll().remove();
        find_img.remove();
     }
     
    var img = '<img width="200" alt="" class="img_view"><a href="#" class="img_del">画像を削除する</a>';
 
    view_box.append(img);
     
    fileRdr.onload = function() {    
      view_box.find('img').attr('src', fileRdr.result);
      img_del(view_box); 
    }
    fileRdr.readAsDataURL(fileprop);  
  });
   
  function img_del(target)
  {
     target.find("a.img_del").on('click',function(){
 
      if(window.confirm('サーバーから画像を削除します。\nよろしいですか？'))
      {
         $(this).parent().find('#equipment-image').val('');
         $(this).parent().find('.img_view, br').remove();
         $(this).remove();
      }
 
      return false;
    });
  }  
});

$(document).ready(function () {
  var view_box = $('#instruction-view_box');
   
  $("#instruction-image").on('change', function(){
     var fileprop = $(this).prop('files')[0],
         find_img = $(this).next('img'),
         fileRdr = new FileReader();
     
     if(find_img.length){
        find_img.nextAll().remove();
        find_img.remove();
     }
     
    var img = '<img width="200" alt="" class="img_view"><a href="#" class="img_del">画像を削除する</a>';
 
    view_box.append(img);
     
    fileRdr.onload = function() {    
      view_box.find('img').attr('src', fileRdr.result);
      img_del(view_box); 
    }
    fileRdr.readAsDataURL(fileprop);  
  });
   
  function img_del(target)
  {
     target.find("a.img_del").on('click',function(){
 
      if(window.confirm('サーバーから画像を削除します。\nよろしいですか？'))
      {
         $(this).parent().find('#instruction-image').val('');
         $(this).parent().find('.img_view, br').remove();
         $(this).remove();
      }
 
      return false;
    });
  }  
});