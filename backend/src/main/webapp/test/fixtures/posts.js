(function (fx) {

    fx.post('carol1', {
        tipo: 'TEXTO',
        titulo: 'Querida Carol',
        conteudo: 'Carol, tudo de bom!!!',
        muralId: fx.mural('mural-da-carol').id
    });

    fx.post('carol2', {
        tipo: 'FOTO',
        titulo: 'Foto legal',
        conteudo: 'https://catraquinha.catracalivre.com.br/wp-content/uploads/sites/10/2015/03/o_show_da_luna.jpg',
        muralId: fx.mural('mural-da-carol').id
    });

    fx.post('carol3', {
        tipo: 'VIDEO',
        titulo: 'Video legal',
        conteudo: 'geQl2cZxR7Q',
        muralId: fx.mural('mural-da-carol').id
    });


})(yawp.fixtures.lazy);
