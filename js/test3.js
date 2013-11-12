define(['backbone', 'postlist', 'mustache'], function(bb, PostList, Mustache) {

    window.postlist = new PostList();


    var PostView = bb.View.extend({});



/*
    var PostView = bb.View.extend({

        initialize: function() {
            this.listenTo(this.model, 'add', this.render);
            this.tpl = '<li>{{author}} :: {{post}}</li>'
        },

        template: Mustache.render,


        render: function(model) {
            var html = this.template(this.tpl, model.toJSON());
            this.$el.append(html);
        }

    });
*/

    window.postview = new PostView({
        model: window.postlist,
        el: 'ul.posts', 
    })
    .listenTo(window.postlist, 'add', function() {
        console.log('aha!');
    });



});