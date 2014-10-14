/*!
 * Language support feature for the NDN CCL API Documentation.
 *
 * This JavaScript allows the user to select a preferred language
 * for viewing the API Documentation. Subsequently, this preferred
 * language will be remembered even when moving through different
 * API Pages.
 *
 */

// Searches for a needle in a haystck while ignoring case sensitivity
function contains_ignorecase(haystack, needle) {
    // Escape '++' in 'C++'
    needle = needle.replace(/\+/g, "\\+");

    // Create RegEx
    var re = new RegExp(needle, "i");

    return (haystack.match(re) !== null);
}

// Display the APIs for the selected language; hides the other languages
function display_language(selected_language) {
    $("th.field-name").each(function(){
        // Display 'Parameters:' for each section as parameters
        // is also in the "th.field-name" CSS class
        if ($(this).text() === 'Parameters:') {
            return;
        }

        // Get field's language
        var field_language = $(this).text();

        // Create search tag to look for
        var search_tag = "\\[" + selected_language + "\\]";

        // If field name is the selected language (ignore)
        if (contains_ignorecase(field_language, search_tag) === true) {
            // Show field header
            $(this).show();

            // Show field body
            $(this).next().show();
        } else {
            // Hide field header
            $(this).hide();

            // Hide field body
            $(this).next().hide();
        }
    });
}

// Display all languages
function display_all_languages() {
    $("th.field-name").each(function(){
        // Show field header
        $(this).show();

        // Show field body
        $(this).next().show();
    });
}

// Set 'All Languages' as the active setting
function display_all_language_active_settings() {
    $(".language-item").each(function(){
        // Get user's selected language
        var selected_language = $(this).text();

        if (selected_language == "All Languages") {
            // Set this as the active language
            $(this).addClass("language-active");
        }
    });
}

// Display the active language in the language selection bar
// that the user is currently viewing
function display_active_language(selected_language) {
    $(".language-item").each(function(){
        // Get language as a string
        var language_type = $(this).text();

        // Escape '++' in 'C++'
        selected_language = selected_language.replace(/\+/g, "\\+");

        // Create exact match regex
        var re = new RegExp(selected_language + "$", "i");

        // If active language is found, mark it as active
        if (language_type.match(re) !== null) {
            if ($(this).hasClass("language-active") === false) {
                $(this).addClass("language-active");
            }
        } else if ($(this).hasClass("language-active")) {
            // Remove the active language class
            $(this).removeClass("language-active");
        }
    });
}

// Sets a cookie to remember the user's preferred language
function set_preferred_language_cookie(preferred_language) {
    $.cookie('preferredLanguage', preferred_language, { expires: 365 });
}

// Convenience function for checking strings that end with a target string
if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

// Startup function entry point
$(function(){
    // Check of url location
    var url_location = window.location.href;
    if (url_location.endsWith('/') || url_location.endsWith('index.html')) {
        // Nothing to do here for now.
        // We might want to load other language settings in the future
    } else {
        // Display #language-settings
        $('#language-settings').show();
    }

    // Get preferred language that the user has selected
    var preferred_language = $.cookie('preferredLanguage');

    // Check if the user has previously selected a preferred language
    if (typeof preferred_language == 'undefined' ||
        preferred_language === null) {
        // Set 'All Languages' as the active setting
        display_all_language_active_settings();
    } else {
        if (preferred_language == "All Languages") {
            // Display all languages
            display_all_languages();

            // Set 'All Languages' as the active setting
            display_all_language_active_settings();
        } else {
            // Display the preferred language that the user has selected
            display_language(preferred_language);

            // Set active language
            display_active_language(preferred_language);
        }
    }

    // Attach handler to update language on page
    $(".language-item").each(function(){
        $(this).click(function(event){
            // Stop default action
            event.preventDefault();

            // Get user's selected language
            var selected_language = $(this).text();

            // Check if 'All Languages' is selected
            if (selected_language == "All Languages") {
                // Display all languages
                display_all_languages();
            } else {
                // Display the selected language
                display_language(selected_language);
            }

            // Update active language
            if ($(this).hasClass("language-active") === false) {
                // Reset highlighted language
                $(".language-item").each(function(){
                    if ($(this).hasClass("language-active")) {
                        $(this).removeClass("language-active");
                    }
                });

                // Set this as the active language
                $(this).addClass("language-active");
            }

            // Set preferred language
            set_preferred_language_cookie(selected_language);
        });
    });
});
