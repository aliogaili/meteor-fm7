
Template.leftPanel.events({

        'click #timer': function () {
            $.myApp.closePanel();
            $.mainView.router.load({pageName: 'timer'});
        },

        'click #music ': function (e) {
            $.myApp.closePanel();
            $.mainView.router.load({pageName: 'music'});
        }

    }
);