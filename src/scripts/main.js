document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form1').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let insereTxt = document.getElementById('#txt').value;
        let novoItem = document.getElementById('<li><li>');

        document.getElementById(`<li>${insereTxt}<li>`).appendTo(novoItem);
        document.getElementById(novoItem).appendTo('ul');
        document.getElementById('li').click(function() {
            document.getElementById(this).css('text-decoration', 'line-through');
        });
        document.getElementById('#txt').value('');
    })
})

