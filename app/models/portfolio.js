import DS from 'ember-data';

export default DS.Model.extend({
    symbol: DS.attr(),
    price: DS.attr('number'),
    trend: DS.attr(),
    volume: DS.attr('number'),
}); 
