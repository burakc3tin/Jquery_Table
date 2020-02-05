
//Burada class selector ile button seçilir ve bulunduğu kısımdaki satırı seçip siler.
$(document).ready(function(){
    $('.delete').click(function(){
        $(this).parents('tr').first().remove();
    });

    $('#add').click(function(){


var ae=$('#addname').val();
var be=$('#surname').val();
var ce=$('#city').val();
var de=$('#job').val();
var fe=$('#salary').val();


 if(ae==""||ae==""||ce==""||de==""||fe==""){alert("Boş alanları doldurunuz");}





else{
        $("table").append("<tr><td>"+$('#addname').val()+"</td>"+"<td>"+$('#surname').val()+"</td>"+"<td>"+$('#city').val()+"</td>"+"<td>"+$('#job').val()+"</td>"+"<td>"+$('#salary').val()+"</td>"+"<td><button class='delete'>"+"Delete"+"</button></td>"+"</tr>");
        $('.delete').click(function(){
            $(this).parents('tr').first().remove();
        });
        $('#addname').val("");
        $('#surname').val("");
        $('#city').val("");
        $('#job').val("");
        $('#salary').val("");}
      
    });
    

  });