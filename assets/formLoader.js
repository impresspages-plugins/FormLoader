
$(document).on('ipInitForms.FormLoader', function () {
    $('.ipsModuleFormPublic').on('submit', function(e) {
        var $form = $(this);
        if (!$form.find('.has-error').length) {
            FormLoader_hideForm($form);
        }

    });


    $('.ipsModuleFormPublic').on('ipOnFail', function (e, errors) {
        var $form = $(this);
        FormLoader_showForm($form);
    });

    $('.ipsModuleFormPublic').on('ipSubmitResponse', function(e, response) {
        var $form = $(this);
        FormLoader_showForm($form);
    });



    function FormLoader_hideForm($form) {
        var $loader = $('<div class="formLoader"></div>');
        $loader.height($form.outerHeight());
        $loader.insertAfter($form);
        $form.hide();
    }


    function FormLoader_showForm($form) {
        $form.show();
        $form.parent().find('.formLoader').remove(); //remove the loader
    }

});
