$('document').ready(function(){
    var num = $('input').val()

    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${num}`,
        dataType: 'json',
        success: function(res) {
            var data = res.results
            console.log(data)

            for(var i = 0; data.length; i++){
                
            }
        }
    })
})