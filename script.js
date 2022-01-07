$('#button').click(function(){
    function getRandam(n, m, x){
        for (let i = 0 ; i < x ; i++){
          let num = Math.floor(Math.random() * (m + 1 - n))+n;
          $('.display').append("<p class='block'>"+num+"</p>");
        };
    };
    let min=Number($('#min').val());
    let max=Number($('#max').val());
    let count=Number($('#count').val());
    getRandam(min,max,count);
});
function reset(){
    $('.block').remove();
};
