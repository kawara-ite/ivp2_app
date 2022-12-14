$(document).ready(function () {
  var view_box = $('#equipment-file-view_box');
   
  $("#equipment-image-file").on('change', function(){
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
         $(this).parent().find('#equipment-image-file').val('');
         $(this).parent().find('.img_view, br').remove();
         $(this).remove();
      }
 
      return false;
    });
  }  
});

$(document).ready(function () {
  var view_box = $('#equipment-camera-view_box');
   
  $("#equipment-image-camera").on('change', function(){
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
         $(this).parent().find('#equipment-image-camera').val('');
         $(this).parent().find('.img_view, br').remove();
         $(this).remove();
      }
 
      return false;
    });
  }  
});

$(document).ready(function () {
  var view_box = $('#instruction-file-view_box');
   
  $("#instruction-image-file").on('change', function(){
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
         $(this).parent().find('#instruction-image-file').val('');
         $(this).parent().find('.img_view, br').remove();
         $(this).remove();
      }
 
      return false;
    });
  }  
});

$(document).ready(function () {
  var view_box = $('#instruction-camera-view_box');
   
  $("#instruction-image-camera").on('change', function(){
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
         $(this).parent().find('#instruction-image-camera').val('');
         $(this).parent().find('.img_view, br').remove();
         $(this).remove();
      }
 
      return false;
    });
  }  
});