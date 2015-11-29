import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [{
            name: "Hector",
            twitter: "tal"
        }, {
            name: "algo",
            twitter: "tal"
        }];
    }
});
