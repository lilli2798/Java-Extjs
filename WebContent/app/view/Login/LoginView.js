/**
 * 
 */
Ext.define('javaExtjs.view.Login.LoginView',{
	extend: 'Ext.window.Window'
	, alias: 'widget.loginview'
	, requires:['Ext.form.Panel']
	, title: 'Login'
	, layout: 'fit'
	, autoShow: true
	, width: 400
	, modal: true
	, close: false
	
	, initComponent: function(){
		this.items = [
			{
				xtype: 'form'
				, id: 'formLogin'
				, padding: '5 5 0 5'
				, border: false
				, url: 'j_spring_security_check'
				, style: 'background-color: #fff;'
				, fieldDefaults: {
					anchor: '100%'
					, labelAlign: 'top'
					, allowBlank: false
					, combineErrors: true
					, msgTarget: 'side'
				},
		          items:[
	                 {
						xtype: 'textfield'
						, name: 'j_username'
						, fieldLabel: 'Login' 
	                 },
	                 {
						xtype: 'textfield'
						, name: 'j_password'
						, fieldLabel: 'Senha'
					    , inputType:'password'
	                 }]
				, buttons:[
			           {
			        	  text: 'Ok'
			        	  , action: 'acesso'			        		  
			           }]
			}
       ];
	   this.callParent(arguments);
	}	
});