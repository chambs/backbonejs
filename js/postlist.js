define(['backbone', 'post'], function(bb, Post) {


    var PostList = bb.Collection.extend({

        initialize: function() {
        },

        model: Post
    });

    return PostList;

});