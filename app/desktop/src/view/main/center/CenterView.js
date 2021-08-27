var store = Ext.create('Ext.data.Store', {
    fields: ['name','progress'],
    data: [
        { name: 'Test 1', progress: 0.10 },
        { name: 'Test 2', progress: 0.23 },
        { name: 'Test 3', progress: 0.86 },
        { name: 'Test 4', progress: 0.31 }
    ]
});

var grid1= Ext.create({
    xtype: 'grid',
    title: 'Widget Column Demo',
    store: store,

    columns: [{
        text: 'Test Number',
        dataIndex: 'name',
        width: 100},

        {text: 'Progress',
        width: 120,
        dataIndex: 'progress',
        widget: {
            xtype: 'progressbarwidget',
            textTpl: '{value:percent}'
        }

    
         } ],
    
    width: 220,
    height: 250,
    renderTo: document.body
}); 

Ext.define('Myapp1.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
	layout: 'card',
	items: grid1
});
