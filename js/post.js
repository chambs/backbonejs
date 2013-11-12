define(['backbone'], function(bb) {

    var Post = bb.Model.extend({

        defaults: {
            'author': 'Anonymous',
            'post': ''
        }

    });

    return Post;
});