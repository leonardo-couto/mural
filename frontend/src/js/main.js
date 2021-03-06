var jQuery = require('jquery');
var doT = require('dot');
var yawp = require('yawp-cli');

jQuery(function($) {
    
    var postTemplateFnc = doT.template($('#post-template').html());
    var textTemplateFnc = doT.template($('#post-template-text').html());
    var videoTemplateFnc = doT.template($('#post-template-video').html());
    var pictureTemplateFnc = doT.template($('#post-template-picture').html());
    
    var handlers = {
        'TEXTO' : textTemplateFnc,
        'VIDEO' : videoTemplateFnc,
        'FOTO': pictureTemplateFnc
    };
    
    function createCard(post) {
        var contentFnc = handlers[post.tipo];
        var content = contentFnc({content: post.conteudo});
        
        var card = $(postTemplateFnc({title: post.titulo}));
        $(card).find('.content').append($(content));
        
        return card;
    }
    
    
    function load() {
        yawp('/posts').where('muralId', '=', '/murais/mural-da-carol').list(function (posts) {
            posts.forEach(function(post) {
                var card = createCard(post);
                $('#mural').append(card);
             });
        });
    }
    
    
    load();
});