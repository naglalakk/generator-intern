define([<% _.each(required_libs, function(require){ %> 
    '<%= require.define %>'<% if(require.comma){%>,<%}%><% });%>
        ], function (<% _.each(required_libs, function(require) {%>
            <%= require.include %><% if(require.comma){%>,<%}%><% });%>) {
    <% if(testStyle !== 'object') { %>
    with (<%= testStyle %>) {
        describe('<%= testName %>', function () {

            // before the suite starts
            before(function () {
            
            });

            // before each test executes
            beforeEach(function () {
            
            });

            // after the suite is done
            after(function () {
            
            });

        });
    }
    <%} else {%>
        registerSuite({
            name: '<%= testName %>',

            // before the suite starts
            setup: function () {

            },

            // before each test executes
            beforeEach: function () {

            },

            // after the suite is done
            teardown: function () {

            }
        });
    <%}%>
});
